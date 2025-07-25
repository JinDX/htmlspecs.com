const links = [
    // Core Specifications
    {
        text: "HTML",
        href: "https://htmlspecs.com/",
        src: "https://html.spec.whatwg.org/multipage/",
        "last-modified": "Fri, 25 Jul 2025 09:26:38 GMT"
    },
    {
        text: "ECMA-262",
        href: "https://ecma262.com/",
        src: "https://tc39.es/ecma262/",
        "last-modified": "Thu, 24 Jul 2025 15:38:22 GMT"
    },
    {
        text: "DOM",
        href: "https://htmlspecs.com/dom",
        src: "https://dom.spec.whatwg.org/",
        "last-modified": "Wed, 23 Jul 2025 06:31:55 GMT"
    },
    {
        text: "Web IDL",
        href: "https://htmlspecs.com/webidl",
        src: "https://webidl.spec.whatwg.org/",
        "last-modified": "Wed, 23 Jul 2025 00:45:49 GMT"
    },
    {
        text: "Encoding",
        href: "https://htmlspecs.com/encoding",
        src: "https://encoding.spec.whatwg.org/",
        "last-modified": "Wed, 16 Jul 2025 12:34:28 GMT"
    },
    {
        text: "MIME Sniffing",
        href: "https://htmlspecs.com/mimesniff",
        src: "https://mimesniff.spec.whatwg.org/",
        "last-modified": "Thu, 24 Jul 2025 08:57:24 GMT"
    },

    {
        text: "Infra",
        href: "https://htmlspecs.com/infra",
        src: "https://infra.spec.whatwg.org/",
        "last-modified": "Mon, 21 Jul 2025 09:10:43 GMT"
    },
    {
        text: "Web Application Manifest",
        href: "https://htmlspecs.com/appmanifest",
        src: "https://www.w3.org/TR/2025/WD-appmanifest-20250505/",
        "last-modified": "-"
    },
    {
        text: "Compatibility",
        href: "https://htmlspecs.com/compat",
        src: "https://compat.spec.whatwg.org/",
        "last-modified": "Thu, 24 Jul 2025 20:36:27 GMT"
    },
    {
        text: "Compression",
        href: "https://htmlspecs.com/compression",
        src: "https://compression.spec.whatwg.org/",
        "last-modified": "Fri, 18 Jul 2025 06:30:54 GMT"
    },
    {
        text: "Quirks Mode",
        href: "https://htmlspecs.com/quirks",
        src: "https://quirks.spec.whatwg.org/",
        "last-modified": "Sat, 26 Jul 2025 05:24:03 GMT"
    },
    {
        text: "Test Utils",
        href: "https://htmlspecs.com/testutils",
        src: "https://testutils.spec.whatwg.org/",
        "last-modified": "Fri, 18 Jul 2025 06:29:36 GMT"
    },


    // Accessibility
    {
        text: "Web Content Accessibility Guidelines (WCAG) 2.2",
        href: "https://htmlspecs.com/WCAG22",
        src: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/",
        "last-modified": "-"
    },
    {
        text: "Accessible Rich Internet Applications (WAI-ARIA) 1.2",
        href: "https://htmlspecs.com/wai-aria",
        src: "https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/",
        "last-modified": "-"
    },
    {
        text: "Accessible Name and Description Computation 1.1",
        href: "https://htmlspecs.com/accname-1.1",
        src: "https://www.w3.org/TR/2018/REC-accname-1.1-20181218/",
        "last-modified": "-"
    },

    // URLs and Patterns
    {
        text: "URL",
        href: "https://htmlspecs.com/url",
        src: "https://url.spec.whatwg.org/",
        "last-modified": "Mon, 12 May 2025 07:56:33 GMT"
    },
    {
        text: "URL Pattern",
        href: "https://htmlspecs.com/urlpattern",
        src: "https://urlpattern.spec.whatwg.org/",
        "last-modified": "Wed, 26 Mar 2025 12:10:10 GMT"
    },

    // Network and Communication
    {
        text: "Fetch",
        href: "https://htmlspecs.com/fetch",
        src: "https://fetch.spec.whatwg.org/",
        "last-modified": "Wed, 16 Jul 2025 08:57:23 GMT"
    },
    {
        text: "Streams",
        href: "https://htmlspecs.com/streams",
        src: "https://streams.spec.whatwg.org/",
        "last-modified": "Tue, 22 Jul 2025 07:09:20 GMT"
    },
    {
        text: "XMLHttpRequest ",
        href: "https://htmlspecs.com/xhr",
        src: "https://xhr.spec.whatwg.org/",
        "last-modified": "Mon, 14 Jul 2025 18:35:39 GMT"
    },
    {
        text: "WebSockets",
        href: "https://htmlspecs.com/websockets",
        src: "https://websockets.spec.whatwg.org/",
        "last-modified": "Mon, 14 Jul 2025 12:56:37 GMT"
    },
    {
        text: "WebTransport",
        href: "https://htmlspecs.com/webtransport",
        src: "https://www.w3.org/TR/2025/WD-webtransport-20250702/",
        "last-modified": "-"
    },
    {
        text: "Service Workers",
        href: "https://htmlspecs.com/service-workers",
        src: "https://www.w3.org/TR/2025/CRD-service-workers-20250306/",
        "last-modified": "-"
    },
    {
        text: "Push API",
        href: "https://htmlspecs.com/push-api",
        src: "https://www.w3.org/TR/2024/WD-push-api-20240903/",
        "last-modified": "-"
    },
    {
        text: "WebRTC",
        href: "https://htmlspecs.com/webrtc",
        src: "https://www.w3.org/TR/2025/REC-webrtc-20250313/",
        "last-modified": "-"
    },
    {
        text: "Payment Request API",
        href: "https://htmlspecs.com/payment-request",
        src: "https://www.w3.org/TR/2025/CRD-payment-request-20250402/",
        "last-modified": "-"
    },
    {
        text: "Background Fetch",
        href: "https://htmlspecs.com/background-fetch",
        src: "https://wicg.github.io/background-fetch/",
        "last-modified": "Wed, 21 Apr 2021 08:58:39 GMT"
    },
    {
        text: "Beacon",
        href: "https://htmlspecs.com/beacon",
        src: "https://www.w3.org/TR/2022/CRD-beacon-20220803/",
        "last-modified": "-"
    },

    // Storage and Data
    {
        text: "Indexed Database API 3.0",
        href: "https://htmlspecs.com/IndexedDB",
        src: "https://www.w3.org/TR/2025/WD-IndexedDB-3-20250703/",
        "last-modified": "-"
    },
    {
        text: "Storage",
        href: "https://htmlspecs.com/storage",
        src: "https://storage.spec.whatwg.org/",
        "last-modified": "Wed, 26 Mar 2025 08:13:02 GMT"
    },
    {
        text: "File API",
        href: "https://htmlspecs.com/FileAPI",
        src: "https://www.w3.org/TR/2024/WD-FileAPI-20241204/",
        "last-modified": "-"
    },
    {
        text: "File System",
        href: "https://htmlspecs.com/fs",
        src: "https://fs.spec.whatwg.org",
        "last-modified": "Tue, 22 Jul 2025 07:16:04 GMT"
    },
    {
        text: "Cookie Store API",
        href: "https://htmlspecs.com/cookie-store",
        src: "https://wicg.github.io/cookie-store/",
        "last-modified": "Mon, 21 Jul 2025 05:23:32 GMT"
    },
    {
        text: "File and Directory Entries API",
        href: "https://htmlspecs.com/entries-api",
        src: "https://wicg.github.io/entries-api/",
        "last-modified": "Tue, 04 Feb 2025 17:11:37 GMT"
    },
    {
        text: "Web Locks API",
        href: "https://htmlspecs.com/web-locks",
        src: " https://www.w3.org/TR/2023/WD-web-locks-20230105/",
        "last-modified": "-"
    },

    // Device and Hardware Access
    {
        text: "Pointer Events",
        href: "https://htmlspecs.com/pointerevents",
        src: "https://www.w3.org/TR/2019/REC-pointerevents2-20190404/",
        "last-modified": "-"
    },
    {
        text: "Visual Viewport API",
        href: "https://htmlspecs.com/visual-viewport",
        src: "https://wicg.github.io/visual-viewport/",
        "last-modified": "Mon, 02 Jun 2025 19:27:25 GMT"
    },
    {
        text: "Screen Orientation",
        href: "https://htmlspecs.com/screen-orientation",
        src: "https://www.w3.org/TR/2023/WD-screen-orientation-20230809/",
        "last-modified": "-"
    },
    {
        text: "EyeDropper API",
        href: "https://htmlspecs.com/eyedropper-api",
        src: "https://wicg.github.io/eyedropper-api/",
        "last-modified": "Wed, 30 Mar 2022 19:00:41 GMT"
    },
    {
        text: "Fullscreen",
        href: "https://htmlspecs.com/fullscreen",
        src: "https://fullscreen.spec.whatwg.org/",
        "last-modified": "Fri, 25 Jul 2025 01:12:23 GMT"
    },
    {
        text: "Screen Capture",
        href: "https://htmlspecs.com/screen-capture",
        src: "https://www.w3.org/TR/2025/WD-screen-capture-20250717/",
        "last-modified": "-"
    },
    {
        text: "Touch Events - Level 2",
        href: "https://htmlspecs.com/touchevents",
        src: "https://w3c.github.io/touch-events/",
        "last-modified": "Sat, 06 Jul 2024 14:32:59 GMT"
    },
    {
        text: "Contact Picker API",
        href: "https://htmlspecs.com/contact-picker",
        src: "https://www.w3.org/TR/2024/WD-contact-picker-20240708/",
        "last-modified": "-"
    },
    {
        text: "Notifications API",
        href: "https://htmlspecs.com/notifications",
        src: "https://notifications.spec.whatwg.org/",
        "last-modified": "Mon, 20 Jan 2025 08:47:25 GMT"
    },
    {
        text: "Badging API",
        href: "https://htmlspecs.com/badging",
        src: "https://www.w3.org/TR/2023/WD-badging-20230503/",
        "last-modified": "-"
    },
    {
        text: "Virtual Keyboard",
        href: "https://htmlspecs.com/virtual-keyboard",
        src: "https://www.w3.org/TR/2022/WD-virtual-keyboard-20220505/",
        "last-modified": "-"
    },
    {
        text: "Web Share API",
        href: "https://htmlspecs.com/web-share",
        src: "https://www.w3.org/TR/2023/REC-web-share-20230530/",
        "last-modified": "-"
    },
    {
        text: "Web Audio API",
        href: "https://htmlspecs.com/webaudio",
        src: "https://www.w3.org/TR/2021/REC-webaudio-20210617/",
        "last-modified": "-"
    },
    {
        text: "Geolocation API",
        href: "https://htmlspecs.com/geolocation",
        src: "https://www.w3.org/TR/2025/REC-geolocation-20250711/",
        "last-modified": "-"
    },
    {
        text: "Device Orientation and Motion",
        href: "https://htmlspecs.com/orientation-event",
        src: "https://www.w3.org/TR/2025/CRD-orientation-event-20250212/",
        "last-modified": "-"
    },
    {
        text: "Pointer Lock 2.0",
        href: "https://htmlspecs.com/pointerlock",
        src: "https://www.w3.org/TR/2024/WD-pointerlock-2-20240617/",
        "last-modified": "-"
    },
    {
        text: "Clipboard API and events",
        href: "https://htmlspecs.com/clipboard-apis",
        src: "https://www.w3.org/TR/2025/WD-clipboard-apis-20250516/",
        "last-modified": "-"
    },
    {
        text: "Input Events Level 1",
        href: "https://htmlspecs.com/input-events-1",
        src: "https://www.w3.org/TR/2023/DISC-input-events-1-20230928/",
        "last-modified": "-"
    },
    {
        text: "Input Events Level 2",
        href: "https://htmlspecs.com/input-events-2",
        src: "https://www.w3.org/TR/2025/WD-input-events-2-20250716/",
        "last-modified": "-"
    },
    {
        text: "Permissions",
        href: "https://htmlspecs.com/permissions",
        src: "https://www.w3.org/TR/2025/WD-permissions-20250624/",
        "last-modified": "-"
    },
    {
        text: "WebOTP API",
        href: "https://htmlspecs.com/web-otp",
        src: "https://wicg.github.io/web-otp/",
        "last-modified": "Tue, 04 Feb 2025 17:18:17 GMT"
    },
    {
        text: "Device Posture API",
        href: "https://htmlspecs.com/device-posture",
        src: "https://www.w3.org/TR/2024/CR-device-posture-20241126/",
        "last-modified": "-"
    },
    {
        text: "Ambient Light Sensor",
        href: "https://htmlspecs.com/ambient-light",
        src: "https://www.w3.org/TR/2025/WD-ambient-light-20250212/",
        "last-modified": "-"
    },
    {
        text: "Battery Status API",
        href: "https://htmlspecs.com/battery-status",
        src: "https://www.w3.org/TR/2024/WD-battery-status-20241024/",
        "last-modified": "-"
    },

    // Performance and Observers
    {
        text: "Performance Timeline",
        href: "https://htmlspecs.com/performance-timeline",
        src: "https://www.w3.org/TR/2024/CRD-performance-timeline-20240216/",
        "last-modified": "-"
    },
    {
        text: "Intersection Observer",
        href: "https://htmlspecs.com/intersection-observer",
        src: "https://www.w3.org/TR/2023/WD-intersection-observer-20231018/",
        "last-modified": "-"
    },
    {
        text: "Resize Observer",
        href: "https://htmlspecs.com/resize-observer",
        src: "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/",
        "last-modified": "-"
    },
    {
        text: "Navigation Timing Level 2",
        href: "https://htmlspecs.com/navigation-timing-2",
        src: "https://www.w3.org/TR/2025/WD-navigation-timing-2-20250213/",
        "last-modified": "-"
    },
    {
        text: "Resource Timing",
        href: "https://htmlspecs.com/resource-timing",
        src: "https://www.w3.org/TR/2025/CRD-resource-timing-20250603/",
        "last-modified": "-"
    },
    {
        text: "User Timing Level 2",
        href: "https://htmlspecs.com/user-timing-2",
        src: "https://www.w3.org/TR/2019/REC-user-timing-2-20190226/",
        "last-modified": "-"
    },
    {
        text: "Observable",
        href: "https://htmlspecs.com/observable",
        src: "https://wicg.github.io/observable/",
        "last-modified": "Fri, 06 Jun 2025 17:10:48 GMT"
    },
    {
        text: "Long Tasks API",
        href: "https://htmlspecs.com/longtasks-1",
        src: "https://www.w3.org/TR/2024/WD-longtasks-1-20240524/",
        "last-modified": "-"
    },
    {
        text: "Reporting API",
        href: "https://htmlspecs.com/reporting-1",
        src: "https://www.w3.org/TR/2025/WD-reporting-1-20250611/",
        "last-modified": "-"
    },
    {
        text: "Server Timing",
        href: "https://htmlspecs.com/server-timing",
        src: "https://www.w3.org/TR/2023/WD-server-timing-20230411/",
        "last-modified": "-"
    },
    {
        text: "Paint Timing",
        href: "https://htmlspecs.com/event-timing",
        src: "https://www.w3.org/TR/2025/WD-event-timing-20250526/",
        "last-modified": "-"
    },
    {
        text: "Event Timing API",
        href: "https://htmlspecs.com/paint-timing",
        src: "https://www.w3.org/TR/2025/WD-paint-timing-20250517/",
        "last-modified": "-"
    },

    // Security and Authentication
    {
        text: "Web Authentication Level 2",
        href: "https://htmlspecs.com/webauthn-2",
        src: "https://www.w3.org/TR/2021/REC-webauthn-2-20210408/",
        "last-modified": "-"
    },
    {
        text: "HTML Sanitizer API",
        href: "https://htmlspecs.com/sanitizer-api",
        src: "https://wicg.github.io/sanitizer-api/",
        "last-modified": "Wed, 09 Jul 2025 08:09:29 GMT"
    },
    {
        text: "Subresource Integrity (SRI)",
        href: "https://htmlspecs.com/SRI",
        src: "https://www.w3.org/TR/2016/REC-SRI-20160623/",
        "last-modified": "-"
    },
    {
        text: "Content Security Policy Level 3",
        href: "https://htmlspecs.com/CSP3",
        src: "https://www.w3.org/TR/2025/WD-CSP3-20250711/",
        "last-modified": "-"
    },
    {
        text: "Secure Contexts",
        href: "https://htmlspecs.com/secure-contexts",
        src: "https://www.w3.org/TR/2023/CRD-secure-contexts-20231110/",
        "last-modified": "-"
    },
    {
        text: "Referrer Policy",
        href: "https://htmlspecs.com/referrer-policy",
        src: "https://www.w3.org/TR/2017/CR-referrer-policy-20170126/",
        "last-modified": "-"
    },
    {
        text: "Mixed Content",
        href: "https://htmlspecs.com/mixed-content",
        src: "https://www.w3.org/TR/2023/CRD-mixed-content-20230223/",
        "last-modified": "-"
    },
    {
        text: "Credential Management Level 1",
        href: "https://htmlspecs.com/credential-management-1",
        src: "https://www.w3.org/TR/2024/WD-credential-management-1-20240813/",
        "last-modified": "-"
    },


    // Media and Graphics
    {
        text: "WebGPU",
        href: "https://htmlspecs.com/webgpu",
        src: "https://www.w3.org/TR/2025/CRD-webgpu-20250711/",
        "last-modified": "-"
    },
    {
        text: "WebGPU Shading Language",
        href: "https://htmlspecs.com/WGSL",
        src: "https://www.w3.org/TR/2025/CRD-WGSL-20250725/",
        "last-modified": "-"
    },
    {
        text: "Web Animations",
        href: "https://htmlspecs.com/web-animations-1",
        src: "https://www.w3.org/TR/2023/WD-web-animations-1-20230605/",
        "last-modified": "-"
    },
    {
        text: "Scalable Vector Graphics (SVG) 2",
        href: "https://htmlspecs.com/SVG2/",
        src: "https://www.w3.org/TR/2018/CR-SVG2-20181004/",
        "last-modified": "-"
    },
    {
        text: "Picture-in-Picture",
        href: "https://htmlspecs.com/picture-in-picture",
        src: "https://www.w3.org/TR/2024/WD-picture-in-picture-20241216/",
        "last-modified": "-"
    },
    {
        text: "Presentation API",
        href: "https://htmlspecs.com/presentation-api",
        src: "https://www.w3.org/TR/2025/CRD-presentation-api-20250212/",
        "last-modified": "-"
    },
    {
        text: "Scroll-driven Animations",
        href: "https://htmlspecs.com/scroll-animations-1",
        src: "https://www.w3.org/TR/2023/WD-scroll-animations-1-20230606/",
        "last-modified": "-"
    },
    {
        text: "Media Capture and Streams",
        href: "https://htmlspecs.com/mediacapture-streams",
        src: "https://www.w3.org/TR/2025/CRD-mediacapture-streams-20250624/",
        "last-modified": "-"
    },

    // Developer Tools
    {
        text: "Console",
        href: "https://htmlspecs.com/console",
        src: "https://console.spec.whatwg.org/",
        "last-modified": "Mon, 14 Jul 2025 12:59:40 GMT"
    }
];

