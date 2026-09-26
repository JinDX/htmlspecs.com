const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { once } = require('node:events');
const { spawn } = require('node:child_process');
const { runChecks, createChecker, renderReport } = require('./watcher.js');

test('CLI streams progress before all requests finish, including with --save', { timeout: 10000 }, async () => {
  for (const save of [false, true]) {
    let releaseSlow;
    const server = http.createServer((req, res) => {
      if (req.url === '/slow') releaseSlow = () => res.writeHead(200, { ETag: '"same"' }).end();
      else res.writeHead(404).end();
    });
    server.listen(0, '127.0.0.1');
    await once(server, 'listening');
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'watcher-progress-'));
    let child;
    try {
      const base = `http://127.0.0.1:${server.address().port}`;
      fs.copyFileSync(path.join(__dirname, 'watcher.js'), path.join(dir, 'watcher.js'));
      fs.writeFileSync(path.join(dir, 'data.js'), `module.exports=${JSON.stringify({
        links: [{ text: 'Slow', src: base + '/slow', etag: 'same' }, { text: 'Missing', src: base + '/missing' }],
        cssLinks: [], httpLinks: []
      })};`);
      child = spawn(process.execPath, ['watcher.js', ...(save ? ['--save'] : [])], {
        cwd: dir, env: { ...process.env, SAVE_RESULTS: '0', GITHUB_OUTPUT: path.join(dir, 'output.txt') },
        stdio: ['ignore', 'pipe', 'pipe']
      });
      const closed = once(child, 'close');
      let output = '', stderr = '';
      child.stderr.on('data', chunk => { stderr += chunk; });
      await new Promise((resolve, reject) => {
        const deadline = setTimeout(() => reject(new Error('No live progress before the slow request finished')), 4000);
        child.stdout.on('data', chunk => {
          output += chunk;
          if (output.includes('Progress: 1/2') && output.includes('FAILED | Missing')) {
            clearTimeout(deadline);
            resolve();
          }
        });
        child.once('error', error => { clearTimeout(deadline); reject(error); });
      });
      assert.match(output, /Progress: 0\/2/);
      assert.equal(child.exitCode, null);
      assert.doesNotMatch(output, /# Specification Check Summary/);
      assert.equal(typeof releaseSlow, 'function');
      releaseSlow();
      const [code] = await closed;
      assert.equal(code, 1, stderr);
      assert.match(output, /Progress: 2\/2 \(100\.0%\) \| UNCHANGED \| Slow/);
      assert.match(output, /Changed: 0; unchanged: 1; failed: 1;/);
      if (save) {
        const report = fs.readFileSync(path.join(dir, 'check-results.md'), 'utf8');
        assert.match(report, /HTTP 404:/);
        assert.doesNotMatch(report, /\*\*FAILED\*\* Missing/);
        assert.doesNotMatch(report, /Progress:/);
        assert.equal(fs.readFileSync(path.join(dir, 'output.txt'), 'utf8'), 'report_written=true\n');
      }
    } finally {
      if (child && child.exitCode === null) child.kill();
      server.closeAllConnections();
      await new Promise(resolve => server.close(resolve));
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
});

test('W3C requests and retries run serially with an interval', async () => {
  const calls = [];
  let active = 0, peak = 0;
  const checker = createChecker({ w3GapMs: 25, retryDelayMs: 1, fetchImpl: async () => {
    active++; peak = Math.max(peak, active);
    const call = { start: Date.now() };
    calls.push(call);
    await new Promise(resolve => setTimeout(resolve, 10));
    active--; call.end = Date.now();
    return calls.length === 1
      ? new Response(null, { status: 503 })
      : Response.json({ warning: false });
  } });
  const results = await Promise.all(['first', 'second'].map(text =>
    checker.check({ text, src: `https://www.w3.org/TR/2026/WD-${text}-20260101/` })));
  assert.equal(peak, 1);
  assert.equal(calls.length, 3);
  for (let i = 1; i < calls.length; i++) assert.ok(calls[i].start - calls[i - 1].end >= 23);
  assert.ok(results.every(result => result.status === 'unchanged'));
});

test('W3C warning 404 is checked against official version metadata', async () => {
  const link = { text: 'Example', src: 'https://www.w3.org/TR/2026/WD-example-20260101/' };
  for (const [uri, expected] of [
    [link.src, 'unchanged'],
    ['https://www.w3.org/TR/2026/WD-example-20260201/', 'changed'],
    ['https://www.w3.org/TR/2025/WD-example-20250101/', 'unknown']
  ]) {
    const calls = [];
    const result = await createChecker({ w3GapMs: 1, retries: 0, fetchImpl: async (url, options) => {
      calls.push(url);
      if (url.includes('tr-outdated-spec')) {
        assert.equal(options.headers.Referer, link.src);
        return Response.json({ error: 'No outdated warning' }, { status: 404 });
      }
      assert.equal(url, 'https://api.w3.org/specifications/example/versions/latest');
      return Response.json({ uri });
    } }).check(link);
    assert.equal(result.status, expected);
    assert.equal(calls.length, 2);
  }
  const unknown = await createChecker({ w3GapMs: 1, retries: 0, fetchImpl: async () => new Response(null, { status: 404 }) }).check(link);
  assert.equal(unknown.status, 'unknown');
});

test('W3C Retry-After pauses the shared queue as well as the retry', async () => {
  const starts = [];
  const checker = createChecker({ w3GapMs: 1, retryDelayMs: 1, fetchImpl: async () => {
    starts.push(Date.now());
    return starts.length === 1
      ? new Response(null, { status: 429, headers: { 'Retry-After': '1' } })
      : Response.json({ warning: false });
  } });
  await Promise.all(['first', 'second'].map(text => checker.check({ text, src: `https://www.w3.org/TR/${text}/` })));
  assert.equal(starts.length, 3);
  assert.ok(starts[1] - starts[0] >= 990);
});

test('W3C outdated warning still produces an update without a metadata request', async () => {
  let calls = 0;
  const result = await createChecker({ w3GapMs: 0, fetchImpl: async () => {
    calls++;
    return Response.json({ warning: 'For the latest version, please look at ', latestUrl: 'https://www.w3.org/TR/example/' });
  } }).check({ text: 'Old spec', src: 'https://www.w3.org/TR/2020/WD-example-20200101/' });
  assert.equal(result.status, 'changed');
  assert.equal(calls, 1);
});

test('report lists updates and collapses repeated failures and unknowns', () => {
  const failure = 'HTTP 503: https://www.w3.org/TR/tr-outdated-spec';
  const results = [
    { link: { text: 'Updated specification', src: 'https://example.test/new' }, status: 'changed', detail: 'ETag changed' },
    ...Array.from({ length: 394 }, (_, i) => ({ link: { text: `Failure ${i}` }, status: 'failed', detail: failure })),
    ...Array.from({ length: 70 }, (_, i) => ({ link: { text: `Unknown ${i}` }, status: 'unknown', detail: 'No headers' }))
  ];
  const report = renderReport({ categories: [{ name: 'Standard Specifications', results }],
    counts: { changed: 1, unchanged: 0, failed: 394, unknown: 70, skipped: 0 } });
  assert.match(report, /Updated specification/);
  assert.equal(report.split(failure).length - 1, 1);
  assert.match(report, /394 specifications/);
  assert.match(report, /unknown: 70/);
  assert.doesNotMatch(report, /Failure 0|Unknown 0|\*\*FAILED\*\*|\*\*UNKNOWN\*\*/);
  assert.ok(report.split('\n').length < 30);
});

test('heartbeat identifies pending checks and stops when checks finish', { timeout: 5000 }, async () => {
  let release, sawHeartbeat;
  const heartbeatSeen = new Promise(resolve => { sawHeartbeat = resolve; });
  const logs = [];
  const link = { text: 'Slow specification', src: 'https://example.test/slow', etag: 'same' };
  const checking = runChecks({ links: [link], cssLinks: [], httpLinks: [] }, {
    progressIntervalMs: 10,
    fetchImpl: () => new Promise(resolve => { release = resolve; }),
    log: line => {
      logs.push(line);
      if (line.includes('still checking: Slow specification')) sawHeartbeat();
    }
  });
  try {
    await heartbeatSeen;
    assert.match(logs.at(-1), /Progress: 0\/1/);
  } finally {
    release(new Response(null, { headers: { ETag: '"same"' } }));
  }
  const result = await checking;
  assert.equal(result.counts.unchanged, 1);
  assert.equal(result.exitCode, 0);
  const after = logs.length;
  await new Promise(resolve => setTimeout(resolve, 30));
  assert.equal(logs.length, after);
});
