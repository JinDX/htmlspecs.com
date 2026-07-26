const fs = require('fs');
const path = require('path');

function normalizeLangArg(value) {
    const lang = String(value || 'c').trim().toLowerCase();

    const aliases = {
        c: 'c',
        cn: 'c',
        zh: 'c',
        'zh-cn': 'c',
        chinese: 'c',

        k: 'k',
        ko: 'k',
        kr: 'k',
        'ko-kr': 'k',
        korean: 'k',

        j: 'j',
        ja: 'j',
        jp: 'j',
        'ja-jp': 'j',
        japanese: 'j'
    };

    return aliases[lang] || 'c';
}

const langArg = normalizeLangArg(process.argv[2]);
const langIndexMap = { c: 0, k: 1, j: 2 };
const langIndex = langIndexMap[langArg];
const langHostMap = {
    k: 'https://ko.htmlspecs.com',
    j: 'https://jp.htmlspecs.com'
};
const ecmaLocaleMap = { c: 'c', k: 'k', j: 'j' };

const dataJsPath = path.join(__dirname, 'data.js');
const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

function parseHeader() {
    const headerMatch = dataJsContent.match(/\/\/#\s*(.+)/);
    const descMatch = dataJsContent.match(/^(?:\s*\/\/)(?!#)(.*HTML[^\n]*)/m);

    const titles = (headerMatch?.[1] || 'htmlspecs.com')
        .split('|')
        .map(s => s.trim());

    const descs = (descMatch?.[1] || '')
        .split('|')
        .map(s => s.trim());

    return {
        title: titles[langIndex] || titles[0] || 'htmlspecs.com',
        desc: descs[langIndex] || descs[0] || ''
    };
}

function getArrayBlock(name) {
    const match = dataJsContent.match(
        new RegExp(`const\\s+${name}\\s*=\\s*\\[[\\s\\S]*?\\];`)
    );

    return match?.[0] || '';
}

function extractCategories(blockText) {
    const regex = /\/\/\s*#+\s*(.+)/g;
    const seen = new Set();
    const categories = [];
    let match;

    while ((match = regex.exec(blockText)) !== null) {
        const parts = match[1]
            .trim()
            .split('|')
            .map(s => s.trim());

        const names = [
            parts[0] || '',
            parts[1] || parts[0] || '',
            parts[2] || parts[0] || ''
        ];

        const id = names[0];

        if (id && !seen.has(id)) {
            seen.add(id);
            categories.push({ id, names, match: [] });
        }
    }

    return categories;
}

function extractTextFromLine(line) {
    const trimmed = line.trimStart();

    if (trimmed.startsWith('//')) return null;

    const match = line.match(
        /\btext\s*:\s*((?:"(?:\\.|[^"\\])*")|(?:'(?:\\.|[^'\\])*'))/
    );

    if (!match) return null;

    try {
        return new Function(`return ${match[1]};`)();
    } catch (error) {
        console.warn(`无法读取标题：${line.trim()}`);
        return null;
    }
}

function fillCategoryMatches(blockText, categories) {
    let currentCategoryIndex = -1;

    blockText.split(/\r?\n/).forEach(line => {
        const categoryMatch = line.match(/\/\/\s*#+\s*(.+)/);

        if (categoryMatch) {
            const firstSegment = categoryMatch[1]
                .trim()
                .split('|')[0]
                .trim();

            currentCategoryIndex = categories.findIndex(
                category => category.id === firstSegment
            );

            return;
        }

        if (currentCategoryIndex < 0) return;

        const text = extractTextFromLine(line);

        if (typeof text === 'string' && text.trim()) {
            categories[currentCategoryIndex].match.push(text.trim());
        }
    });
}

function extractArray(name) {
    const block = getArrayBlock(name);

    if (!block) {
        console.error(`${name} 未找到。`);
        return [];
    }

    const arrayMatch = block.match(
        new RegExp(`const\\s+${name}\\s*=\\s*(\\[[\\s\\S]*\\]);`)
    );

    if (!arrayMatch) {
        console.error(`${name} 数组内容未找到。`);
        return [];
    }

    try {
        return new Function(`return ${arrayMatch[1]};`)();
    } catch (error) {
        console.error(`${name} 解析失败：${error.message}`);
        return [];
    }
}

function languageMatches(item) {
    if (!item || typeof item !== 'object') return false;
    if (!item.lang) return true;
    return String(item.lang).includes(langArg);
}

function prepareArray(name) {
    const block = getArrayBlock(name);
    const categories = extractCategories(block);
    fillCategoryMatches(block, categories);

    const items = extractArray(name).filter(languageMatches);

    return { items, categories };
}

function classifyLinks(items, categories) {
    const result = {};
    const categoryByText = new Map();

    categories.forEach(category => {
        result[category.id] = [];

        category.match.forEach(text => {
            if (!categoryByText.has(text)) {
                categoryByText.set(text, category.id);
            }
        });
    });

    items.forEach(item => {
        if (!item || typeof item !== 'object' || !item.text) return;

        const categoryId = categoryByText.get(item.text.trim());

        if (categoryId && result[categoryId]) {
            result[categoryId].push(item);
        }
    });

    return result;
}

const stateMap = {
    LS: ['Living Standard', 'https://img.shields.io/badge/LS-3c790a'],
    Draft: ['Draft', 'https://img.shields.io/badge/Draft-ffcc00'],
    WD: ['Working Draft', 'https://img.shields.io/badge/WD-e66e33'],
    REC: ['Recommendation', 'https://img.shields.io/badge/REC-309c40'],
    SPSD: ['Superseded Recommendation', 'https://img.shields.io/badge/SPSD-6c757d'],
    CRD: ['Candidate Recommendation Draft', 'https://img.shields.io/badge/CRD-e2a669'],
    CR: ['Candidate Recommendation', 'https://img.shields.io/badge/CR-cfd510'],
    'CG-FINAL': ['Community Group Final Report', 'https://img.shields.io/badge/CG--FINAL-ffcc00'],
    DISC: ['Discontinued Draft', 'https://img.shields.io/badge/DISC-ffcc00'],
    NOTE: ['Note', 'https://img.shields.io/badge/NOTE-309c40'],
    DNOTE: ['Note Draft', 'https://img.shields.io/badge/DNOTE-ffcc00'],
    RFC: ['RFC', 'https://img.shields.io/badge/RFC-0057B8'],
    STMT: ['Statement', 'https://img.shields.io/badge/STMT-6c757d'],
    Guide: ['Guide', 'https://img.shields.io/badge/Guide-6c757d']
};

function linkToMd(link, includeBullet = true) {
    const displayText = link.state === 'Guide'
        ? 'How to Read'
        : link.text.trim();

    const stateInfo = link.state === 'Guide'
        ? null
        : stateMap[link.state];

    const badge = stateInfo
        ? ` ![${stateInfo[0]}](${stateInfo[1]})`
        : '';

    const bullet = includeBullet ? '- ' : '';
    let displayHref = link.href;
    const baseDomain = 'https://htmlspecs.com';

    if (
        langHostMap[langArg] &&
        typeof displayHref === 'string' &&
        displayHref.startsWith(baseDomain)
    ) {
        displayHref =
            langHostMap[langArg] +
            displayHref.substring(baseDomain.length);
    }

    if (
        link.text === 'ECMAScript® 2027 Language Specification' &&
        ecmaLocaleMap[langArg]
    ) {
        displayHref = `https://ecma262.com/${ecmaLocaleMap[langArg]}`;
    }

    return `${bullet}[${displayText}](${displayHref})（[Source](${link.src})${badge}）`;
}

function renderLinksInline(items) {
    const lines = [];

    items.forEach(link => {
        if (link.state === 'Guide' && lines.length > 0) {
            lines[lines.length - 1] += `，${linkToMd(link, false)}`;
        } else {
            lines.push(linkToMd(link));
        }
    });

    return lines.length ? `${lines.join('\n')}\n` : '';
}

function appendCategories(markdown, categories, classified, topHeading) {
    let md = markdown;

    categories.forEach(category => {
        const items = classified[category.id];

        if (!items || items.length === 0) return;

        const displayName = category.names[langIndex] || category.names[0];
        const heading = displayName === topHeading ? '##' : '###';

        md += `${heading} ${displayName}\n`;
        md += renderLinksInline(items);
        md += '\n';
    });

    return md;
}

function generateMd(mainData, cssData, httpData) {
    const { title, desc } = parseHeader();
    let md = `# ${title}\n${desc}\n\n`;

    const mainClassified = classifyLinks(
        mainData.items,
        mainData.categories
    );
    const cssClassified = classifyLinks(
        cssData.items,
        cssData.categories
    );
    const httpClassified = classifyLinks(
        httpData.items,
        httpData.categories
    );

    md = appendCategories(
        md,
        mainData.categories,
        mainClassified,
        null
    );

    md = appendCategories(
        md,
        cssData.categories,
        cssClassified,
        'CSS'
    );

    md = appendCategories(
        md,
        httpData.categories,
        httpClassified,
        'HTTP'
    );

    return md;
}

const mainData = prepareArray('links');
const cssData = prepareArray('cssLinks');
const httpData = prepareArray('httpLinks');

const totalItems =
    mainData.items.length +
    cssData.items.length +
    httpData.items.length;

if (totalItems === 0) {
    throw new Error(
        `没有读取到任何规范。当前语言参数：${langArg}。` +
        '请确认 data.js 与 g.js 位于同一目录。'
    );
}

const mdContent = generateMd(mainData, cssData, httpData);
const renderedItemCount = (mdContent.match(/^- \[/gm) || []).length;

if (renderedItemCount === 0) {
    throw new Error(
        '读取到了 data.js，但没有任何规范被分类。' +
        '请检查分类注释是否仍使用 //## 或 //### 格式。'
    );
}

const outFile = langArg === 'c'
    ? 'README.md'
    : `README.${langArg}.md`;

const outPath = path.join(__dirname, outFile);
fs.writeFileSync(outPath, mdContent, 'utf8');

console.log(
    `${outFile} Done! ` +
    `(data: ${totalItems}, rendered: ${renderedItemCount}, ` +
    `${Buffer.byteLength(mdContent, 'utf8')} bytes)`
);
