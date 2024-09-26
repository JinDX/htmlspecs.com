const links = [
    // Core Specifications
    {
        text: "HTML",
        href: "https://htmlspecs.com/",
        src: "https://html.spec.whatwg.org/multipage/",
        "last-modified": "Thu, 19 Sep 2024 08:12:39 GMT"
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
        "last-modified": "Fri, 20 Sep 2024 15:16:50 GMT"
    },

    // Accessibility
    {
        text: "Web Content Accessibility Guidelines (WCAG) 2.2",
        href: "https://htmlspecs.com/WCAG22",
        src: "https://www.w3.org/TR/WCAG22/",
        "last-modified": "Thu, 05 Oct 2023 08:30:43 GMT"
    },

    // URLs and Patterns
    {
        text: "URL",
        href: "https://htmlspecs.com/url",
        src: "https://url.spec.whatwg.org/",
        "last-modified": "Fri, 20 Sep 2024 15:08:47 GMT"
    },
    {
        text: "URL Pattern",
        href: "https://htmlspecs.com/urlpattern",
        src: "https://urlpattern.spec.whatwg.org/",
        "last-modified": "Thu, 29 Aug 2024 15:13:13 GMT"
    },

    // Network and Communication
    {
        text: "Fetch",
        href: "https://htmlspecs.com/fetch",
        src: "https://fetch.spec.whatwg.org/",
        "last-modified": "Fri, 20 Sep 2024 16:31:25 GMT"
    },
    {
        text: "WebSockets",
        href: "https://htmlspecs.com/websockets",
        src: "https://websockets.spec.whatwg.org/",
        "last-modified": "Wed, 24 Jan 2024 10:43:43 GMT"
    },
    {
        text: "Service Workers",
        href: "https://htmlspecs.com/service-workers",
        src: "https://www.w3.org/TR/service-workers/",
        "last-modified": "Mon, 11 Jul 2022 11:23:13 GMT"
    },
    {
        text: "Push API",
        href: "https://htmlspecs.com/push-api",
        src: "https://www.w3.org/TR/push-api/",
        "last-modified": "Tue, 03 Sep 2024 15:16:57 GMT"
    },
    {
        text: "WebRTC",
        href: "https://htmlspecs.com/webrtc",
        src: "https://www.w3.org/TR/webrtc/",
        "last-modified": "Mon, 06 Mar 2023 15:03:53 GMT"
    },
    {
        text: "Payment Request API",
        href: "https://htmlspecs.com/payment-request",
        src: "https://www.w3.org/TR/payment-request/",
        "last-modified": "Mon, 09 Sep 2024 18:06:00 GMT"
    },

    // Storage and Data
    {
        text: "Indexed Database API 3.0",
        href: "https://htmlspecs.com/IndexedDB",
        src: "https://www.w3.org/TR/IndexedDB-3/",
        "last-modified": "Tue, 12 Dec 2023 21:03:50 GMT"
    },
    {
        text: "Storage",
        href: "https://htmlspecs.com/storage",
        src: "https://storage.spec.whatwg.org/",
        "last-modified": "Fri, 20 Sep 2024 16:23:14 GMT"
    },
    {
        text: "File API",
        href: "https://htmlspecs.com/FileAPI",
        src: "https://www.w3.org/TR/FileAPI/",
        "last-modified": "Fri, 24 May 2024 17:07:26 GMT"
    },

    // Device and Hardware Access
    {
        text: "Pointer Events",
        href: "https://htmlspecs.com/pointerevents",
        src: "https://www.w3.org/TR/pointerevents/",
        "last-modified": "Tue, 02 Apr 2019 14:26:39 GMT"
    },
    {
        text: "Fullscreen",
        href: "https://htmlspecs.com/fullscreen",
        src: "https://fullscreen.spec.whatwg.org/",
        "last-modified": "Sat, 21 Sep 2024 09:07:00 GMT"
    },
    {
        text: "Notifications API",
        href: "https://htmlspecs.com/notifications",
        src: "https://notifications.spec.whatwg.org/",
        "last-modified": "Fri, 20 Sep 2024 15:48:55 GMT"
    },
    {
        text: "Web Share API",
        href: "https://htmlspecs.com/web-share",
        src: "https://www.w3.org/TR/web-share/",
        "last-modified": "Mon, 29 May 2023 12:52:08 GMT"
    },
    {
        text: "Web Audio API",
        href: "https://htmlspecs.com/webaudio",
        src: "https://www.w3.org/TR/webaudio/",
        "last-modified": "Tue, 08 Jun 2021 17:24:13 GMT"
    },
    {
        text: "Geolocation API",
        href: "https://htmlspecs.com/geolocation",
        src: "https://www.w3.org/TR/geolocation/",
        "last-modified": "Mon, 16 Sep 2024 19:13:56 GMT"
    },
    {
        text: "Device Orientation and Motion",
        href: "https://htmlspecs.com/orientation-event",
        src: "https://www.w3.org/TR/orientation-event/",
        "last-modified": "Tue, 14 May 2024 10:35:28 GMT"
    },
    {
        text: "Pointer Lock 2.0",
        href: "https://htmlspecs.com/pointerlock",
        src: "https://www.w3.org/TR/pointerlock-2/",
        "last-modified": "Mon, 17 Jun 2024 13:51:21 GMT"
    },
    {
        text: "Clipboard API and events",
        href: "https://htmlspecs.com/clipboard-apis",
        src: "https://www.w3.org/TR/clipboard-apis/",
        "last-modified": "Mon, 15 May 2023 16:35:00 GMT"
    },
    {
        text: "Input Events Level 1",
        href: "https://htmlspecs.com/input-events-1",
        src: "https://www.w3.org/TR/input-events-1/",
        "last-modified": "Wed, 27 Sep 2023 16:15:26 GMT"
    },

    // Performance and Observers
    {
        text: "Performance Timeline",
        href: "https://htmlspecs.com/performance-timeline",
        src: "https://www.w3.org/TR/performance-timeline/",
        "last-modified": "Fri, 16 Feb 2024 15:19:07 GMT"
    },
    {
        text: "Intersection Observer",
        href: "https://htmlspecs.com/intersection-observer",
        src: "https://www.w3.org/TR/intersection-observer/",
        "last-modified": "Wed, 18 Oct 2023 15:54:57 GMT"
    },
    {
        text: "Resize Observer",
        href: "https://htmlspecs.com/resize-observer",
        src: "https://www.w3.org/TR/resize-observer/",
        "last-modified": "Mon, 10 Feb 2020 13:28:11 GMT"
    },
    {
        text: "Navigation Timing Level 2",
        href: "https://htmlspecs.com/navigation-timing-2",
        src: "https://www.w3.org/TR/navigation-timing-2/",
        "last-modified": "Mon, 29 Jul 2024 11:00:31 GMT"
    },
    {
        text: "Resource Timing",
        href: "https://htmlspecs.com/resource-timing",
        src: "https://www.w3.org/TR/resource-timing/",
        "last-modified": "Fri, 24 May 2024 19:46:20 GMT"
    },
    {
        text: "User Timing Level 2",
        href: "https://htmlspecs.com/user-timing-2",
        src: "https://www.w3.org/TR/user-timing-2/",
        "last-modified": "Mon, 25 Feb 2019 00:38:04 GMT"
    },

    // Security and Authentication
    {
        text: "Web Authentication Level 2",
        href: "https://htmlspecs.com/webauthn-2",
        src: "https://www.w3.org/TR/webauthn-2/",
        "last-modified": "Tue, 06 Apr 2021 20:44:57 GMT"
    },

    // Media and Graphics
    {
        text: "Web Animations",
        href: "https://htmlspecs.com/web-animations-1",
        src: "https://www.w3.org/TR/web-animations-1/",
        "last-modified": "Mon, 05 Jun 2023 02:28:05 GMT"
    },

    // Developer Tools
    {
        text: "Console",
        href: "https://htmlspecs.com/console",
        src: "https://console.spec.whatwg.org/",
        "last-modified": "Mon, 23 Sep 2024 18:57:53 GMT"
    }
];


