const fs = require('fs');
const path = require('path');

const langArg = (process.argv[2] || 'c').toLowerCase();
const langIndexMap = { c: 0, k: 1, j: 2 };
const langIndex = langIndexMap[langArg] ?? 0;
const langHostMap = { k: 'https://ko.htmlspecs.com', j: 'https://jp.htmlspecs.com' };
const ecmaLocaleMap = { k: 'ko', j: 'jp' };

const dataJsPath = './data.js';
const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

function parseHeader() {
    const headerMatch = dataJsContent.match(/\/\/\#\s*(.+)/);
    const descMatch = dataJsContent.match(/^(?:\s*\/\/)(?!#)(.*HTML[^\n]*)/m);
    let titles = headerMatch[1].split('|').map(s => s.trim());
    let descs = descMatch[1].split('|').map(s => s.trim());
    return {
        title: titles[langIndex] || titles[0],
        desc: descs[langIndex] || descs[0]
    };
}

function extractCategories(blockText) {
    const regex = /\/\/\s*#+\s*(.+)/g;
    let raw = [];
    let m;
    while ((m = regex.exec(blockText)) !== null) {
        raw.push(m[1].trim());
    }
    const seen = new Set();
    const list = [];
    raw.forEach(line => {
        const parts = line.split('|').map(s => s.trim()).filter(Boolean);
        const names = [parts[0] || '', parts[1] || parts[0] || '', parts[2] || parts[0] || ''];
        const id = names[0];
        if (!seen.has(id)) {
            seen.add(id);
            list.push({ id, names, match: [] });
        }
    });
    return list;
}

let categories = extractCategories(dataJsContent.match(/const\s+links\s*=\s*\[[\s\S]*?];/)?.[0] || '');

let currentCatIdx = -1;
const lines = dataJsContent.split('\n');
lines.forEach(line => {
    const catMatch = line.match(/\/\/\s*#+\s*(.+)/);
    if (catMatch) {
        const firstSeg = catMatch[1].trim().split('|')[0].trim();
        currentCatIdx = categories.findIndex(c => c.id === firstSeg);
    }
    const linkMatch = line.match(/text:\s*['"]([^'"]+)['"]/);
    if (linkMatch && currentCatIdx >= 0) {
        categories[currentCatIdx].match.push(linkMatch[1].trim());
    }
});

function extractArray(name) {
    const match = dataJsContent.match(new RegExp(`const\\s+${name}\\s*=\\s*(\\[[\\s\\S]*?]);`));
    if (!match) return [];
    try {
        return (new Function('return ' + match[1]))();
    } catch (e) {
        console.error(name + ' 解析失败:', e.message);
        return [];
    }
}
const links = extractArray('links');

const cssLinks = extractArray('cssLinks');
let cssCategories = extractCategories(dataJsContent.match(/const\s+cssLinks\s*=\s*\[[\s\S]*?];/)?.[0] || '');

let currentCssIdx = -1;
const cssBlockLines = (dataJsContent.match(/const\s+cssLinks\s*=\s*\[[\s\S]*?];/)?.[0] || '').split('\n');
cssBlockLines.forEach(line => {
    const catMatch = line.match(/\/\/\s*#+\s*(.+)/);
    if (catMatch) {
        const firstSeg = catMatch[1].trim().split('|')[0].trim();
        currentCssIdx = cssCategories.findIndex(c => c.id === firstSeg);
    }
    const linkMatch = line.match(/text:\s*['"]([^'"]+)['"]/);
    if (linkMatch && currentCssIdx >= 0) {
        cssCategories[currentCssIdx].match.push(linkMatch[1].trim());
    }
});

function classifyLinks(list, cats) {
    const result = {};
    cats.forEach(c => result[c.id] = []);
    list.forEach(item => {
        if (!item || typeof item !== 'object' || !item.text) return;
        for (const cat of cats) {
            if (cat.match.includes(item.text.trim())) {
                result[cat.id].push(item);
                return;
            }
        }
    });
    return result;
}

const stateMap = {
    'LS': ['Living Standard', 'https://img.shields.io/badge/LS-3c790a'],
    'Draft': ['Draft', 'https://img.shields.io/badge/Draft-ffcc00'],
    'WD': ['Working Draft', 'https://img.shields.io/badge/WD-e66e33'],
    'REC': ['Recommendation', 'https://img.shields.io/badge/REC-309c40'],
    'CRD': ['Candidate Recommendation Draft', 'https://img.shields.io/badge/CRD-e2a669'],
    'CR': ['Candidate Recommendation', 'https://img.shields.io/badge/CR-cfd510'],
    'CG-FINAL': ['Community Group Final Report', 'https://img.shields.io/badge/CG--FINAL-ffcc00'],
    'DISC': ['Discontinued Draft', 'https://img.shields.io/badge/DISC-ffcc00'],
    'NOTE': ['Note', 'https://img.shields.io/badge/NOTE-309c40']
};

function linkToMd(link) {
    const st = stateMap[link.state];
    const badge = st ? ` ![${st[0]}](${st[1]})` : '';
    let displayHref = link.href;
    const baseDomain = 'https://htmlspecs.com';
    if (langHostMap[langArg] && displayHref.startsWith(baseDomain)) {
        displayHref = langHostMap[langArg] + displayHref.substring(baseDomain.length);
    }
    if (link.text === 'ECMAScript' && ecmaLocaleMap[langArg]) {
        displayHref = `https://ecma262.com/${ecmaLocaleMap[langArg]}`;
    }
    return `- [${link.text.trim()}](${displayHref})（[Source](${link.src})${badge}）`;
}

function generateMd(classified, cssClassified) {
    const { title, desc } = parseHeader();
    let md = `# ${title}\n${desc}\n\n`;
    for (const cat of categories) {
        const items = classified[cat.id];
        if (items && items.length) {
            const displayName = cat.names[langIndex] || cat.names[0];
            md += `### ${displayName}\n`;
            items.forEach(l => md += linkToMd(l) + '\n');
            md += '\n';
        }
    }
    for (const cat of cssCategories) {
        const items = cssClassified[cat.id];
        if (items && items.length) {
            const displayName = cat.names[langIndex] || cat.names[0];
            md += `### ${displayName}\n`;
            items.forEach(l => md += linkToMd(l) + '\n');
            md += '\n';
        }
    }
    return md;
}

const classified = classifyLinks(links, categories);
const cssSpecs = cssLinks.filter(o => o && typeof o === 'object');
const cssClassified = classifyLinks(cssSpecs, cssCategories);
const mdContent = generateMd(classified, cssClassified);

const outFile = langArg === 'c' ? 'README.md' : `README.${langArg}.md`;
fs.writeFileSync(path.join(__dirname, outFile), mdContent, 'utf8');
console.log(outFile + ' Done!');