const BUTTON_COLOR = "#6c757d";
const BUTTON_HOVER_COLOR = "#5a6268";

const LANGUAGES = {
    cn: {
        otherStandards: "其他标准",
        searchPlaceholder: "搜索规范标题…",
        noResults: "未找到匹配的规范",
        expandAll: "全部展开",
        collapseAll: "全部折叠",
        githubTitle: "查看 GitHub 源码，加星 ⭐",
        cssRelated: "CSS 相关",
        httpRelated: "HTTP",
        marker: "【注意】",
        disclaimer: "这是一份志愿者翻译，译文中可能包含错误。本译文仅供参考，应以 W3C 网站上的原始英文版本（<a href='{src}'>{text}</a>）为准。"
    },
    jp: {
        otherStandards: "他の仕様",
        searchPlaceholder: "仕様タイトルを検索…",
        noResults: "一致する仕様がありません",
        expandAll: "すべて展開",
        collapseAll: "すべて折りたたむ",
        githubTitle: "GitHub ソースコードを見る、スター ⭐",
        cssRelated: "CSS 関連",
        httpRelated: "HTTP",
        marker: "【ご注意】",
        disclaimer: "これはボランティアによる翻訳です。翻訳には誤りが含まれている可能性があります。参考用にご利用ください。原本は W3C サイトの英語版（<a href='{src}'>{text}</a>）をご参照ください。"
    },
    ko: {
        otherStandards: "다른 표준",
        searchPlaceholder: "표준 제목 검색…",
        noResults: "일치하는 표준이 없습니다",
        expandAll: "모두 펼치기",
        collapseAll: "모두 접기",
        githubTitle: "GitHub 소스 코드 보기, 별 달아주세요 ⭐",
        cssRelated: "CSS 관련",
        httpRelated: "HTTP",
        marker: "【주의】",
        disclaimer: "이 번역은 자원봉사자의 번역본입니다. 번역에 오류가 있을 수 있습니다. 참고용으로만 사용하시고, 원본은 W3C 웹사이트의 영어 버전(<a href='{src}'>{text}</a>)을 참고하세요."
    }
};

function getCurrentLang() {
    const hostname = window.location.hostname;
    if (/^jp\.htmlspecs\.com$/.test(hostname)) return "jp";
    if (/^ko\.htmlspecs\.com$/.test(hostname)) return "ko";
    if (window.location.pathname.startsWith('/j/')) return "jp";
    if (window.location.pathname.startsWith('/k/')) return "ko";
    return "cn";
}

function rewriteHref(href) {
    const lang = getCurrentLang();
    if (lang === "jp") {
        return href.replace("htmlspecs.com", "jp.htmlspecs.com")
            .replace("ecma262.com/", "ecma262.com/j/");
    }
    if (lang === "ko") {
        return href.replace("htmlspecs.com", "ko.htmlspecs.com")
            .replace("ecma262.com/", "ecma262.com/k/");
    }
    if (lang === "cn") {
        return href.replace("ecma262.com/", "ecma262.com/c/");
    }
    return href;
}

function loadDataScript(callback) {
    var script = document.createElement('script');
    script.src = 'https://htmlspecs.com/data.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function decodeHTML(html) {
    var textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
}

