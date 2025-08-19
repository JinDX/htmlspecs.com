const BUTTON_COLOR = "#6c757d";
const BUTTON_HOVER_COLOR = "#5a6268";

const LANGUAGES = {
    cn: {
        otherStandards: "其他标准",
        githubTitle: "查看 GitHub 源码，加星 ⭐",
        cssRelated: "CSS 相关",
        marker: "【注意】",
        disclaimer: "这是一份志愿者翻译，译文中可能包含错误。本译文仅供参考，应以 W3C 网站上的原始英文版本（<a href='{src}'>{text}</a>）为准。"
    },
    jp: {
        otherStandards: "他の標準",
        githubTitle: "GitHub ソースコードを見る、スター ⭐",
        cssRelated: "CSS 関連",
        marker: "【ご注意】",
        disclaimer: "これはボランティアによる翻訳です。翻訳には誤りが含まれている可能性があります。参考用にご利用ください。原本は W3C サイトの英語版（<a href='{src}'>{text}</a>）をご参照ください。"
    },
    ko: {
        otherStandards: "다른 표준",
        githubTitle: "GitHub 소스 코드 보기, 스타 ⭐",
        cssRelated: "CSS 관련",
        marker: "【주의】",
        disclaimer: "이 번역은 자원봉사자의 번역본입니다. 번역에 오류가 있을 수 있습니다. 참고용으로만 사용하시고, 원본은 W3C 웹사이트의 영어 버전(<a href='{src}'>{text}</a>)을 참고하세요."
    }
};

function getLocationInfo() {
    const pathname = (window.location && window.location.pathname) || '';
    const hostname = (window.location && window.location.hostname) || '';
    return { pathname, hostname, href: window.location && window.location.href };
}

function getCurrentLang() {
    const { pathname, hostname } = getLocationInfo();
    if (/^jp\.htmlspecs\.com$/.test(hostname) || pathname.startsWith('/jp')) return 'jp';
    if (/^ko\.htmlspecs\.com$/.test(hostname) || pathname.startsWith('/ko')) return 'ko';
    return 'cn';
}

function rewriteHref(href) {
    const lang = getCurrentLang();
    try {
        const u = new URL(href, window.location.origin);
        if (lang === 'jp') {
            if (u.hostname === 'htmlspecs.com') u.hostname = 'jp.htmlspecs.com';
            if (u.hostname === 'ecma262.com') u.pathname = '/jp' + u.pathname;
        } else if (lang === 'ko') {
            if (u.hostname === 'htmlspecs.com') u.hostname = 'ko.htmlspecs.com';
            if (u.hostname === 'ecma262.com') u.pathname = '/ko' + u.pathname;
        }
        return u.toString();
    } catch (e) {
        if (lang === 'jp') return href.replace('htmlspecs.com', 'jp.htmlspecs.com').replace('ecma262.com/', 'ecma262.com/jp');
        if (lang === 'ko') return href.replace('htmlspecs.com', 'ko.htmlspecs.com').replace('ecma262.com/', 'ecma262.com/ko');
        return href;
    }
}

function loadDataScript(callback) {
    const script = document.createElement('script');
    script.src = 'https://htmlspecs.com/data.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function createEl(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.id) el.id = options.id;
    if (options.className) el.className = options.className;
    if (options.text) el.textContent = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.attrs) Object.keys(options.attrs).forEach(k => el.setAttribute(k, options.attrs[k]));
    if (options.style) el.style.cssText = options.style;
    if (options.on) Object.keys(options.on).forEach(k => el.addEventListener(k, options.on[k]));
    return el;
}

function createLink(href, text) {
    const a = createEl('a', {
        attrs: { href: rewriteHref(href), title: text },
        text
    });
    a.style.cssText = '\n            display: block;\n            padding: 10px 15px;\n            color: #333;\n            text-decoration: none;\n            transition: color 0.3s;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            width: 100%;\n            box-sizing: border-box;\n        ';
    a.addEventListener('mouseover', () => a.style.color = '#007BFF');
    a.addEventListener('mouseout', () => a.style.color = '#333');
    return a;
}

function setButtonStyle(button) {
    button.style.cssText = `
        display: inline-block;
        z-index: 3;
        margin-left: 10px;
        background-color: ${BUTTON_COLOR};
        color: white;
        padding: 10px 15px;
        font-size: 14px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s, transform 0.2s;
    `;
    button.addEventListener('mouseover', () => button.style.backgroundColor = BUTTON_HOVER_COLOR);
    button.addEventListener('mouseout', () => button.style.backgroundColor = BUTTON_COLOR);
}

function createButton(id, text, onClick) {
    const button = createEl('button', { id, text });
    setButtonStyle(button);
    if (onClick) button.addEventListener('click', onClick);
    return button;
}

