const https = require('https');
const http = require('http');
const fs = require('fs');
const { URL } = require('url');
const data = require('./data.js');

const SAVE_RESULTS = process.env.SAVE_RESULTS === '1' || process.argv.includes('--save');
const RESULT_FILE = 'check-results.md';
const MAX_CONCURRENCY = 2;
const REQUEST_TIMEOUT = 20000;
const MAX_RETRIES = 10;
const W3_DELAY = 100;

function log(text) {
  if (SAVE_RESULTS) {
    fs.appendFileSync(RESULT_FILE, text + '\n');
  } else {
    console.log(text);
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function checkW3(link, idx) {
  await sleep(idx * W3_DELAY);
  return new Promise(resolve => {
    const req = https.get('https://www.w3.org/TR/tr-outdated-spec', { headers: { Referer: link.src } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const obj = JSON.parse(data);
          if (obj && obj.latestUrl) {
            log(`- ${link.text} ([Original](${link.src})) has a new version: [Latest Spec](${obj.latestUrl}) ✨`);
          }
        } catch { }
        resolve();
      });
    });
    req.on('error', () => resolve());
    req.setTimeout(REQUEST_TIMEOUT, () => { req.destroy(); resolve(); });
  });
}

function fetchHead(link, attempt = 0) {
  return new Promise(resolve => {
    let timer = setTimeout(() => { req && req.destroy(); resolve('timeout'); }, REQUEST_TIMEOUT);
    let url;
    try { url = new URL(link.src); } catch { clearTimeout(timer); return resolve('badurl'); }
    const client = url.protocol === 'https:' ? https : http;
    const options = {
      method: 'HEAD',
      headers: { 'User-Agent': 'htmlspecs-checker', 'Referer': link.src }
    };
    const req = client.request(link.src, options, res => {
      clearTimeout(timer);
      let etag = res.headers.etag, lm = res.headers['last-modified'];
      if (etag && link.etag) {
        if (etag.replace(/"/g, '') !== link.etag.replace(/"/g, '')) {
          log(`- ${link.text} ETag changed: ${link.etag} → ${etag} (${link.src})`);
        }
      } else if (
        !etag &&
        lm && link['last-modified'] &&
        lm !== link['last-modified'] &&
        lm !== '-' && link['last-modified'] !== '-' && link['last-modified'] !== '0'
      ) {
        log(`- ${link.text} Updated: ${link['last-modified']} → ${lm} (${link.src})`);
      }
      res.resume();
      resolve('ok');
    });
    req.on('error', err => {
      clearTimeout(timer);
      if (
        (
          err.message === 'socket hang up' ||
          err.message === 'read ECONNRESET' ||
          err.code === 'ECONNRESET'
        ) && attempt < MAX_RETRIES
      ) {
        setTimeout(() => fetchHead(link, attempt + 1).then(resolve), 300 * (attempt + 1));
      } else if (attempt < MAX_RETRIES) {
        setTimeout(() => fetchHead(link, attempt + 1).then(resolve), 300 * (attempt + 1));
      } else {
        log(`- ${link.text} Check failed: ${err.message} (${link.src})`);
        resolve('fail');
      }
    });
    req.end();
  });
}

async function checkLinks(links, title) {
  log(`## Category: ${title}\n`);
  const w3 = links.filter(l => l.src.includes('w3.org/TR'));
  const other = links.filter(l => !l.src.includes('w3.org/TR'));
  let done = 0;
  process.stdout.write(`Progress: 0/${links.length}`);
  await Promise.all(w3.map((l, i) => checkW3(l, i).then(() => { done++; process.stdout.write(`\rProgress: ${done}/${links.length}`); })));
  for (let i = 0; i < other.length; i += MAX_CONCURRENCY) {
    await Promise.all(other.slice(i, i + MAX_CONCURRENCY).map(l =>
      fetchHead(l).then(() => { done++; process.stdout.write(`\rProgress: ${done}/${links.length}`); })
    ));
  }
  process.stdout.write('\n\n');
}

async function main() {
  if (SAVE_RESULTS) fs.writeFileSync(RESULT_FILE, '# Spec Check Results\n\n');
  await checkLinks(data.links, 'Standard Specifications');
  await checkLinks(data.cssLinks, 'CSS Related Specifications');
  await checkLinks(data.httpLinks, 'HTTP Related Specifications');
  log('All checks completed!');
  process.exit(0);
}

main();

process.on('unhandledRejection', err => { console.error('Unhandled Promise rejection:', err); });
process.on('uncaughtException', err => { console.error('Uncaught exception:', err); });