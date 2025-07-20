const BUTTON_COLOR = "#6c757d";
const BUTTON_HOVER_COLOR = "#5a6268";

function loadDataScript(callback) {
    var script = document.createElement('script');
    script.src = 'https://htmlspecs.com/data.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function createLink(href, text) {
    var a = document.createElement("a");
    a.href = href;
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
    var githubButton = createLink(
        window.location.hostname === 'ecma262.com' ?
            "https://github.com/JinDX/ecma262.com" :
            "https://github.com/JinDX/htmlspecs.com",
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
    githubButton.title = "查看 GitHub 源码，加星 ⭐";
    githubButton.onmouseover = () => {
        githubButton.style.transform = "scale(1.2)";
        githubButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    };
    githubButton.onmouseout = () => {
        githubButton.style.transform = "scale(1)";
        githubButton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    };

    var dropdownButton = createButton("dropdownButton", "其他标准", function () {
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

    links.forEach(function (link) {
        dropdownContent.appendChild(createLink(link.href, link.text));

        if (link.text === "ECMA-262") {
            var cssTitle = createLink("#", "CSS 相关");
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

            cssLinks.forEach(function (link) {
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



    // 这是一份志愿者翻译，译文中可能包含错误。本译文仅供参考，应以 W3C 网站上的原始英文版本.......
    function extractRelevantLinks(data) {
        return data.filter(link => link.src.includes('w3.org') || link.src.includes('wicg.github.io'));
    }

    const relevantLinksFromLinks = extractRelevantLinks(links);
    const relevantLinksFromCssLinks = extractRelevantLinks(cssLinks);

    const allRelevantLinks = [...relevantLinksFromLinks, ...relevantLinksFromCssLinks];

    function isCurrentUrlMatchingLink(href) {
        try {
            return window.location.href.includes(href);
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
            <span class="marker">【注意】</span>
            <p>这是一份志愿者翻译，译文中可能包含错误。本译文仅供参考，应以 W3C 网站上的原始英文版本（<a href='${matchingLinks[0].src}'>${matchingLinks[0].text}</a>）为准。</p>
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
