const https = require('https');
const http = require('http');
const fs = require('fs');
const { URL } = require('url');
const data = require('./data.js');

const SAVE_RESULTS = process.env.SAVE_RESULTS === '1' || process.argv.includes('--save');
const RESULT_FILE = 'check-results.md';

const httpsAgent = new https.Agent({ keepAlive: false, maxSockets: 1 });
const httpAgent = new http.Agent({ keepAlive: false, maxSockets: 1 });
const MAX_CONCURRENCY = 1;
const REQUEST_TIMEOUT_MS = 10000;
const MAX_RETRIES = 8;

function logResult(text) {
  if (SAVE_RESULTS) {
    fs.appendFileSync(RESULT_FILE, text + '\n');
  } else {
    console.log(text);
  }
}

const checkLinks = async (links, category) => {
  const total = links.length;
  let finished = 0;

  logResult(`## Checking category: ${category} 😊\n`);

  const showProgress = () => {
    finished++;
    process.stdout.write(`\rProgress: ${finished}/${total}`);
  };

  const w3Links = links.filter(item => item.src.includes('w3.org/TR'));
  const otherLinks = links.filter(item => !item.src.includes('w3.org/TR'));

  const w3Requests = w3Links.map((link, index) => {
    return new Promise(resolve => {
      const options = { headers: { 'Referer': link.src } };
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        showProgress();
        resolve();
      };

      setTimeout(() => {
        https.get('https://www.w3.org/TR/tr-outdated-spec', options, res => {
          if (res.statusCode < 200 || res.statusCode >= 400) {
            return finish();
          }
          let rawData = '';
          res.on('data', chunk => { rawData += chunk; });
          res.on('end', () => {
            try {
              const currentSpec = JSON.parse(rawData);
              if (currentSpec && currentSpec.warning && currentSpec.latestUrl) {
                const info = `- Note: ${link.text} ([original link](${link.src})) has a newer version available: [latest specification](${currentSpec.latestUrl}) ✨`;
                logResult(info);
              }
            } catch (err) {
              const errorMsg = `- Failed to parse w3.org response for ${link.src}: ${err.message} 😅`;
              logResult(errorMsg);
            }
            finish();
          });
          res.on('close', finish);
          res.on('aborted', finish);
        }).on('error', err => {
          const errorMsg = `- Request to w3.org failed for ${link.src}: ${err.message} 😢`;
          logResult(errorMsg);
          finish();
        });
      }, index * 500);
    });
  });

  const headRequest = (link, attempt = 0) => {
    return new Promise(resolve => {
      let settled = false;
      let respTimer = null;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (respTimer) {
          clearTimeout(respTimer);
          respTimer = null;
        }
        showProgress();
        resolve();
      };
      try {
        const url = new URL(link.src);
        const isHttps = url.protocol === 'https:';
        const client = isHttps ? https : http;
        const agent = isHttps ? httpsAgent : httpAgent;

        const options = {
          method: 'HEAD',
          agent,
          headers: {
            'Referer': link.src,
            'User-Agent': 'htmlspecs-checker/1.0',
            'Connection': 'close'
          }
        };

        const doRequest = (method) => {
          options.method = method;
          const req = client.request(link.src, options, res => {
            if (res.statusCode === 405 && method === 'HEAD') {
              res.resume();
              return doRequest('GET');
            }

            let etag = res.headers['etag'] || res.headers.etag;
            const lastModified = res.headers['last-modified'];

            if (etag) etag = etag.replace(/"/g, '');

            const hasStoredEtag = Object.prototype.hasOwnProperty.call(link, 'etag');
            const storedLastIsZero = link['last-modified'] === '0';

            respTimer = setTimeout(() => {
              req.destroy(new Error('response timeout'));
            }, REQUEST_TIMEOUT_MS);

            if (hasStoredEtag) {
              let stored = link.etag;
              if (stored) stored = stored.replace(/"/g, '');
              if (etag) {
                if (stored !== etag) {
                  const info =
                    `- ${link.text} ETag changed:\n  - Old ETag: ${stored}\n  - New ETag: ${etag}\n  - Link: ${link.src}`;
                  logResult(info);
                }
              } else {
                if (!storedLastIsZero && lastModified && link['last-modified']) {
                  const newTime = new Date(lastModified);
                  const oldTime = new Date(link['last-modified']);
                  const diffMs = Math.abs(newTime - oldTime);
                  const diffMin = diffMs / 1000 / 60;
                  if (diffMin >= 1) {
                    const info =
                      `- ${link.text} has been updated (no ETag from server):\n  - New time: ${newTime.toUTCString()}\n  - Old time: ${oldTime.toUTCString()}\n  - Link: ${link.src}`;
                    logResult(info);
                  }
                }
              }
            } else {
              if (!storedLastIsZero && lastModified && link['last-modified']) {
                const newTime = new Date(lastModified);
                const oldTime = new Date(link['last-modified']);
                const diffMs = Math.abs(newTime - oldTime);
                const diffMin = diffMs / 1000 / 60;
                if (diffMin >= 1) {
                  const info =
                    `- ${link.text} has been updated:\n  - New time: ${newTime.toUTCString()}\n  - Old time: ${oldTime.toUTCString()}\n  - Link: ${link.src}`;
                  logResult(info);
                }
              }
            }

            res.on('data', () => { });
            res.on('end', finish);
            res.on('close', finish);
            res.on('aborted', finish);
          });

          req.setTimeout(REQUEST_TIMEOUT_MS);
          req.once('timeout', () => {
            req.destroy(new Error('request timeout'));
          });

          req.once('error', e => {
            const retriable = ['ECONNRESET', 'EPIPE', 'ETIMEDOUT', 'ECONNABORTED'].includes(e.code) || /timeout/i.test(e.message);
            if (retriable && attempt < MAX_RETRIES) {
              const base = e.code === 'ECONNRESET' ? 1000 : 300;
              const backoff = Math.min(30000, Math.floor(base * Math.pow(2, attempt) + Math.random() * 1000));
              setTimeout(() => headRequest(link, attempt + 1).then(finish), backoff);
              return;
            }
            if (options.method === 'HEAD' && attempt >= 2 && attempt < MAX_RETRIES) {
              return doRequest('GET');
            }
            const errorMsg = `- Failed to fetch ${link.src}: ${e.message || e.code} 😢`;
            logResult(errorMsg);
            finish();
          });

          req.once('close', finish);


          req.end();
        };

        doRequest('HEAD');
      } catch (err) {
        const errorMsg = `- Invalid URL ${link.src}: ${err.message} 😢`;
        logResult(errorMsg);
        finish();
      }
    });
  };

  for (let i = 0; i < otherLinks.length; i += MAX_CONCURRENCY) {
    const batch = otherLinks.slice(i, i + MAX_CONCURRENCY).map(link => headRequest(link));
    await Promise.all(batch);
  }

  await Promise.all(w3Requests);
  process.stdout.write(`\n`);
  logResult('\n');
};

const main = async () => {
  if (SAVE_RESULTS) {
    fs.writeFileSync(RESULT_FILE, `# Specification Check Summary\n\n`);
  }
  await checkLinks(data.links, 'Standard Specifications');
  await checkLinks(data.cssLinks, 'CSS Related Specifications');
  await checkLinks(data.httpLinks, 'HTTP Related Specifications');
  logResult('All checks completed! 😊');
  process.exit(0);
};

main();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
});