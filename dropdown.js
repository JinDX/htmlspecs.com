function loadDataScript(callback) {
    var script = document.createElement('script');
    script.src = 'https://htmlspecs.com/data.js';
    script.onload = function () {
        callback();
    };
    document.head.appendChild(script);
}

function createLink(href, text) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.title = text;
    a.style.display = "block";
    a.style.padding = "10px 15px";
    a.style.color = "#333";
    a.style.textDecoration = "none";
    a.style.transition = "color 0.3s";
    a.style.overflow = "hidden";
    a.style.whiteSpace = "nowrap";
    a.style.textOverflow = "ellipsis";
    a.style.width = "100%";
    a.style.boxSizing = "border-box";
    a.onmouseover = function () {
        a.style.color = "#007BFF";
    };
    a.onmouseout = function () {
        a.style.color = "#333";
    };
    return a;
}

loadDataScript(function () {
    var githubButton = document.createElement("a");
    githubButton.href = window.location.hostname === 'ecma262.com' ? "https://github.com/JinDX/ecma262.com" : "https://github.com/JinDX/htmlspecs.com";
    githubButton.target = "_blank";
    githubButton.style.cssText = `
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
        background-size: cover;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-right: 10px;
    `;
    githubButton.title = "查看 GitHub 源码，加星 ⭐";

    githubButton.onmouseover = function () {
        githubButton.style.transform = "scale(1.2)";
        githubButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    };

    githubButton.onmouseout = function () {
        githubButton.style.transform = "scale(1)";
        githubButton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    };

    var dropdownButton = document.createElement("button");
    dropdownButton.id = "dropdownButton";
    dropdownButton.textContent = "其他标准";
    dropdownButton.style.cssText = `
        display: inline-block;
        z-index: 3;
        margin-left: 10px;
        background-color: #6c757d;
        color: white;
        padding: 10px 15px;
        font-size: 14px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s;
    `;
    dropdownButton.onmouseover = function () {
        dropdownButton.style.backgroundColor = "#5a6268";
    };
    dropdownButton.onmouseout = function () {
        dropdownButton.style.backgroundColor = "#6c757d";
    };

    var buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.top = "20px";
    buttonContainer.style.right = "20px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.alignItems = "center";

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
            var cssTitle = createLink("#", "CSS相关");
            cssTitle.style.cursor = "pointer";
            cssTitle.style.display = "flex";
            cssTitle.style.alignItems = "center";
            cssTitle.style.padding = "10px 15px";
            cssTitle.style.borderBottom = "none";

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

            cssTitle.onclick = function () {
                var isCollapsed = cssContent.style.display === "none";
                cssContent.style.display = isCollapsed ? "block" : "none";
                triangle.style.transform = isCollapsed ? "rotate(90deg)" : "rotate(0deg)";
            };

            dropdownContent.appendChild(cssTitle);
            dropdownContent.appendChild(cssContent);
        }
    });

    dropdownButton.onclick = function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    };

    window.onclick = function (event) {
        if (!event.target.matches('#dropdownButton') && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    };

    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

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
});

(function () {
    var gaID;
    var hostname = window.location.hostname;

    if (hostname === 'htmlspecs.com') {
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
