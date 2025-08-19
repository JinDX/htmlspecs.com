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

function getCurrentLang() {
    const hostname = window.location.hostname;
    if (/^jp\.htmlspecs\.com$/.test(hostname)) return "jp";
    if (/^ko\.htmlspecs\.com$/.test(hostname)) return "ko";
    if (window.location.pathname.startsWith('/jp')) return "jp";
    if (window.location.pathname.startsWith('/ko')) return "ko";
    return "cn";
}

function rewriteHref(href) {
    const lang = getCurrentLang();
    if (lang === "jp") {
        return href.replace("htmlspecs.com", "jp.htmlspecs.com")
            .replace("ecma262.com/", "ecma262.com/jp");
    }
    if (lang === "ko") {
        return href.replace("htmlspecs.com", "ko.htmlspecs.com")
            .replace("ecma262.com/", "ecma262.com/ko");
    }
    return href;
}

function loadDataScript(callback) {
    var script = document.createElement('script');
    script.src = 'https://htmlspecs.com/data.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function createLink(href, text) {
    var a = document.createElement("a");
    a.href = rewriteHref(href);
    a.textContent = text;
    a.title = text;
    a.style.cssText = `
        display: block;
        padding: 10px 15px;
        color: #333;
        text-decoration: none;
        transition: color 0.3s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        box-sizing: border-box;
    `;
    a.onmouseover = () => a.style.color = "#007BFF";
    a.onmouseout = () => a.style.color = "#333";
    return a;
}

function createButton(id, text, onClick) {
    var button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    setButtonStyle(button);
    button.onclick = onClick;
    return button;
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
        transition: background-color 0.3s;
    `;
}

loadDataScript(function () {
    const lang = getCurrentLang();
    const t = LANGUAGES[lang];

    var filteredLinks = links;
    var filteredCssLinks = cssLinks;

    if (window.location.hostname === 'jp.htmlspecs.com' || window.location.pathname.startsWith('/jp')) {
        filteredLinks = links.filter(link => link.lang.includes('j'));
        filteredCssLinks = cssLinks.filter(link => link.lang.includes('j'));
    } else if (window.location.hostname === 'ko.htmlspecs.com' || window.location.pathname.startsWith('/ko')) {
        filteredLinks = links.filter(link => link.lang.includes('k'));
        filteredCssLinks = cssLinks.filter(link => link.lang.includes('k'));
    }

    var githubRepo;
    if (window.location.hostname === 'ecma262.com') {
        githubRepo = "JinDX/ecma262.com";
    } else {
        githubRepo = "JinDX/htmlspecs.com";
    }

    var githubButton = createLink(
        `https://github.com/${githubRepo}`,
        ""
    );

    githubButton.style.cssText += `
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
        background-size: cover;
        border-radius: 50%;
        margin-right: 10px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    `;
    githubButton.title = t.githubTitle;
    githubButton.onmouseover = () => {
        githubButton.style.transform = "scale(1.2)";
        githubButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    };
    githubButton.onmouseout = () => {
        githubButton.style.transform = "scale(1)";
        githubButton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    };

    var dropdownButton = createButton("dropdownButton", t.otherStandards, function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    var buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
    `;
    buttonContainer.appendChild(githubButton);
    buttonContainer.appendChild(dropdownButton);
    document.body.appendChild(buttonContainer);

    var dropdownContent = document.createElement("div");
    dropdownContent.id = "dropdownContent";
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

    filteredLinks.forEach(function (link) {
        dropdownContent.appendChild(createLink(link.href, link.text));

        if (link.text === "ECMA-262") {
            var cssTitle = createLink("#", t.cssRelated);
            cssTitle.style.cursor = "pointer";
            cssTitle.style.padding = "10px 15px";
            var triangle = document.createElement("span");
            triangle.style.cssText = `
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 6px solid #333;
                display: inline-block;
                margin-right: 10px;
                transition: transform 0.3s ease;
            `;
            cssTitle.prepend(triangle);
            var cssContent = document.createElement("div");
            cssContent.style.display = "none";
            cssContent.style.padding = "0 15px";

            filteredCssLinks.forEach(function (link) {
                cssContent.appendChild(createLink(link.href, link.text));
            });

            cssTitle.onclick = function (event) {
                event.preventDefault();
                var isCollapsed = cssContent.style.display === "none";
                cssContent.style.display = isCollapsed ? "block" : "none";
                triangle.style.transform = isCollapsed ? "rotate(90deg)" : "rotate(0deg)";
            };

            dropdownContent.appendChild(cssTitle);
            dropdownContent.appendChild(cssContent);
        }
    });

    window.onclick = function (event) {
        if (!event.target.matches('#dropdownButton') && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    };

    var style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 600px) {
            #dropdownContent {
                width: 100%;
                left: 0;
                right: 0; 
            }
        }
        table.def th {
            min-width: 5em;
        }
    `;
    document.head.appendChild(style);

    function extractRelevantLinks(data) {
        return data.filter(link => link.src.includes('w3.org') || link.src.includes('wicg.github.io'));
    }

    const relevantLinksFromLinks = extractRelevantLinks(links);
    const relevantLinksFromCssLinks = extractRelevantLinks(cssLinks);

    const allRelevantLinks = [...relevantLinksFromLinks, ...relevantLinksFromCssLinks];

    function isCurrentUrlMatchingLink(href) {
        try {
            const currentHref = window.location.href.replace(/^(https?:\/\/)(jp\.|ko\.)?/, '$1');
            const normalizedHref = href.replace(/^(https?:\/\/)(jp\.|ko\.)?/, '$1');
            return currentHref.includes(normalizedHref);
        } catch (error) {
            console.error('Error accessing window.location.href:', error);
            return false;
        }
    }

    function checkMatchingLinks(linksArray) {
        return linksArray.filter(link => isCurrentUrlMatchingLink(link.href));
    }

    let matchingLinks = [];
    try {
        matchingLinks = checkMatchingLinks(allRelevantLinks);
    } catch (error) {
        console.error('Error while checking matching links:', error);
    }

    if (matchingLinks.length > 0) {
        (function addDisclaimer() {
            var disclaimer = document.createElement('div');
            disclaimer.className = 'note';

            disclaimer.innerHTML = `
<span class="marker">${t.marker}</span>
<p>${t.disclaimer.replace('{src}', matchingLinks[0].src).replace('{text}', matchingLinks[0].text)}</p>
`;
            document.body.insertAdjacentElement('afterbegin', disclaimer);
        })();
    }
});

(function () {
    var gaID;
    var hostname = window.location.hostname;

    if (/htmlspecs\.com$/.test(hostname)) {
        gaID = 'G-Z0H3G08TCK';
    } else if (hostname === 'ecma262.com') {
        gaID = 'G-DEEXSBMHX9';
    } else {
        return;
    }

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaID;
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaID);
    };
})();
