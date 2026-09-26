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
  w3Endpoint = 'https://www.w3.org/TR/tr-outdated-spec'
} = {}) {
  let nextW3Start = 0;

  async function request(url, { method = 'HEAD', headers = {}, json = false } = {}) {
    for (let attempt = 0; ; attempt++) {
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
      }
      const retryable = failure.status === undefined
        ? !(failure instanceof SyntaxError)
        : [408, 429, 500, 502, 503, 504].includes(failure.status);
      if (!retryable || attempt >= retries) throw failure;
      await sleep(retryDelayMs * 2 ** attempt);
    }
  }

  async function check(link) {
    try {
      const url = new URL(link.src);
      const isW3 = /(^|\.)w3\.org$/i.test(url.hostname) && /^\/TR(?:\/|$)/.test(url.pathname);
      if (isW3) {
        const start = Math.max(Date.now(), nextW3Start);
        nextW3Start = start + w3GapMs;
        await sleep(Math.max(0, start - Date.now()));
        const response = await request(w3Endpoint, {
          method: 'GET', headers: { Referer: link.src }, json: true
        });
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

async function runChecks(data, { concurrency = 6, ...options } = {}) {
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new Error('Invalid concurrency.');
  const checker = createChecker(options);
  const groups = [
    ['Standard Specifications', data.links],
    ['CSS Related Specifications', data.cssLinks],
    ['HTTP Related Specifications', data.httpLinks]
  ];
  const categories = [];
  const counts = { changed: 0, unchanged: 0, failed: 0, unknown: 0, skipped: 0 };
  for (const [name, links] of groups) {
    const results = await mapLimit(links, concurrency, checker.check);
    for (const result of results) counts[result.status]++;
    categories.push({ name, results });
  }
  return { categories, counts, exitCode: counts.failed ? 1 : 0 };
}

function renderReport({ categories, counts }) {
  const lines = ['# Specification Check Summary', ''];
  for (const { name, results } of categories) {
    lines.push(`## ${name}`, '');
    for (const { link, status, detail, finalUrl } of results) {
      if (status === 'unchanged' || status === 'skipped') continue;
      lines.push(`- **${status.toUpperCase()}** ${link.text}`, `  - Source: ${link.src}`, `  - ${detail}`);
      if (finalUrl && finalUrl !== link.src) lines.push(`  - Final URL: ${finalUrl}`);
    }
    const checked = results.filter(result => result.status === 'unchanged').length;
    const skipped = results.filter(result => result.status === 'skipped').length;
    lines.push(`Unchanged: ${checked}; intentionally skipped: ${skipped}.`, '');
  }
  lines.push('## Totals', '',
    `Changed: ${counts.changed}; unchanged: ${counts.unchanged}; failed: ${counts.failed}; unknown: ${counts.unknown}; skipped: ${counts.skipped}.`, '',
    'UNKNOWN means the check could not determine whether the specification changed. It does not mean unchanged.',
    'Version-header changes are update signals; review the source before updating a translation.', '');
  return lines.join('\n');
}

async function main() {
  const summary = await runChecks(require('./data.js'));
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
