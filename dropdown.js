var links = [
    // Core Specifications
    { text: "HTML", href: "https://htmlspecs.com/", src: "https://html.spec.whatwg.org/multipage/" },
    { text: "ECMA-262", href: "https://ecma262.com/", src: "https://tc39.es/ecma262/" },
    { text: "DOM", href: "https://htmlspecs.com/dom", src: "https://dom.spec.whatwg.org/" },

    // URLs and Patterns
    { text: "URL", href: "https://htmlspecs.com/url", src: "https://url.spec.whatwg.org/" },
    { text: "URL Pattern", href: "https://htmlspecs.com/urlpattern", src: "https://urlpattern.spec.whatwg.org/" },

    // Network and Communication
    { text: "Fetch", href: "https://htmlspecs.com/fetch", src: "https://fetch.spec.whatwg.org/" },
    { text: "WebSockets", href: "https://htmlspecs.com/websockets", src: "https://websockets.spec.whatwg.org/" },
    { text: "Service Workers", href: "https://htmlspecs.com/service-workers", src: "https://www.w3.org/TR/service-workers/" },
    { text: "Push API", href: "https://htmlspecs.com/push-api", src: "https://www.w3.org/TR/push-api/" },
    { text: "WebRTC", href: "https://htmlspecs.com/webrtc", src: "https://www.w3.org/TR/webrtc/" },
    { text: "Payment Request API", href: "https://htmlspecs.com/payment-request", src: "https://www.w3.org/TR/payment-request/" },

    // Storage and Data
    { text: "Indexed Database API 3.0", href: "https://htmlspecs.com/IndexedDB", src: "https://www.w3.org/TR/IndexedDB-3/" },
    { text: "Storage", href: "https://htmlspecs.com/storage", src: "https://storage.spec.whatwg.org/" },
    { text: "File API", href: "https://htmlspecs.com/FileAPI", src: "https://www.w3.org/TR/FileAPI/" },

    // Device and Hardware Access
    { text: "Pointer Events", href: "https://htmlspecs.com/pointerevents", src: "https://www.w3.org/TR/pointerevents/" },
    { text: "Fullscreen", href: "https://htmlspecs.com/fullscreen", src: "https://fullscreen.spec.whatwg.org/" },
    { text: "Notifications", href: "https://htmlspecs.com/notifications", src: "https://notifications.spec.whatwg.org/" },
    { text: "Web Share API", href: "https://htmlspecs.com/web-share", src: "https://www.w3.org/TR/web-share/" },
    { text: "Web Audio API", href: "https://htmlspecs.com/webaudio", src: "https://www.w3.org/TR/webaudio/" },
    { text: "Geolocation API", href: "https://htmlspecs.com/geolocation", src: "https://www.w3.org/TR/geolocation/" },
    { text: "Device Orientation and Motion", href: "https://htmlspecs.com/orientation-event", src: "https://www.w3.org/TR/orientation-event/" },
    { text: "Pointer Lock 2.0", href: "https://htmlspecs.com/pointerlock", src: "https://www.w3.org/TR/pointerlock-2/" },
    { text: "Clipboard API and events", href: "https://htmlspecs.com/clipboard-apis", src: "https://www.w3.org/TR/clipboard-apis/" },
    { text: "Input Events Level 1", href: "https://htmlspecs.com/input-events-1", src: "https://www.w3.org/TR/input-events-1/" },

    // Performance and Observers
    { text: "Performance Timeline", href: "https://htmlspecs.com/performance-timeline", src: "https://www.w3.org/TR/performance-timeline/" },
    { text: "Intersection Observer", href: "https://htmlspecs.com/intersection-observer", src: "https://www.w3.org/TR/intersection-observer/" },
    { text: "Resize Observer", href: "https://htmlspecs.com/resize-observer", src: "https://www.w3.org/TR/resize-observer/" },
    { text: "Navigation Timing Level 2", href: "https://htmlspecs.com/navigation-timing-2", src: "https://www.w3.org/TR/navigation-timing-2/" },
    { text: "Resource Timing", href: "https://htmlspecs.com/resource-timing", src: "https://www.w3.org/TR/resource-timing/" },
    { text: "User Timing Level 2", href: "https://htmlspecs.com/user-timing-2", src: "https://www.w3.org/TR/user-timing-2/" },

    // Security and Authentication
    { text: "Web Authentication Level 2", href: "https://htmlspecs.com/webauthn-2", src: "https://www.w3.org/TR/webauthn-2/" },

    // Media and Graphics
    { text: "Web Animations", href: "https://htmlspecs.com/web-animations-1", src: "https://www.w3.org/TR/web-animations-1/" },

    // Developer Tools
    { text: "Console", href: "https://htmlspecs.com/console", src: "https://console.spec.whatwg.org/" }
];

