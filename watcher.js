const https = require('https');
const fs = require('fs');
const data = require('./data.js');

const SAVE_RESULTS = process.env.SAVE_RESULTS === '1' || process.argv.includes('--save');
const RESULT_FILE = 'check-results.md';

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
  // 只把包含 /TR 的当作 w3 特殊处理，其它链接继续处理（避免把其它 w3.org 链接意外丢弃）
  const otherLinks = links.filter(item => !item.src.includes('w3.org/TR'));

  const w3Requests = w3Links.map((link, index) => {
    return new Promise(resolve => {
      const options = {
        headers: {
          'Referer': link.src
        }
      };

      setTimeout(() => {
        https.get('https://www.w3.org/TR/tr-outdated-spec', options, res => {
          if (res.statusCode < 200 || res.statusCode >= 400) {
            showProgress();
            return resolve();
          }
          let rawData = '';
          res.on('data', chunk => {
            rawData += chunk;
          });
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
            showProgress();
            resolve();
          });
        }).on('error', err => {
          const errorMsg = `- Request to w3.org failed for ${link.src}: ${err.message} 😢`;
          logResult(errorMsg);
          showProgress();
          resolve();
        });
      }, index * 500);
    });
  });

  const otherRequests = otherLinks.map(link => {
    return new Promise(resolve => {
      https.get(link.src, { method: 'HEAD' }, res => {
        let etag = res.headers['etag'] || res.headers.etag;
        const lastModified = res.headers['last-modified'];

        // 去除 etag 中的所有双引号
        if (etag) {
          etag = etag.replace(/"/g, '');
        }

        const hasStoredEtag = Object.prototype.hasOwnProperty.call(link, 'etag');
        const storedLastIsZero = link['last-modified'] === '0';

        if (hasStoredEtag) {
          // 也去除存储的 etag 中的所有双引号
          let stored = link.etag;
          if (stored) {
            stored = stored.replace(/"/g, '');
          }
          if (etag) {
            if (stored !== etag) {
              const info =
                `- ${link.text} ETag changed:\n  - Old ETag: ${stored}\n  - New ETag: ${etag}\n  - Link: ${link.src}`;
              logResult(info);
            }
          } else {
            // 如果存储的 last-modified 为 "0"，则不确认更新
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
          // 无存储 etag：若存储 last-modified 为 "0" 则跳过确认
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

        showProgress();
        resolve();
      }).on('error', e => {
        const errorMsg = `- Failed to fetch ${link.src}: ${e.message} 😢`;
        logResult(errorMsg);
        showProgress();
        resolve();
      });
    });
  });

  await Promise.all([...w3Requests, ...otherRequests]);
  // 补齐进度显示，防止少数分支遗漏导致输出不满
  process.stdout.write(`\rProgress: ${total}/${total}\n`);
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