function createLink(href, text, state) {
    var a = document.createElement("a");
    var decodedText = decodeHTML(text || "");

    a.href = rewriteHref(href);
    const stateLabel = state && stateMap[state] ? stateMap[state][0] : '';
    a.title = stateLabel ? `${decodedText} (${stateLabel})` : decodedText;
    const displayText = state === "Guide" ? "How to Read" : decodedText;
    a.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 15px;
        color: #333;
        text-decoration: none;
        transition: color 0.3s;
        width: 100%;
        box-sizing: border-box;
    `;
    var titleSpan = document.createElement('span');
    titleSpan.textContent = displayText;
    titleSpan.style.cssText = `
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `;
    if (state === "Guide") {
        titleSpan.style.flex = "0 0 auto";
        titleSpan.style.whiteSpace = "nowrap";
        titleSpan.style.overflow = "visible";
        titleSpan.style.textOverflow = "unset";
    }
    a.appendChild(titleSpan);
    if (state && stateMap[state] && state !== "Guide") {
        const [label, badgeUrl] = stateMap[state];
        const img = document.createElement('img');
        img.src = badgeUrl;
        img.alt = label;
        img.loading = 'lazy';
        img.style.cssText = 'height:20px; flex-shrink:0;';
        a.appendChild(img);
    }
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

function filterGroupsByLanguage(groups, lang) {
    const languageCode = lang === "jp" ? "j" : lang === "ko" ? "k" : null;

    return groups
        .map(group => ({
            names: group.names,
            items: languageCode
                ? group.items.filter(link =>
                    !link.lang || link.lang.includes(languageCode)
                )
                : group.items
        }))
        .filter(group => group.items.length > 0);
}

function getGroupName(group, lang) {
    const languageIndex = lang === "ko" ? 1 : lang === "jp" ? 2 : 0;
    return group.names[languageIndex] || group.names[0] || "";
}

function appendLinks(container, items) {
    let lastLinkWrapper = null;

    items.forEach(function (link) {
        const linkElement = createLink(link.href, link.text, link.state);

        if (link.state === "Guide" && lastLinkWrapper) {
            const previousLink = lastLinkWrapper.querySelector("a");
            if (previousLink) {
                previousLink.style.width = "auto";
                previousLink.style.flex = "1 1 calc(100% - 130px)";
                previousLink.style.minWidth = "0";
            }

            lastLinkWrapper.style.display = "flex";
            lastLinkWrapper.style.gap = "10px";
            lastLinkWrapper.style.flexWrap = "nowrap";
            linkElement.style.width = "auto";
            linkElement.style.flex = "0 0 120px";
            linkElement.style.minWidth = "0";
            linkElement.style.justifyContent = "center";
            lastLinkWrapper.appendChild(linkElement);
            return;
        }

        const itemWrapper = document.createElement("div");
        itemWrapper.className = "standards-link-item";
        itemWrapper.appendChild(linkElement);
        container.appendChild(itemWrapper);
        lastLinkWrapper = itemWrapper;
    });
}

function appendCategory(container, group, lang, level = 1) {
    const section = document.createElement("section");
    section.className = `standards-category standards-category-level-${level}`;

    const categoryButton = document.createElement("button");
    categoryButton.type = "button";
    categoryButton.className = "standards-category-button";
    categoryButton.setAttribute("aria-expanded", "true");

    const triangle = document.createElement("span");
    triangle.className = "standards-category-triangle";
    triangle.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.textContent = getGroupName(group, lang);

    const count = document.createElement("span");
    count.className = "standards-category-count";
    count.textContent = group.items.length;

    categoryButton.appendChild(triangle);
    categoryButton.appendChild(title);
    categoryButton.appendChild(count);

    const categoryContent = document.createElement("div");
    categoryContent.className = "standards-category-content";
    categoryContent.hidden = false;
    appendLinks(categoryContent, group.items);

    categoryButton.onclick = function () {
        const willOpen = categoryContent.hidden;
        categoryContent.hidden = !willOpen;
        categoryButton.setAttribute("aria-expanded", String(willOpen));
    };

    section.appendChild(categoryButton);
    section.appendChild(categoryContent);
    container.appendChild(section);
}

function appendParentCategory(container, groups, lang) {
    if (!groups.length) return;

    const totalItems = groups.reduce(
        (total, group) => total + group.items.length,
        0
    );
    const parent = {
        names: groups[0].names,
        items: []
    };
    const section = document.createElement("section");
    section.className = "standards-category standards-parent-category";

    const categoryButton = document.createElement("button");
    categoryButton.type = "button";
    categoryButton.className = "standards-category-button";
    categoryButton.setAttribute("aria-expanded", "true");

    const triangle = document.createElement("span");
    triangle.className = "standards-category-triangle";
    triangle.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.textContent = getGroupName(parent, lang);

    const count = document.createElement("span");
    count.className = "standards-category-count";
    count.textContent = totalItems;

    categoryButton.appendChild(triangle);
    categoryButton.appendChild(title);
    categoryButton.appendChild(count);

    const categoryContent = document.createElement("div");
    categoryContent.className =
        "standards-category-content standards-parent-content";
    categoryContent.hidden = false;

    appendLinks(categoryContent, groups[0].items);
    groups.slice(1).forEach(function (group) {
        appendCategory(categoryContent, group, lang, 2);
    });

    categoryButton.onclick = function () {
        const willOpen = categoryContent.hidden;
        categoryContent.hidden = !willOpen;
        categoryButton.setAttribute("aria-expanded", String(willOpen));
    };

    section.appendChild(categoryButton);
    section.appendChild(categoryContent);
    container.appendChild(section);
}

function setAllCategories(container, expanded) {
    container
        .querySelectorAll(".standards-category-button")
        .forEach(button => {
            button.setAttribute("aria-expanded", String(expanded));
        });

    container
        .querySelectorAll(".standards-category-content")
        .forEach(content => {
            content.hidden = !expanded;
        });
}

function filterCategories(container, query, noResultsElement) {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const linkItems = container.querySelectorAll(".standards-link-item");

    if (!normalizedQuery) {
        linkItems.forEach(item => {
            item.hidden = false;
        });
        container.querySelectorAll(".standards-category").forEach(section => {
            section.hidden = false;
        });
        noResultsElement.hidden = true;
        setAllCategories(container, true);
        return;
    }

    linkItems.forEach(item => {
        const searchableText = Array.from(item.querySelectorAll("a"))
            .map(link => link.textContent)
            .join(" ")
            .toLocaleLowerCase();
        item.hidden = !searchableText.includes(normalizedQuery);
    });

    const sections = Array.from(
        container.querySelectorAll(".standards-category")
    ).reverse();

    sections.forEach(section => {
        const content = Array.from(section.children).find(child =>
            child.classList.contains("standards-category-content")
        );
        if (!content) return;

        const hasVisibleContent = Array.from(content.children).some(child =>
            (
                child.classList.contains("standards-link-item") ||
                child.classList.contains("standards-category")
            ) &&
            !child.hidden
        );

        section.hidden = !hasVisibleContent;
        if (hasVisibleContent) {
            content.hidden = false;
            const button = section.querySelector(
                ":scope > .standards-category-button"
            );
            button?.setAttribute("aria-expanded", "true");
        }
    });

    noResultsElement.hidden = !Array.from(linkItems).every(item => item.hidden);
}

loadDataScript(function () {
    const lang = getCurrentLang();
    const t = LANGUAGES[lang];

    const visibleMainGroups = filterGroupsByLanguage(linkGroups, lang);
    const visibleCssGroups = filterGroupsByLanguage(cssLinkGroups, lang);
    const visibleHttpGroups = filterGroupsByLanguage(httpLinkGroups, lang);

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
        z-index: 9999;
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

    const categoryControls = document.createElement("div");
    categoryControls.className = "standards-category-controls";

    const searchWrapper = document.createElement("label");
    searchWrapper.className = "standards-search";

    const searchIcon = document.createElement("span");
    searchIcon.setAttribute("aria-hidden", "true");
    searchIcon.innerHTML = `
        <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6"/>
            <path d="m16 16 4 4"/>
        </svg>
    `;

    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.placeholder = t.searchPlaceholder;
    searchInput.setAttribute("aria-label", t.searchPlaceholder);

    searchWrapper.appendChild(searchIcon);
    searchWrapper.appendChild(searchInput);

    const noResults = document.createElement("p");
    noResults.className = "standards-no-results";
    noResults.textContent = t.noResults;
    noResults.hidden = true;

    const expandAllButton = document.createElement("button");
    expandAllButton.type = "button";
    expandAllButton.className = "standards-control-button";
    expandAllButton.setAttribute("aria-label", t.expandAll);
    expandAllButton.title = t.expandAll;
    expandAllButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 10l5-5 5 5M7 14l5 5 5-5"/>
        </svg>
    `;
    expandAllButton.onclick = function () {
        setAllCategories(dropdownContent, true);
    };

    const collapseAllButton = document.createElement("button");
    collapseAllButton.type = "button";
    collapseAllButton.className = "standards-control-button";
    collapseAllButton.setAttribute("aria-label", t.collapseAll);
    collapseAllButton.title = t.collapseAll;
    collapseAllButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5l5 5 5-5M7 19l5-5 5 5"/>
        </svg>
    `;
    collapseAllButton.onclick = function () {
        setAllCategories(dropdownContent, false);
    };

    categoryControls.appendChild(searchWrapper);
    categoryControls.appendChild(expandAllButton);
    categoryControls.appendChild(collapseAllButton);
    dropdownContent.appendChild(categoryControls);
    dropdownContent.appendChild(noResults);

    if (visibleMainGroups.length > 0) {
        appendCategory(dropdownContent, visibleMainGroups[0], lang);
    }
    appendParentCategory(
        dropdownContent,
        visibleCssGroups,
        lang
    );
    appendParentCategory(
        dropdownContent,
        visibleHttpGroups,
        lang
    );
    visibleMainGroups.slice(1).forEach(function (group) {
        appendCategory(dropdownContent, group, lang);
    });

    searchInput.oninput = function () {
        filterCategories(dropdownContent, searchInput.value, noResults);
    };

    window.onclick = function (event) {
        if (!event.target.matches('#dropdownButton') && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    };

    var style = document.createElement('style');
    style.innerHTML = `
        .standards-category {
            border-bottom: 1px solid #eee;
            margin-bottom: 0;
        }
        .standards-category-controls {
            position: sticky;
            top: 0;
            display: flex;
            align-items: center;
            gap: 4px;
            margin: 0;
            padding: 8px 10px;
            border-bottom: 1px solid #ddd;
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
            backdrop-filter: blur(6px);
            z-index: 3;
        }
        .standards-search {
            display: flex;
            align-items: center;
            flex: 1 1 auto;
            min-width: 0;
            height: 34px;
            padding: 0 10px;
            border: 1px solid #c8cdd2;
            border-radius: 999px;
            background: white;
        }
        .standards-search:focus-within {
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.16);
        }
        .standards-search span {
            display: grid;
            flex: 0 0 auto;
            place-items: center;
            color: #6c757d;
        }
        .standards-search svg {
            width: 17px;
            height: 17px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
        }
        .standards-search input {
            width: 100%;
            min-width: 0;
            padding: 0 0 0 7px;
            border: 0;
            outline: 0;
            background: transparent;
            color: #333;
            font: inherit;
            font-size: 13px;
        }
        .standards-no-results {
            margin: 30px 15px;
            color: #6c757d;
            text-align: center;
        }
        .standards-control-button {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background: transparent !important;
            box-shadow: none;
            color: #333;
            cursor: pointer;
        }
        .standards-control-button:hover {
            background: transparent !important;
            color: #007bff;
        }
        .standards-control-button:focus-visible {
            outline: 2px solid #007bff;
            outline-offset: 1px;
        }
        .standards-control-button svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .standards-category-button {
            display: grid;
            grid-template-columns: 12px minmax(0, 1fr) auto;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding: 12px 15px;
            border: 0;
            background: #f8f9fa;
            color: #333;
            font: inherit;
            font-weight: 600;
            text-align: left;
            cursor: pointer;
        }
        .standards-category-button:hover {
            background: #eef3f7;
        }
        .standards-category-triangle {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 6px solid currentColor;
            transition: transform 0.2s ease;
        }
        .standards-category-button[aria-expanded="true"]
            .standards-category-triangle {
            transform: rotate(90deg);
        }
        .standards-category-count {
            min-width: 1.5em;
            padding: 1px 6px;
            border-radius: 999px;
            background: #e2e6ea;
            color: #555;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
        }
        .standards-category-content {
            padding: 0 10px 6px 22px;
        }
        .standards-parent-content {
            padding: 0 0 6px 12px;
        }
        .standards-category-level-2 {
            margin-left: 10px;
            border-left: 2px solid #e2e6ea;
        }
        .standards-category-level-2 > .standards-category-button {
            background: #fff;
            font-weight: 500;
        }
        @media (max-width: 600px) {
            #dropdownContent { width: 100%; left: 0; right: 0; }
        }
        table.def th { min-width: 5em; }
    `;
    document.head.appendChild(style);

    function extractRelevantLinks(data) {
        return data.filter(link => link.src.includes('w3.org/TR') || link.src.includes('wicg.github.io'));
    }

    const relevantLinksFromLinks = extractRelevantLinks(links);
    const relevantLinksFromCssLinks = extractRelevantLinks(cssLinks);

    const allRelevantLinks = [...relevantLinksFromLinks, ...relevantLinksFromCssLinks];

    function isCurrentUrlMatchingLink(href) {
        const normalize = (urlString) => {
            const url = new URL(urlString);
            url.hostname = url.hostname.replace(/^(jp\.|ko\.)/, '');
            const pathname = url.pathname.replace(/\/$/, '') || '/';
            return {
                protocol: url.protocol,
                hostname: url.hostname,
                pathname,
            };
        };

        try {
            const current = normalize(window.location.href);
            const target = normalize(href);
            return current.protocol === target.protocol &&
                current.hostname === target.hostname &&
                current.pathname === target.pathname;
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
