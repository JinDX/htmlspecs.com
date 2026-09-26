const fs = require('node:fs');
const path = require('node:path');
const { setTimeout: sleep } = require('node:timers/promises');

const SAVE_RESULTS = process.env.SAVE_RESULTS === '1' || process.argv.includes('--save');
const RESULT_FILE = path.join(__dirname, 'check-results.md');

// Keep the complete opaque value, including the W/ marker.
// data.js may store an unquoted value; HTTP normally supplies quotes.
function normalizeEtag(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  const raw = value.trim();
  const match = /^(W\/)?"(.*)"$/.exec(raw);
  return match ? (match[1] || '') + match[2] : raw;
}

function parseDate(value) {
  if (typeof value !== 'string' || !value.trim() || ['0', '-'].includes(value.trim())) {
    return null;
  }
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

function compareHeaders(link, headers) {
  const oldEtag = normalizeEtag(link.etag);
  const newEtag = normalizeEtag(headers.get('etag'));
  const oldDate = parseDate(link['last-modified']);
  const newDate = parseDate(headers.get('last-modified'));
  const changes = [];
  let comparable = false;
  let isHttpwg = false;
  try {
    isHttpwg = /^(?:www\.)?httpwg\.org$/i.test(new URL(link.src).hostname);
  } catch {
    // check() reports invalid source URLs; standalone comparisons use the default rule.
  }

  // Project policy: HTTPWG's shared deployment prefix must not trigger updates.
  // Do not bypass this rule by comparing Last-Modified from the same deployment.
  if (isHttpwg) {
    if (oldEtag === null || newEtag === null) {
      return { status: 'unknown', detail: 'HTTPWG: missing a comparable ETag; suffix comparison is unavailable.' };
    }
    const oldSuffix = oldEtag.split('-').at(-1) || oldEtag;
    const newSuffix = newEtag.split('-').at(-1) || newEtag;
    return oldSuffix === newSuffix
      ? { status: 'unchanged', detail: 'HTTPWG ETag suffix is unchanged; shared prefix and Last-Modified are ignored.' }
      : { status: 'changed', detail: `HTTPWG ETag suffix: ${oldSuffix} → ${newSuffix}` };
  }

  if (oldEtag !== null && newEtag !== null) {
    comparable = true;
    if (oldEtag !== newEtag) changes.push(`ETag: ${oldEtag} → ${newEtag}`);
  }
  // Check this independently, even when the ETag happens to be unchanged.
  if (oldDate !== null && newDate !== null) {
    comparable = true;
    if (oldDate !== newDate) {
      changes.push(`Last-Modified: ${new Date(oldDate).toUTCString()} → ${new Date(newDate).toUTCString()}`);
    }
  }
  if (changes.length) return { status: 'changed', detail: changes.join('; ') };
  if (comparable) return { status: 'unchanged', detail: 'Comparable version headers are unchanged.' };
  if (String(link['last-modified']).trim() === '0' && oldEtag === null) {
    return { status: 'skipped', detail: 'Date comparison is explicitly disabled in data.js.' };
  }
  return {
    status: 'unknown',
    detail: 'No comparable ETag or Last-Modified; check the saved baseline and response headers.'
  };
}

function createChecker({
  fetchImpl = globalThis.fetch,
  timeoutMs = 15000,
  retries = 2,
  retryDelayMs = 500,
  w3GapMs = 500,
  w3Endpoint = 'https://www.w3.org/TR/tr-outdated-spec',
  w3ApiBase = 'https://api.w3.org/specifications/'
} = {}) {
  let nextW3Start = 0;
  let w3Queue = Promise.resolve();

  // One W3C request at a time, with a gap after the preceding response.
  // Every attempt, including retries and version-API fallbacks, uses this queue.
  async function acquireW3Slot() {
    const previous = w3Queue;
    let release;
    w3Queue = new Promise(resolve => { release = resolve; });
    await previous;
    await sleep(Math.max(0, nextW3Start - Date.now()));
    return (retryAfterMs = 0) => {
      nextW3Start = Date.now() + Math.max(w3GapMs, retryAfterMs);
      release();
    };
  }

  async function request(url, { method = 'HEAD', headers = {}, json = false, w3 = false } = {}) {
    for (let attempt = 0; ; attempt++) {
      const releaseW3 = w3 ? await acquireW3Slot() : null;
      const controller = new AbortController();
      // Covers connection, redirect handling, and (for W3C) reading the JSON body.
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      let failure;
      try {
        const response = await fetchImpl(url, {
          method,
          headers: { 'Accept-Encoding': 'identity', ...headers },
          redirect: 'follow',
          signal: controller.signal
        });
        if (!response.ok) {
          if (response.body) await response.body.cancel();
          const error = new Error(`HTTP ${response.status}: ${response.url || url}`);
          error.status = response.status;
          const retryAfter = response.headers.get('retry-after');
          if (retryAfter) {
            const seconds = Number(retryAfter);
            error.retryAfterMs = Number.isFinite(seconds)
              ? Math.max(0, seconds * 1000)
              : Math.max(0, Date.parse(retryAfter) - Date.now()) || 0;
          }
          throw error;
        }
        const result = {
          headers: response.headers,
          finalUrl: response.url || url,
          data: json ? await response.json() : null
        };
        // A GET fallback needs only the headers, not a full specification download.
        if (!json && response.body) await response.body.cancel();
        return result;
      } catch (error) {
        failure = controller.signal.aborted
          ? new Error(`Request timed out after ${timeoutMs} ms: ${url}`)
          : error;
      } finally {
        clearTimeout(timer);
        releaseW3?.(failure?.retryAfterMs || 0);
      }
      const retryable = failure.status === undefined
        ? !(failure instanceof SyntaxError)
        : [408, 429, 500, 502, 503, 504].includes(failure.status);
      if (!retryable || attempt >= retries) throw failure;
      await sleep(Math.max(retryDelayMs * 2 ** attempt, failure.retryAfterMs || 0));
    }
  }

  async function checkW3Version(link, source) {
    const match = /^\/TR\/\d{4}\/[A-Z]+-(.+)-(\d{8})(?:\/|$)/.exec(source.pathname);
    if (!match) return { link, status: 'unknown', detail: 'No W3C outdated warning; no dated version is available for comparison.' };
    const apiUrl = new URL(`${encodeURIComponent(match[1])}/versions/latest`, w3ApiBase);
    let response;
    try {
      response = await request(apiUrl.href, { method: 'GET', json: true, w3: true });
    } catch (error) {
      if (error.status === 404) return { link, status: 'unknown', detail: 'No W3C outdated warning or matching version metadata.' };
      throw error;
    }
    let latest;
    try { latest = new URL(response.data?.uri); } catch {
      throw new Error('Invalid W3C latest-version response.');
    }
    const latestMatch = /^\/TR\/\d{4}\/[A-Z]+-(.+)-(\d{8})(?:\/|$)/.exec(latest.pathname);
    if (!/^(?:www\.)?w3\.org$/i.test(latest.hostname) || !latestMatch) {
      throw new Error('Invalid W3C latest-version URI.');
    }
    const normalizePath = value => value.replace(/\/Overview\.html$/, '/').replace(/\/$/, '');
    if (normalizePath(latest.pathname) === normalizePath(source.pathname)) {
      return { link, status: 'unchanged', detail: 'W3C version metadata confirms this is the latest published version.' };
    }
    if (latestMatch[2] >= match[2]) {
      return { link, status: 'changed', detail: `W3C reports a newer version: ${latest.href}` };
    }
    return { link, status: 'unknown', detail: 'W3C version metadata is older than the saved source; no update inferred.' };
  }

  async function check(link) {
    try {
      const url = new URL(link.src);
      const isW3 = /(^|\.)w3\.org$/i.test(url.hostname) && /^\/TR(?:\/|$)/.test(url.pathname);
      if (isW3) {
        let response;
        try {
          response = await request(w3Endpoint, {
            method: 'GET', headers: { Referer: link.src }, json: true, w3: true
          });
        } catch (error) {
          // This warning endpoint also returns 404 for current/exempt specs.
          // Confirm via published-version metadata instead of calling it a failure.
          if (error.status === 404) return await checkW3Version(link, url);
          throw error;
        }
        const info = response.data;
        if (!info || typeof info !== 'object' || Array.isArray(info)) {
          throw new Error('Invalid W3C JSON response.');
        }
        if (info.warning && typeof info.latestUrl === 'string' && info.latestUrl) {
          return { link, status: 'changed', detail: `W3C reports a newer version: ${info.latestUrl}` };
        }
        if (info.warning === false) {
          return { link, status: 'unchanged', detail: 'W3C reports no newer version.' };
        }
        return { link, status: 'unknown', detail: 'W3C response does not explicitly confirm its update status.' };
      }

      let response;
      try {
        response = await request(link.src);
      } catch (error) {
        if (![405, 501].includes(error.status)) throw error;
        response = await request(link.src, { method: 'GET' });
      }
      return { link, ...compareHeaders(link, response.headers), finalUrl: response.finalUrl };
    } catch (error) {
      return { link, status: 'failed', detail: error.message };
    }
  }
  return { check };
}

async function mapLimit(items, limit, callback) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await callback(items[index]);
    }
  }));
  return results;
}