var cssLinks = [
    // Foundational
    { text: "CSS Snapshot 2023", href: "https://htmlspecs.com/css/css-2023", src: "https://www.w3.org/TR/css-2023/" },
    { text: "CSS 2.2 Specification", href: "https://htmlspecs.com/css/css22/", src: "https://www.w3.org/TR/CSS22/" },
    { text: "CSS Cascading and Inheritance Level 3", href: "https://htmlspecs.com/css/css-cascade-3", src: "https://www.w3.org/TR/css-cascade-3/" },
    { text: "CSS Style Attributes", href: "https://htmlspecs.com/css/css-style-attr", src: "https://www.w3.org/TR/css-style-attr/" },
    { text: "CSS Namespaces", href: "https://htmlspecs.com/css/css-namespaces-3", src: "https://www.w3.org/TR/css-namespaces-3/" },
    { text: "Selectors Level 3", href: "https://htmlspecs.com/css/selectors-3", src: "https://www.w3.org/TR/selectors-3/" },
    { text: "CSS Basic User Interface Level 3", href: "https://htmlspecs.com/css/css-ui-3", src: "https://www.w3.org/TR/css-ui-3/" },

    // Box Model and Display
    { text: "CSS Box Model Level 3", href: "https://htmlspecs.com/css/css-box-3", src: "https://www.w3.org/TR/css-box-3/" },
    { text: "CSS Box Model Level 4", href: "https://htmlspecs.com/css/css-box-4", src: "https://www.w3.org/TR/css-box-4/" },
    { text: "CSS Display Module Level 3", href: "https://htmlspecs.com/css/css-display-3", src: "https://www.w3.org/TR/css-display-3/" },
    { text: "CSS Backgrounds and Borders Level 3", href: "https://htmlspecs.com/css/css-backgrounds-3", src: "https://www.w3.org/TR/css-backgrounds-3/" },

    // Colors
    { text: "CSS Color Module Level 3", href: "https://htmlspecs.com/css/css-color-3", src: "https://www.w3.org/TR/css-color-3/" },
    { text: "CSS Color Module Level 5", href: "https://htmlspecs.com/css/css-color-5", src: "https://www.w3.org/TR/css-color-5/" },
    { text: "CSS Filter Effects Module Level 1", href: "https://htmlspecs.com/css/filter-effects-1", src: "https://www.w3.org/TR/filter-effects-1/" },
    { text: "Compositing and Blending Level 1", href: "https://htmlspecs.com/css/compositing-1", src: "https://www.w3.org/TR/compositing-1/" },

    // Fonts
    { text: "CSS Fonts Module Level 3", href: "https://htmlspecs.com/css/css-fonts-3", src: "https://www.w3.org/TR/css-fonts-3/" },
    { text: "CSS Fonts Module Level 4", href: "https://htmlspecs.com/css/css-fonts-4", src: "https://www.w3.org/TR/css-fonts-4/" },

    // Text and Typography
    { text: "CSS Text Module Level 3", href: "https://htmlspecs.com/css/css-text-3", src: "https://www.w3.org/TR/css-text-3/" },
    { text: "CSS Text Module Level 4", href: "https://htmlspecs.com/css/css-text-4", src: "https://www.w3.org/TR/css-text-4/" },

    // Media Queries
    { text: "Media Queries Level 3", href: "https://htmlspecs.com/css/mediaqueries-3", src: "https://www.w3.org/TR/mediaqueries-3/" },
    { text: "Media Queries Level 5", href: "https://htmlspecs.com/css/mediaqueries-5", src: "https://www.w3.org/TR/mediaqueries-5/" },

    // Layout
    { text: "CSS Flexible Box Layout Module Level 1", href: "https://htmlspecs.com/css/css-flexbox-1", src: "https://www.w3.org/TR/css-flexbox-1/" },
    { text: "CSS Grid Layout Module Level 1", href: "https://htmlspecs.com/css/css-grid-1", src: "https://www.w3.org/TR/css-grid-1/" },
    { text: "CSS Grid Layout Module Level 2", href: "https://htmlspecs.com/css/css-grid-2", src: "https://www.w3.org/TR/css-grid-2/" },
    { text: "CSS Multi-column Layout Module Level 1", href: "https://htmlspecs.com/css/css-multicol-1", src: "https://www.w3.org/TR/css-multicol-1/" },

    // Writing Modes
    { text: "CSS Writing Modes Level 3", href: "https://htmlspecs.com/css/css-writing-modes-3", src: "https://www.w3.org/TR/css-writing-modes-3/" },

    // Pseudo-elements
    { text: "CSS Pseudo-Elements Module Level 4", href: "https://htmlspecs.com/css/css-pseudo-4", src: "https://www.w3.org/TR/css-pseudo-4/" },

    // Images
    { text: "CSS Images Module Level 4", href: "https://htmlspecs.com/css/css-images-4", src: "https://www.w3.org/TR/css-images-4/" },

    // Transforms and Animations
    { text: "CSS Transforms Module Level 1", href: "https://htmlspecs.com/css/css-transforms-1", src: "https://www.w3.org/TR/css-transforms-1/" },
    { text: "CSS Transforms Module Level 2", href: "https://htmlspecs.com/css/css-transforms-2", src: "https://www.w3.org/TR/css-transforms-2/" },
    { text: "CSS Transitions Level 2", href: "https://htmlspecs.com/css/css-transitions-2", src: "https://www.w3.org/TR/css-transitions-2/" },
    { text: "CSS Animations Level 1", href: "https://htmlspecs.com/css/css-animations-1", src: "https://www.w3.org/TR/css-animations-1/" },
    { text: "CSS Animations Level 2", href: "https://htmlspecs.com/css/css-animations-2", src: "https://www.w3.org/TR/css-animations-2/" },
    { text: "CSS Motion Path Module Level 1", href: "https://htmlspecs.com/css/motion-1", src: "https://www.w3.org/TR/motion-1/" },
    { text: "CSS Animation Worklet API", href: "https://htmlspecs.com/css/css-animation-worklet-1", src: "https://www.w3.org/TR/css-animation-worklet-1/" },

    // Containment
    { text: "CSS Containment Module Level 2", href: "https://htmlspecs.com/css/css-contain-2", src: "https://www.w3.org/TR/css-contain-2/" },

    // Others
    { text: "CSS Overscroll Behavior", href: "https://htmlspecs.com/css/css-overscroll-1", src: "https://www.w3.org/TR/css-overscroll-1/" },
    // { text: "CSS Scroll Snap Module Level 1", href: "https://htmlspecs.com/css/css-scroll-snap-1", src: "https://www.w3.org/TR/css-scroll-snap-1/" },

    // CSS Variables and CSSOM
    { text: "CSS Custom Properties for Cascading Variables Module Level 1", href: "https://htmlspecs.com/css/css-variables-1", src: "https://www.w3.org/TR/css-variables-1/" },
    { text: "CSS Object Model (CSSOM)", href: "https://htmlspecs.com/css/cssom-1", src: "https://www.w3.org/TR/cssom-1/" },

    // CSS Houdini APIs
    // { text: "CSS Typed OM Level 1", href: "https://htmlspecs.com/css/css-typed-om-1", src: "https://www.w3.org/TR/css-typed-om-1/" },
    // { text: "CSS Paint API Level 1", href: "https://htmlspecs.com/css/css-paint-api-1", src: "https://www.w3.org/TR/css-paint-api-1/" },
    // { text: "CSS Layout API Level 1", href: "https://htmlspecs.com/css/css-layout-api-1", src: "https://www.w3.org/TR/css-layout-api-1/" },
    // { text: "CSS Properties and Values API Level 1", href: "https://htmlspecs.com/css/css-properties-values-api-1", src: "https://www.w3.org/TR/css-properties-values-api-1/" },
];


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
dropdownContent.style.width = "400px";
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