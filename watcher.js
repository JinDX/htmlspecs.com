const https = require('https');
const data = require('./data.js');

const checkLinks = async (links) => {
  const total = links.length;
  let finished = 0;

  const showProgress = () => {
    finished++;
    process.stdout.write(`\rProgress: ${finished}/${total}`);
  };

  const w3Links = links.filter(item => item.src.includes('w3.org'));
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
                console.log(`\n${link.text} (${link.src})`);
              }
            } catch (err) {
              console.error(`\nError parsing w3.org response for ${link.src}: ${err.message}`);
            }
            showProgress();
            resolve();
          });
        }).on('error', err => {
          console.error(`\nRequest to w3.org failed for ${link.src}: ${err.message}`);
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
            console.log(
              `\n${link.text}: new=${newTime.toUTCString()} old=${oldTime.toUTCString()} (Δ${diffMin.toFixed(1)}min)`
            );
          }
        }
        showProgress();
        resolve();
      }).on('error', e => {
        console.error(`\nError fetching ${link.src}: ${e.message}`);
        showProgress();
        resolve();
      });
    });
  });

  await Promise.all([...w3Requests, ...otherRequests]);
  process.stdout.write('\n');
};

const main = async () => {
  await checkLinks(data.links);
  await checkLinks(data.cssLinks);
  console.log('All checks completed.');
  process.exit();
};

main();