const cssLinks = [
    // Foundational
    {
        text: "CSS Snapshot 2023",
        href: "https://htmlspecs.com/css/css-2023",
        src: "https://www.w3.org/TR/css-2023/",
        "last-modified": "Tue, 05 Dec 2023 16:06:23 GMT"
    },
    {
        text: "CSS 2.2 Specification",
        href: "https://htmlspecs.com/css/css22/",
        src: "https://www.w3.org/TR/CSS22/",
        "last-modified": "Fri, 08 Apr 2016 13:16:51 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 3",
        href: "https://htmlspecs.com/css/css-cascade-3",
        src: "https://www.w3.org/TR/css-cascade-3/",
        "last-modified": "Mon, 08 Feb 2021 18:06:41 GMT"
    },
    {
        text: "CSS Cascading and Inheritance Level 4",
        href: "https://htmlspecs.com/css/css-cascade-4",
        src: "https://www.w3.org/TR/css-cascade-4/",
        "last-modified": "Tue, 11 Jan 2022 15:25:49 GMT"
    },
    {
        text: "CSS Style Attributes",
        href: "https://htmlspecs.com/css/css-style-attr",
        src: "https://www.w3.org/TR/css-style-attr/",
        "last-modified": "Mon, 02 Oct 2017 11:05:50 GMT"
    },
    {
        text: "CSS Namespaces",
        href: "https://htmlspecs.com/css/css-namespaces-3",
        src: "https://www.w3.org/TR/css-namespaces-3/",
        "last-modified": "Mon, 02 Oct 2017 11:17:11 GMT"
    },
    {
        text: "Selectors Level 3",
        href: "https://htmlspecs.com/css/selectors-3",
        src: "https://www.w3.org/TR/selectors-3/",
        "last-modified": "Sat, 03 Nov 2018 11:48:44 GMT"
    },
    {
        text: "CSS Basic User Interface Level 3",
        href: "https://htmlspecs.com/css/css-ui-3",
        src: "https://www.w3.org/TR/css-ui-3/",
        "last-modified": "Thu, 21 Jun 2018 16:29:59 GMT"
    },
    {
        text: "CSS Syntax Module Level 3",
        href: "https://htmlspecs.com/css/css-syntax-3",
        src: "https://www.w3.org/TR/css-syntax-3/",
        "last-modified": "Fri, 24 Dec 2021 22:58:34 GMT"
    },
    {
        text: "CSS Values and Units Module Level 3",
        href: "https://htmlspecs.com/css/css-values-3",
        src: "https://www.w3.org/TR/css-values-3/",
        "last-modified": "Fri, 22 Mar 2024 21:15:08 GMT"
    },

    // Box Model and Display
    {
        text: "CSS Box Model Level 3",
        href: "https://htmlspecs.com/css/css-box-3",
        src: "https://www.w3.org/TR/css-box-3/",
        "last-modified": "Thu, 04 Apr 2024 18:41:52 GMT"
    },
    {
        text: "CSS Box Model Level 4",
        href: "https://htmlspecs.com/css/css-box-4",
        src: "https://www.w3.org/TR/css-box-4/",
        "last-modified": "Sun, 04 Aug 2024 03:01:12 GMT"
    },
    {
        text: "CSS Display Module Level 3",
        href: "https://htmlspecs.com/css/css-display-3",
        src: "https://www.w3.org/TR/css-display-3/",
        "last-modified": "Mon, 27 Mar 2023 16:25:32 GMT"
    },
    {
        text: "CSS Backgrounds and Borders Level 3",
        href: "https://htmlspecs.com/css/css-backgrounds-3",
        src: "https://www.w3.org/TR/css-backgrounds-3/",
        "last-modified": "Mon, 11 Mar 2024 17:22:44 GMT"
    },
    {
        text: "CSS Box Alignment Module Level 3",
        href: "https://htmlspecs.com/css/css-align-3",
        src: "https://www.w3.org/TR/css-align-3/",
        "last-modified": "Fri, 17 Feb 2023 19:17:10 GMT"
    },

    // Colors
    {
        text: "CSS Color Module Level 3",
        href: "https://htmlspecs.com/css/css-color-3",
        src: "https://www.w3.org/TR/css-color-3/",
        "last-modified": "Thu, 13 Jan 2022 23:33:53 GMT"
    },
    {
        text: "CSS Color Module Level 5",
        href: "https://htmlspecs.com/css/css-color-5",
        src: "https://www.w3.org/TR/css-color-5/",
        "last-modified": "Tue, 27 Feb 2024 16:44:48 GMT"
    },
    {
        text: "CSS Filter Effects Module Level 1",
        href: "https://htmlspecs.com/css/filter-effects-1",
        src: "https://www.w3.org/TR/filter-effects-1/",
        "last-modified": "Fri, 14 Dec 2018 21:57:00 GMT"
    },
    {
        text: "Compositing and Blending Level 1",
        href: "https://htmlspecs.com/css/compositing-1",
        src: "https://www.w3.org/TR/compositing-1/",
        "last-modified": "Sat, 16 Mar 2024 21:04:22 GMT"
    },

    // Fonts
    {
        text: "CSS Fonts Module Level 3",
        href: "https://htmlspecs.com/css/css-fonts-3",
        src: "https://www.w3.org/TR/css-fonts-3/",
        "last-modified": "Thu, 21 Feb 2019 13:58:59 GMT"
    },
    {
        text: "CSS Fonts Module Level 4",
        href: "https://htmlspecs.com/css/css-fonts-4",
        src: "https://www.w3.org/TR/css-fonts-4/",
        "last-modified": "Wed, 31 Jan 2024 18:20:40 GMT"
    },

    // Text and Typography
    {
        text: "CSS Text Module Level 3",
        href: "https://htmlspecs.com/css/css-text-3",
        src: "https://www.w3.org/TR/css-text-3/",
        "last-modified": "Sun, 03 Sep 2023 22:27:00 GMT"
    },
    {
        text: "CSS Text Module Level 4",
        href: "https://htmlspecs.com/css/css-text-4",
        src: "https://www.w3.org/TR/css-text-4/",
        "last-modified": "Wed, 29 May 2024 07:54:37 GMT"
    },

    // Media Queries
    {
        text: "Media Queries Level 3",
        href: "https://htmlspecs.com/css/mediaqueries-3",
        src: "https://www.w3.org/TR/mediaqueries-3/",
        "last-modified": "Tue, 21 May 2024 05:35:40 GMT"
    },
    {
        text: "Media Queries Level 5",
        href: "https://htmlspecs.com/css/mediaqueries-5",
        src: "https://www.w3.org/TR/mediaqueries-5/",
        "last-modified": "Sat, 18 Dec 2021 03:42:04 GMT"
    },

    // Layout
    {
        text: "CSS Flexible Box Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-flexbox-1",
        src: "https://www.w3.org/TR/css-flexbox-1/",
        "last-modified": "Mon, 19 Nov 2018 09:06:30 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-grid-1",
        src: "https://www.w3.org/TR/css-grid-1/",
        "last-modified": "Fri, 18 Dec 2020 19:24:48 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-grid-2",
        src: "https://www.w3.org/TR/css-grid-2/",
        "last-modified": "Fri, 18 Dec 2020 19:25:43 GMT"
    },
    {
        text: "CSS Grid Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-grid-3",
        src: "https://www.w3.org/TR/css-grid-3/",
        "last-modified": "Tue, 17 Sep 2024 16:27:52 GMT"
    },
    {
        text: "CSS Multi-column Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-multicol-1",
        src: "https://www.w3.org/TR/css-multicol-1/",
        "last-modified": "Tue, 14 May 2024 20:30:50 GMT"
    },
    {
        text: "CSS Shapes Module Level 1",
        href: "https://htmlspecs.com/css/css-shapes-1",
        src: "https://www.w3.org/TR/css-shapes-1/",
        "last-modified": "Thu, 10 Nov 2022 21:13:52 GMT"
    },

    // Writing Modes
    {
        text: "CSS Writing Modes Level 3",
        href: "https://htmlspecs.com/css/css-writing-modes-3",
        src: "https://www.w3.org/TR/css-writing-modes-3/",
        "last-modified": "Thu, 30 Apr 2020 16:55:21 GMT"
    },

    // Pseudo-elements
    {
        text: "CSS Pseudo-Elements Module Level 4",
        href: "https://htmlspecs.com/css/css-pseudo-4",
        src: "https://www.w3.org/TR/css-pseudo-4/",
        "last-modified": "Fri, 30 Dec 2022 01:46:06 GMT"
    },

    // Images
    {
        text: "CSS Images Module Level 4",
        href: "https://htmlspecs.com/css/css-images-4",
        src: "https://www.w3.org/TR/css-images-4/",
        "last-modified": "Fri, 17 Feb 2023 19:20:53 GMT"
    },

    // Transforms and Animations
    {
        text: "CSS Easing Functions Level 1",
        href: "https://htmlspecs.com/css/css-easing-1",
        src: "https://www.w3.org/TR/css-easing-1/",
        "last-modified": "Mon, 13 Feb 2023 22:59:19 GMT"
    },
    {
        text: "CSS Easing Functions Level 2",
        href: "https://htmlspecs.com/css/css-easing-2",
        src: "https://www.w3.org/TR/css-easing-2/",
        "last-modified": "Wed, 28 Aug 2024 15:46:16 GMT"
    },
    {
        text: "CSS Transforms Module Level 1",
        href: "https://htmlspecs.com/css/css-transforms-1",
        src: "https://www.w3.org/TR/css-transforms-1/",
        "last-modified": "Thu, 14 Feb 2019 11:32:56 GMT"
    },
    {
        text: "CSS Transforms Module Level 2",
        href: "https://htmlspecs.com/css/css-transforms-2",
        src: "https://www.w3.org/TR/css-transforms-2/",
        "last-modified": "Tue, 09 Nov 2021 18:24:25 GMT"
    },
    {
        text: "CSS Transitions Level 2",
        href: "https://htmlspecs.com/css/css-transitions-2",
        src: "https://www.w3.org/TR/css-transitions-2/",
        "last-modified": "Thu, 31 Aug 2023 12:15:50 GMT"
    },
    {
        text: "CSS Animations Level 1",
        href: "https://htmlspecs.com/css/css-animations-1",
        src: "https://www.w3.org/TR/css-animations-1/",
        "last-modified": "Mon, 27 Feb 2023 17:40:55 GMT"
    },
    {
        text: "CSS Animations Level 2",
        href: "https://htmlspecs.com/css/css-animations-2",
        src: "https://www.w3.org/TR/css-animations-2/",
        "last-modified": "Fri, 02 Jun 2023 22:07:34 GMT"
    },
    {
        text: "CSS Motion Path Module Level 1",
        href: "https://htmlspecs.com/css/motion-1",
        src: "https://www.w3.org/TR/motion-1/",
        "last-modified": "Fri, 14 Dec 2018 22:58:15 GMT"
    },
    {
        text: "CSS Animation Worklet API",
        href: "https://htmlspecs.com/css/css-animation-worklet-1",
        src: "https://www.w3.org/TR/css-animation-worklet-1/",
        "last-modified": "Tue, 25 Jun 2019 13:20:26 GMT"
    },

    // Containment
    {
        text: "CSS Containment Module Level 2",
        href: "https://htmlspecs.com/css/css-contain-2",
        src: "https://www.w3.org/TR/css-contain-2/",
        "last-modified": "Sat, 17 Sep 2022 18:01:51 GMT"
    },
    {
        text: "CSS Containment Module Level 3",
        href: "https://htmlspecs.com/css/css-contain-3",
        src: "https://www.w3.org/TR/css-contain-3/",
        "last-modified": "Thu, 18 Aug 2022 21:50:48 GMT"
    },

    // Others
    {
        text: "CSS Overscroll Behavior",
        href: "https://htmlspecs.com/css/css-overscroll-1",
        src: "https://www.w3.org/TR/css-overscroll-1/",
        "last-modified": "Tue, 04 Jun 2019 20:42:28 GMT"
    },
    {
        text: "CSS Scroll Snap Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-snap-1",
        src: "https://www.w3.org/TR/css-scroll-snap-1/",
        "last-modified": "Wed, 10 Mar 2021 20:56:24 GMT"
    },
    {
        text: "CSS Scrollbars Styling Module Level 1",
        href: "https://htmlspecs.com/css/css-scrollbars-1",
        src: "https://www.w3.org/TR/css-scrollbars-1/",
        "last-modified": "Tue, 07 Dec 2021 00:51:03 GMT"
    },
    

    // CSS Variables and CSSOM
    {
        text: "CSS Custom Properties for Cascading Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-variables-1",
        src: "https://www.w3.org/TR/css-variables-1/",
        "last-modified": "Mon, 13 Jun 2022 11:56:06 GMT"
    },
    {
        text: "CSS Object Model (CSSOM)",
        href: "https://htmlspecs.com/css/cssom-1",
        src: "https://www.w3.org/TR/cssom-1/",
        "last-modified": "Tue, 24 Aug 2021 16:27:03 GMT"
    },

    // CSS Houdini APIs
    {
        text: "CSS Typed OM Level 1",
        href: "https://htmlspecs.com/css/css-typed-om-1",
        src: "https://www.w3.org/TR/css-typed-om-1/",
        "last-modified": "Wed, 20 Mar 2024 01:45:59 GMT"
    },
    {
        text: "CSS Paint API Level 1",
        href: "https://htmlspecs.com/css/css-paint-api-1",
        src: "https://www.w3.org/TR/css-paint-api-1/",
        "last-modified": "Thu, 16 Dec 2021 20:44:15 GMT"
    },
    {
        text: "CSS Layout API Level 1",
        href: "https://htmlspecs.com/css/css-layout-api-1",
        src: "https://www.w3.org/TR/css-layout-api-1/",
        "last-modified": "Tue, 10 Apr 2018 13:26:35 GMT"
    },
    {
        text: "CSS Properties and Values API Level 1",
        href: "https://htmlspecs.com/css/css-properties-values-api-1",
        src: "https://www.w3.org/TR/css-properties-values-api-1/",
        "last-modified": "Fri, 22 Mar 2024 13:06:46 GMT"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { links, cssLinks };
}