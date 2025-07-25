const fs = require('fs');
const https = require('https');
const data = require('./data.js');

const isCi = process.argv.includes('--ci');

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').replace(/\..*$/, '');
}

const checkLinks = async (links, updates) => {
  const total = links.length;
  let finished = 0;

  const showProgress = () => {
    finished++;
    if (!isCi) {
      process.stdout.write(`\rProgress: ${finished}/${total}`);
    }
  };

  const w3Links = links.filter(item => item.src.includes('w3.org'));
  links = links.filter(item => !item.src.includes('w3.org'));

  const w3Requests = w3Links.map((link, index) => {
    return new Promise(resolve => {
      const options = { headers: { 'Referer': link.src } };
      setTimeout(() => {
        https.get('https://www.w3.org/TR/tr-outdated-spec', options, res => {
          if (res.statusCode < 200 || res.statusCode >= 400) {
            showProgress();
            return resolve();
          }
          let rawData = '';
          res.on('data', chunk => { rawData += chunk; });
          res.on('end', () => {
            try {
              const currentSpec = JSON.parse(rawData);
              if (currentSpec && currentSpec.warning && currentSpec.latestUrl) {
                const msg = `- **${link.text}** ([源](${link.src}))  
  > 该标准已过时，最新版本：[${currentSpec.latestUrl}](${currentSpec.latestUrl})`;
                updates.push(msg);
                if (!isCi) {
                  console.log(`\n${link.text} (${link.src}) 已过时`);
                }
              }
            } catch (err) {
              if (!isCi) {
                console.error(`\nError parsing w3.org response for ${link.src}: ${err.message}`);
              }
            }
            showProgress();
            resolve();
          });
        }).on('error', err => {
          if (!isCi) {
            console.error(`\nRequest to w3.org failed for ${link.src}: ${err.message}`);
          }
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
            const msg = `- **${link.text}** ([源](${link.src}))  
  > 检测到更新: 新时间 ${newTime.toUTCString()}，旧时间 ${oldTime.toUTCString()}，差值 ${diffMin.toFixed(1)} 分钟`;
            updates.push(msg);
            if (!isCi) {
              console.log(`\n${link.text}: new=${newTime.toUTCString()} old=${oldTime.toUTCString()} (Δ${diffMin.toFixed(1)}min)`);
            }
          }
        }
        showProgress();
        resolve();
      }).on('error', e => {
        if (!isCi) {
          console.error(`\nError fetching ${link.src}: ${e.message}`);
        }
        showProgress();
        resolve();
      });
    });
  });

  await Promise.all([...w3Requests, ...otherRequests]);
  if (!isCi) process.stdout.write('\n');
};

const main = async () => {
  const updates = [];
  await checkLinks(data.links, updates);
  await checkLinks(data.cssLinks, updates);

  if (!isCi) {
    if (updates.length > 0) {
      console.log('\n有标准更新:');
      console.log(updates.join('\n'));
    } else {
      console.log('\n没有检测到标准更新');
    }
    console.log('All checks completed.');
  } else {
    let mdContent = '';
    if (updates.length > 0) {
      mdContent = `## 检测时间: ${getTimestamp()}\n\n${updates.join('\n')}\n\n`;
    }
    fs.writeFileSync('updates.md', mdContent);
  }
  process.exit();
};

main();