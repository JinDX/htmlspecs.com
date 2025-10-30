const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const dataPath = path.join(__dirname, 'data.js');
const data = require('./data.js');

async function requestHeadOrGet(src) {
    return new Promise(resolve => {
        const urlObj = new URL(src);
        const mod = urlObj.protocol === 'https:' ? https : http;
        const options = {
            method: 'HEAD',
            headers: {
                'User-Agent': 'genetag-script/1.0'
            },
        };

        const doRequest = (method, cb) => {
            const req = mod.request(src, { ...options, method }, res => {
                cb(null, res);
            });
            req.on('error', err => cb(err));
            req.end();
        };

        doRequest('HEAD', (err, res) => {
            if (!err) {
                const etag = res.headers && (res.headers['etag'] || res.headers.etag);
                if (etag) return resolve(etag);
            }
            doRequest('GET', (err2, res2) => {
                if (!err2) {
                    const etag2 = res2.headers && (res2.headers['etag'] || res2.headers.etag);
                    return resolve(etag2 || null);
                }
                resolve(null);
            });
        });
    });
}

function formatValue(v) {
    if (v === null) return 'null';
    if (typeof v === 'string') {
        return `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }
    return String(v);
}

function formatObject(obj) {
    const preferred = ['text', 'href', 'src', 'last-modified', '"last-modified"', 'etag', '"etag"', 'lang', 'state'];
    const keys = Object.keys(obj);
    const ordered = [];
    for (const k of preferred) {
        const plain = k.replace(/"/g, '');
        if (keys.includes(plain) && !ordered.includes(plain)) ordered.push(plain);
    }
    for (const k of keys) if (!ordered.includes(k)) ordered.push(k);

    const parts = ordered.map(k => {
        const keyNeedsQuotes = /[^A-Za-z0-9_$]/.test(k);
        const keyOut = keyNeedsQuotes ? `"${k}"` : k;
        return `  ${keyOut}: ${formatValue(obj[k])}`;
    });
    return `{\n${parts.join(',\n')}\n}`;
}

(async () => {
    console.log('Fetching ETag for httpLinks...');

    const concurrency = 6;
    const queue = data.httpLinks.slice();
    const results = [];

    async function worker() {
        while (queue.length) {
            const item = queue.shift();
            if (!item || !item.src) continue;
            try {
                const etag = await requestHeadOrGet(item.src);
                if (etag) {
                    item.etag = etag;
                    console.log(`${item.src} -> ${etag}`);
                } else {
                    item.etag = item.etag || null;
                    console.log(`${item.src} -> (no etag)`);
                }
            } catch (e) {
                console.error(`Error fetching ${item.src}: ${e.message}`);
            }
        }
    }

    const workers = [];
    for (let i = 0; i < concurrency; i++) workers.push(worker());
    await Promise.all(workers);

    let src = fs.readFileSync(dataPath, 'utf8');

    const formattedItems = data.httpLinks.map(o => formatObject(o)).join(',\n\n');
    const replacement = `const httpLinks = [\n\n${formattedItems}\n\n];`;

    const re = /const\s+httpLinks\s*=\s*\[[\s\S]*?\];/m;
    if (!re.test(src)) {
        console.error('Failed to find httpLinks block in data.js');
        process.exit(2);
    }
    src = src.replace(re, replacement);

    fs.copyFileSync(dataPath, dataPath + '.bak');
    fs.writeFileSync(dataPath, src, 'utf8');
    console.log('Updated data.js and saved backup to data.js.bak');
})();