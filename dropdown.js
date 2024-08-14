
var links = [
    { text: "HTML", href: "https://htmlspecs.com/" },
    { text: "ECMA-262", href: "https://ecma262.com/" },
    { text: "Fetch", href: "https://htmlspecs.com/fetch" },
    { text: "console", href: "https://htmlspecs.com/console" },
    { text: "dom", href: "https://htmlspecs.com/dom" },
    { text: "notifications", href: "https://htmlspecs.com/notifications" },
    { text: "fullscreen", href: "https://htmlspecs.com/fullscreen" },
    { text: "websockets", href: "https://htmlspecs.com/websockets" },
    { text: "storage", href: "https://htmlspecs.com/storage" },
    { text: "CSS Snapshot 2023", href: "https://htmlspecs.com/css/css-2023" },
    { text: "CSS 2.2 Specification", href: "https://htmlspecs.com/css/css22/" },
    { text: "CSS Color Level 3", href: "https://htmlspecs.com/css/css-color-3" },
    { text: "CSS Namespaces", href: "https://htmlspecs.com/css/css-namespaces-3" },
    { text: "Selectors Level 3", href: "https://htmlspecs.com/css/selectors-3" },
    { text: "Media Queries Level 3", href: "https://htmlspecs.com/css/mediaqueries-3" },
    { text: "CSS Style Attributes", href: "https://htmlspecs.com/css/css-style-attr" },
    { text: "CSS Cascading and Inheritance Level 3", href: "https://htmlspecs.com/css/css-cascade-3" },
    { text: "CSS Fonts Level 3", href: "https://htmlspecs.com/css/css-fonts-3" },
    { text: "CSS Writing Modes Level 3", href: "https://htmlspecs.com/css/css-writing-modes-3" },
    { text: "CSS Basic User Interface Level 3", href: "https://htmlspecs.com/css/css-ui-3" },
    { text: "CSS Box Model Level 3 ", href: "https://htmlspecs.com/css/css-box-3" },
    { text: "CSS Containment Module Level 2 ", href: "https://htmlspecs.com/css/css-contain-2" },
    { text: "Payment Request API ", href: "https://htmlspecs.com/payment-request" },
    { text: "Intersection Observer", href: "https://htmlspecs.com/intersection-observer" },
    { text: "Web Authentication Level 2", href: "https://htmlspecs.com/webauthn-2" },
    { text: "Pointer Events", href: "https://htmlspecs.com/pointerevents" },
    { text: "Web Audio API", href: "https://htmlspecs.com/webaudio" },
    { text: "WebRTC", href: "https://htmlspecs.com/webrtc" },
    { text: "Indexed Database API 3.0", href: " https://htmlspecs.com/IndexedDB" },
    { text: "Service Workers ", href: "https://htmlspecs.com/service-workers" },
    { text: "Web Animations", href: " https://htmlspecs.com/web-animations-1" }
];


var dropdownButton = document.createElement("button");
dropdownButton.id = "dropdownButton";
dropdownButton.textContent = "其他标准";
dropdownButton.style.position = "absolute";
dropdownButton.style.zIndex = "3";
dropdownButton.style.top = "20px";
dropdownButton.style.right = "20px";
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
document.body.appendChild(dropdownButton);



var dropdownContent = document.createElement("div");
dropdownContent.id = "dropdownContent";
dropdownContent.style.display = "none";
dropdownContent.style.position = "absolute";
dropdownContent.style.top = "60px";
dropdownContent.style.right = "20px";
dropdownContent.style.width = "300px";
dropdownContent.style.backgroundColor = "white";
dropdownContent.style.border = "1px solid #ddd";
dropdownContent.style.borderRadius = "4px";
dropdownContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
dropdownContent.style.zIndex = "1000";
dropdownContent.style.overflowY = "auto";
dropdownContent.style.maxHeight = "800px";
document.body.appendChild(dropdownContent);

links.forEach(function (link) {
    var container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.padding = "10px 15px";
    container.style.borderBottom = "1px solid #eee";

    var a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.title = link.text;
    a.style.color = "#333";
    a.style.textDecoration = "none";
    a.style.flexGrow = "1";
    a.style.overflow = "hidden";
    a.style.whiteSpace = "nowrap";
    a.style.textOverflow = "ellipsis";
    a.style.transition = "color 0.3s";
    a.onmouseover = function () {
        a.style.color = "#007BFF";
    };
    a.onmouseout = function () {
        a.style.color = "#333";
    };

    container.appendChild(a);
    dropdownContent.appendChild(container);
});

dropdownButton.onclick = function () {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
};

window.onclick = function (event) {
    if (!event.target.matches('#dropdownButton')) {
        dropdownContent.style.display = "none";
    }
};
