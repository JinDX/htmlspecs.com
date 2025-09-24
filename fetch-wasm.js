const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const BASE_URL = 'https://webassembly.github.io/spec/core/';
const OUTPUT_DIR = path.join(__dirname, 'webassembly-core', 'src');

const visited = new Set();

function fetchPage(pageUrl) {
    return new Promise((resolve, reject) => {
        https.get(pageUrl, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error('Status code: ' + res.statusCode));
                res.resume();
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function extractLinks(html, pageUrl) {
    const links = [];
    const regex = /<a\s+[^>]*href\s*=\s*["']([^"']+)["']/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        let href = match[1];
        if (!href) continue;
        const absUrl = url.resolve(pageUrl, href);
        if (
            absUrl.startsWith(BASE_URL) &&
            !absUrl.includes('#') &&
            (absUrl.endsWith('.html') || absUrl.endsWith('/'))
        ) {
            links.push(absUrl);
        }
    }
    return links;
}

async function fetchAndSave(pageUrl) {
    if (visited.has(pageUrl)) return;
    visited.add(pageUrl);

    let relPath = pageUrl.replace(BASE_URL, '');
    if (!relPath || relPath.endsWith('/')) relPath += 'index.html';
    const localPath = path.join(OUTPUT_DIR, relPath);


    try {
        const html = await fetchPage(pageUrl);

        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        fs.writeFileSync(localPath, html, 'utf8');
        console.log('Saved:', localPath);

        const links = extractLinks(html, pageUrl);
        for (const link of links) {
            fetchAndSave(link);
        }
    } catch (e) {
        console.error('Failed:', pageUrl, e.message);
    }
}

(async () => {
    await fetchAndSave(BASE_URL);
})();
