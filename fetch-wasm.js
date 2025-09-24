const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const BASE_URL = 'https://webassembly.github.io/spec/core/';
const OUTPUT_DIR = path.join(__dirname, 'webassembly-core', 'src');

const visited = new Set();
const MAX_CONCURRENT = 4; // 降低并发数
const REQUEST_DELAY = 300; // 每次请求间隔（毫秒）
let activeCount = 0;
const queue = [];
const allTasks = []; // 全局收集所有任务Promise

function fetchPage(pageUrl) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
            }
        };
        const req = https.get(pageUrl, options, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error('Status code: ' + res.statusCode + ' for ' + pageUrl));
                res.resume();
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => {
            reject(new Error(err.message + ' for ' + pageUrl));
        });
        req.setTimeout(60000, () => {
            req.destroy();
            reject(new Error('Timeout for ' + pageUrl));
        });
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

function enqueue(task) {
    return new Promise((resolve, reject) => {
        queue.push({ task, resolve, reject });
        dequeue();
    });
}

function dequeue() {
    if (activeCount >= MAX_CONCURRENT || queue.length === 0) return;
    const { task, resolve, reject } = queue.shift();
    activeCount++;
    task().then(resolve, reject).finally(() => {
        activeCount--;
        dequeue();
    });
}

async function fetchPageWithRetry(pageUrl, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fetchPage(pageUrl);
        } catch (e) {
            if (i === retries - 1) throw e;
            console.warn(`Retrying (${i + 1}) for: ${pageUrl}`);
            await new Promise(res => setTimeout(res, 1000 * (i + 1)));
        }
    }
}

async function fetchAndSave(pageUrl) {
    if (visited.has(pageUrl)) return;
    visited.add(pageUrl);

    let relPath = pageUrl.replace(BASE_URL, '');
    if (!relPath || relPath.endsWith('/')) relPath += 'index.html';
    const localPath = path.join(OUTPUT_DIR, relPath);

    try {
        await new Promise(res => setTimeout(res, REQUEST_DELAY));
        const html = await fetchPageWithRetry(pageUrl);

        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        fs.writeFileSync(localPath, html, 'utf8');
        console.log('Saved:', localPath);

        const links = extractLinks(html, pageUrl);
        links.forEach(link => {
            // 收集所有递归任务
            allTasks.push(
                enqueue(() => fetchAndSave(link)).catch((e) => {
                    console.error('Failed:', link, e.message);
                })
            );
        });
    } catch (e) {
        console.error('Failed:', pageUrl, e.message);
    }
}

(async () => {
    // 初始任务也加入 allTasks
    allTasks.push(enqueue(() => fetchAndSave(BASE_URL)));
    // 等待所有递归任务完成
    await Promise.all(allTasks);
})();
