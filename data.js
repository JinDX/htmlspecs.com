const links = [
    // Core Specifications
    {
        text: "HTML",
        href: "https://htmlspecs.com/",
        src: "https://html.spec.whatwg.org/multipage/",
        "last-modified": "Mon, 07 Jul 2025 01:56:14 GMT"
    },
    {
        text: "ECMA-262",
        href: "https://ecma262.com/",
        src: "https://tc39.es/ecma262/",
        "last-modified": "Fri, 06 Sep 2024 20:15:26 GMT"
    },
    {
        text: "DOM",
        href: "https://htmlspecs.com/dom",
        src: "https://dom.spec.whatwg.org/",
        "last-modified": "Mon, 14 Apr 2025 15:51:50 GMT"
    },
    {
        text: "Web IDL",
        href: "https://htmlspecs.com/webidl",
        src: "https://webidl.spec.whatwg.org/",
        "last-modified": "Mon, 17 Mar 2025 22:29:37 GMT"
    },
    {
        text: "Web Application Manifest",
        href: "https://htmlspecs.com/appmanifest",
        src: "https://www.w3.org/TR/2025/WD-appmanifest-20250505/",
        "last-modified": "Fri, 11 Oct 2024 03:44:44 GMT"
    },


    // Accessibility
    {
        text: "Web Content Accessibility Guidelines (WCAG) 2.2",
        href: "https://htmlspecs.com/WCAG22",
        src: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/",
        "last-modified": "Thu, 05 Oct 2023 08:30:43 GMT"
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
        "last-modified": "Wed, 28 May 2025 16:32:30 GMT"
    },
    {
        text: "XMLHttpRequest ",
        href: "https://htmlspecs.com/xhr",
        src: "https://xhr.spec.whatwg.org/",
        "last-modified": "Tue, 11 Mar 2025 01:01:51 GMT"
    },
    {
        text: "WebSockets",
        href: "https://htmlspecs.com/websockets",
        src: "https://websockets.spec.whatwg.org/",
        "last-modified": "Wed, 24 Jan 2024 10:43:43 GMT"
    },
    {
        text: "WebTransport",
        href: "https://htmlspecs.com/webtransport",
        src: "https://www.w3.org/TR/2025/WD-webtransport-20250212/",
        "last-modified": "Fri, 31 May 2024 07:48:03 GMT"
    },
    {
        text: "Service Workers",
        href: "https://htmlspecs.com/service-workers",
        src: "https://www.w3.org/TR/2025/CRD-service-workers-20250306/",
        "last-modified": "Mon, 11 Jul 2022 11:23:13 GMT"
    },
    {
        text: "Push API",
        href: "https://htmlspecs.com/push-api",
        src: "https://www.w3.org/TR/2024/WD-push-api-20240903/",
        "last-modified": "Tue, 03 Sep 2024 15:16:57 GMT"
    },
    {
        text: "WebRTC",
        href: "https://htmlspecs.com/webrtc",
        src: "https://www.w3.org/TR/2025/REC-webrtc-20250313/",
        "last-modified": "Fri, 14 Mar 2025 10:25:11 GMT"
    },
    {
        text: "Payment Request API",
        href: "https://htmlspecs.com/payment-request",
        src: "https://www.w3.org/TR/2025/CRD-payment-request-20250402/",
        "last-modified": "Mon, 09 Sep 2024 18:06:00 GMT"
    },
    {
        text: "Background Fetch",
        href: "https://htmlspecs.com/background-fetch",
        src: "https://wicg.github.io/background-fetch/",
        "last-modified": "Wed, 21 Apr 2021 08:58:39 GMT"
    },

    // Storage and Data
    {
        text: "Indexed Database API 3.0",
        href: "https://htmlspecs.com/IndexedDB",
        src: "https://www.w3.org/TR/2025/WD-IndexedDB-3-20250515/",
        "last-modified": "Thu, 15 May 2025 20:34:18 GMT"
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
        "last-modified": "Fri, 24 May 2024 17:07:26 GMT"
    },
    {
        text: "Cookie Store API",
        href: "https://htmlspecs.com/cookie-store",
        src: "https://wicg.github.io/cookie-store/",
        "last-modified": "Tue, 03 Jun 2025 15:06:31 GMT"
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
        "last-modified": "Thu, 05 Jan 2023 07:56:36 GMT"
    },

    // Device and Hardware Access
    {
        text: "Pointer Events",
        href: "https://htmlspecs.com/pointerevents",
        src: "https://www.w3.org/TR/2019/REC-pointerevents2-20190404/",
        "last-modified": "Tue, 02 Apr 2019 14:26:39 GMT"
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
        "last-modified": "Wed, 09 Aug 2023 07:27:08 GMT"
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
        "last-modified": "Tue, 11 Feb 2025 12:22:57 GMT"
    },
    {
        text: "Screen Capture",
        href: "https://htmlspecs.com/screen-capture",
        src: "https://www.w3.org/TR/2025/WD-screen-capture-20250522/",
        "last-modified": "Thu, 27 Jun 2024 14:54:39 GMT"
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
        "last-modified": "Mon, 08 Jul 2024 22:06:36 GMT"
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
        "last-modified": "Thu, 04 May 2023 08:20:46 GMT"
    },
    {
        text: "Virtual Keyboard",
        href: "https://htmlspecs.com/virtual-keyboard",
        src: "https://www.w3.org/TR/2022/WD-virtual-keyboard-20220505/",
        "last-modified": "Thu, 05 May 2022 00:07:29 GMT"
    },
    {
        text: "Web Share API",
        href: "https://htmlspecs.com/web-share",
        src: "https://www.w3.org/TR/2023/REC-web-share-20230530/",
        "last-modified": "Mon, 29 May 2023 12:52:08 GMT"
    },
    {
        text: "Web Audio API",
        href: "https://htmlspecs.com/webaudio",
        src: "https://www.w3.org/TR/2021/REC-webaudio-20210617/",
        "last-modified": "Tue, 08 Jun 2021 17:24:13 GMT"
    },
    {
        text: "Geolocation API",
        href: "https://htmlspecs.com/geolocation",
        src: "https://www.w3.org/TR/2025/REC-geolocation-20250411/",
        "last-modified": "Mon, 16 Sep 2024 19:13:56 GMT"
    },
    {
        text: "Device Orientation and Motion",
        href: "https://htmlspecs.com/orientation-event",
        src: "https://www.w3.org/TR/2025/CRD-orientation-event-20250212/",
        "last-modified": "Tue, 14 May 2024 10:35:28 GMT"
    },
    {
        text: "Pointer Lock 2.0",
        href: "https://htmlspecs.com/pointerlock",
        src: "https://www.w3.org/TR/2024/WD-pointerlock-2-20240617/",
        "last-modified": "Mon, 17 Jun 2024 13:51:21 GMT"
    },
    {
        text: "Clipboard API and events",
        href: "https://htmlspecs.com/clipboard-apis",
        src: "https://www.w3.org/TR/2025/WD-clipboard-apis-20250516/",
        "last-modified": "Mon, 15 May 2023 16:35:00 GMT"
    },
    {
        text: "Input Events Level 1",
        href: "https://htmlspecs.com/input-events-1",
        src: "https://www.w3.org/TR/2023/DISC-input-events-1-20230928/",
        "last-modified": "Wed, 27 Sep 2023 16:15:26 GMT"
    },
    {
        text: "Input Events Level 2",
        href: "https://htmlspecs.com/input-events-2",
        src: "https://www.w3.org/TR/2024/WD-input-events-2-20241018/",
        "last-modified": "Fri, 18 Oct 2024 15:24:01 GMT"
    },
    {
        text: "Permissions",
        href: "https://htmlspecs.com/permissions",
        src: "https://www.w3.org/TR/2024/WD-permissions-20241220/",
        "last-modified": "Tue, 19 Mar 2024 14:01:55 GMT"
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
        src: "https://www.w3.org/TR/device-posture/",
        "last-modified": "Thu, 21 Nov 2024 18:39:12 GMT"
    },

    // Performance and Observers
    {
        text: "Performance Timeline",
        href: "https://htmlspecs.com/performance-timeline",
        src: "https://www.w3.org/TR/2024/CRD-performance-timeline-20240216/",
        "last-modified": "Fri, 16 Feb 2024 15:19:07 GMT"
    },
    {
        text: "Intersection Observer",
        href: "https://htmlspecs.com/intersection-observer",
        src: "https://www.w3.org/TR/2023/WD-intersection-observer-20231018/",
        "last-modified": "Wed, 18 Oct 2023 15:54:57 GMT"
    },
    {
        text: "Resize Observer",
        href: "https://htmlspecs.com/resize-observer",
        src: "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/",
        "last-modified": "Mon, 10 Feb 2020 13:28:11 GMT"
    },
    {
        text: "Navigation Timing Level 2",
        href: "https://htmlspecs.com/navigation-timing-2",
        src: "https://www.w3.org/TR/2025/WD-navigation-timing-2-20250213/",
        "last-modified": "Mon, 29 Jul 2024 11:00:31 GMT"
    },
    {
        text: "Resource Timing",
        href: "https://htmlspecs.com/resource-timing",
        src: "https://www.w3.org/TR/2025/CRD-resource-timing-20250603/",
        "last-modified": "Fri, 24 May 2024 19:46:20 GMT"
    },
    {
        text: "User Timing Level 2",
        href: "https://htmlspecs.com/user-timing-2",
        src: "https://www.w3.org/TR/2019/REC-user-timing-2-20190226/",
        "last-modified": "Mon, 25 Feb 2019 00:38:04 GMT"
    },
    {
        text: "Observable",
        href: "https://htmlspecs.com/observable",
        src: "https://wicg.github.io/observable/",
        "last-modified": "Sat, 19 Apr 2025 18:06:55 GMT"
    },

    // Security and Authentication
    {
        text: "Web Authentication Level 2",
        href: "https://htmlspecs.com/webauthn-2",
        src: "https://www.w3.org/TR/2021/REC-webauthn-2-20210408/",
        "last-modified": "Tue, 06 Apr 2021 20:44:57 GMT"
    },
    {
        text: "HTML Sanitizer API",
        href: "https://htmlspecs.com/sanitizer-api",
        src: "https://wicg.github.io/sanitizer-api/",
        "last-modified": "Wed, 14 May 2025 07:38:35 GMT"
    },
    {
        text: "Subresource Integrity (SRI)",
        href: "https://htmlspecs.com/SRI",
        src: "https://www.w3.org/TR/2016/REC-SRI-20160623/",
        "last-modified": "Mon, 20 Jun 2016 15:01:23 GMT"
    },
    {
        text: "Content Security Policy Level 3",
        href: "https://htmlspecs.com/CSP3",
        src: "https://www.w3.org/TR/2025/WD-CSP3-20250602/",
        "last-modified": "Wed, 30 Apr 2025 06:53:43 GMT"
    },


    // Media and Graphics
    {
        text: "Web Animations",
        href: "https://htmlspecs.com/web-animations-1",
        src: "https://www.w3.org/TR/2023/WD-web-animations-1-20230605/",
        "last-modified": "Mon, 05 Jun 2023 02:28:05 GMT"
    },
    {
        text: "Scalable Vector Graphics (SVG) 2",
        href: "https://htmlspecs.com/SVG2/",
        src: "https://www.w3.org/TR/2018/CR-SVG2-20181004/",
        "last-modified": "Tue, 02 Oct 2018 17:56:01 GMT"
    },
    {
        text: "Picture-in-Picture",
        href: "https://htmlspecs.com/picture-in-picture",
        src: "https://www.w3.org/TR/2024/WD-picture-in-picture-20241216/",
        "last-modified": "Wed, 02 Oct 2024 18:39:19 GMT"
    },
    {
        text: "Presentation API",
        href: "https://htmlspecs.com/presentation-api",
        src: "https://www.w3.org/TR/2025/CRD-presentation-api-20250212/",
        "last-modified": "Tue, 08 Oct 2024 16:51:27 GMT"
    },
    {
        text: "Scroll-driven Animations",
        href: "https://htmlspecs.com/scroll-animations-1",
        src: "https://www.w3.org/TR/2023/WD-scroll-animations-1-20230606/",
        "last-modified": "Tue, 06 Jun 2023 20:03:38 GMT"
    },

    // Developer Tools
    {
        text: "Console",
        href: "https://htmlspecs.com/console",
        src: "https://console.spec.whatwg.org/",
        "last-modified": "Mon, 16 Dec 2024 08:57:48 GMT"
    }
];