async function runChecks(data, {
  concurrency = 6,
  log = () => {},
  progressIntervalMs = 10000,
  ...options
} = {}) {
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new Error('Invalid concurrency.');
  const checker = createChecker(options);
  const groups = [
    ['Standard Specifications', data.links],
    ['CSS Related Specifications', data.cssLinks],
    ['HTTP Related Specifications', data.httpLinks]
  ];
  const categories = [];
  const counts = { changed: 0, unchanged: 0, failed: 0, unknown: 0, skipped: 0 };
  const total = groups.reduce((sum, [, links]) => sum + links.length, 0);
  const startedAt = Date.now();
  const active = new Map();
  let finished = 0;
  const progress = () => `Progress: ${finished}/${total} (${total ? (finished / total * 100).toFixed(1) : '100.0'}%)`;

  // Newline-delimited output is visible in both a local terminal and Actions.
  log(`${progress()} | starting | concurrency: ${concurrency}`);
  const heartbeat = total && progressIntervalMs > 0 ? setInterval(() => {
    const pending = [...active.values()].map(({ link, started }) =>
      `${link.text || link.src} (${Math.floor((Date.now() - started) / 1000)}s)`);
    log(`${progress()} | elapsed: ${Math.floor((Date.now() - startedAt) / 1000)}s | still checking: ${pending.join('; ')}`);
  }, progressIntervalMs) : null;
  heartbeat?.unref();
  try {
    for (const [name, links] of groups) {
      log(`Checking ${name}: ${links.length} specifications`);
      const results = await mapLimit(links, concurrency, async link => {
        const token = Symbol();
        active.set(token, { link, started: Date.now() });
        try {
          const result = await checker.check(link);
          counts[result.status]++;
          finished++;
          log(`${progress()} | ${result.status.toUpperCase()} | ${link.text || link.src}`);
          if (result.status === 'failed') log(`  ${result.detail}`);
          return result;
        } finally {
          active.delete(token);
        }
      });
      categories.push({ name, results });
    }
  } finally {
    if (heartbeat) clearInterval(heartbeat);
  }
  return { categories, counts, exitCode: counts.failed ? 1 : 0 };
}

