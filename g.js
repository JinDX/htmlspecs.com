const fs = require('fs');
const path = require('path');
const {
    siteMetadata,
    stateMap,
    linkGroups,
    cssLinkGroups,
    httpLinkGroups
} = require('./data.js');

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
const langIndex = { c: 0, k: 1, j: 2 }[langArg];
const langHostMap = {
    k: 'https://ko.htmlspecs.com',
    j: 'https://jp.htmlspecs.com'
};

function languageMatches(item) {
    if (!item || typeof item !== 'object') return false;
    if (!item.lang) return true;
    return String(item.lang).includes(langArg);
}

function prepareGroups(groups) {
    return groups
        .map(group => ({
            names: group.names,
            items: group.items.filter(languageMatches)
        }))
        .filter(group => group.items.length > 0);
}

function localizeHref(link) {
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

    if (link.text === 'ECMAScript® 2027 Language Specification') {
        displayHref = `https://ecma262.com/${langArg}`;
    }

    return displayHref;
}

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

    return (
        `${bullet}[${displayText}](${localizeHref(link)})` +
        `（[Source](${link.src})${badge}）`
    );
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

function appendGroups(markdown, groups, topHeading) {
    let md = markdown;

    groups.forEach(group => {
        const displayName =
            group.names[langIndex] ||
            group.names[0] ||
            '';
        const heading = displayName === topHeading ? '##' : '###';

        md += `${heading} ${displayName}\n`;
        md += renderLinksInline(group.items);
        md += '\n';
    });

    return md;
}

function generateMd() {
    const title =
        siteMetadata.titles[langIndex] ||
        siteMetadata.titles[0] ||
        'htmlspecs.com';
    const description =
        siteMetadata.descriptions[langIndex] ||
        siteMetadata.descriptions[0] ||
        '';
    const mainGroups = prepareGroups(linkGroups);
    const cssGroups = prepareGroups(cssLinkGroups);
    const httpGroups = prepareGroups(httpLinkGroups);

    let markdown = `# ${title}\n${description}\n\n`;
    markdown = appendGroups(markdown, mainGroups, null);
    markdown = appendGroups(markdown, cssGroups, 'CSS');
    markdown = appendGroups(markdown, httpGroups, 'HTTP');

    return {
        markdown,
        totalItems: [...mainGroups, ...cssGroups, ...httpGroups]
            .reduce((total, group) => total + group.items.length, 0)
    };
}

const { markdown: mdContent, totalItems } = generateMd();
const renderedItemCount = (mdContent.match(/^- \[/gm) || []).length;

if (totalItems === 0 || renderedItemCount === 0) {
    throw new Error(
        `data.js 中没有适用于语言“${langArg}”的分类条目。`
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