const cssLinks = [
    // Foundational
    {
        text: "CSS Snapshot 2023",
        href: "https://htmlspecs.com/css/css-2023",
        src: "https://www.w3.org/TR/2023/NOTE-css-2023-20231207/",
        "last-modified": "-"
    },
    {
        text: "CSS Snapshot 2024",
        href: "https://htmlspecs.com/css/css-2024",
        src: "https://www.w3.org/TR/2025/NOTE-css-2024-20250225/",
        "last-modified": "-"
    },
    {
        text: "CSS 2.2 Specification",
        href: "https://htmlspecs.com/css/css22/",
        src: "https://www.w3.org/TR/2016/WD-CSS22-20160412/",
        "last-modified": "-"
    },
    {
        text: "CSS Cascading and Inheritance Level 3",
        href: "https://htmlspecs.com/css/css-cascade-3",
        src: "https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/",
        "last-modified": "-"
    },
    {
        text: "CSS Cascading and Inheritance Level 4",
        href: "https://htmlspecs.com/css/css-cascade-4",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-4-20220113/",
        "last-modified": "-"
    },
    {
        text: "CSS Cascading and Inheritance Level 5",
        href: "https://htmlspecs.com/css/css-cascade-5",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-5-20220113/",
        "last-modified": "-"
    },
    {
        text: "CSS Cascading and Inheritance Level 6",
        href: "https://htmlspecs.com/css/css-cascade-6",
        src: "https://www.w3.org/TR/2024/WD-css-cascade-6-20240906/",
        "last-modified": "-"
    },
    {
        text: "CSS Style Attributes",
        href: "https://htmlspecs.com/css/css-style-attr",
        src: "https://www.w3.org/TR/2013/REC-css-style-attr-20131107/",
        "last-modified": "-"
    },
    {
        text: "CSS Namespaces",
        href: "https://htmlspecs.com/css/css-namespaces-3",
        src: "https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/",
        "last-modified": "-"
    },
    {
        text: "Selectors Level 3",
        href: "https://htmlspecs.com/css/selectors-3",
        src: "https://www.w3.org/TR/2018/REC-selectors-3-20181106/",
        "last-modified": "-"
    },
    {
        text: "Selectors Level 4",
        href: "https://htmlspecs.com/css/selectors-4",
        src: "https://www.w3.org/TR/2022/WD-selectors-4-20221111/",
        "last-modified": "-"
    },
    {
        text: "CSS Basic User Interface Module Level 3",
        href: "https://htmlspecs.com/css/css-ui-3",
        src: "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/",
        "last-modified": "-"
    },
    {
        text: "CSS Basic User Interface Module Level 4",
        href: "https://htmlspecs.com/css/css-ui-4",
        src: "https://www.w3.org/TR/2021/WD-css-ui-4-20210316/",
        "last-modified": "-"
    },
    {
        text: "CSS Syntax Module Level 3",
        href: "https://htmlspecs.com/css/css-syntax-3",
        src: "https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/",
        "last-modified": "-"
    },
    {
        text: "CSS Highlight API Level 1",
        href: "https://htmlspecs.com/css/css-highlight-api-1",
        src: "https://www.w3.org/TR/2021/WD-css-highlight-api-1-20211215/",
        "last-modified": "-"
    },
    {
        text: "CSS Values and Units Module Level 3",
        href: "https://htmlspecs.com/css/css-values-3",
        src: "https://www.w3.org/TR/2024/CRD-css-values-3-20240322/",
        "last-modified": "-"
    },

    // Box Model and Display
    {
        text: "CSS Box Model Level 3",
        href: "https://htmlspecs.com/css/css-box-3",
        src: "https://www.w3.org/TR/2024/REC-css-box-3-20240411/",
        "last-modified": "-"
    },
    {
        text: "CSS Box Sizing Module Level 3",
        href: "https://htmlspecs.com/css/css-sizing-3",
        src: "https://www.w3.org/TR/2021/WD-css-sizing-3-20211217/",
        "last-modified": "-"
    },
    {
        text: "CSS Box Model Level 4",
        href: "https://htmlspecs.com/css/css-box-4",
        src: "https://www.w3.org/TR/2024/WD-css-box-4-20240804/",
        "last-modified": "-"
    },
    {
        text: "CSS Logical Properties and Values Level 1",
        href: "https://htmlspecs.com/css/css-logical-1",
        src: "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/",
        "last-modified": "-"
    },
    {
        text: "CSS Display Module Level 3",
        href: "https://htmlspecs.com/css/css-display-3",
        src: "https://www.w3.org/TR/2023/CR-css-display-3-20230330/",
        "last-modified": "-"
    },
    {
        text: "CSS Backgrounds and Borders Level 3",
        href: "https://htmlspecs.com/css/css-backgrounds-3",
        src: "https://www.w3.org/TR/2024/CRD-css-backgrounds-3-20240311/",
        "last-modified": "-"
    },
    {
        text: "CSS Box Alignment Module Level 3",
        href: "https://htmlspecs.com/css/css-align-3",
        src: "https://www.w3.org/TR/2025/WD-css-align-3-20250311/",
        "last-modified": "-"
    },
    {
        text: "CSS Overflow Module Level 4",
        href: "https://htmlspecs.com/css/css-overflow-4",
        src: "https://www.w3.org/TR/2023/WD-css-overflow-4-20230321/",
        "last-modified": "-"
    },
    {
        text: "CSS Overflow Module Level 5",
        href: "https://htmlspecs.com/css/css-overflow-5",
        src: "https://www.w3.org/TR/2024/WD-css-overflow-5-20241217/",
        "last-modified": "-"
    },
    {
        text: "CSS Gap Decorations Module Level 1",
        href: "https://htmlspecs.com/css/css-gaps-1",
        src: "https://www.w3.org/TR/2025/WD-css-gaps-1-20250417/",
        "last-modified": "-"
    },

    // Colors
    {
        text: "CSS Color Module Level 3",
        href: "https://htmlspecs.com/css/css-color-3",
        src: "https://www.w3.org/TR/2022/REC-css-color-3-20220118/",
        "last-modified": "-"
    },
    {
        text: "CSS Color Module Level 4",
        href: "https://htmlspecs.com/css/css-color-4",
        src: "https://www.w3.org/TR/2025/CRD-css-color-4-20250424/",
        "last-modified": "-"
    },
    {
        text: "CSS Color Module Level 5",
        href: "https://htmlspecs.com/css/css-color-5",
        src: "https://www.w3.org/TR/2025/WD-css-color-5-20250318/",
        "last-modified": "-"
    },
    {
        text: "CSS Color Adjustment Module Level 1",
        href: "https://htmlspecs.com/css/css-color-adjust-1",
        src: "https://www.w3.org/TR/2022/CRD-css-color-adjust-1-20220614/",
        "last-modified": "-"
    },
    {
        text: "CSS Filter Effects Module Level 1",
        href: "https://htmlspecs.com/css/filter-effects-1",
        src: "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/",
        "last-modified": "-"
    },
    {
        text: "Compositing and Blending Level 1",
        href: "https://htmlspecs.com/css/compositing-1",
        src: "https://www.w3.org/TR/2024/CRD-compositing-1-20240321/",
        "last-modified": "-"
    },

    //Conditional Rules
    {
        text: "CSS Conditional Rules Module Level 4",
        href: "https://htmlspecs.com/css/css-conditional-4",
        src: "https://www.w3.org/TR/2022/CR-css-conditional-4-20220217/",
        "last-modified": "-"
    },

    // Fonts
    {
        text: "CSS Fonts Module Level 3",
        href: "https://htmlspecs.com/css/css-fonts-3",
        src: "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/",
        "last-modified": "-"
    },
    {
        text: "CSS Fonts Module Level 4",
        href: "https://htmlspecs.com/css/css-fonts-4",
        src: "https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/",
        "last-modified": "-"
    },
    {
        text: "CSS Font Loading Module Level 3",
        href: "https://htmlspecs.com/css/css-font-loading",
        src: "https://www.w3.org/TR/2023/WD-css-font-loading-3-20230406/",
        "last-modified": "-"
    },

    // Text and Typography
    {
        text: "CSS Text Module Level 3",
        href: "https://htmlspecs.com/css/css-text-3",
        src: "https://www.w3.org/TR/2024/CRD-css-text-3-20240930/",
        "last-modified": "-"
    },
    {
        text: "CSS Text Module Level 4",
        href: "https://htmlspecs.com/css/css-text-4",
        src: "https://www.w3.org/TR/2024/WD-css-text-4-20240529/",
        "last-modified": "-"
    },
    {
        text: "CSS Counter Styles Level 3",
        href: "https://htmlspecs.com/css/css-counter-styles-3",
        src: "https://www.w3.org/TR/2021/CR-css-counter-styles-3-20210727/",
        "last-modified": "-"
    },
    {
        text: "CSS Lists and Counters Module Level 3",
        href: "https://htmlspecs.com/css/css-lists-3",
        src: "https://www.w3.org/TR/2020/WD-css-lists-3-20201117/",
        "last-modified": "-"
    },

    // Text Decoration
    {
        text: "CSS Text Decoration Level 3",
        href: "https://htmlspecs.com/css/css-text-decor-3",
        src: "https://www.w3.org/TR/2022/CRD-css-text-decor-3-20220505/",
        "last-modified": "-"
    },

    // Media Queries
    {
        text: "Media Queries Level 3",
        href: "https://htmlspecs.com/css/mediaqueries-3",
        src: "https://www.w3.org/TR/2024/REC-mediaqueries-3-20240521/",
        "last-modified": "-"
    },
    {
        text: "Media Queries Level 4",
        href: "https://htmlspecs.com/css/mediaqueries-4",
        src: "https://www.w3.org/TR/2021/CRD-mediaqueries-4-20211225/",
        "last-modified": "-"
    },
    {
        text: "Media Queries Level 5",
        href: "https://htmlspecs.com/css/mediaqueries-5",
        src: "https://www.w3.org/TR/2021/WD-mediaqueries-5-20211218/",
        "last-modified": "-"
    },

    // Layout
    {
        text: "CSS Flexible Box Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-flexbox-1",
        src: "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/",
        "last-modified": "-"
    },
    {
        text: "CSS Grid Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-grid-1",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-1-20250326/",
        "last-modified": "-"
    },
    {
        text: "CSS Grid Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-grid-2",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-2-20250326/",
        "last-modified": "-"
    },
    {
        text: "CSS Grid Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-grid-3",
        src: "https://www.w3.org/TR/2025/WD-css-grid-3-20250207/",
        "last-modified": "-"
    },
    {
        text: "CSS Inline Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-inline-3",
        src: "https://www.w3.org/TR/2024/WD-css-inline-3-20241218/",
        "last-modified": "-"
    },
    {
        text: "CSS Multi-column Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-multicol-1",
        src: "https://www.w3.org/TR/2024/CR-css-multicol-1-20240516/",
        "last-modified": "-"
    },
    {
        text: "CSS Shapes Module Level 1",
        href: "https://htmlspecs.com/css/css-shapes-1",
        src: "https://www.w3.org/TR/2025/CRD-css-shapes-1-20250612/",
        "last-modified": "-"
    },
    {
        text: "CSS Positioned Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-position-3",
        src: "https://www.w3.org/TR/2025/WD-css-position-3-20250311/",
        "last-modified": "-"
    },

    //Navigation
    {
        text: "CSS Spatial Navigation Level 1",
        href: "https://htmlspecs.com/css/css-nav-1",
        src: "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/",
        "last-modified": "-"
    },

    // Writing Modes
    {
        text: "CSS Writing Modes Level 3",
        href: "https://htmlspecs.com/css/css-writing-modes-3",
        src: "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/",
        "last-modified": "-"
    },
    {
        text: "CSS Writing Modes Level 4",
        href: "https://htmlspecs.com/css/css-writing-modes-4",
        src: "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/",
        "last-modified": "-"
    },

    //Fragmentation
    {
        text: "CSS Fragmentation Module Level 3",
        href: "https://htmlspecs.com/css/css-break-3",
        src: "https://www.w3.org/TR/2018/CR-css-break-3-20181204/",
        "last-modified": "-"
    },


    // Pseudo-elements
    {
        text: "CSS Pseudo-Elements Module Level 4",
        href: "https://htmlspecs.com/css/css-pseudo-4",
        src: "https://www.w3.org/TR/2025/WD-css-pseudo-4-20250627/",
        "last-modified": "-"
    },

    // Images
    {
        text: "CSS Images Module Level 4",
        href: "https://htmlspecs.com/css/css-images-4",
        src: "https://www.w3.org/TR/2023/WD-css-images-4-20230217/",
        "last-modified": "-"
    },
    {
        text: "CSS Masking Module Level 1",
        href: "https://htmlspecs.com/css/css-masking-1",
        src: "https://www.w3.org/TR/2021/CRD-css-masking-1-20210805/",
        "last-modified": "-"
    },

    // Transforms and Animations
    {
        text: "CSS Easing Functions Level 1",
        href: "https://htmlspecs.com/css/css-easing-1",
        src: "https://www.w3.org/TR/2023/CRD-css-easing-1-20230213/",
        "last-modified": "-"
    },
    {
        text: "CSS Easing Functions Level 2",
        href: "https://htmlspecs.com/css/css-easing-2",
        src: "https://www.w3.org/TR/2024/WD-css-easing-2-20240829/",
        "last-modified": "-"
    },
    {
        text: "CSS Transforms Module Level 1",
        href: "https://htmlspecs.com/css/css-transforms-1",
        src: "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/",
        "last-modified": "-"
    },
    {
        text: "CSS Transforms Module Level 2",
        href: "https://htmlspecs.com/css/css-transforms-2",
        src: "https://www.w3.org/TR/2021/WD-css-transforms-2-20211109/",
        "last-modified": "-"
    },
    {
        text: "CSS Transitions Level 2",
        href: "https://htmlspecs.com/css/css-transitions-2",
        src: "https://www.w3.org/TR/2023/WD-css-transitions-2-20230905/",
        "last-modified": "-"
    },
    {
        text: "CSS Animations Level 1",
        href: "https://htmlspecs.com/css/css-animations-1",
        src: "https://www.w3.org/TR/2023/WD-css-animations-1-20230302/",
        "last-modified": "-"
    },
    {
        text: "CSS Animations Level 2",
        href: "https://htmlspecs.com/css/css-animations-2",
        src: "https://www.w3.org/TR/2023/WD-css-animations-2-20230602/",
        "last-modified": "-"
    },
    {
        text: "CSS Motion Path Module Level 1",
        href: "https://htmlspecs.com/css/motion-1",
        src: "https://www.w3.org/TR/2024/WD-motion-1-20241105/",
        "last-modified": "-"
    },
    {
        text: "CSS View Transitions Module Level 1",
        href: "https://htmlspecs.com/css/css-view-transitions-1",
        src: "https://www.w3.org/TR/2024/CRD-css-view-transitions-1-20240328/",
        "last-modified": "-"
    },

    {
        text: "CSS View Transitions Module Level 2",
        href: "https://htmlspecs.com/css/css-view-transitions-2",
        src: "https://www.w3.org/TR/2024/WD-css-view-transitions-2-20241113/",
        "last-modified": "-"
    },
    {
        text: "CSS Animation Worklet API",
        href: "https://htmlspecs.com/css/css-animation-worklet-1",
        src: "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/",
        "last-modified": "-"
    },

    // Containment
    {
        text: "CSS Containment Module Level 2",
        href: "https://htmlspecs.com/css/css-contain-2",
        src: "https://www.w3.org/TR/2022/WD-css-contain-2-20220917/",
        "last-modified": "-"
    },
    {
        text: "CSS Containment Module Level 3",
        href: "https://htmlspecs.com/css/css-contain-3",
        src: "https://www.w3.org/TR/2022/WD-css-contain-3-20220818/",
        "last-modified": "-"
    },

    //Speech
    {
        text: "CSS Speech Module Level 1",
        href: "https://htmlspecs.com/css/css-speech-1",
        src: "https://www.w3.org/TR/2023/CRD-css-speech-1-20230214/",
        "last-modified": "-"
    },

    // Others
    {
        text: "CSS Overscroll Behavior",
        href: "https://htmlspecs.com/css/css-overscroll-1",
        src: "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/",
        "last-modified": "-"
    },
    {
        text: "CSS Scroll Snap Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-snap-1",
        src: "https://www.w3.org/TR/2021/CR-css-scroll-snap-1-20210311/",
        "last-modified": "-"
    },
    {
        text: "CSS Scroll Snap Module Level 2",
        href: "https://htmlspecs.com/css/css-scroll-snap-2",
        src: "https://www.w3.org/TR/2024/WD-css-scroll-snap-2-20240723/",
        "last-modified": "-"
    },
    {
        text: "CSS Scrollbars Styling Module Level 1",
        href: "https://htmlspecs.com/css/css-scrollbars-1",
        src: "https://www.w3.org/TR/2021/CR-css-scrollbars-1-20211209/",
        "last-modified": "-"
    },
    {
        text: "CSS Scroll Anchoring Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-anchoring-1",
        src: "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20201111/",
        "last-modified": "-"
    },
    {
        text: "CSS Will Change Module Level 1",
        href: "https://htmlspecs.com/css/css-will-change-1",
        src: "https://www.w3.org/TR/2022/CRD-css-will-change-1-20220505/",
        "last-modified": "-"
    },
    {
        text: "CSS Mixins Module Level 1",
        href: "https://htmlspecs.com/css/css-mixins-1",
        src: "https://www.w3.org/TR/2025/WD-css-mixins-1-20250515/",
        "last-modified": "-"
    },
    // Nesting and Variables
    {
        text: "CSS Nesting Module Level 1",
        href: "https://htmlspecs.com/css/css-nesting-1",
        src: "https://www.w3.org/TR/2023/WD-css-nesting-1-20230214/",
        "last-modified": "-"
    },

    // CSS Variables and CSSOM
    {
        text: "CSS Custom Properties for Cascading Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-variables-1",
        src: "https://www.w3.org/TR/2022/CR-css-variables-1-20220616/",
        "last-modified": "-"
    },
    {
        text: "CSS Object Model (CSSOM)",
        href: "https://htmlspecs.com/css/cssom-1",
        src: "https://www.w3.org/TR/2021/WD-cssom-1-20210826/",
        "last-modified": "-"
    },
    {
        text: "CSSOM View Module",
        href: "https://htmlspecs.com/css/cssom-view",
        src: "https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/",
        "last-modified": "-"
    },

    // CSS Houdini APIs
    {
        text: "CSS Typed OM Level 1",
        href: "https://htmlspecs.com/css/css-typed-om-1",
        src: "https://www.w3.org/TR/2024/WD-css-typed-om-1-20240321/",
        "last-modified": "-"
    },
    {
        text: "CSS Paint API Level 1",
        href: "https://htmlspecs.com/css/css-paint-api-1",
        src: "https://www.w3.org/TR/2021/CRD-css-paint-api-1-20211216/",
        "last-modified": "-"
    },
    {
        text: "CSS Layout API Level 1",
        href: "https://htmlspecs.com/css/css-layout-api-1",
        src: "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/",
        "last-modified": "-"
    },
    {
        text: "CSS Properties and Values API Level 1",
        href: "https://htmlspecs.com/css/css-properties-values-api-1",
        src: "https://www.w3.org/TR/2024/WD-css-properties-values-api-1-20240326/",
        "last-modified": "-"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { links, cssLinks };
}
