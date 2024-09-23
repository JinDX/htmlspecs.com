function loadDataScript(callback) {
    var script = document.createElement('script');
    script.src = 'data.js';
    script.onload = function () {
        callback();
    };
    document.head.appendChild(script);
}
loadDataScript(function () {
    var githubButton = document.createElement("a");
    githubButton.href = "https://github.com/JinDX/htmlspecs.com";
    if (window.location.hostname === 'ecma262.com') {
        githubButton.href = "https://github.com/JinDX/ecma262.com";
    }
    githubButton.target = "_blank";
    githubButton.style.display = "inline-block";
    githubButton.style.width = "40px";
    githubButton.style.height = "40px";
    githubButton.style.backgroundImage = "url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')";
    githubButton.style.backgroundSize = "cover";
    githubButton.style.borderRadius = "50%";
    githubButton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    githubButton.style.cursor = "pointer";
    githubButton.style.marginRight = "10px";

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
    dropdownButton.style.display = "inline-block";
    dropdownButton.style.zIndex = "3";
    dropdownButton.style.marginLeft = "10px";
    dropdownButton.style.backgroundColor = "#6c757d";
    dropdownButton.style.color = "white";
    dropdownButton.style.padding = "10px 15px";
    dropdownButton.style.fontSize = "14px";
    dropdownButton.style.border = "none";
    dropdownButton.style.cursor = "pointer";
    dropdownButton.style.borderRadius = "4px";
    dropdownButton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    dropdownButton.style.transition = "background-color 0.3s";
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
    dropdownContent.style.display = "none";
    dropdownContent.style.position = "absolute";
    dropdownContent.style.top = "60px";
    dropdownContent.style.right = "20px";
    dropdownContent.style.width = "405px";
    dropdownContent.style.height = "80%";
    dropdownContent.style.maxHeight = "80vh";
    dropdownContent.style.backgroundColor = "white";
    dropdownContent.style.border = "1px solid #ddd";
    dropdownContent.style.borderRadius = "4px";
    dropdownContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    dropdownContent.style.zIndex = "1000";
    dropdownContent.style.overflowY = "auto";
    document.body.appendChild(dropdownContent);

    links.forEach(function (link) {
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        a.title = link.text;
        a.style.display = "block";
        a.style.padding = "10px 15px";
        a.style.color = "#333";
        a.style.textDecoration = "none";
        a.style.transition = "color 0.3s";
        a.onmouseover = function () {
            a.style.color = "#007BFF";
        };
        a.onmouseout = function () {
            a.style.color = "#333";
        };
        dropdownContent.appendChild(a);

        if (link.text === "ECMA-262") {
            var cssTitle = document.createElement("div");
            cssTitle.textContent = "CSS相关";
            cssTitle.style.padding = "10px 15px";
            cssTitle.style.cursor = "pointer";
            cssTitle.style.display = "flex";
            cssTitle.style.alignItems = "center";
            cssTitle.style.textDecoration = "none";
            cssTitle.style.userSelect = "none";
            cssTitle.style.borderBottom = "none";

            var triangle = document.createElement("span");
            triangle.style.borderTop = "6px solid transparent";
            triangle.style.borderBottom = "6px solid transparent";
            triangle.style.borderLeft = "6px solid #333";
            triangle.style.display = "inline-block";
            triangle.style.marginRight = "10px";
            triangle.style.transition = "transform 0.3s ease";
            triangle.style.transform = "rotate(0deg)";

            cssTitle.prepend(triangle);

            var cssContent = document.createElement("div");
            cssContent.style.display = "none";
            cssContent.style.padding = "0 15px";

            cssLinks.forEach(function (link) {
                var a = document.createElement("a");
                a.href = link.href;
                a.textContent = link.text;
                a.title = link.text;
                a.style.display = "block";
                a.style.padding = "8px 20px";
                a.style.color = "#333";
                a.style.textDecoration = "none";
                a.style.transition = "color 0.3s";
                a.onmouseover = function () {
                    a.style.color = "#007BFF";
                };
                a.onmouseout = function () {
                    a.style.color = "#333";
                };
                cssContent.appendChild(a);
            });

            cssTitle.onclick = function () {
                var isCollapsed = cssContent.style.display === "none";
                cssContent.style.display = isCollapsed ? "block" : "none";
                triangle.style.transform = isCollapsed ? "rotate(90deg)" : "rotate(0deg)";
            };

            cssTitle.onmouseover = function () {
                cssTitle.style.backgroundImage = "linear-gradient(135deg, #ff0000, #ff6600, #ffcc00, #33cc33, #00ffff, #0066ff, #cc00ff, #ff3399)";
                cssTitle.style.backgroundSize = "300% 300%";
                cssTitle.style.animation = "gradient 5s ease infinite";
                cssTitle.style.color = "transparent";
                cssTitle.style.backgroundClip = "text";
                cssTitle.style.webkitBackgroundClip = "text";
            };
            cssTitle.onmouseout = function () {
                cssTitle.style.backgroundImage = "none";
                cssTitle.style.color = "black";
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


