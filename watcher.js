const https = require('https');
const window = require('./dropdown.js');

const checkLinks = async () => {
    const requests = window.links.map(link => {
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

const checkCssLinks = async () => {
    const cssRequests = window.cssLinks.map(link => {
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

    await Promise.all(cssRequests);
};

const main = async () => {
    await checkLinks();
    await checkCssLinks();
    process.exit(); // Exit the process after all requests are done
};

main();