(function () {
    loadDataScript(() => {
        const lang = getCurrentLang();
        const t = LANGUAGES[lang] || LANGUAGES.cn;

        const applyLangFilter = (arr) => {
            if (!Array.isArray(arr)) return [];
            if (lang === 'jp') return arr.filter(l => l.lang && l.lang.includes('j'));
            if (lang === 'ko') return arr.filter(l => l.lang && l.lang.includes('k'));
            return arr;
        };

        const filteredLinks = applyLangFilter(window.links);
        const filteredCssLinks = applyLangFilter(window.cssLinks);

        const githubRepo = (window.location.hostname === 'ecma262.com') ? 'JinDX/ecma262.com' : 'JinDX/htmlspecs.com';

        const githubButton = createLink(`https://github.com/${githubRepo}`, '');
        githubButton.style.cssText += `\n            display: inline-block;\n            width: 40px;\n            height: 40px;\n            background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');\n            background-size: cover;\n            border-radius: 50%;\n            margin-right: 10px;\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n        `;
        githubButton.title = t.githubTitle;
        githubButton.addEventListener('mouseover', () => { githubButton.style.transform = 'scale(1.2)'; githubButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)'; });
        githubButton.addEventListener('mouseout', () => { githubButton.style.transform = 'scale(1)'; githubButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)'; });

        const dropdownButton = createButton('dropdownButton', t.otherStandards);

        const buttonContainer = createEl('div', { style: '\n            position: absolute;\n            top: 20px;\n            right: 20px;\n            display: flex;\n            align-items: center;\n        ' });
        buttonContainer.appendChild(githubButton);
        buttonContainer.appendChild(dropdownButton);
        document.body.appendChild(buttonContainer);

        const dropdownContent = createEl('div', { id: 'dropdownContent' });
        dropdownContent.style.cssText = `
            display: none;
            position: absolute;
            top: 60px;
            right: 20px;
            width: 405px;
            height: 80%;
            max-height: 80vh;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            overflow-y: auto;
        `;
        document.body.appendChild(dropdownContent);

        dropdownButton.addEventListener('click', () => {
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });

        filteredLinks.forEach(link => {
            dropdownContent.appendChild(createLink(link.href, link.text));

            if (link.text === 'ECMA-262') {
                const cssTitle = createLink('#', t.cssRelated);
                cssTitle.style.cursor = 'pointer';
                cssTitle.style.padding = '10px 15px';

                const triangle = createEl('span');
                triangle.style.cssText = `
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                    border-left: 6px solid #333;
                    display: inline-block;
                    margin-right: 10px;
                    transition: transform 0.3s ease;
                `;
                cssTitle.prepend(triangle);

                const cssContent = createEl('div');
                cssContent.style.display = 'none';
                cssContent.style.padding = '0 15px';

                filteredCssLinks.forEach(cl => cssContent.appendChild(createLink(cl.href, cl.text)));

                cssTitle.addEventListener('click', event => {
                    event.preventDefault();
                    const isCollapsed = cssContent.style.display === 'none';
                    cssContent.style.display = isCollapsed ? 'block' : 'none';
                    triangle.style.transform = isCollapsed ? 'rotate(90deg)' : 'rotate(0deg)';
                });

                dropdownContent.appendChild(cssTitle);
                dropdownContent.appendChild(cssContent);
            }
        });

        window.addEventListener('click', event => {
            if (!event.target.matches('#dropdownButton') && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });

        const style = createEl('style');
        style.innerHTML = `
            @media (max-width: 600px) {
                #dropdownContent { width: 100%; left: 0; right: 0; }
            }
            table.def th { min-width: 5em; }
        `;
        document.head.appendChild(style);

        function extractRelevantLinks(data) {
            if (!Array.isArray(data)) return [];
            return data.filter(l => (l.src && (l.src.includes('w3.org') || l.src.includes('wicg.github.io'))));
        }

        const relevantLinksFromLinks = extractRelevantLinks(window.links);
        const relevantLinksFromCssLinks = extractRelevantLinks(window.cssLinks);
        const allRelevantLinks = [...relevantLinksFromLinks, ...relevantLinksFromCssLinks];

        function normalizeUrlForCompare(u) {
            return String(u || '').replace(/^(https?:\/\/)(jp\.|ko\.)?/, '$1');
        }

        function isCurrentUrlMatchingLink(href) {
            try {
                const currentHref = normalizeUrlForCompare(window.location.href);
                const normalizedHref = normalizeUrlForCompare(href);
                return currentHref.includes(normalizedHref);
            } catch (err) {
                console.error('Error accessing window.location.href:', err);
                return false;
            }
        }

        let matchingLinks = [];
        try { matchingLinks = allRelevantLinks.filter(l => isCurrentUrlMatchingLink(l.href)); } catch (e) { console.error(e); }

        if (matchingLinks.length > 0) {
            const first = matchingLinks[0];
            const disclaimer = createEl('div', { className: 'note' });
            disclaimer.innerHTML = `\n<span class="marker">${t.marker}</span>\n<p>${t.disclaimer.replace('{src}', first.src).replace('{text}', first.text)}</p>\n`;
            document.body.insertAdjacentElement('afterbegin', disclaimer);
        }
    });

    (function initGA() {
        let gaID;
        const hostname = window.location.hostname || '';
        if (/htmlspecs\.com$/.test(hostname)) gaID = 'G-Z0H3G08TCK';
        else if (hostname === 'ecma262.com') gaID = 'G-DEEXSBMHX9';
        else return;

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaID;
        document.head.appendChild(script);
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', gaID);
        };
    })();
})();