const cssLinks = [
    // Foundational
    {
        text: "CSS Snapshot 2023",
        href: "https://htmlspecs.com/css/css-2023",
        src: "https://www.w3.org/TR/2023/NOTE-css-2023-20231207/",
        "last-modified": "Tue, 05 Dec 2023 16:06:23 GMT"
    },
    {
        text: "CSS 2.2 Specification",
        href: "https://htmlspecs.com/css/css22/",
        src: "https://www.w3.org/TR/2016/WD-CSS22-20160412/",
        "last-modified": "Fri, 08 Apr 2016 13:16:51 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 3",
        href: "https://htmlspecs.com/css/css-cascade-3",
        src: "https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/",
        "last-modified": "Mon, 08 Feb 2021 18:06:41 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 4",
        href: "https://htmlspecs.com/css/css-cascade-4",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-4-20220113/",
        "last-modified": "Tue, 11 Jan 2022 15:25:49 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 5",
        href: "https://htmlspecs.com/css/css-cascade-5",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-5-20220113/",
        "last-modified": "Tue, 11 Jan 2022 16:48:45 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 6",
        href: "https://htmlspecs.com/css/css-cascade-6",
        src: "https://www.w3.org/TR/2024/WD-css-cascade-6-20240906/",
        "last-modified": "Fri, 06 Sep 2024 18:39:02 GMT"
    },
    {
        text: "CSS Style Attributes",
        href: "https://htmlspecs.com/css/css-style-attr",
        src: "https://www.w3.org/TR/2013/REC-css-style-attr-20131107/",
        "last-modified": "Mon, 02 Oct 2017 11:05:50 GMT"
    },
    {
        text: "CSS Namespaces",
        href: "https://htmlspecs.com/css/css-namespaces-3",
        src: "https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/",
        "last-modified": "Mon, 02 Oct 2017 11:17:11 GMT"
    },
    {
        text: "Selectors Level 3",
        href: "https://htmlspecs.com/css/selectors-3",
        src: "https://www.w3.org/TR/2018/REC-selectors-3-20181106/",
        "last-modified": "Sat, 03 Nov 2018 11:48:44 GMT"
    },
    {
        text: "CSS Basic User Interface Module Level 3",
        href: "https://htmlspecs.com/css/css-ui-3",
        src: "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/",
        "last-modified": "Thu, 21 Jun 2018 16:29:59 GMT"
    },
    {
        text: "CSS Basic User Interface Module Level 4",
        href: "https://htmlspecs.com/css/css-ui-4",
        src: "https://www.w3.org/TR/2021/WD-css-ui-4-20210316/",
        "last-modified": "Tue, 16 Mar 2021 06:16:37 GMT"
    },
    {
        text: "CSS Syntax Module Level 3",
        href: "https://htmlspecs.com/css/css-syntax-3",
        src: "https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/",
        "last-modified": "Fri, 24 Dec 2021 22:58:34 GMT"
    },
    {
        text: "CSS Highlight API Level 1",
        href: "https://htmlspecs.com/css/css-highlight-api-1",
        src: "https://www.w3.org/TR/2021/WD-css-highlight-api-1-20211215/",
        "last-modified": "Wed, 15 Dec 2021 03:55:54 GMT"
    },
    {
        text: "CSS Values and Units Module Level 3",
        href: "https://htmlspecs.com/css/css-values-3",
        src: "https://www.w3.org/TR/2024/CRD-css-values-3-20240322/",
        "last-modified": "Fri, 22 Mar 2024 21:15:08 GMT"
    },

    // Box Model and Display
    {
        text: "CSS Box Model Level 3",
        href: "https://htmlspecs.com/css/css-box-3",
        src: "https://www.w3.org/TR/2024/REC-css-box-3-20240411/",
        "last-modified": "Thu, 04 Apr 2024 18:41:52 GMT"
    },
    {
        text: "CSS Box Sizing Module Level 3",
        href: "https://htmlspecs.com/css/css-sizing-3",
        src: "https://www.w3.org/TR/2021/WD-css-sizing-3-20211217/",
        "last-modified": "Fri, 17 Dec 2021 00:34:42 GMT"
    },
    {
        text: "CSS Box Model Level 4",
        href: "https://htmlspecs.com/css/css-box-4",
        src: "https://www.w3.org/TR/2024/WD-css-box-4-20240804/",
        "last-modified": "Sun, 04 Aug 2024 03:01:12 GMT"
    },
    {
        text: "CSS Logical Properties and Values Level 1",
        href: "https://htmlspecs.com/css/css-logical-1",
        src: "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/",
        "last-modified": "Mon, 27 Aug 2018 21:52:47 GMT"
    },
    {
        text: "CSS Display Module Level 3",
        href: "https://htmlspecs.com/css/css-display-3",
        src: "https://www.w3.org/TR/2023/CR-css-display-3-20230330/",
        "last-modified": "Mon, 27 Mar 2023 16:25:32 GMT"
    },
    {
        text: "CSS Backgrounds and Borders Level 3",
        href: "https://htmlspecs.com/css/css-backgrounds-3",
        src: "https://www.w3.org/TR/2024/CRD-css-backgrounds-3-20240311/",
        "last-modified": "Mon, 11 Mar 2024 17:22:44 GMT"
    },
    {
        text: "CSS Box Alignment Module Level 3",
        href: "https://htmlspecs.com/css/css-align-3",
        src: "https://www.w3.org/TR/2025/WD-css-align-3-20250311/",
        "last-modified": "Fri, 17 Feb 2023 19:17:10 GMT"
    },
    {
        text: "CSS Overflow Module Level 4",
        href: "https://htmlspecs.com/css/css-overflow-4",
        src: "https://www.w3.org/TR/2023/WD-css-overflow-4-20230321/",
        "last-modified": "Tue, 21 Mar 2023 19:01:45 GMT"
    },
    {
        text: "CSS Overflow Module Level 5",
        href: "https://htmlspecs.com/css/css-overflow-5",
        src: "https://www.w3.org/TR/2024/WD-css-overflow-5-20241217/",
        "last-modified": "Fri, 13 Dec 2024 15:56:37 GMT"
    },

    // Colors
    {
        text: "CSS Color Module Level 3",
        href: "https://htmlspecs.com/css/css-color-3",
        src: "https://www.w3.org/TR/2022/REC-css-color-3-20220118/",
        "last-modified": "Thu, 13 Jan 2022 23:33:53 GMT"
    },
    {
        text: "CSS Color Module Level 4",
        href: "https://htmlspecs.com/css/css-color-4",
        src: "https://www.w3.org/TR/2025/CRD-css-color-4-20250424/",
        "last-modified": "Fri, 25 Apr 2025 14:44:50 GMT"
    },
    {
        text: "CSS Color Module Level 5",
        href: "https://htmlspecs.com/css/css-color-5",
        src: "https://www.w3.org/TR/2025/WD-css-color-5-20250318/",
        "last-modified": "Tue, 27 Feb 2024 16:44:48 GMT"
    },
    {
        text: "CSS Color Adjustment Module Level 1",
        href: "https://htmlspecs.com/css/css-color-adjust-1",
        src: "https://www.w3.org/TR/2022/CRD-css-color-adjust-1-20220614/",
        "last-modified": "Tue, 14 Jun 2022 20:58:16 GMT"
    },
    {
        text: "CSS Filter Effects Module Level 1",
        href: "https://htmlspecs.com/css/filter-effects-1",
        src: "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/",
        "last-modified": "Fri, 14 Dec 2018 21:57:00 GMT"
    },
    {
        text: "Compositing and Blending Level 1",
        href: "https://htmlspecs.com/css/compositing-1",
        src: "https://www.w3.org/TR/2024/CRD-compositing-1-20240321/",
        "last-modified": "Sat, 16 Mar 2024 21:04:22 GMT"
    },

    //Conditional Rules
    {
        text: "CSS Conditional Rules Module Level 4",
        href: "https://htmlspecs.com/css/css-conditional-4",
        src: "https://www.w3.org/TR/2022/CR-css-conditional-4-20220217/",
        "last-modified": "Tue, 15 Feb 2022 15:32:38 GMT"
    },

    // Fonts
    {
        text: "CSS Fonts Module Level 3",
        href: "https://htmlspecs.com/css/css-fonts-3",
        src: "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/",
        "last-modified": "Thu, 21 Feb 2019 13:58:59 GMT"
    },
    {
        text: "CSS Fonts Module Level 4",
        href: "https://htmlspecs.com/css/css-fonts-4",
        src: "https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/",
        "last-modified": "Wed, 31 Jan 2024 18:20:40 GMT"
    },
    {
        text: "CSS Font Loading Module Level 3",
        href: "https://htmlspecs.com/css/css-font-loading",
        src: "https://www.w3.org/TR/2023/WD-css-font-loading-3-20230406/",
        "last-modified": "Mon, 03 Apr 2023 20:07:42 GMT"
    },

    // Text and Typography
    {
        text: "CSS Text Module Level 3",
        href: "https://htmlspecs.com/css/css-text-3",
        src: "https://www.w3.org/TR/2024/CRD-css-text-3-20240930/",
        "last-modified": "Mon, 30 Sep 2024 23:06:09 GMT"
    },
    {
        text: "CSS Text Module Level 4",
        href: "https://htmlspecs.com/css/css-text-4",
        src: "https://www.w3.org/TR/2024/WD-css-text-4-20240529/",
        "last-modified": "Wed, 29 May 2024 07:54:37 GMT"
    },
    {
        text: "CSS Counter Styles Level 3",
        href: "https://htmlspecs.com/css/css-counter-styles-3",
        src: "https://www.w3.org/TR/2021/CR-css-counter-styles-3-20210727/",
        "last-modified": "Fri, 23 Jul 2021 06:05:41 GMT"
    },
    {
        text: "CSS Lists and Counters Module Level 3",
        href: "https://htmlspecs.com/css/css-lists-3",
        src: "https://www.w3.org/TR/2020/WD-css-lists-3-20201117/",
        "last-modified": "Tue, 17 Nov 2020 23:31:07 GMT"
    },

    // Text Decoration
    {
        text: "CSS Text Decoration Level 3",
        href: "https://htmlspecs.com/css/css-text-decor-3",
        src: "https://www.w3.org/TR/2022/CRD-css-text-decor-3-20220505/",
        "last-modified": "Thu, 05 May 2022 03:12:22 GMT"
    },

    // Media Queries
    {
        text: "Media Queries Level 3",
        href: "https://htmlspecs.com/css/mediaqueries-3",
        src: "https://www.w3.org/TR/2024/REC-mediaqueries-3-20240521/",
        "last-modified": "Tue, 21 May 2024 05:35:40 GMT"
    },
    {
        text: "Media Queries Level 4",
        href: "https://htmlspecs.com/css/mediaqueries-4",
        src: "https://www.w3.org/TR/2021/CRD-mediaqueries-4-20211225/",
        "last-modified": "Sat, 25 Dec 2021 14:04:37 GMT"
    },
    {
        text: "Media Queries Level 5",
        href: "https://htmlspecs.com/css/mediaqueries-5",
        src: "https://www.w3.org/TR/2021/WD-mediaqueries-5-20211218/",
        "last-modified": "Sat, 18 Dec 2021 03:42:04 GMT"
    },

    // Layout
    {
        text: "CSS Flexible Box Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-flexbox-1",
        src: "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/",
        "last-modified": "Mon, 19 Nov 2018 09:06:30 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-grid-1",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-1-20250326/",
        "last-modified": "Fri, 18 Dec 2020 19:24:48 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-grid-2",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-2-20250326/",
        "last-modified": "Fri, 18 Dec 2020 19:25:43 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-grid-3",
        src: "https://www.w3.org/TR/2025/WD-css-grid-3-20250207/",
        "last-modified": "Fri, 07 Feb 2025 23:43:42 GMT"
    },
    {
        text: "CSS Inline Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-inline-3",
        src: "https://www.w3.org/TR/2024/WD-css-inline-3-20241218/",
        "last-modified": "Mon, 12 Aug 2024 23:01:08 GMT"
    },
    {
        text: "CSS Multi-column Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-multicol-1",
        src: "https://www.w3.org/TR/2024/CR-css-multicol-1-20240516/",
        "last-modified": "Tue, 14 May 2024 20:30:50 GMT"
    },
    {
        text: "CSS Shapes Module Level 1",
        href: "https://htmlspecs.com/css/css-shapes-1",
        src: "https://www.w3.org/TR/2022/CRD-css-shapes-1-20221115/",
        "last-modified": "Thu, 10 Nov 2022 21:13:52 GMT"
    },
    {
        text: "CSS Positioned Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-position-3",
        src: "https://www.w3.org/TR/2025/WD-css-position-3-20250311/",
        "last-modified": "Sat, 10 Aug 2024 00:17:07 GMT"
    },

    //Navigation
    {
        text: "CSS Spatial Navigation Level 1",
        href: "https://htmlspecs.com/css/css-nav-1",
        src: "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/",
        "last-modified": "Tue, 04 Feb 2020 17:51:36 GMT"
    },

    // Writing Modes
    {
        text: "CSS Writing Modes Level 3",
        href: "https://htmlspecs.com/css/css-writing-modes-3",
        src: "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/",
        "last-modified": "Thu, 30 Apr 2020 16:55:21 GMT"
    },
    {
        text: "CSS Writing Modes Level 4",
        href: "https://htmlspecs.com/css/css-writing-modes-4",
        src: "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/",
        "last-modified": "Thu, 30 Apr 2020 16:57:43 GMT"
    },

    //Fragmentation
    {
        text: "CSS Fragmentation Module Level 3",
        href: "https://htmlspecs.com/css/css-break-3",
        src: "https://www.w3.org/TR/2018/CR-css-break-3-20181204/",
        "last-modified": "Mon, 03 Dec 2018 03:15:09 GMT"
    },


    // Pseudo-elements
    {
        text: "CSS Pseudo-Elements Module Level 4",
        href: "https://htmlspecs.com/css/css-pseudo-4",
        src: "https://www.w3.org/TR/2022/WD-css-pseudo-4-20221230/",
        "last-modified": "Fri, 30 Dec 2022 01:46:06 GMT"
    },

    // Images
    {
        text: "CSS Images Module Level 4",
        href: "https://htmlspecs.com/css/css-images-4",
        src: "https://www.w3.org/TR/2023/WD-css-images-4-20230217/",
        "last-modified": "Fri, 17 Feb 2023 19:20:53 GMT"
    },
    {
        text: "CSS Masking Module Level 1",
        href: "https://htmlspecs.com/css/css-masking-1",
        src: "https://www.w3.org/TR/2021/CRD-css-masking-1-20210805/",
        "last-modified": "Wed, 04 Aug 2021 13:20:14 GMT"
    },

    // Transforms and Animations
    {
        text: "CSS Easing Functions Level 1",
        href: "https://htmlspecs.com/css/css-easing-1",
        src: "https://www.w3.org/TR/2023/CRD-css-easing-1-20230213/",
        "last-modified": "Mon, 13 Feb 2023 22:59:19 GMT"
    },
    {
        text: "CSS Easing Functions Level 2",
        href: "https://htmlspecs.com/css/css-easing-2",
        src: "https://www.w3.org/TR/2024/WD-css-easing-2-20240829/",
        "last-modified": "Wed, 28 Aug 2024 15:46:16 GMT"
    },
    {
        text: "CSS Transforms Module Level 1",
        href: "https://htmlspecs.com/css/css-transforms-1",
        src: "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/",
        "last-modified": "Thu, 14 Feb 2019 11:32:56 GMT"
    },
    {
        text: "CSS Transforms Module Level 2",
        href: "https://htmlspecs.com/css/css-transforms-2",
        src: "https://www.w3.org/TR/2021/WD-css-transforms-2-20211109/",
        "last-modified": "Tue, 09 Nov 2021 18:24:25 GMT"
    },
    {
        text: "CSS Transitions Level 2",
        href: "https://htmlspecs.com/css/css-transitions-2",
        src: "https://www.w3.org/TR/2023/WD-css-transitions-2-20230905/",
        "last-modified": "Thu, 31 Aug 2023 12:15:50 GMT"
    },
    {
        text: "CSS Animations Level 1",
        href: "https://htmlspecs.com/css/css-animations-1",
        src: "https://www.w3.org/TR/2023/WD-css-animations-1-20230302/",
        "last-modified": "Mon, 27 Feb 2023 17:40:55 GMT"
    },
    {
        text: "CSS Animations Level 2",
        href: "https://htmlspecs.com/css/css-animations-2",
        src: "https://www.w3.org/TR/2023/WD-css-animations-2-20230602/",
        "last-modified": "Fri, 02 Jun 2023 22:07:34 GMT"
    },
    {
        text: "CSS Motion Path Module Level 1",
        href: "https://htmlspecs.com/css/motion-1",
        src: "https://www.w3.org/TR/2024/WD-motion-1-20241105/",
        "last-modified": "Fri, 14 Dec 2018 22:58:15 GMT"
    },
    {
        text: "CSS View Transitions Module Level 1",
        href: "https://htmlspecs.com/css/css-view-transitions-1",
        src: "https://www.w3.org/TR/2023/CR-css-view-transitions-1-20230905/",
        "last-modified": "Sun, 03 Sep 2023 13:07:46 GMT"
    },

    {
        text: "CSS View Transitions Module Level 2",
        href: "https://htmlspecs.com/css/css-view-transitions-2",
        src: "https://www.w3.org/TR/2024/WD-css-view-transitions-2-20241113/",
        "last-modified": "Tue, 14 May 2024 20:39:49 GMT"
    },
    {
        text: "CSS Animation Worklet API",
        href: "https://htmlspecs.com/css/css-animation-worklet-1",
        src: "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/",
        "last-modified": "Tue, 25 Jun 2019 13:20:26 GMT"
    },

    // Containment
    {
        text: "CSS Containment Module Level 2",
        href: "https://htmlspecs.com/css/css-contain-2",
        src: "https://www.w3.org/TR/2022/WD-css-contain-2-20220917/",
        "last-modified": "Sat, 17 Sep 2022 18:01:51 GMT"
    },
    {
        text: "CSS Containment Module Level 3",
        href: "https://htmlspecs.com/css/css-contain-3",
        src: "https://www.w3.org/TR/2022/WD-css-contain-3-20220818/",
        "last-modified": "Thu, 18 Aug 2022 21:50:48 GMT"
    },

    //Speech
    {
        text: "CSS Speech Module Level 1",
        href: "https://htmlspecs.com/css/css-speech-1",
        src: "https://www.w3.org/TR/2023/CRD-css-speech-1-20230214/",
        "last-modified": "Tue, 14 Feb 2023 01:37:24 GMT"
    },

    // Others
    {
        text: "CSS Overscroll Behavior",
        href: "https://htmlspecs.com/css/css-overscroll-1",
        src: "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/",
        "last-modified": "Tue, 04 Jun 2019 20:42:28 GMT"
    },
    {
        text: "CSS Scroll Snap Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-snap-1",
        src: "https://www.w3.org/TR/2021/CR-css-scroll-snap-1-20210311/",
        "last-modified": "Wed, 10 Mar 2021 20:56:24 GMT"
    },
    {
        text: "CSS Scroll Snap Module Level 2",
        href: "https://htmlspecs.com/css/css-scroll-snap-2",
        src: "https://www.w3.org/TR/2024/WD-css-scroll-snap-2-20240723/",
        "last-modified": "Fri, 19 Jul 2024 17:14:13 GMT"
    },
    {
        text: "CSS Scrollbars Styling Module Level 1",
        href: "https://htmlspecs.com/css/css-scrollbars-1",
        src: "https://www.w3.org/TR/2021/CR-css-scrollbars-1-20211209/",
        "last-modified": "Tue, 07 Dec 2021 00:51:03 GMT"
    },
    {
        text: "CSS Scroll Anchoring Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-anchoring-1",
        src: "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20201111/",
        "last-modified": "Wed, 11 Nov 2020 23:04:41 GMT"
    },
    {
        text: "CSS Will Change Module Level 1",
        href: "https://htmlspecs.com/css/css-will-change-1",
        src: "https://www.w3.org/TR/2022/CRD-css-will-change-1-20220505/",
        "last-modified": "Fri, 29 Apr 2022 19:43:57 GMT"
    },
    // Nesting and Variables
    {
        text: "CSS Nesting Module Level 1",
        href: "https://htmlspecs.com/css/css-nesting-1",
        src: "https://www.w3.org/TR/2023/WD-css-nesting-1-20230214/",
        "last-modified": "Tue, 14 Feb 2023 05:20:59 GMT"
    },

    // CSS Variables and CSSOM
    {
        text: "CSS Custom Properties for Cascading Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-variables-1",
        src: "https://www.w3.org/TR/2022/CR-css-variables-1-20220616/",
        "last-modified": "Mon, 13 Jun 2022 11:56:06 GMT"
    },
    {
        text: "CSS Object Model (CSSOM)",
        href: "https://htmlspecs.com/css/cssom-1",
        src: "https://www.w3.org/TR/2021/WD-cssom-1-20210826/",
        "last-modified": "Tue, 24 Aug 2021 16:27:03 GMT"
    },
    {
        text: "CSSOM View Module",
        href: "https://htmlspecs.com/css/cssom-view",
        src: "https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/",
        "last-modified": "Thu, 17 Mar 2016 06:51:10 GMT"
    },

    // CSS Houdini APIs
    {
        text: "CSS Typed OM Level 1",
        href: "https://htmlspecs.com/css/css-typed-om-1",
        src: "https://www.w3.org/TR/2024/WD-css-typed-om-1-20240321/",
        "last-modified": "Wed, 20 Mar 2024 01:45:59 GMT"
    },
    {
        text: "CSS Paint API Level 1",
        href: "https://htmlspecs.com/css/css-paint-api-1",
        src: "https://www.w3.org/TR/2021/CRD-css-paint-api-1-20211216/",
        "last-modified": "Thu, 16 Dec 2021 20:44:15 GMT"
    },
    {
        text: "CSS Layout API Level 1",
        href: "https://htmlspecs.com/css/css-layout-api-1",
        src: "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/",
        "last-modified": "Tue, 10 Apr 2018 13:26:35 GMT"
    },
    {
        text: "CSS Properties and Values API Level 1",
        href: "https://htmlspecs.com/css/css-properties-values-api-1",
        src: "https://www.w3.org/TR/2024/WD-css-properties-values-api-1-20240326/",
        "last-modified": "Fri, 22 Mar 2024 13:06:46 GMT"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { links, cssLinks };
}