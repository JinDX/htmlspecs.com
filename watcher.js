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
  links = links.filter(item => !item.src.includes('w3.org'));

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

  const otherRequests = links.map(link => {
    return new Promise(resolve => {
      https.get(link.src, { method: 'HEAD' }, res => {
        const lastModified = res.headers['last-modified'];
        if (lastModified) {
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
  process.stdout.write('\n');
  logResult('\n');
};

const main = async () => {
  if (SAVE_RESULTS) {
    fs.writeFileSync(RESULT_FILE, `# Specification Check Summary\n\n`);
  }
  await checkLinks(data.links, 'Standard Specifications');
  await checkLinks(data.cssLinks, 'CSS Related Specifications');
  logResult('All checks completed! 😊');
  process.exit(0);
};

main();