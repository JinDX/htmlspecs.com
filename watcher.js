const https = require('https');
const data = require('./data.js');

const checkLinks = async (links) => {
    const requests = links.map(link => {
        return new Promise((resolve) => {
            https.get(link.src, { method: 'HEAD' }, (res) => {
                const lastModified = res.headers['last-modified'];
                if (lastModified && lastModified !== link["last-modified"]) {
                    console.log(`${link.text}: Last Modified: ${lastModified} (Expected: ${link["last-modified"]})`);
                }
                resolve();
            }).on('error', (e) => {
                console.error(`Error fetching ${link.src}: ${e.message}`);
                resolve();
            });
        });
    });

    await Promise.all(requests);
};

const main = async () => {
    await checkLinks(data.links);
    await checkLinks(data.cssLinks);
    console.log('All checks completed.');
    process.exit();
};

main();