function renderReport({ categories, counts }) {
  const lines = ['# Specification Check Summary', ''];
  for (const { name, results } of categories) {
    const changes = results.filter(result => result.status === 'changed');
    if (!changes.length) continue;
    lines.push(`## ${name}`, '');
    for (const { link, detail, finalUrl } of changes) {
      lines.push(`- [${link.text}](${link.src})`, `  - ${detail}`);
      if (finalUrl && finalUrl !== link.src) lines.push(`  - Final URL: ${finalUrl}`);
    }
    lines.push('');
  }
  if (!counts.changed) lines.push('No updates detected among successfully compared specifications.', '');
  lines.push('## Check status', '',
    `Changed: ${counts.changed}; unchanged: ${counts.unchanged}; failed: ${counts.failed}; unknown: ${counts.unknown}; skipped: ${counts.skipped}.`, '');
  if (counts.failed) {
    const failures = new Map();
    for (const { results } of categories) {
      for (const result of results) {
        if (result.status !== 'failed') continue;
        failures.set(result.detail, (failures.get(result.detail) || 0) + 1);
      }
    }
    lines.push('Some checks could not finish:', '');
    const entries = [...failures].sort((a, b) => b[1] - a[1]);
    for (const [detail, count] of entries.slice(0, 10)) {
      lines.push(`- ${detail} (${count} specification${count === 1 ? '' : 's'})`);
    }
    if (entries.length > 10) lines.push(`- ${entries.length - 10} additional error types; see the execution log.`);
    lines.push('');
  }
  if (counts.unknown) lines.push(`${counts.unknown} specifications lacked enough information to compare. They are not counted as unchanged.`, '');
  return lines.join('\n');
}

async function main() {
  const summary = await runChecks(require('./data.js'), { log: message => console.log(message) });
  const report = renderReport(summary);
  if (SAVE_RESULTS) {
    fs.writeFileSync(RESULT_FILE, report, 'utf8');
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, 'report_written=true\n');
    }
  }
  console.log(report);
  process.exitCode = summary.exitCode;
}

if (require.main === module) {
  main().catch(error => {
    console.error(`Update check failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { normalizeEtag, compareHeaders, createChecker, runChecks, renderReport };
