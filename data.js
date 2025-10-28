const links = [
    //# htmlspecs.com|ko.htmlspecs.com|jp.htmlspecs.com
    //HTML 及相关 API，CSS 标准系列。|HTML 및 관련 API, CSS 표준 시리즈.|HTML および関連 API、CSS 仕様シリーズ。

    //### 核心规范|핵심 표준|コア仕様
    {
        text: "HTML",
        href: "https://htmlspecs.com/",
        src: "https://html.spec.whatwg.org/multipage/",
        "last-modified": "Thu, 23 Oct 2025 16:02:31 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "ECMAScript® 2026 Language Specification",
        href: "https://ecma262.com/",
        src: "https://tc39.es/ecma262/",
        "last-modified": "Fri, 24 Oct 2025 16:06:44 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "How to Read the ECMAScript Specification",
        href: "https://htmlspecs.com/es-howto/",
        src: "https://timothygu.me/es-howto/",
        "last-modified": "Sun, 05 Mar 2023 02:34:27 GMT",
        lang: "cjk",
        state: "Guide"
    },
    {
        text: "ECMAScript® 2026 Internationalization API Specification",
        href: "https://htmlspecs.com/ecma402/",
        src: "https://tc39.es/ecma402/",
        "last-modified": "Wed, 22 Oct 2025 19:26:25 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "DOM",
        href: "https://htmlspecs.com/dom",
        src: "https://dom.spec.whatwg.org/",
        "last-modified": "Tue, 07 Oct 2025 06:30:36 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "URL",
        href: "https://htmlspecs.com/url",
        src: "https://url.spec.whatwg.org/",
        "last-modified": "Mon, 18 Aug 2025 06:58:25 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "URL Pattern",
        href: "https://htmlspecs.com/urlpattern",
        src: "https://urlpattern.spec.whatwg.org/",
        "last-modified": "Wed, 17 Sep 2025 05:12:40 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web IDL",
        href: "https://htmlspecs.com/webidl",
        src: "https://webidl.spec.whatwg.org/",
        "last-modified": "Mon, 15 Sep 2025 11:24:09 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Encoding",
        href: "https://htmlspecs.com/encoding",
        src: "https://encoding.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:20:36 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "MIME Sniffing",
        href: "https://htmlspecs.com/mimesniff",
        src: "https://mimesniff.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:15:56 GMT",
        lang: "cjk",
        state: "LS"
    },

    {
        text: "Infra",
        href: "https://htmlspecs.com/infra",
        src: "https://infra.spec.whatwg.org/",
        "last-modified": "Mon, 11 Aug 2025 12:27:30 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web Application Manifest",
        href: "https://htmlspecs.com/appmanifest",
        src: "https://www.w3.org/TR/2025/WD-appmanifest-20250903/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Compatibility",
        href: "https://htmlspecs.com/compat",
        src: "https://compat.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:37:55 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web Platform Design Principles",
        href: "https://htmlspecs.com/design-principles",
        src: "https://www.w3.org/TR/2025/NOTE-design-principles-20251028/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Compression",
        href: "https://htmlspecs.com/compression",
        src: "https://compression.spec.whatwg.org/",
        "last-modified": "Wed, 01 Oct 2025 03:28:16 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Quirks Mode",
        href: "https://htmlspecs.com/quirks",
        src: "https://quirks.spec.whatwg.org/",
        "last-modified": "Wed, 17 Sep 2025 07:52:34 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Test Utils",
        href: "https://htmlspecs.com/testutils",
        src: "https://testutils.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:17:31 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Minimum Common Web Platform API",
        href: "https://htmlspecs.com/min-common-api",
        src: "https://min-common-api.proposal.wintertc.org/",
        "last-modified": "Tue, 14 Oct 2025 14:04:47 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 可访问性|접근성|アクセシビリティ
    {
        text: "Web Content Accessibility Guidelines (WCAG) 2.2",
        href: "https://htmlspecs.com/WCAG22",
        src: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "W3C Accessibility Guidelines (WCAG) 3.0",
        href: "https://htmlspecs.com/wcag-3.0",
        src: "https://www.w3.org/TR/2025/WD-wcag-3.0-20250904/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Accessible Rich Internet Applications (WAI-ARIA) 1.2",
        href: "https://htmlspecs.com/wai-aria",
        src: "https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "ARIA in HTML",
        href: "https://htmlspecs.com/html-aria",
        src: "https://www.w3.org/TR/2025/REC-html-aria-20250805/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Accessible Name and Description Computation 1.1",
        href: "https://htmlspecs.com/accname-1.1",
        src: "https://www.w3.org/TR/2018/REC-accname-1.1-20181218/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },

    //### 网络和通信|네트워크와 통신|ネットワークと通信
    {
        text: "Fetch",
        href: "https://htmlspecs.com/fetch",
        src: "https://fetch.spec.whatwg.org/",
        "last-modified": "Fri, 10 Oct 2025 15:14:25 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Streams",
        href: "https://htmlspecs.com/streams",
        src: "https://streams.spec.whatwg.org/",
        "last-modified": "Thu, 25 Sep 2025 00:41:51 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "XMLHttpRequest",
        href: "https://htmlspecs.com/xhr",
        src: "https://xhr.spec.whatwg.org/",
        "last-modified": "Mon, 18 Aug 2025 06:58:17 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "WebSockets",
        href: "https://htmlspecs.com/websockets",
        src: "https://websockets.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:35:02 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "WebTransport",
        href: "https://htmlspecs.com/webtransport",
        src: "https://www.w3.org/TR/2025/WD-webtransport-20251022/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Service Workers",
        href: "https://htmlspecs.com/service-workers",
        src: "https://www.w3.org/TR/2025/CRD-service-workers-20250306/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Push API",
        href: "https://htmlspecs.com/push-api",
        src: "https://www.w3.org/TR/2025/WD-push-api-20250925/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebRTC",
        href: "https://htmlspecs.com/webrtc",
        src: "https://www.w3.org/TR/2025/REC-webrtc-20250313/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Payment Request API",
        href: "https://htmlspecs.com/payment-request",
        src: "https://www.w3.org/TR/2025/CRD-payment-request-20250930/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Payment Handler API",
        href: "https://htmlspecs.com/payment-handler",
        src: "https://www.w3.org/TR/2025/WD-payment-handler-20250927/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Background Fetch",
        href: "https://htmlspecs.com/background-fetch",
        src: "https://wicg.github.io/background-fetch/",
        "last-modified": "Wed, 21 Apr 2021 08:58:39 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "User-Agent Client Hints",
        href: "https://htmlspecs.com/ua-client-hints",
        src: "https://wicg.github.io/ua-client-hints/",
        "last-modified": "Fri, 09 May 2025 23:49:01 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Beacon",
        href: "https://htmlspecs.com/beacon",
        src: "https://www.w3.org/TR/2022/CRD-beacon-20220803/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 存储和数据|저장 및 데이터|ストレージとデータ
    {
        text: "Indexed Database API 3.0",
        href: "https://htmlspecs.com/IndexedDB",
        src: "https://www.w3.org/TR/2025/WD-IndexedDB-3-20250813/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Storage",
        href: "https://htmlspecs.com/storage",
        src: "https://storage.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:09:18 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "File API",
        href: "https://htmlspecs.com/FileAPI",
        src: "https://www.w3.org/TR/2024/WD-FileAPI-20241204/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "File System",
        href: "https://htmlspecs.com/fs",
        src: "https://fs.spec.whatwg.org",
        "last-modified": "Mon, 15 Sep 2025 07:45:16 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Cookie Store API",
        href: "https://htmlspecs.com/cookiestore",
        src: "https://cookiestore.spec.whatwg.org/",
        "last-modified": "Fri, 12 Sep 2025 06:47:23 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "File and Directory Entries API",
        href: "https://htmlspecs.com/entries-api",
        src: "https://wicg.github.io/entries-api/",
        "last-modified": "Tue, 04 Feb 2025 17:11:37 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web Locks API",
        href: "https://htmlspecs.com/web-locks",
        src: "https://www.w3.org/TR/2025/WD-web-locks-20250924/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 设备和硬件访问|디바이스 및 하드웨어 접근|デバイスとハードウェアアクセス
    {
        text: "Pointer Events",
        href: "https://htmlspecs.com/pointerevents2",
        src: "https://www.w3.org/TR/2019/REC-pointerevents2-20190404/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Screen Orientation",
        href: "https://htmlspecs.com/screen-orientation",
        src: "https://www.w3.org/TR/2023/WD-screen-orientation-20251016/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Screen Wake Lock",
        href: "https://htmlspecs.com/screen-wake-lock",
        src: "https://www.w3.org/TR/2024/WD-screen-wake-lock-20241024/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Idle Detection API",
        href: "https://htmlspecs.com/idle-detection",
        src: "https://wicg.github.io/idle-detection/",
        "last-modified": "Wed, 08 Jan 2025 02:06:24 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "EyeDropper API",
        href: "https://htmlspecs.com/eyedropper-api",
        src: "https://wicg.github.io/eyedropper-api/",
        "last-modified": "Wed, 30 Mar 2022 19:00:41 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Fullscreen",
        href: "https://htmlspecs.com/fullscreen",
        src: "https://fullscreen.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:38:17 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Screen Capture",
        href: "https://htmlspecs.com/screen-capture",
        src: "https://www.w3.org/TR/2025/WD-screen-capture-20250717/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "UI Events",
        href: "https://htmlspecs.com/uievents",
        src: "https://www.w3.org/TR/2024/WD-uievents-20240907/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Touch Events - Level 2",
        href: "https://htmlspecs.com/touch-events",
        src: "https://www.w3.org/community/reports/touchevents/CG-FINAL-touch-events-20240704/",
        "last-modified": "Tue, 03 Jun 2025 16:00:58 GMT",
        lang: "cjk",
        state: "CG-FINAL"
    },
    {
        text: "Contact Picker API",
        href: "https://htmlspecs.com/contact-picker",
        src: "https://www.w3.org/TR/2024/WD-contact-picker-20240708/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Notifications API",
        href: "https://htmlspecs.com/notifications",
        src: "https://notifications.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 07:42:34 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Badging API",
        href: "https://htmlspecs.com/badging",
        src: "https://www.w3.org/TR/2025/WD-badging-20251006/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Virtual Keyboard",
        href: "https://htmlspecs.com/virtual-keyboard",
        src: "https://www.w3.org/TR/2022/WD-virtual-keyboard-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web Share API",
        href: "https://htmlspecs.com/web-share",
        src: "https://www.w3.org/TR/2023/REC-web-share-20230530/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Web Audio API",
        href: "https://htmlspecs.com/webaudio",
        src: "https://www.w3.org/TR/2024/WD-webaudio-1.1-20241105/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Geolocation API",
        href: "https://htmlspecs.com/geolocation",
        src: "https://www.w3.org/TR/2025/REC-geolocation-20251028/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Device Orientation and Motion",
        href: "https://htmlspecs.com/orientation-event",
        src: "https://www.w3.org/TR/2025/CRD-orientation-event-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Pointer Lock 2.0",
        href: "https://htmlspecs.com/pointerlock",
        src: "https://www.w3.org/TR/2025/WD-pointerlock-2-20250929/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Clipboard API and events",
        href: "https://htmlspecs.com/clipboard-apis",
        src: "https://www.w3.org/TR/2025/WD-clipboard-apis-20250516/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Input Events Level 1",
        href: "https://htmlspecs.com/input-events-1",
        src: "https://www.w3.org/TR/2023/DISC-input-events-1-20230928/",
        "last-modified": "-",
        lang: "cjk",
        state: "DISC"
    },
    {
        text: "Input Events Level 2",
        href: "https://htmlspecs.com/input-events-2",
        src: "https://www.w3.org/TR/2025/WD-input-events-2-20250814/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Permissions",
        href: "https://htmlspecs.com/permissions",
        src: "https://www.w3.org/TR/2025/WD-permissions-20251006/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebOTP API",
        href: "https://htmlspecs.com/web-otp",
        src: "https://wicg.github.io/web-otp/",
        "last-modified": "Tue, 04 Feb 2025 17:18:17 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Device Posture API",
        href: "https://htmlspecs.com/device-posture",
        src: "https://www.w3.org/TR/2024/CR-device-posture-20241126/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Ambient Light Sensor",
        href: "https://htmlspecs.com/ambient-light",
        src: "https://www.w3.org/TR/2025/WD-ambient-light-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Battery Status API",
        href: "https://htmlspecs.com/battery-status",
        src: "https://www.w3.org/TR/2024/WD-battery-status-20241024/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Vibration API",
        href: "https://htmlspecs.com/vibration",
        src: "https://www.w3.org/TR/2025/CRD-vibration-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 性能和观察者|성능 및 옵저버|パフォーマンスとオブザーバ
    {
        text: "Performance Timeline",
        href: "https://htmlspecs.com/performance-timeline",
        src: "https://www.w3.org/TR/2025/CRD-performance-timeline-20250521/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "High Resolution Time",
        href: "https://htmlspecs.com/hr-time-3",
        src: "https://www.w3.org/TR/2024/WD-hr-time-3-20241107/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Intersection Observer",
        href: "https://htmlspecs.com/intersection-observer",
        src: "https://www.w3.org/TR/2023/WD-intersection-observer-20231018/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Resize Observer",
        href: "https://htmlspecs.com/resize-observer",
        src: "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Navigation Timing Level 2",
        href: "https://htmlspecs.com/navigation-timing-2",
        src: "https://www.w3.org/TR/2025/WD-navigation-timing-2-20250929/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Resource Timing",
        href: "https://htmlspecs.com/resource-timing",
        src: "https://www.w3.org/TR/2025/CRD-resource-timing-20250820/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "User Timing Level 2",
        href: "https://htmlspecs.com/user-timing-2",
        src: "https://www.w3.org/TR/2019/REC-user-timing-2-20190226/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Observable",
        href: "https://htmlspecs.com/observable",
        src: "https://wicg.github.io/observable/",
        "last-modified": "Fri, 05 Sep 2025 13:43:42 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Long Tasks API",
        href: "https://htmlspecs.com/longtasks-1",
        src: "https://www.w3.org/TR/2024/WD-longtasks-1-20240524/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Reporting API",
        href: "https://htmlspecs.com/reporting-1",
        src: "https://www.w3.org/TR/2025/WD-reporting-1-20250611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Deprecation Reporting",
        href: "https://htmlspecs.com/deprecation-reporting",
        src: "https://wicg.github.io/deprecation-reporting/",
        "last-modified": "Mon, 28 Sep 2020 12:06:39 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Page Lifecycle",
        href: "https://htmlspecs.com/page-lifecycle",
        src: "https://wicg.github.io/page-lifecycle/",
        "last-modified": "Thu, 09 Jun 2022 17:26:10 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Server Timing",
        href: "https://htmlspecs.com/server-timing",
        src: "https://www.w3.org/TR/2023/WD-server-timing-20230411/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Paint Timing",
        href: "https://htmlspecs.com/paint-timing",
        src: "https://www.w3.org/TR/2025/WD-paint-timing-20251020/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Event Timing API",
        href: "https://htmlspecs.com/event-timing",
        src: "https://www.w3.org/TR/2025/WD-event-timing-20251017/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 安全和认证|보안 및 인증|セキュリティと認証
    {
        text: "Web Authentication Level 2",
        href: "https://htmlspecs.com/webauthn-2",
        src: "https://www.w3.org/TR/2021/REC-webauthn-2-20210408/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "HTML Sanitizer API",
        href: "https://htmlspecs.com/sanitizer-api",
        src: "https://wicg.github.io/sanitizer-api/",
        "last-modified": "Mon, 27 Oct 2025 13:43:31 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Subresource Integrity (SRI)",
        href: "https://htmlspecs.com/sri",
        src: "https://www.w3.org/TR/2016/REC-SRI-20160623/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Content Security Policy Level 3",
        href: "https://htmlspecs.com/CSP3",
        src: "https://www.w3.org/TR/2025/WD-CSP3-20250711/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Permissions Policy",
        href: "https://htmlspecs.com/permissions-policy",
        src: "https://www.w3.org/TR/2025/WD-permissions-policy-1-20251006/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Global Privacy Control (GPC)",
        href: "https://htmlspecs.com/gpc",
        src: "https://www.w3.org/TR/2025/WD-gpc-20250916/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Secure Contexts",
        href: "https://htmlspecs.com/secure-contexts",
        src: "https://www.w3.org/TR/2023/CRD-secure-contexts-20231110/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Referrer Policy",
        href: "https://htmlspecs.com/referrer-policy",
        src: "https://www.w3.org/TR/2017/CR-referrer-policy-20170126/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Mixed Content",
        href: "https://htmlspecs.com/mixed-content",
        src: "https://www.w3.org/TR/2023/CRD-mixed-content-20230223/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Credential Management Level 1",
        href: "https://htmlspecs.com/credential-management-1",
        src: "https://www.w3.org/TR/2024/WD-credential-management-1-20240813/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Federated Credential Management API (FedCM)",
        href: "https://htmlspecs.com/fedcm",
        src: "https://www.w3.org/TR/2024/WD-fedcm-1-20240820/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },


    //### 媒体和图形|미디어 및 그래픽|メディアとグラフィックス
    {
        text: "WebGPU",
        href: "https://htmlspecs.com/webgpu",
        src: "https://www.w3.org/TR/2025/CRD-webgpu-20251028/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebGPU Shading Language",
        href: "https://htmlspecs.com/WGSL",
        src: "https://www.w3.org/TR/2025/CRD-WGSL-20251024/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Web Animations",
        href: "https://htmlspecs.com/web-animations-1",
        src: "https://www.w3.org/TR/2023/WD-web-animations-1-20230605/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Scalable Vector Graphics (SVG) 2",
        href: "https://htmlspecs.com/SVG2/",
        src: "https://www.w3.org/TR/2018/CR-SVG2-20181004/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Picture-in-Picture",
        href: "https://htmlspecs.com/picture-in-picture",
        src: "https://www.w3.org/TR/2025/WD-picture-in-picture-20250820/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Presentation API",
        href: "https://htmlspecs.com/presentation-api",
        src: "https://www.w3.org/TR/2025/CRD-presentation-api-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Scroll-driven Animations",
        href: "https://htmlspecs.com/scroll-animations-1",
        src: "https://www.w3.org/TR/2023/WD-scroll-animations-1-20230606/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Capture and Streams",
        href: "https://htmlspecs.com/mediacapture-streams",
        src: "https://www.w3.org/TR/2025/CRD-mediacapture-streams-20251009/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Media Source Extensions",
        href: "https://htmlspecs.com/media-source-2",
        src: "https://www.w3.org/TR/2025/WD-media-source-2-20250821/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebCodecs",
        href: "https://htmlspecs.com/webcodecs",
        src: "https://www.w3.org/TR/2025/WD-webcodecs-20251027/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Session",
        href: "https://htmlspecs.com/mediasession",
        src: "https://www.w3.org/TR/2025/WD-mediasession-20250919/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Capabilities",
        href: "https://htmlspecs.com/media-capabilities",
        src: "https://www.w3.org/TR/2025/WD-media-capabilities-20250825/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Image Capture",
        href: "https://htmlspecs.com/image-capture",
        src: "https://www.w3.org/TR/2025/WD-image-capture-20250423/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Encrypted Media Extensions",
        href: "https://htmlspecs.com/encrypted-media-2",
        src: "https://www.w3.org/TR/2025/WD-encrypted-media-2-20250821/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Device API",
        href: "https://htmlspecs.com/webxr",
        src: "https://www.w3.org/TR/2025/CRD-webxr-20251001/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Portable Network Graphics (PNG) 3",
        href: "https://htmlspecs.com/png-3",
        src: "https://www.w3.org/TR/2025/REC-png-3-20250624/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },

    //### 开发者工具|개발자 도구|開発者ツール
    {
        text: "Console",
        href: "https://htmlspecs.com/console",
        src: "https://console.spec.whatwg.org/",
        "last-modified": "Tue, 12 Aug 2025 13:36:16 GMT",
        lang: "cjk",
        state: "LS"
    }
];

const cssLinks = [

    //## CSS|CSS|CSS
    {
        text: "CSS 2.2 Specification",
        href: "https://htmlspecs.com/css/css22/",
        src: "https://www.w3.org/TR/2016/WD-CSS22-20160412/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Understanding the CSS Specifications",
        href: "https://htmlspecs.com/css/read",
        src: "https://www.w3.org/Style/CSS/read",
        "last-modified": "Wed, 01 Oct 2025 10:17:52 GMT",
        lang: "cjk",
        state: "Guide"
    },

    //### 颜色|색상|色
    {
        text: "CSS Color Module Level 3",
        href: "https://htmlspecs.com/css/css-color-3",
        src: "https://www.w3.org/TR/2022/REC-css-color-3-20220118/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Color Module Level 4",
        href: "https://htmlspecs.com/css/css-color-4",
        src: "https://www.w3.org/TR/2025/CRD-css-color-4-20250424/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Color Module Level 5",
        href: "https://htmlspecs.com/css/css-color-5",
        src: "https://www.w3.org/TR/2025/WD-css-color-5-20250318/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Color Adjustment Module Level 1",
        href: "https://htmlspecs.com/css/css-color-adjust-1",
        src: "https://www.w3.org/TR/2025/CRD-css-color-adjust-1-20250812/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Filter Effects Module Level 1",
        href: "https://htmlspecs.com/css/filter-effects-1",
        src: "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Compositing and Blending Level 1",
        href: "https://htmlspecs.com/css/compositing-1",
        src: "https://www.w3.org/TR/2024/CRD-compositing-1-20240321/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Conditional Rules Module Level 3",
        href: "https://htmlspecs.com/css/css-conditional-3",
        src: "https://www.w3.org/TR/2024/CRD-css-conditional-3-20240815/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Conditional Rules Module Level 4",
        href: "https://htmlspecs.com/css/css-conditional-4",
        src: "https://www.w3.org/TR/2025/CRD-css-conditional-4-20250904/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Backgrounds and Borders Level 3",
        href: "https://htmlspecs.com/css/css-backgrounds-3",
        src: "https://www.w3.org/TR/2024/CRD-css-backgrounds-3-20240311/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Custom Highlight API Module Level 1",
        href: "https://htmlspecs.com/css/css-highlight-api-1",
        src: "https://www.w3.org/TR/2021/WD-css-highlight-api-1-20211215/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 字体|글꼴|フォント
    {
        text: "CSS Fonts Module Level 3",
        href: "https://htmlspecs.com/css/css-fonts-3",
        src: "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Fonts Module Level 4",
        href: "https://htmlspecs.com/css/css-fonts-4",
        src: "https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Font Loading Module Level 3",
        href: "https://htmlspecs.com/css/css-font-loading",
        src: "https://www.w3.org/TR/2023/WD-css-font-loading-3-20230406/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 文本和排版|텍스트 및 타이포그래피|テキストとタイポグラフィ
    {
        text: "CSS Text Module Level 3",
        href: "https://htmlspecs.com/css/css-text-3",
        src: "https://www.w3.org/TR/2024/CRD-css-text-3-20240930/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Text Module Level 4",
        href: "https://htmlspecs.com/css/css-text-4",
        src: "https://www.w3.org/TR/2024/WD-css-text-4-20240529/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Counter Styles Level 3",
        href: "https://htmlspecs.com/css/css-counter-styles-3",
        src: "https://www.w3.org/TR/2021/CR-css-counter-styles-3-20210727/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Lists and Counters Module Level 3",
        href: "https://htmlspecs.com/css/css-lists-3",
        src: "https://www.w3.org/TR/2020/WD-css-lists-3-20201117/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Text Decoration Level 3",
        href: "https://htmlspecs.com/css/css-text-decor-3",
        src: "https://www.w3.org/TR/2022/CRD-css-text-decor-3-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Text Decoration Level 4",
        href: "https://htmlspecs.com/css/css-text-decor-4",
        src: "https://www.w3.org/TR/2022/WD-css-text-decor-4-20220504/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Ruby Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-ruby-1",
        src: "https://www.w3.org/TR/2022/WD-css-ruby-1-20221231/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 媒体查询|미디어 쿼리|メディアクエリ
    {
        text: "Media Queries Level 3",
        href: "https://htmlspecs.com/css/mediaqueries-3",
        src: "https://www.w3.org/TR/2024/REC-mediaqueries-3-20240521/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Media Queries Level 4",
        href: "https://htmlspecs.com/css/mediaqueries-4",
        src: "https://www.w3.org/TR/2021/CRD-mediaqueries-4-20211225/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Media Queries Level 5",
        href: "https://htmlspecs.com/css/mediaqueries-5",
        src: "https://www.w3.org/TR/2021/WD-mediaqueries-5-20211218/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 布局|레이아웃|レイアウト
    {
        text: "CSS Box Model Level 3",
        href: "https://htmlspecs.com/css/css-box-3",
        src: "https://www.w3.org/TR/2024/REC-css-box-3-20240411/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Box Model Level 4",
        href: "https://htmlspecs.com/css/css-box-4",
        src: "https://www.w3.org/TR/2024/WD-css-box-4-20240804/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Display Module Level 3",
        href: "https://htmlspecs.com/css/css-display-3",
        src: "https://www.w3.org/TR/2023/CR-css-display-3-20230330/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Flexible Box Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-flexbox-1",
        src: "https://www.w3.org/TR/2025/CRD-css-flexbox-1-20251014/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-grid-1",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-1-20250326/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-grid-2",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-2-20250326/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-grid-3",
        src: "https://www.w3.org/TR/2025/WD-css-grid-3-20250917/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Inline Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-inline-3",
        src: "https://www.w3.org/TR/2024/WD-css-inline-3-20241218/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Multi-column Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-multicol-1",
        src: "https://www.w3.org/TR/2024/CR-css-multicol-1-20240516/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Shapes Module Level 1",
        href: "https://htmlspecs.com/css/css-shapes-1",
        src: "https://www.w3.org/TR/2025/CRD-css-shapes-1-20250612/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Positioned Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-position-3",
        src: "https://www.w3.org/TR/2025/WD-css-position-3-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Positioned Layout Module Level 4",
        href: "https://htmlspecs.com/css/css-position-4",
        src: "https://www.w3.org/TR/2025/WD-css-position-4-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Box Sizing Module Level 3",
        href: "https://htmlspecs.com/css/css-sizing-3",
        src: "https://www.w3.org/TR/2021/WD-css-sizing-3-20211217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Box Alignment Module Level 3",
        href: "https://htmlspecs.com/css/css-align-3",
        src: "https://www.w3.org/TR/2025/WD-css-align-3-20250311/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overflow Module Level 3",
        href: "https://htmlspecs.com/css/css-overflow-3",
        src: "https://www.w3.org/TR/2025/WD-css-overflow-3-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overflow Module Level 4",
        href: "https://htmlspecs.com/css/css-overflow-4",
        src: "https://www.w3.org/TR/2023/WD-css-overflow-4-20230321/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overflow Module Level 5",
        href: "https://htmlspecs.com/css/css-overflow-5",
        src: "https://www.w3.org/TR/2024/WD-css-overflow-5-20241217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Gap Decorations Module Level 1",
        href: "https://htmlspecs.com/css/css-gaps-1",
        src: "https://www.w3.org/TR/2025/WD-css-gaps-1-20250417/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Anchor Positioning Module Level 1",
        href: "https://htmlspecs.com/css/css-anchor-position-1",
        src: "https://www.w3.org/TR/2025/WD-css-anchor-position-1-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Anchor Positioning Module Level 2",
        href: "https://htmlspecs.com/css/css-anchor-position-2",
        src: "https://www.w3.org/TR/2025/WD-css-anchor-position-2-20251021/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 导航|내비게이션|ナビゲーション
    {
        text: "CSS Spatial Navigation Level 1",
        href: "https://htmlspecs.com/css/css-nav-1",
        src: "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 书写模式|쓰기 모드|書字モード
    {
        text: "CSS Writing Modes Level 3",
        href: "https://htmlspecs.com/css/css-writing-modes-3",
        src: "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Writing Modes Level 4",
        href: "https://htmlspecs.com/css/css-writing-modes-4",
        src: "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },

    //### 分割|분할|分割
    {
        text: "CSS Fragmentation Module Level 3",
        href: "https://htmlspecs.com/css/css-break-3",
        src: "https://www.w3.org/TR/2018/CR-css-break-3-20181204/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },

    //### 伪元素|의사 요소|疑似要素
    {
        text: "CSS Pseudo-Elements Module Level 4",
        href: "https://htmlspecs.com/css/css-pseudo-4",
        src: "https://www.w3.org/TR/2025/WD-css-pseudo-4-20250627/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 图像|이미지|画像
    {
        text: "CSS Images Module Level 3",
        href: "https://htmlspecs.com/css/css-images-3",
        src: "https://www.w3.org/TR/2023/CRD-css-images-3-20231218/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Images Module Level 4",
        href: "https://htmlspecs.com/css/css-images-4",
        src: "https://www.w3.org/TR/2025/WD-css-images-4-20250930/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Masking Module Level 1",
        href: "https://htmlspecs.com/css/css-masking-1",
        src: "https://www.w3.org/TR/2021/CRD-css-masking-1-20210805/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 变换和动画|변환 및 애니메이션|変換とアニメーション
    {
        text: "CSS Easing Functions Level 1",
        href: "https://htmlspecs.com/css/css-easing-1",
        src: "https://www.w3.org/TR/2023/CRD-css-easing-1-20230213/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Easing Functions Level 2",
        href: "https://htmlspecs.com/css/css-easing-2",
        src: "https://www.w3.org/TR/2024/WD-css-easing-2-20240829/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transforms Module Level 1",
        href: "https://htmlspecs.com/css/css-transforms-1",
        src: "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Transforms Module Level 2",
        href: "https://htmlspecs.com/css/css-transforms-2",
        src: "https://www.w3.org/TR/2021/WD-css-transforms-2-20211109/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transitions",
        href: "https://htmlspecs.com/css/css-transitions-1",
        src: "https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transitions Level 2",
        href: "https://htmlspecs.com/css/css-transitions-2",
        src: "https://www.w3.org/TR/2023/WD-css-transitions-2-20230905/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animations Level 1",
        href: "https://htmlspecs.com/css/css-animations-1",
        src: "https://www.w3.org/TR/2023/WD-css-animations-1-20230302/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animations Level 2",
        href: "https://htmlspecs.com/css/css-animations-2",
        src: "https://www.w3.org/TR/2023/WD-css-animations-2-20230602/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Motion Path Module Level 1",
        href: "https://htmlspecs.com/css/motion-1",
        src: "https://www.w3.org/TR/2024/WD-motion-1-20241105/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS View Transitions Module Level 1",
        href: "https://htmlspecs.com/css/css-view-transitions-1",
        src: "https://www.w3.org/TR/2024/CRD-css-view-transitions-1-20240328/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    {
        text: "CSS View Transitions Module Level 2",
        href: "https://htmlspecs.com/css/css-view-transitions-2",
        src: "https://www.w3.org/TR/2024/WD-css-view-transitions-2-20241113/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animation Worklet API",
        href: "https://htmlspecs.com/css/css-animation-worklet-1",
        src: "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 包含|컨테인먼트|コンテインメント
    {
        text: "CSS Containment Module Level 2",
        href: "https://htmlspecs.com/css/css-contain-2",
        src: "https://www.w3.org/TR/2022/WD-css-contain-2-20220917/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Containment Module Level 3",
        href: "https://htmlspecs.com/css/css-contain-3",
        src: "https://www.w3.org/TR/2022/WD-css-contain-3-20220818/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 语音|음성|音声
    {
        text: "CSS Speech Module Level 1",
        href: "https://htmlspecs.com/css/css-speech-1",
        src: "https://www.w3.org/TR/2023/CRD-css-speech-1-20230214/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 其他|기타|その他
    {
        text: "CSS Snapshot 2023",
        href: "https://htmlspecs.com/css/css-2023",
        src: "https://www.w3.org/TR/2023/NOTE-css-2023-20231207/",
        "last-modified": "-",
        lang: "c",
        state: "NOTE"
    },
    {
        text: "CSS Snapshot 2024",
        href: "https://htmlspecs.com/css/css-2024",
        src: "https://www.w3.org/TR/2025/NOTE-css-2024-20250225/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "CSS Snapshot 2025",
        href: "https://htmlspecs.com/css/css-2025",
        src: "https://www.w3.org/TR/2025/NOTE-css-2025-20250918/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "CSS Namespaces Module Level 3",
        href: "https://htmlspecs.com/css/css-namespaces-3",
        src: "https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Selectors Level 3",
        href: "https://htmlspecs.com/css/selectors-3",
        src: "https://www.w3.org/TR/2018/REC-selectors-3-20181106/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Selectors Level 4",
        href: "https://htmlspecs.com/css/selectors-4",
        src: "https://www.w3.org/TR/2022/WD-selectors-4-20221111/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Style Attributes",
        href: "https://htmlspecs.com/css/css-style-attr",
        src: "https://www.w3.org/TR/2013/REC-css-style-attr-20131107/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Overscroll Behavior Module Level 1",
        href: "https://htmlspecs.com/css/css-overscroll-1",
        src: "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Scroll Snap Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-snap-1",
        src: "https://www.w3.org/TR/2021/CR-css-scroll-snap-1-20210311/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Scroll Snap Module Level 2",
        href: "https://htmlspecs.com/css/css-scroll-snap-2",
        src: "https://www.w3.org/TR/2024/WD-css-scroll-snap-2-20240723/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Scrollbars Styling Module Level 1",
        href: "https://htmlspecs.com/css/css-scrollbars-1",
        src: "https://www.w3.org/TR/2021/CR-css-scrollbars-1-20211209/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Scroll Anchoring Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-anchoring-1",
        src: "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20201111/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Will Change Module Level 1",
        href: "https://htmlspecs.com/css/css-will-change-1",
        src: "https://www.w3.org/TR/2022/CRD-css-will-change-1-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Nesting Module Level 1",
        href: "https://htmlspecs.com/css/css-nesting-1",
        src: "https://www.w3.org/TR/2023/WD-css-nesting-1-20230214/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Custom Properties for Cascading Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-variables-1",
        src: "https://www.w3.org/TR/2022/CR-css-variables-1-20220616/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Object Model (CSSOM)",
        href: "https://htmlspecs.com/css/cssom-1",
        src: "https://www.w3.org/TR/2021/WD-cssom-1-20210826/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSSOM View Module",
        href: "https://htmlspecs.com/css/cssom-view",
        src: "https://www.w3.org/TR/2025/WD-cssom-view-1-20250916/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Cascading and Inheritance Level 3",
        href: "https://htmlspecs.com/css/css-cascade-3",
        src: "https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Cascading and Inheritance Level 4",
        href: "https://htmlspecs.com/css/css-cascade-4",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-4-20220113/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Cascading and Inheritance Level 5",
        href: "https://htmlspecs.com/css/css-cascade-5",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-5-20220113/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Cascading and Inheritance Level 6",
        href: "https://htmlspecs.com/css/css-cascade-6",
        src: "https://www.w3.org/TR/2024/WD-css-cascade-6-20240906/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Basic User Interface Module Level 3",
        href: "https://htmlspecs.com/css/css-ui-3",
        src: "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Basic User Interface Module Level 4",
        href: "https://htmlspecs.com/css/css-ui-4",
        src: "https://www.w3.org/TR/2021/WD-css-ui-4-20210316/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Syntax Module Level 3",
        href: "https://htmlspecs.com/css/css-syntax-3",
        src: "https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    {
        text: "CSS Values and Units Module Level 3",
        href: "https://htmlspecs.com/css/css-values-3",
        src: "https://www.w3.org/TR/2024/CRD-css-values-3-20240322/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Values and Units Module Level 4",
        href: "https://htmlspecs.com/css/css-values-4",
        src: "https://www.w3.org/TR/2024/WD-css-values-4-20240312/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Environment Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-env-1",
        src: "https://www.w3.org/TR/2025/WD-css-env-1-20250923/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Logical Properties and Values Level 1",
        href: "https://htmlspecs.com/css/css-logical-1",
        src: "https://www.w3.org/TR/2018/WD-css-logical-1-20180827/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Mixins Module Level 1",
        href: "https://htmlspecs.com/css/css-mixins-1",
        src: "https://www.w3.org/TR/2025/WD-css-mixins-1-20250515/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### CSS Houdini APIs|CSS Houdini API|CSS Houdini API
    {
        text: "CSS Typed OM Level 1",
        href: "https://htmlspecs.com/css/css-typed-om-1",
        src: "https://www.w3.org/TR/2024/WD-css-typed-om-1-20240321/",

        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Painting API Level 1",
        href: "https://htmlspecs.com/css/css-paint-api-1",
        src: "https://www.w3.org/TR/2021/CRD-css-paint-api-1-20211216/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Layout API Level 1",
        href: "https://htmlspecs.com/css/css-layout-api-1",
        src: "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Properties and Values API Level 1",
        href: "https://htmlspecs.com/css/css-properties-values-api-1",
        src: "https://www.w3.org/TR/2024/WD-css-properties-values-api-1-20240326/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    }
];
const httpLinks = [

    //## HTTP|HTTP|HTTP
    {
        text: "index",
        href: "https://htmlspecs.com/http/",
        src: "https://httpwg.org/specs/",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: ""
    },

    //### 核心规范|핵심 명세|コア仕様
    {
        text: "HTTP Semantics (RFC 9110)",
        href: "https://htmlspecs.com/http/rfc9110.html",
        src: "https://httpwg.org/specs/rfc9110.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Caching",
        href: "https://htmlspecs.com/http/rfc9111.html",
        src: "https://httpwg.org/specs/rfc9111.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/1.1",
        href: "https://htmlspecs.com/http/rfc9112.html",
        src: "https://httpwg.org/specs/rfc9112.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/2",
        href: "https://htmlspecs.com/http/rfc9113.html",
        src: "https://httpwg.org/specs/rfc9113.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/3",
        href: "https://htmlspecs.com/http/rfc9114.html",
        src: "https://httpwg.org/specs/rfc9114.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HPACK: Header Compression for HTTP/2",
        href: "https://htmlspecs.com/http/rfc7541.html",
        src: "https://httpwg.org/specs/rfc7541.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "QPACK: Field Compression for HTTP/3",
        href: "https://htmlspecs.com/http/rfc9204.html",
        src: "https://httpwg.org/specs/rfc9204.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Structured Field Values for HTTP",
        href: "https://htmlspecs.com/http/rfc9651.html",
        src: "https://httpwg.org/specs/rfc9651.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Building Protocols with HTTP",
        href: "https://htmlspecs.com/http/rfc9205.html",
        src: "https://httpwg.org/specs/rfc9205.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 方法|메서드|メソッド
    {
        text: "PATCH Method for HTTP",
        href: "https://htmlspecs.com/http/rfc5789.html",
        src: "https://httpwg.org/specs/rfc5789.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 状态码|상태 코드|状态码
    {
        text: "Additional HTTP Status Codes",
        href: "https://htmlspecs.com/http/rfc6585.html",
        src: "https://httpwg.org/specs/rfc6585.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "An HTTP Status Code to Report Legal Obstacles",
        href: "https://htmlspecs.com/http/rfc7725.html",
        src: "https://httpwg.org/specs/rfc7725.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "An HTTP Status Code for Indicating Hints",
        href: "https://htmlspecs.com/http/rfc8297.html",
        src: "https://httpwg.org/specs/rfc8297.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 缓存扩展|캐싱 확장|キャッシュ拡張
    {
        text: "HTTP Cache-Control Extensions for Stale Content",
        href: "https://htmlspecs.com/http/rfc5861.html",
        src: "https://httpwg.org/specs/rfc5861.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Immutable Responses",
        href: "https://htmlspecs.com/http/rfc8246.html",
        src: "https://httpwg.org/specs/rfc8246.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Cache-Status HTTP Response Header Field",
        href: "https://htmlspecs.com/http/rfc9211.html",
        src: "https://httpwg.org/specs/rfc9211.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Targeted HTTP Cache Control",
        href: "https://htmlspecs.com/http/rfc9213.html",
        src: "https://httpwg.org/specs/rfc9213.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 内容相关扩展|콘텐츠 관련 확장|コンテンツ関連の拡張
    {
        text: "HTTP State Management Mechanism",
        href: "https://htmlspecs.com/http/rfc6265.html",
        src: "https://httpwg.org/specs/rfc6265.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)",
        href: "https://htmlspecs.com/http/rfc6266.html",
        src: "https://httpwg.org/specs/rfc6266.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Hypertext Transfer Protocol (HTTP) Client-Initiated Content-Encoding",
        href: "https://htmlspecs.com/http/rfc7694.html",
        src: "https://httpwg.org/specs/rfc7694.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Prefer Header for HTTP",
        href: "https://htmlspecs.com/http/rfc7240.html",
        src: "https://httpwg.org/specs/rfc7240.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Web Linking",
        href: "https://htmlspecs.com/http/rfc8288.html",
        src: "https://httpwg.org/specs/rfc8288.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Compression Dictionary Transport",
        href: "https://htmlspecs.com/http/rfc9842.html",
        src: "https://httpwg.org/specs/rfc9842.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 连接与中介扩展|연결 및 중개자 확장|接続および中継拡張
    {
        text: "The ALPN HTTP Header Field",
        href: "https://htmlspecs.com/http/rfc7639.html",
        src: "https://httpwg.org/specs/rfc7639.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Alternative Services",
        href: "https://htmlspecs.com/http/rfc7838.html",
        src: "https://httpwg.org/specs/rfc7838.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The ORIGIN HTTP/2 Frame",
        href: "https://htmlspecs.com/http/rfc8336.html",
        src: "https://httpwg.org/specs/rfc8336.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Bootstrapping WebSockets with HTTP/2",
        href: "https://htmlspecs.com/http/rfc8441.html",
        src: "https://httpwg.org/specs/rfc8441.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Proxy-Status HTTP Response Header Field",
        href: "https://htmlspecs.com/http/rfc9209.html",
        src: "https://httpwg.org/specs/rfc9209.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Extensible Prioritization Scheme for HTTP",
        href: "https://htmlspecs.com/http/rfc9218.html",
        src: "https://httpwg.org/specs/rfc9218.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Bootstrapping WebSockets with HTTP/3",
        href: "https://htmlspecs.com/http/rfc9220.html",
        src: "https://httpwg.org/specs/rfc9220.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Proxying UDP in HTTP",
        href: "https://htmlspecs.com/http/rfc9298.html",
        src: "https://www.rfc-editor.org/rfc/rfc9298",
        "last-modified": "Wed, 22 Oct 2025 00:05:19 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The ORIGIN Extension in HTTP/3",
        href: "https://htmlspecs.com/http/rfc9412.html",
        src: "https://httpwg.org/specs/rfc9412.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Client-Cert HTTP Header Field",
        href: "https://htmlspecs.com/http/rfc9440.html",
        src: "https://httpwg.org/specs/rfc9440.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },

    //### 安全相关扩展|보안 관련 확장|セキュリティ関連の拡張
    {
        text: "HTTP Digest Access Authentication",
        href: "https://htmlspecs.com/http/rfc7616.html",
        src: "https://httpwg.org/specs/rfc7616.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The 'Basic' HTTP Authentication Scheme",
        href: "https://htmlspecs.com/http/rfc7617.html",
        src: "https://httpwg.org/specs/rfc7617.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Encrypted Content-Encoding for HTTP",
        href: "https://htmlspecs.com/http/rfc8188.html",
        src: "https://httpwg.org/specs/rfc8188.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Using Early Data in HTTP",
        href: "https://htmlspecs.com/http/rfc8470.html",
        src: "https://httpwg.org/specs/rfc8470.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Message Signatures",
        href: "https://htmlspecs.com/http/rfc9421.html",
        src: "https://httpwg.org/specs/rfc9421.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Digest Fields",
        href: "https://htmlspecs.com/http/rfc9530.html",
        src: "https://httpwg.org/specs/rfc9530.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Concealed HTTP Authentication Scheme",
        href: "https://htmlspecs.com/http/rfc9729.html",
        src: "https://httpwg.org/specs/rfc9729.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        lang: "cjk",
        state: "RFC"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { links, cssLinks, httpLinks };
}
