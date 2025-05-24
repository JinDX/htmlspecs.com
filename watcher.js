const https = require('https');
const data = require('./data.js');

const checkLinks = async (links) => {
    const requests = links.map(link => {
        return new Promise(resolve => {
            https.get(link.src, { method: 'HEAD' }, res => {
                const lastModified = res.headers['last-modified'];
                if (lastModified) {
                    const newTime = new Date(lastModified);
                    const oldTime = new Date(link['last-modified']);
                    const diffMs = Math.abs(newTime - oldTime);
                    const diffMin = diffMs / 1000 / 60;
                    if (diffMin >= 1) { // 差距到分鐘
                        console.log(
                            `${link.text}: new=${newTime.toUTCString()} old=${oldTime.toUTCString()} (Δ${diffMin.toFixed(1)}min)`
                        );
                    }
                }
                resolve();
            }).on('error', e => {
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
