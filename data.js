const links = [
    //# htmlspecs.com|ko.htmlspecs.com|jp.htmlspecs.com
    // HTML 及相关 API，CSS 标准系列，HTTP 标准系列 🌐📡 | HTML 및 관련 API, CSS 표준 시리즈, HTTP 표준 시리즈 🌐📡 | HTML および関連 API、CSS 仕様シリーズ、HTTP 仕様シリーズ 🌐📡

    //### 平台核心、语言与基础设施|플랫폼 핵심, 언어 및 기반|プラットフォーム中核・言語・基盤
    {
        text: "HTML",
        href: "https://htmlspecs.com/",
        src: "https://html.spec.whatwg.org/",
        "last-modified": "Fri, 12 Jun 2026 10:56:02 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "ECMAScript® 2027 Language Specification",
        href: "https://ecma262.com/",
        src: "https://tc39.es/ecma262/",
        "last-modified": "Sun, 14 Jun 2026 14:58:56 GMT",
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
        text: "Source map format specification",
        href: "https://htmlspecs.com/ecma426/",
        src: "https://tc39.es/ecma426/",
        "last-modified": "Wed, 27 May 2026 21:59:07 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebAssembly JavaScript Interface",
        href: "https://htmlspecs.com/wasm-js-api-2/",
        src: "https://www.w3.org/TR/2026/CRD-wasm-js-api-2-20260527/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebAssembly Web API",
        href: "https://htmlspecs.com/wasm-web-api-2/",
        src: "https://www.w3.org/TR/2026/CRD-wasm-web-api-2-20260527/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "DOM",
        href: "https://htmlspecs.com/dom/",
        src: "https://dom.spec.whatwg.org/",
        "last-modified": "Thu, 28 May 2026 07:25:09 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "DOM Parsing and Serialization",
        href: "https://htmlspecs.com/dom-parsing/",
        src: "https://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "URL",
        href: "https://htmlspecs.com/url/",
        src: "https://url.spec.whatwg.org/",
        "last-modified": "Thu, 04 Jun 2026 13:37:44 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "URL Pattern",
        href: "https://htmlspecs.com/urlpattern/",
        src: "https://urlpattern.spec.whatwg.org/",
        "last-modified": "Fri, 20 Mar 2026 07:58:49 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web IDL",
        href: "https://htmlspecs.com/webidl/",
        src: "https://webidl.spec.whatwg.org/",
        "last-modified": "Tue, 26 May 2026 07:20:27 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Encoding",
        href: "https://htmlspecs.com/encoding/",
        src: "https://encoding.spec.whatwg.org/",
        "last-modified": "Thu, 21 May 2026 05:11:18 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "MIME Sniffing",
        href: "https://htmlspecs.com/mimesniff/",
        src: "https://mimesniff.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:08:47 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Infra",
        href: "https://htmlspecs.com/infra/",
        src: "https://infra.spec.whatwg.org/",
        "last-modified": "Fri, 08 May 2026 12:45:16 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web User Agents",
        href: "https://htmlspecs.com/web-user-agents/",
        src: "https://www.w3.org/TR/2026/DNOTE-web-user-agents-20260319/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Compatibility",
        href: "https://htmlspecs.com/compat/",
        src: "https://compat.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:07:44 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Web Platform Design Principles",
        href: "https://htmlspecs.com/design-principles/",
        src: "https://www.w3.org/TR/2026/NOTE-design-principles-20260224/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Compression",
        href: "https://htmlspecs.com/compression/",
        src: "https://compression.spec.whatwg.org/",
        "last-modified": "Mon, 20 Apr 2026 07:59:17 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Quirks Mode",
        href: "https://htmlspecs.com/quirks/",
        src: "https://quirks.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 12:29:42 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Minimum common web API",
        href: "https://htmlspecs.com/min-common-api/",
        src: "https://min-common-api.proposal.wintertc.org/",
        "last-modified": "Tue, 28 Apr 2026 19:54:02 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 国际化与本地化|국제화 및 지역화|国際化とローカライゼーション
    {
        text: "ECMAScript® 2027 Internationalization API Specification",
        href: "https://htmlspecs.com/ecma402/",
        src: "https://tc39.es/ecma402/",
        "last-modified": "Thu, 11 Jun 2026 18:23:42 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Language Tags and Locale Identifiers for the World Wide Web",
        href: "https://htmlspecs.com/ltli/",
        src: "https://www.w3.org/TR/2020/WD-ltli-20201007",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Strings on the Web: Language and Direction Metadata",
        href: "https://htmlspecs.com/string-meta/",
        src: "https://www.w3.org/TR/2024/NOTE-string-meta-20241017/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Internationalization Best Practices for Spec Developers",
        href: "https://htmlspecs.com/international-specs/",
        src: "https://www.w3.org/TR/2025/NOTE-international-specs-20250808/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Character Model for the World Wide Web: String Matching",
        href: "https://htmlspecs.com/charmod-norm/",
        src: "https://www.w3.org/TR/2021/NOTE-charmod-norm-20210811/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "String Searching",
        href: "https://htmlspecs.com/string-search/",
        src: "https://www.w3.org/TR/2025/DNOTE-string-search-20250107/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "Language enablement index",
        href: "https://htmlspecs.com/typography/",
        src: "https://www.w3.org/TR/2024/DNOTE-typography-20241115/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },

    //### 数据格式、语义 Web 与 API 描述|데이터 형식, 시맨틱 웹 및 API 설명|データ形式・セマンティック Web・API 記述
    {
        text: "The JavaScript Object Notation (JSON) Data Interchange Format",
        href: "https://htmlspecs.com/json/",
        src: "https://www.rfc-editor.org/rfc/rfc8259.html",
        "last-modified": "0",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON-LD 1.1",
        href: "https://htmlspecs.com/json-ld11/",
        src: "https://www.w3.org/TR/2020/REC-json-ld11-20200716/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "JSON-LD 1.1 Processing Algorithms and API",
        href: "https://htmlspecs.com/json-ld11-api/",
        src: "https://www.w3.org/TR/2020/REC-json-ld11-api-20200716/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "JSON-LD 1.1 Framing",
        href: "https://htmlspecs.com/json-ld11-framing/",
        src: "https://www.w3.org/TR/2020/REC-json-ld11-framing-20200716/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "JavaScript Object Notation (JSON) Pointer",
        href: "https://htmlspecs.com/json-pointer/",
        src: "https://www.rfc-editor.org/rfc/rfc6901.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSONPath: Query Expressions for JSON",
        href: "https://htmlspecs.com/jsonpath/",
        src: "https://www.rfc-editor.org/rfc/rfc9535.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JavaScript Object Notation (JSON) Patch",
        href: "https://htmlspecs.com/json-patch/",
        src: "https://www.rfc-editor.org/rfc/rfc6902.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Merge Patch",
        href: "https://htmlspecs.com/json-merge-patch/",
        src: "https://www.rfc-editor.org/rfc/rfc7396.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JavaScript Object Notation (JSON) Text Sequences",
        href: "https://htmlspecs.com/json-seq/",
        src: "https://www.rfc-editor.org/rfc/rfc7464.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The I-JSON Message Format",
        href: "https://htmlspecs.com/i-json/",
        src: "https://www.rfc-editor.org/rfc/rfc7493.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Canonicalization Scheme (JCS)",
        href: "https://htmlspecs.com/json-canonicalization/",
        src: "https://www.rfc-editor.org/rfc/rfc8785.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Type Definition",
        href: "https://htmlspecs.com/json-type-definition/",
        src: "https://www.rfc-editor.org/rfc/rfc8927.html",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "ActivityPub",
        href: "https://htmlspecs.com/activitypub/",
        src: "https://www.w3.org/TR/2018/REC-activitypub-20180123/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Activity Streams 2.0",
        href: "https://htmlspecs.com/activitystreams-core/",
        src: "https://www.w3.org/TR/2017/REC-activitystreams-core-20170523/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Linked Data Notifications",
        href: "https://htmlspecs.com/ldn/",
        src: "https://www.w3.org/TR/2017/REC-ldn-20170502/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Webmention",
        href: "https://htmlspecs.com/webmention/",
        src: "https://www.w3.org/TR/2017/REC-webmention-20170112/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Micropub",
        href: "https://htmlspecs.com/micropub/",
        src: "https://www.w3.org/TR/2017/REC-micropub-20170523/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Web Annotation Data Model",
        href: "https://htmlspecs.com/annotation-model/",
        src: "https://www.w3.org/TR/2017/REC-annotation-model-20170223/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Data on the Web Best Practices",
        href: "https://htmlspecs.com/dwbp/",
        src: "https://www.w3.org/TR/2017/REC-dwbp-20170131/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "GraphQL",
        href: "https://htmlspecs.com/graphql/",
        src: "https://spec.graphql.org/draft/",
        "last-modified": "Thu, 04 Jun 2026 17:54:02 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "OpenAPI Specification v3.2.0",
        href: "https://htmlspecs.com/openapi/",
        src: "https://spec.openapis.org/oas/latest.html",
        "last-modified": "Tue, 02 Jun 2026 17:33:23 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 数学|수학|数学
    {
        text: "MathML Core",
        href: "https://htmlspecs.com/mathml-core/",
        src: "https://www.w3.org/TR/2025/CR-mathml-core-20250624/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "MathML4",
        href: "https://htmlspecs.com/mathml4/",
        src: "https://www.w3.org/TR/2026/WD-mathml4-20260604/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### Web 应用、安装与生命周期|웹 앱, 설치 및 수명주기|Web アプリ・インストール・ライフサイクル
    {
        text: "Web Application Manifest",
        href: "https://htmlspecs.com/appmanifest/",
        src: "https://www.w3.org/TR/2026/WD-appmanifest-20260507/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web App Launch Handler API",
        href: "https://htmlspecs.com/web-app-launch/",
        src: "https://wicg.github.io/web-app-launch/",
        "last-modified": "Mon, 23 Sep 2024 21:28:03 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Manifest Incubations",
        href: "https://htmlspecs.com/manifest-incubations/",
        src: "https://wicg.github.io/manifest-incubations/",
        "last-modified": "Fri, 29 May 2026 17:01:20 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Developing Localizable Manifests",
        href: "https://htmlspecs.com/localizable-manifests/",
        src: "https://www.w3.org/TR/2025/NOTE-localizable-manifests-20250214/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Web App Manifest - Application Information",
        href: "https://htmlspecs.com/manifest-app-info/",
        src: "https://www.w3.org/TR/2023/NOTE-manifest-app-info-20230821/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Get Installed Related Apps API",
        href: "https://htmlspecs.com/get-installed-related-apps/",
        src: "https://wicg.github.io/get-installed-related-apps/spec/",
        "last-modified": "Thu, 16 Sep 2021 12:20:48 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Service Workers Nightly",
        href: "https://htmlspecs.com/service-workers/",
        src: "https://www.w3.org/TR/2026/CRD-service-workers-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 网络、传输与实时通信|네트워크, 전송 및 실시간 통신|ネットワーク・転送・リアルタイム通信
    {
        text: "Fetch",
        href: "https://htmlspecs.com/fetch/",
        src: "https://fetch.spec.whatwg.org/",
        "last-modified": "Fri, 05 Jun 2026 07:47:47 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Streams",
        href: "https://htmlspecs.com/streams/",
        src: "https://streams.spec.whatwg.org/",
        "last-modified": "Mon, 18 May 2026 19:59:41 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "XMLHttpRequest",
        href: "https://htmlspecs.com/xhr/",
        src: "https://xhr.spec.whatwg.org/",
        "last-modified": "Thu, 14 May 2026 14:27:44 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "WebSockets",
        href: "https://htmlspecs.com/websockets/",
        src: "https://websockets.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 11:48:21 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "WebSub",
        href: "https://htmlspecs.com/websub/",
        src: "https://www.w3.org/TR/2026/REC-websub-20260602/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Private Network Access",
        href: "https://htmlspecs.com/private-network-access/",
        src: "https://wicg.github.io/private-network-access/",
        "last-modified": "Thu, 26 Sep 2024 08:21:57 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Local Network Access",
        href: "https://htmlspecs.com/local-network-access/",
        src: "https://wicg.github.io/local-network-access/",
        "last-modified": "Wed, 06 May 2026 20:00:43 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebTransport",
        href: "https://htmlspecs.com/webtransport/",
        src: "https://www.w3.org/TR/2026/WD-webtransport-20260325/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "User-Agent Client Hints",
        href: "https://htmlspecs.com/ua-client-hints/",
        src: "https://wicg.github.io/ua-client-hints/",
        "last-modified": "Tue, 10 Feb 2026 14:27:19 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Trace Context Level 2",
        href: "https://htmlspecs.com/trace-context-2/",
        src: "https://www.w3.org/TR/2024/CRD-trace-context-2-20240328/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Baggage",
        href: "https://htmlspecs.com/baggage/",
        src: "https://www.w3.org/TR/2024/CR-baggage-20240530/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Beacon",
        href: "https://htmlspecs.com/beacon/",
        src: "https://www.w3.org/TR/2022/CRD-beacon-20220803/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Network Error Logging",
        href: "https://htmlspecs.com/network-error-logging/",
        src: "https://www.w3.org/TR/2025/WD-network-error-logging-20250505/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 离线、后台与通知|오프라인, 백그라운드 및 알림|オフライン・バックグラウンド・通知
    {
        text: "Web Background Synchronization",
        href: "https://htmlspecs.com/background-sync/",
        src: "https://wicg.github.io/background-sync/spec/",
        "last-modified": "Fri, 12 Nov 2021 21:06:58 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Push API",
        href: "https://htmlspecs.com/push-api/",
        src: "https://www.w3.org/TR/2025/WD-push-api-20251201/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Background Fetch",
        href: "https://htmlspecs.com/background-fetch/",
        src: "https://wicg.github.io/background-fetch/",
        "last-modified": "Wed, 21 Apr 2021 08:58:39 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Periodic Background Sync",
        href: "https://htmlspecs.com/periodic-background-sync/",
        src: "https://wicg.github.io/periodic-background-sync/",
        "last-modified": "Mon, 12 Apr 2021 10:20:07 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Content Index",
        href: "https://htmlspecs.com/content-index/",
        src: "https://wicg.github.io/content-index/spec/",
        "last-modified": "Tue, 13 Apr 2021 08:37:29 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Notifications API",
        href: "https://htmlspecs.com/notifications/",
        src: "https://notifications.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:09:06 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Badging API",
        href: "https://htmlspecs.com/badging/",
        src: "https://www.w3.org/TR/2026/WD-badging-20260427/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 存储、文件与数据访问|저장소, 파일 및 데이터 접근|ストレージ・ファイル・データアクセス
    {
        text: "Indexed Database API 3.0",
        href: "https://htmlspecs.com/IndexedDB/",
        src: "https://www.w3.org/TR/2025/WD-IndexedDB-3-20250813/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Storage",
        href: "https://htmlspecs.com/storage/",
        src: "https://storage.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:04:49 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Storage Buckets",
        href: "https://htmlspecs.com/storage-buckets/",
        src: "https://wicg.github.io/storage-buckets/",
        "last-modified": "Tue, 19 Dec 2023 00:08:15 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "File API",
        href: "https://htmlspecs.com/FileAPI/",
        src: "https://www.w3.org/TR/2026/WD-FileAPI-20260604/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "File System",
        href: "https://htmlspecs.com/fs/",
        src: "https://fs.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:09:55 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "File System Access API",
        href: "https://htmlspecs.com/file-system-access/",
        src: "https://wicg.github.io/file-system-access/",
        "last-modified": "-",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Cookie Store API",
        href: "https://htmlspecs.com/cookiestore/",
        src: "https://cookiestore.spec.whatwg.org/",
        "last-modified": "Mon, 20 Apr 2026 07:58:19 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "File and Directory Entries API",
        href: "https://htmlspecs.com/entries-api/",
        src: "https://wicg.github.io/entries-api/",
        "last-modified": "Tue, 04 Feb 2025 17:11:37 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web Locks API",
        href: "https://htmlspecs.com/web-locks/",
        src: "https://www.w3.org/TR/2025/WD-web-locks-20250924/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Storage Access API",
        href: "https://htmlspecs.com/storage-access/",
        src: "https://privacycg.github.io/storage-access/",
        "last-modified": "Fri, 22 May 2026 14:44:34 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Shared Storage API",
        href: "https://htmlspecs.com/shared-storage/",
        src: "https://wicg.github.io/shared-storage/",
        "last-modified": "Fri, 21 Mar 2025 20:49:40 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Subresource Loading with Web Bundles",
        href: "https://htmlspecs.com/webpackage-subresource-loading/",
        src: "https://wicg.github.io/webpackage/subresource-loading.html",
        "last-modified": "Mon, 29 Jul 2024 17:25:28 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 输入、编辑与剪贴板|입력, 편집 및 클립보드|入力・編集・クリップボード
    {
        text: "EditContext API",
        href: "https://htmlspecs.com/edit-context/",
        src: "https://www.w3.org/TR/2026/WD-edit-context-20260610/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Scroll To Text Fragment",
        href: "https://htmlspecs.com/scroll-to-text-fragment/",
        src: "https://wicg.github.io/scroll-to-text-fragment/",
        "last-modified": "Mon, 24 Mar 2025 14:42:36 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Pointer Events Level 2",
        href: "https://htmlspecs.com/pointerevents2/",
        src: "https://www.w3.org/TR/2019/REC-pointerevents2-20190404/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Pointer Events Level 3",
        href: "https://htmlspecs.com/pointerevents3/",
        src: "https://www.w3.org/TR/2026/CRD-pointerevents3-20260522/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Pointer Events Level 4",
        href: "https://htmlspecs.com/pointerevents4/",
        src: "https://www.w3.org/TR/2026/WD-pointerevents4-20260522/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Ink API",
        href: "https://htmlspecs.com/ink-api/",
        src: "https://wicg.github.io/ink-enhancement/",
        "last-modified": "Mon, 16 Sep 2024 07:54:59 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Handwriting Recognition API",
        href: "https://htmlspecs.com/handwriting-recognition/",
        src: "https://wicg.github.io/handwriting-recognition/",
        "last-modified": "Wed, 09 Jul 2025 15:17:15 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "UI Events",
        href: "https://htmlspecs.com/uievents/",
        src: "https://www.w3.org/TR/2026/WD-uievents-20260221/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "UI Events KeyboardEvent key Values",
        href: "https://htmlspecs.com/uievents-key/",
        src: "https://www.w3.org/TR/2025/REC-uievents-key-20250422/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "UI Events KeyboardEvent code Values",
        href: "https://htmlspecs.com/uievents-code/",
        src: "https://www.w3.org/TR/2025/REC-uievents-code-20250422/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Keyboard Map",
        href: "https://htmlspecs.com/keyboard-map/",
        src: "https://wicg.github.io/keyboard-map/",
        "last-modified": "Fri, 17 Jun 2022 14:59:55 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Keyboard Lock",
        href: "https://htmlspecs.com/keyboard-lock/",
        src: "https://wicg.github.io/keyboard-lock/",
        "last-modified": "Wed, 06 Oct 2021 21:04:35 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Virtual Keyboard",
        href: "https://htmlspecs.com/virtual-keyboard/",
        src: "https://www.w3.org/TR/2022/WD-virtual-keyboard-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Pointer Lock 2.0",
        href: "https://htmlspecs.com/pointerlock/",
        src: "https://www.w3.org/TR/2026/WD-pointerlock-2-20260225/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Clipboard API and events",
        href: "https://htmlspecs.com/clipboard-apis/",
        src: "https://www.w3.org/TR/2025/WD-clipboard-apis-20251124/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Selection API",
        href: "https://htmlspecs.com/selection-api/",
        src: "https://www.w3.org/TR/2026/WD-selection-api-20260611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Input Events Level 1",
        href: "https://htmlspecs.com/input-events-1/",
        src: "https://www.w3.org/TR/2023/DISC-input-events-1-20230928/",
        "last-modified": "-",
        lang: "cjk",
        state: "DISC"
    },
    {
        text: "Input Events Level 2",
        href: "https://htmlspecs.com/input-events-2/",
        src: "https://www.w3.org/TR/2026/WD-input-events-2-20260501/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 设备、传感器与硬件接口|기기, 센서 및 하드웨어 인터페이스|デバイス・センサー・ハードウェアインターフェイス
    {
        text: "Web Serial API",
        href: "https://htmlspecs.com/serial/",
        src: "https://wicg.github.io/serial/",
        "last-modified": "Tue, 02 Jun 2026 00:22:10 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebHID API",
        href: "https://htmlspecs.com/webhid/",
        src: "https://wicg.github.io/webhid/",
        "last-modified": "Fri, 13 Sep 2024 20:42:40 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebUSB API",
        href: "https://htmlspecs.com/webusb/",
        src: "https://wicg.github.io/webusb/",
        "last-modified": "Fri, 05 Jun 2026 19:46:05 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web MIDI API",
        href: "https://htmlspecs.com/webmidi/",
        src: "https://www.w3.org/TR/2025/WD-webmidi-20250121/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web Bluetooth API",
        href: "https://htmlspecs.com/web-bluetooth/",
        src: "https://webbluetoothcg.github.io/web-bluetooth/",
        "last-modified": "Wed, 03 Jun 2026 23:05:16 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web NFC API",
        href: "https://htmlspecs.com/web-nfc/",
        src: "https://w3c-cg.github.io/web-nfc/",
        "last-modified": "Thu, 16 Apr 2026 17:01:29 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Geolocation API",
        href: "https://htmlspecs.com/geolocation/",
        src: "https://www.w3.org/TR/2026/CR-geolocation-20260326/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Device Orientation and Motion",
        href: "https://htmlspecs.com/orientation-event/",
        src: "https://www.w3.org/TR/2025/CRD-orientation-event-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Motion Sensors Explainer",
        href: "https://htmlspecs.com/motion-sensors/",
        src: "https://www.w3.org/TR/2017/NOTE-motion-sensors-20170830/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Orientation Sensor",
        href: "https://htmlspecs.com/orientation-sensor/",
        src: "https://www.w3.org/TR/2026/WD-orientation-sensor-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Device Posture API",
        href: "https://htmlspecs.com/device-posture/",
        src: "https://www.w3.org/TR/2026/CRD-device-posture-20260520/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Ambient Light Sensor",
        href: "https://htmlspecs.com/ambient-light/",
        src: "https://www.w3.org/TR/2026/WD-ambient-light-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Proximity Sensor",
        href: "https://htmlspecs.com/proximity/",
        src: "https://www.w3.org/TR/2026/WD-proximity-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Generic Sensor API",
        href: "https://htmlspecs.com/generic-sensor/",
        src: "https://www.w3.org/TR/2026/CRD-generic-sensor-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Battery Status API",
        href: "https://htmlspecs.com/battery-status/",
        src: "https://www.w3.org/TR/2024/WD-battery-status-20241024/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Vibration API",
        href: "https://htmlspecs.com/vibration/",
        src: "https://www.w3.org/TR/2026/CRD-vibration-20260521/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Accelerometer",
        href: "https://htmlspecs.com/accelerometer/",
        src: "https://www.w3.org/TR/2026/CRD-accelerometer-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Magnetometer",
        href: "https://htmlspecs.com/magnetometer/",
        src: "https://www.w3.org/TR/2026/WD-magnetometer-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Gyroscope",
        href: "https://htmlspecs.com/gyroscope/",
        src: "https://www.w3.org/TR/2026/CRD-gyroscope-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Gamepad",
        href: "https://htmlspecs.com/gamepad/",
        src: "https://www.w3.org/TR/2025/WD-gamepad-20250710/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 窗口、屏幕与系统集成|창, 화면 및 시스템 통합|ウィンドウ・画面・システム統合
    {
        text: "Screen Orientation",
        href: "https://htmlspecs.com/screen-orientation/",
        src: "https://www.w3.org/TR/2025/WD-screen-orientation-20251021/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Screen Wake Lock",
        href: "https://htmlspecs.com/screen-wake-lock/",
        src: "https://www.w3.org/TR/2024/WD-screen-wake-lock-20241024/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Local Font Access",
        href: "https://htmlspecs.com/local-font-access/",
        src: "https://wicg.github.io/local-font-access/",
        "last-modified": "Fri, 07 Jun 2024 22:11:00 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Idle Detection API",
        href: "https://htmlspecs.com/idle-detection/",
        src: "https://wicg.github.io/idle-detection/",
        "last-modified": "Wed, 08 Jan 2025 02:06:24 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "EyeDropper API",
        href: "https://htmlspecs.com/eyedropper-api/",
        src: "https://wicg.github.io/eyedropper-api/",
        "last-modified": "Wed, 30 Mar 2022 19:00:41 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Fullscreen",
        href: "https://htmlspecs.com/fullscreen/",
        src: "https://fullscreen.spec.whatwg.org/",
        "last-modified": "Tue, 19 May 2026 15:04:24 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Contact Picker API",
        href: "https://htmlspecs.com/contact-picker/",
        src: "https://www.w3.org/TR/2024/WD-contact-picker-20240708/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Window Controls Overlay",
        href: "https://htmlspecs.com/window-controls-overlay/",
        src: "https://wicg.github.io/window-controls-overlay/",
        "last-modified": "Wed, 31 May 2023 16:44:53 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Window Management",
        href: "https://htmlspecs.com/window-management/",
        src: "https://www.w3.org/TR/2024/WD-window-management-20240607/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web Printing API",
        href: "https://htmlspecs.com/web-printing/",
        src: "https://wicg.github.io/web-printing/",
        "last-modified": "Sun, 01 Feb 2026 22:06:41 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web Share API",
        href: "https://htmlspecs.com/web-share/",
        src: "https://www.w3.org/TR/2023/REC-web-share-20230530/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },

    //### 音频、语音与媒体控制|오디오, 음성 및 미디어 제어|音声・スピーチ・メディア制御
    {
        text: "Web Speech API",
        href: "https://htmlspecs.com/web-speech-api/",
        src: "https://webaudio.github.io/web-speech-api/",
        "last-modified": "Thu, 21 May 2026 22:36:31 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web Audio API",
        href: "https://htmlspecs.com/webaudio/",
        src: "https://www.w3.org/TR/2024/WD-webaudio-1.1-20241105/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Audio Output Devices API",
        href: "https://htmlspecs.com/audio-output/",
        src: "https://www.w3.org/TR/2025/CRD-audio-output-20251009/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Audio Session",
        href: "https://htmlspecs.com/audio-session/",
        src: "https://www.w3.org/TR/2024/WD-audio-session-20241113/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Session",
        href: "https://htmlspecs.com/mediasession/",
        src: "https://www.w3.org/TR/2026/WD-mediasession-20260605/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 音视频采集、WebRTC 与播放|오디오/비디오 캡처, WebRTC 및 재생|音声映像キャプチャ・WebRTC・再生
    {
        text: "WebRTC",
        href: "https://htmlspecs.com/webrtc/",
        src: "https://www.w3.org/TR/2025/REC-webrtc-20250313/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Identifiers for WebRTC&#39;s Statistics API",
        href: "https://htmlspecs.com/webrtc-stats/",
        src: "https://www.w3.org/TR/2025/CRD-webrtc-stats-20250925/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebRTC Encoded Transform",
        href: "https://htmlspecs.com/webrtc-encoded-transform/",
        src: "https://www.w3.org/TR/2026/WD-webrtc-encoded-transform-20260611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Scalable Video Coding (SVC) Extension for WebRTC",
        href: "https://htmlspecs.com/webrtc-svc/",
        src: "https://www.w3.org/TR/2024/WD-webrtc-svc-20240817/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Screen Capture",
        href: "https://htmlspecs.com/screen-capture/",
        src: "https://www.w3.org/TR/2025/WD-screen-capture-20250717/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Viewport Capture",
        href: "https://htmlspecs.com/mediacapture-viewport/",
        src: "https://www.w3.org/TR/2024/WD-mediacapture-viewport-20241009/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Region Capture",
        href: "https://htmlspecs.com/mediacapture-region/",
        src: "https://www.w3.org/TR/2023/WD-mediacapture-region-20230712/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Capture Handle - Bootstrapping Collaboration when Screensharing",
        href: "https://htmlspecs.com/capture-handle-identity/",
        src: "https://www.w3.org/TR/2025/WD-capture-handle-identity-20250306/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Picture-in-Picture",
        href: "https://htmlspecs.com/picture-in-picture/",
        src: "https://www.w3.org/TR/2026/WD-picture-in-picture-20260521/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Document Picture-in-Picture",
        href: "https://htmlspecs.com/document-picture-in-picture/",
        src: "https://wicg.github.io/document-picture-in-picture/",
        "last-modified": "Wed, 04 Feb 2026 18:29:06 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Presentation API",
        href: "https://htmlspecs.com/presentation-api/",
        src: "https://www.w3.org/TR/2025/CRD-presentation-api-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "HTML Media Capture",
        href: "https://htmlspecs.com/html-media-capture/",
        src: "https://www.w3.org/TR/2018/REC-html-media-capture-20180201/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Media Capture and Streams",
        href: "https://htmlspecs.com/mediacapture-streams/",
        src: "https://www.w3.org/TR/2025/CRD-mediacapture-streams-20251009/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Media Capture from DOM Elements",
        href: "https://htmlspecs.com/mediacapture-fromelement/",
        src: "https://www.w3.org/TR/2025/WD-mediacapture-fromelement-20250212/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "MediaStreamTrack Content Hints",
        href: "https://htmlspecs.com/mst-content-hint/",
        src: "https://www.w3.org/TR/2025/WD-mst-content-hint-20250919/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "MediaStreamTrack Insertable Media Processing using Streams",
        href: "https://htmlspecs.com/mediacapture-transform/",
        src: "https://www.w3.org/TR/2026/WD-mediacapture-transform-20260416/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Autoplay Detection",
        href: "https://htmlspecs.com/autoplay-detection/",
        src: "https://www.w3.org/TR/2025/WD-autoplay-detection-20250904/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "MediaStream Recording",
        href: "https://htmlspecs.com/mediastream-recording/",
        src: "https://www.w3.org/TR/2026/WD-mediastream-recording-20260316/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Capabilities",
        href: "https://htmlspecs.com/media-capabilities/",
        src: "https://www.w3.org/TR/2026/WD-media-capabilities-20260609/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "MediaStream Image Capture",
        href: "https://htmlspecs.com/image-capture/",
        src: "https://www.w3.org/TR/2025/WD-image-capture-20250423/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Encrypted Media Extensions",
        href: "https://htmlspecs.com/encrypted-media-2/",
        src: "https://www.w3.org/TR/2026/WD-encrypted-media-2-20260611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Remote Playback",
        href: "https://htmlspecs.com/remote-playback/",
        src: "https://www.w3.org/TR/2024/CRD-remote-playback-20240430/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Open Screen Application Protocol",
        href: "https://htmlspecs.com/openscreen-application/",
        src: "https://www.w3.org/TR/2026/WD-openscreen-application-20260210/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 媒体格式、字幕与编解码|미디어 형식, 자막 및 코덱|メディア形式・字幕・コーデック
    {
        text: "WebVTT: The Web Video Text Tracks Format",
        href: "https://htmlspecs.com/webvtt1/",
        src: "https://www.w3.org/TR/2026/CRD-webvtt1-20260520/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Media Source Extensions",
        href: "https://htmlspecs.com/media-source-2/",
        src: "https://www.w3.org/TR/2025/WD-media-source-2-20251104/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebCodecs",
        href: "https://htmlspecs.com/webcodecs/",
        src: "https://www.w3.org/TR/2026/WD-webcodecs-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebCodecs Codec Registry",
        href: "https://htmlspecs.com/webcodecs-codec-registry/",
        src: "https://www.w3.org/TR/2026/DRY-webcodecs-codec-registry-20260212/",
        "last-modified": "-",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "AAC WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-aac-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-aac-codec-registration-20260319/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "A-law PCM WebCodecs Registration.",
        href: "https://htmlspecs.com/webcodecs-alaw-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-alaw-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "AV1 WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-av1-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-av1-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "AVC (H.264) WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-avc-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-avc-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "FLAC WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-flac-codec-registration/",
        src: "https://www.w3.org/TR/2025/DNOTE-webcodecs-flac-codec-registration-20250514/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "HEVC (H.265) WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-hevc-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-hevc-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "MP3 WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-mp3-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-mp3-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "Opus WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-opus-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-opus-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "Linear PCM WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-pcm-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-pcm-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "u-law PCM WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-ulaw-codec-registration/",
        src: "https://www.w3.org/TR/2025/DNOTE-webcodecs-ulaw-codec-registration-20250514/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "Vorbis WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-vorbis-codec-registration/",
        src: "https://www.w3.org/TR/2026/DNOTE-webcodecs-vorbis-codec-registration-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "VP8 WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-vp8-codec-registration/",
        src: "https://www.w3.org/TR/2024/DNOTE-webcodecs-vp8-codec-registration-20240909/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },
    {
        text: "VP9 WebCodecs Registration",
        href: "https://htmlspecs.com/webcodecs-vp9-codec-registration/",
        src: "https://www.w3.org/TR/2025/DNOTE-webcodecs-vp9-codec-registration-20250514/",
        "last-modified": "-",
        lang: "cjk",
        state: "DNOTE"
    },

    //### 图形、图像、GPU 与 WebXR|그래픽, 이미지, GPU 및 WebXR|グラフィックス・画像・GPU・WebXR
    {
        text: "Accelerated Shape Detection in Images",
        href: "https://htmlspecs.com/shape-detection-api/",
        src: "https://wicg.github.io/shape-detection-api/",
        "last-modified": "Wed, 25 Feb 2026 00:26:41 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebGPU",
        href: "https://htmlspecs.com/webgpu/",
        src: "https://www.w3.org/TR/2026/CRD-webgpu-20260521/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebGPU Shading Language",
        href: "https://htmlspecs.com/WGSL/",
        src: "https://www.w3.org/TR/2026/CRD-WGSL-20260609/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebGL Specification",
        href: "https://htmlspecs.com/webgl/",
        src: "https://registry.khronos.org/webgl/specs/latest/1.0/",
        "last-modified": "Tue, 14 Apr 2026 03:51:15 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebGL 2.0 Specification",
        href: "https://htmlspecs.com/webgl2/",
        src: "https://registry.khronos.org/webgl/specs/latest/2.0/",
        "last-modified": "Tue, 14 Apr 2026 03:51:15 GMT",
        lang: "cjk",
        state: "Draft"
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
        text: "Scroll-driven Animations",
        href: "https://htmlspecs.com/scroll-animations-1/",
        src: "https://www.w3.org/TR/2023/WD-scroll-animations-1-20230606/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Device API",
        href: "https://htmlspecs.com/webxr/",
        src: "https://www.w3.org/TR/2026/CRD-webxr-20260609/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebXR Augmented Reality Module - Level 1",
        href: "https://htmlspecs.com/webxr-ar-module-1/",
        src: "https://www.w3.org/TR/2025/CRD-webxr-ar-module-1-20250425/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "WebXR Hand Input Module - Level 1",
        href: "https://htmlspecs.com/webxr-hand-input-1/",
        src: "https://www.w3.org/TR/2024/WD-webxr-hand-input-1-20240605/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Gamepads Module - Level 1",
        href: "https://htmlspecs.com/webxr-gamepads-module-1/",
        src: "https://www.w3.org/TR/2025/WD-webxr-gamepads-module-1-20250707/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Hit Test Module",
        href: "https://htmlspecs.com/webxr-hit-test-1/",
        src: "https://www.w3.org/TR/2025/WD-webxr-hit-test-1-20251211/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR DOM Overlays Module",
        href: "https://htmlspecs.com/webxr-dom-overlays-1/",
        src: "https://www.w3.org/TR/2024/WD-webxr-dom-overlays-1-20240924/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Layers API Level 1",
        href: "https://htmlspecs.com/webxrlayers-1/",
        src: "https://www.w3.org/TR/2026/WD-webxrlayers-1-20260612/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Depth Sensing Module",
        href: "https://htmlspecs.com/webxr-depth-sensing-1/",
        src: "https://www.w3.org/TR/2025/WD-webxr-depth-sensing-1-20251210/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Anchors Module",
        href: "https://htmlspecs.com/webxr-anchors/",
        src: "https://immersive-web.github.io/anchors/",
        "last-modified": "Mon, 27 Apr 2026 16:42:54 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "WebXR Lighting Estimation API Level 1",
        href: "https://htmlspecs.com/webxr-lighting-estimation/",
        src: "https://www.w3.org/TR/2025/WD-webxr-lighting-estimation-1-20251211/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebXR Raw Camera Access Module",
        href: "https://htmlspecs.com/webxr-raw-camera-access/",
        src: "https://immersive-web.github.io/raw-camera-access/",
        "last-modified": "Thu, 11 Dec 2025 23:07:05 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Portable Network Graphics (PNG) 3",
        href: "https://htmlspecs.com/png-3/",
        src: "https://www.w3.org/TR/2025/REC-png-3-20250624/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Image Resource",
        href: "https://htmlspecs.com/image-resource/",
        src: "https://www.w3.org/TR/2021/WD-image-resource-20210604/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### AI 和机器学习|AI 및 머신러닝|AI と機械学習
    {
        text: "Web Neural Network API",
        href: "https://htmlspecs.com/webnn/",
        src: "https://www.w3.org/TR/2026/CRD-webnn-20260521/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Model Loader API",
        href: "https://htmlspecs.com/model-loader/",
        src: "https://webmachinelearning.github.io/model-loader/",
        "last-modified": "Mon, 26 Feb 2024 14:26:59 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Translator and Language Detector APIs",
        href: "https://htmlspecs.com/translation-api/",
        src: "https://webmachinelearning.github.io/translation-api/",
        "last-modified": "Thu, 22 Jan 2026 15:56:28 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Prompt API",
        href: "https://htmlspecs.com/prompt-api/",
        src: "https://webmachinelearning.github.io/prompt-api/",
        "last-modified": "Fri, 10 Apr 2026 00:30:40 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Writing Assistance APIs",
        href: "https://htmlspecs.com/writing-assistance-apis/",
        src: "https://webmachinelearning.github.io/writing-assistance-apis/",
        "last-modified": "Fri, 17 Apr 2026 17:03:58 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Proofreader API",
        href: "https://htmlspecs.com/proofreader-api/",
        src: "https://webmachinelearning.github.io/proofreader-api/",
        "last-modified": "Thu, 05 Mar 2026 20:55:32 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 性能时间线、指标与观测|성능 타임라인, 지표 및 관측|パフォーマンスタイムライン・指標・観測
    {
        text: "Performance Timeline",
        href: "https://htmlspecs.com/performance-timeline/",
        src: "https://www.w3.org/TR/2025/CRD-performance-timeline-20250521/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Compute Pressure API",
        href: "https://htmlspecs.com/compute-pressure/",
        src: "https://www.w3.org/TR/2026/CRD-compute-pressure-20260514/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "High Resolution Time",
        href: "https://htmlspecs.com/hr-time-3/",
        src: "https://www.w3.org/TR/2026/WD-hr-time-3-20260324/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Intersection Observer",
        href: "https://htmlspecs.com/intersection-observer/",
        src: "https://www.w3.org/TR/2023/WD-intersection-observer-20231018/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Resize Observer",
        href: "https://htmlspecs.com/resize-observer/",
        src: "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Navigation Timing Level 2",
        href: "https://htmlspecs.com/navigation-timing-2/",
        src: "https://www.w3.org/TR/2026/WD-navigation-timing-2-20260225/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Soft Navigations and Interaction Contentful Paint",
        href: "https://htmlspecs.com/soft-navigations/",
        src: "https://wicg.github.io/soft-navigations/",
        "last-modified": "Wed, 10 Jun 2026 23:55:09 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Resource Timing",
        href: "https://htmlspecs.com/resource-timing/",
        src: "https://www.w3.org/TR/2026/CRD-resource-timing-20260420/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Element Timing API",
        href: "https://htmlspecs.com/element-timing/",
        src: "https://w3c.github.io/element-timing/",
        "last-modified": "Thu, 19 Mar 2026 18:29:54 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "User Timing Level 2",
        href: "https://htmlspecs.com/user-timing-2/",
        src: "https://www.w3.org/TR/2019/REC-user-timing-2-20190226/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "User Timing",
        href: "https://htmlspecs.com/user-timing/",
        src: "https://www.w3.org/TR/2026/CRD-user-timing-20260311/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Long Tasks API",
        href: "https://htmlspecs.com/longtasks-1/",
        src: "https://www.w3.org/TR/2026/WD-longtasks-1-20260319/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Long Animation Frames API",
        href: "https://htmlspecs.com/long-animation-frames/",
        src: "https://www.w3.org/TR/2026/WD-long-animation-frames-20260428/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Server Timing",
        href: "https://htmlspecs.com/server-timing/",
        src: "https://www.w3.org/TR/2026/WD-server-timing-20260407/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Paint Timing",
        href: "https://htmlspecs.com/paint-timing/",
        src: "https://www.w3.org/TR/2026/WD-paint-timing-20260324/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Largest Contentful Paint",
        href: "https://htmlspecs.com/largest-contentful-paint/",
        src: "https://www.w3.org/TR/2026/WD-largest-contentful-paint-20260408/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Event Timing API",
        href: "https://htmlspecs.com/event-timing/",
        src: "https://www.w3.org/TR/2026/WD-event-timing-20260319/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Performance measure memory",
        href: "https://wicg.github.io/performance-measure-memory/",
        src: "https://wicg.github.io/performance-measure-memory/",
        "last-modified": "Fri, 28 May 2021 11:50:10 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Device Memory API",
        href: "https://htmlspecs.com/device-memory/",
        src: "https://www.w3.org/TR/2026/WD-device-memory-1-20260330/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Layout Instability API",
        href: "https://htmlspecs.com/layout-instability/",
        src: "https://wicg.github.io/layout-instability/",
        "last-modified": "Wed, 17 Dec 2025 12:26:17 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 调度、生命周期、预加载与报告|스케줄링, 수명주기, 사전 로드 및 보고|スケジューリング・ライフサイクル・プリロード・レポート
    {
        text: "Observable",
        href: "https://htmlspecs.com/observable/",
        src: "https://wicg.github.io/observable/",
        "last-modified": "Fri, 21 Nov 2025 14:15:47 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Prioritized Task Scheduling",
        href: "https://htmlspecs.com/scheduling-apis/",
        src: "https://wicg.github.io/scheduling-apis/",
        "last-modified": "Fri, 30 May 2025 20:42:26 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "requestIdleCallback()",
        href: "https://htmlspecs.com/requestidlecallback/",
        src: "https://www.w3.org/TR/2025/WD-requestidlecallback-20250521/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Reporting API",
        href: "https://htmlspecs.com/reporting-1/",
        src: "https://www.w3.org/TR/2025/WD-reporting-1-20250611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Deprecation Reporting",
        href: "https://htmlspecs.com/deprecation-reporting/",
        src: "https://wicg.github.io/deprecation-reporting/",
        "last-modified": "Mon, 28 Sep 2020 12:06:39 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Page Lifecycle",
        href: "https://htmlspecs.com/page-lifecycle/",
        src: "https://wicg.github.io/page-lifecycle/",
        "last-modified": "Thu, 09 Jun 2022 17:26:10 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Prefetch",
        href: "https://htmlspecs.com/prefetch/",
        src: "https://wicg.github.io/nav-speculation/prefetch.html",
        "last-modified": "Thu, 14 May 2026 10:43:04 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Prerendering Revamped",
        href: "https://htmlspecs.com/prerendering/",
        src: "https://wicg.github.io/nav-speculation/prerendering.html",
        "last-modified": "Thu, 14 May 2026 10:43:04 GMT",
        lang: "cjk",
        state: "Draft"
    },

    //### 安全、内容防护与策略|보안, 콘텐츠 보호 및 정책|セキュリティ・コンテンツ防護・ポリシー
    {
        text: "Web Cryptography Level 2",
        href: "https://htmlspecs.com/webcrypto-2/",
        src: "https://www.w3.org/TR/2025/WD-webcrypto-2-20250422/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "HTML Sanitizer API",
        href: "https://htmlspecs.com/sanitizer-api/",
        src: "https://wicg.github.io/sanitizer-api/",
        "last-modified": "Fri, 12 Jun 2026 10:15:57 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Subresource Integrity (SRI)",
        href: "https://htmlspecs.com/sri/",
        src: "https://www.w3.org/TR/2016/REC-SRI-20160623/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Subresource Integrity (SRI) 2",
        href: "https://htmlspecs.com/sri-2/",
        src: "https://www.w3.org/TR/2026/WD-sri-2-20260320/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Content Security Policy Level 3",
        href: "https://htmlspecs.com/CSP3/",
        src: "https://www.w3.org/TR/2026/WD-CSP3-20260505/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Secure Contexts",
        href: "https://htmlspecs.com/secure-contexts/",
        src: "https://www.w3.org/TR/2023/CRD-secure-contexts-20231110/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Referrer Policy",
        href: "https://htmlspecs.com/referrer-policy/",
        src: "https://www.w3.org/TR/2017/CR-referrer-policy-20170126/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "Fetch Metadata Request Headers",
        href: "https://htmlspecs.com/fetch-metadata/",
        src: "https://www.w3.org/TR/2025/WD-fetch-metadata-20250401/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Mixed Content",
        href: "https://htmlspecs.com/mixed-content/",
        src: "https://www.w3.org/TR/2023/CRD-mixed-content-20230223/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Trusted Types",
        href: "https://htmlspecs.com/trusted-types/",
        src: "https://www.w3.org/TR/2026/WD-trusted-types-20260224/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Clear Site Data",
        href: "https://htmlspecs.com/clear-site-data/",
        src: "https://www.w3.org/TR/2017/WD-clear-site-data-20171130/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "JSON Web Token (JWT)",
        href: "https://htmlspecs.com/jwt/",
        src: "https://www.rfc-editor.org/rfc/rfc7519",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Web Signature (JWS)",
        href: "https://htmlspecs.com/jws/",
        src: "https://www.rfc-editor.org/rfc/rfc7515",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Web Encryption (JWE)",
        href: "https://htmlspecs.com/jwe/",
        src: "https://www.rfc-editor.org/rfc/rfc7516",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Web Key (JWK)",
        href: "https://htmlspecs.com/jwk/",
        src: "https://www.rfc-editor.org/rfc/rfc7517",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JSON Web Algorithms (JWA)",
        href: "https://htmlspecs.com/jwa/",
        src: "https://www.rfc-editor.org/rfc/rfc7518",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "JWT Best Current Practices",
        href: "https://htmlspecs.com/jwt-bcp/",
        src: "https://www.rfc-editor.org/rfc/rfc8725",
        "last-modified": "-",
        lang: "cjk",
        state: "RFC"
    },

    //### 身份、认证与凭证|신원, 인증 및 자격 증명|ID・認証・資格情報
    {
        text: "WebOTP API",
        href: "https://htmlspecs.com/web-otp/",
        src: "https://wicg.github.io/web-otp/",
        "last-modified": "Tue, 04 Feb 2025 17:18:17 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Web Authentication: An API for accessing Public Key Credentials Level 2",
        href: "https://htmlspecs.com/webauthn-2/",
        src: "https://www.w3.org/TR/2021/REC-webauthn-2-20210408/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Web Authentication: An API for accessing Public Key Credentials Level 3",
        href: "https://htmlspecs.com/webauthn-3/",
        src: "https://www.w3.org/TR/2026/CR-webauthn-3-20260526/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "A Well-Known URL for Relying Party Passkey Endpoints",
        href: "https://htmlspecs.com/passkey-endpoints/",
        src: "https://www.w3.org/TR/2026/WD-passkey-endpoints-1-20260114/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "A Well-Known URL for Changing Passwords",
        href: "https://htmlspecs.com/change-password-url/",
        src: "https://www.w3.org/TR/2024/WD-change-password-url-20240603/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Credential Management Level 1",
        href: "https://htmlspecs.com/credential-management-1/",
        src: "https://www.w3.org/TR/2026/WD-credential-management-1-20260410/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Federated Credential Management API (FedCM)",
        href: "https://htmlspecs.com/fedcm/",
        src: "https://www.w3.org/TR/2024/WD-fedcm-1-20240820/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Digital Credentials",
        href: "https://htmlspecs.com/digital-credentials/",
        src: "https://www.w3.org/TR/2026/WD-digital-credentials-20260601/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Verifiable Credentials Data Model v2.0",
        href: "https://htmlspecs.com/vc-data-model-2.0/",
        src: "https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    // {
    //     text: "Securing Verifiable Credentials using JOSE and COSE",
    //     href: "https://htmlspecs.com/vc-jose-cose/",
    //     src: "https://www.w3.org/TR/2025/REC-vc-jose-cose-20250515/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "REC"
    // },
    // {
    //     text: "Verifiable Credential Rendering Methods v1.0",
    //     href: "https://htmlspecs.com/vc-render-method/",
    //     src: "https://www.w3.org/TR/2026/WD-vc-render-method-20260405/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "WD"
    // },

    //### 隐私、权限与反跟踪|프라이버시, 권한 및 추적 방지|プライバシー・権限・トラッキング対策
    {
        text: "Permissions",
        href: "https://htmlspecs.com/permissions/",
        src: "https://www.w3.org/TR/2025/WD-permissions-20251006/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Requesting Permissions",
        href: "https://htmlspecs.com/permissions-request/",
        src: "https://wicg.github.io/permissions-request/",
        "last-modified": "Mon, 09 May 2022 16:47:47 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Self-Review Questionnaire: Security and Privacy",
        href: "https://htmlspecs.com/security-privacy-questionnaire/",
        src: "https://www.w3.org/TR/2025/NOTE-security-privacy-questionnaire-20250418/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "Permissions Policy",
        href: "https://htmlspecs.com/permissions-policy/",
        src: "https://www.w3.org/TR/2025/WD-permissions-policy-1-20251006/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Document Policy",
        href: "https://htmlspecs.com/document-policy/",
        src: "https://wicg.github.io/document-policy/",
        "last-modified": "Wed, 30 Mar 2022 14:51:34 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Capability Delegation",
        href: "https://htmlspecs.com/capability-delegation/",
        src: "https://wicg.github.io/capability-delegation/spec.html",
        "last-modified": "Fri, 17 Feb 2023 20:15:54 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Global Privacy Control (GPC)",
        href: "https://htmlspecs.com/gpc/",
        src: "https://www.w3.org/TR/2026/WD-gpc-20260611/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Privacy Principles",
        href: "https://htmlspecs.com/privacy-principles/",
        src: "https://www.w3.org/TR/2025/STMT-privacy-principles-20250515/",
        "last-modified": "-",
        lang: "cjk",
        state: "STMT"
    },
    {
        text: "Isolated Contexts",
        href: "https://htmlspecs.com/isolated-contexts/",
        src: "https://wicg.github.io/isolated-web-apps/isolated-contexts.html",
        "last-modified": "Wed, 19 Feb 2025 04:20:21 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Controlled Frame API",
        href: "https://htmlspecs.com/controlled-frame/",
        src: "https://wicg.github.io/controlled-frame/",
        "last-modified": "Wed, 10 Dec 2025 18:08:30 GMT·",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Fenced Frame",
        href: "https://htmlspecs.com/fenced-frame/",
        src: "https://wicg.github.io/fenced-frame/",
        "last-modified": "Mon, 16 Jun 2025 12:09:52 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Private State Token API",
        href: "https://htmlspecs.com/trust-token-api/",
        src: "https://wicg.github.io/trust-token-api/",
        "last-modified": "Thu, 18 Jul 2024 14:19:08 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Attribution Level 1",
        href: "https://htmlspecs.com/attribution/",
        src: "https://www.w3.org/TR/2026/WD-attribution-20260602/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 支付与数字商品|결제 및 디지털 상품|決済・デジタル商品
    {
        text: "Payment Request API",
        href: "https://htmlspecs.com/payment-request/",
        src: "https://www.w3.org/TR/2026/CRD-payment-request-20260327/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Web-based Payment Handler API",
        href: "https://htmlspecs.com/web-based-payment-handler/",
        src: "https://www.w3.org/TR/2026/WD-web-based-payment-handler-20260423/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Payment Method Manifest",
        href: "https://htmlspecs.com/payment-method-manifest/",
        src: "https://www.w3.org/TR/2017/WD-payment-method-manifest-20171212/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Digital Goods API",
        href: "https://htmlspecs.com/digital-goods/",
        src: "https://wicg.github.io/digital-goods/",
        "last-modified": "Fri, 18 Mar 2022 14:07:13 GMT",
        lang: "cjk",
        state: "Draft"
    },
    {
        text: "Secure Payment Confirmation",
        href: "https://htmlspecs.com/secure-payment-confirmation/",
        src: "https://www.w3.org/TR/2026/CRD-secure-payment-confirmation-20260604/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 可访问性|접근성|アクセシビリティ
    {
        text: "Web Content Accessibility Guidelines (WCAG) 2.2",
        href: "https://htmlspecs.com/WCAG22/",
        src: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "W3C Accessibility Guidelines (WCAG) 3.0",
        href: "https://htmlspecs.com/wcag-3.0/",
        src: "https://www.w3.org/TR/2026/WD-wcag-3.0-20260303/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Making Content Usable for People with Cognitive and Learning Disabilities",
        href: "https://htmlspecs.com/coga-usable/",
        src: "https://www.w3.org/TR/2021/NOTE-coga-usable-20210429/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    // {
    //     text: "WAI-Adapt Explainer",
    //     href: "https://htmlspecs.com/adapt/",
    //     src: "https://www.w3.org/TR/2023/DNOTE-adapt-20230103/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "DNOTE"
    // },
    // {
    //     text: "WAI-Adapt: Symbols Module",
    //     href: "https://htmlspecs.com/adapt-symbols/",
    //     src: "https://www.w3.org/TR/2023/CR-adapt-symbols-20230105/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "CR"
    // },
    {
        text: "Accessible Rich Internet Applications (WAI-ARIA) 1.2",
        href: "https://htmlspecs.com/wai-aria-1.2/",
        src: "https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Accessible Rich Internet Applications (WAI-ARIA) 1.3",
        href: "https://htmlspecs.com/wai-aria-1.3/",
        src: "https://www.w3.org/TR/2026/WD-wai-aria-1.3-20260604/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    // {
    //     text: "Digital Publishing WAI-ARIA Module 1.1",
    //     href: "https://htmlspecs.com/dpub-aria-1.1/",
    //     src: "https://www.w3.org/TR/2025/REC-dpub-aria-1.1-20250612/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "REC"
    // },
    {
        text: "Core Accessibility API Mappings 1.2",
        href: "https://htmlspecs.com/core-aam-1.2/",
        src: "https://www.w3.org/TR/2026/CRD-core-aam-1.2-20260611/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "HTML Accessibility API Mappings 1.0",
        href: "https://htmlspecs.com/html-aam-1.0/",
        src: "https://www.w3.org/TR/2026/WD-html-aam-1.0-20260529/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "SVG Accessibility API Mappings",
        href: "https://htmlspecs.com/svg-aam-1.0/",
        src: "https://www.w3.org/TR/2026/WD-svg-aam-1.0-20260529/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    // {
    //     text: "Digital Publishing Accessibility API Mappings 1.1",
    //     href: "https://htmlspecs.com/dpub-aam-1.1/",
    //     src: "https://www.w3.org/TR/2025/REC-dpub-aam-1.1-20250612/",
    //     "last-modified": "-",
    //     lang: "cjk",
    //     state: "REC"
    // },
    {
        text: "WAI-ARIA Graphics Module",
        href: "https://htmlspecs.com/graphics-aria-1.0/",
        src: "https://www.w3.org/TR/2018/REC-graphics-aria-1.0-20181002/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "ARIA in HTML",
        href: "https://htmlspecs.com/html-aria/",
        src: "https://www.w3.org/TR/2026/REC-html-aria-20260415/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Accessible Name and Description Computation 1.1",
        href: "https://htmlspecs.com/accname-1.1/",
        src: "https://www.w3.org/TR/2018/REC-accname-1.1-20181218/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Accessible Name and Description Computation 1.2",
        href: "https://htmlspecs.com/accname-1.2/",
        src: "https://www.w3.org/TR/2026/WD-accname-1.2-20260529/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Accessibility Conformance Testing (ACT) Rules Format 1.1",
        href: "https://htmlspecs.com/act-rules-format/",
        src: "https://www.w3.org/TR/2026/REC-act-rules-format-1.1-20260205/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Using ARIA",
        href: "https://htmlspecs.com/using-aria/",
        src: "https://www.w3.org/TR/2026/DISC-using-aria-20260224/",
        "last-modified": "-",
        lang: "cjk",
        state: "DISC"
    },

    //### 开发者工具、测试与自动化|개발자 도구, 테스트 및 자동화|開発者ツール・テスト・自動化
    {
        text: "Test Utils",
        href: "https://htmlspecs.com/testutils/",
        src: "https://testutils.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 09:11:28 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "Console",
        href: "https://htmlspecs.com/console/",
        src: "https://console.spec.whatwg.org/",
        "last-modified": "Sun, 15 Mar 2026 12:32:55 GMT",
        lang: "cjk",
        state: "LS"
    },
    {
        text: "WebDriver",
        href: "https://htmlspecs.com/webdriver2/",
        src: "https://www.w3.org/TR/2026/WD-webdriver2-20260528/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "WebDriver BiDi",
        href: "https://htmlspecs.com/webdriver-bidi/",
        src: "https://www.w3.org/TR/2026/WD-webdriver-bidi-20260601/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    }
];

const cssLinks = [

    //## CSS|CSS|CSS
    {
        text: "CSS current work",
        href: "https://htmlspecs.com/css/",
        src: "https://www.w3.org/Style/CSS/current-work",
        "last-modified": "Tue, 09 Jun 2026 19:37:31 GMT",
        lang: "cjk",
        state: ""
    },
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
        href: "https://htmlspecs.com/css/read/",
        src: "https://www.w3.org/Style/CSS/read",
        "last-modified": "Wed, 01 Oct 2025 10:17:52 GMT",
        lang: "cjk",
        state: "Guide"
    },
    {
        text: "CSS Snapshot 2023",
        href: "https://htmlspecs.com/css/css-2023/",
        src: "https://www.w3.org/TR/2023/NOTE-css-2023-20231207/",
        "last-modified": "-",
        lang: "c",
        state: "NOTE"
    },
    {
        text: "CSS Snapshot 2024",
        href: "https://htmlspecs.com/css/css-2024/",
        src: "https://www.w3.org/TR/2025/NOTE-css-2024-20250225/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "CSS Snapshot 2025",
        href: "https://htmlspecs.com/css/css-2025/",
        src: "https://www.w3.org/TR/2025/NOTE-css-2025-20250918/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },
    {
        text: "CSS Snapshot 2026",
        href: "https://htmlspecs.com/css/css-2026/",
        src: "https://www.w3.org/TR/2026/NOTE-css-2026-20260326/",
        "last-modified": "-",
        lang: "cjk",
        state: "NOTE"
    },

    //### 语法、级联、选择器与值|구문, 캐스케이드, 선택자 및 값|構文・カスケード・セレクター・値
    {
        text: "CSS Namespaces Module Level 3",
        href: "https://htmlspecs.com/css/css-namespaces-3/",
        src: "https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Selectors Level 3",
        href: "https://htmlspecs.com/css/selectors-3/",
        src: "https://www.w3.org/TR/2018/REC-selectors-3-20181106/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Selectors Level 4",
        href: "https://htmlspecs.com/css/selectors-4/",
        src: "https://www.w3.org/TR/2026/WD-selectors-4-20260122/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Selectors Level 5",
        href: "https://htmlspecs.com/css/selectors-5/",
        src: "https://www.w3.org/TR/2026/WD-selectors-5-20260217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Style Attributes",
        href: "https://htmlspecs.com/css/css-style-attr/",
        src: "https://www.w3.org/TR/2013/REC-css-style-attr-20131107/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Nesting Module Level 1",
        href: "https://htmlspecs.com/css/css-nesting-1/",
        src: "https://www.w3.org/TR/2026/WD-css-nesting-1-20260122/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Custom Properties for Cascading Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-variables-1/",
        src: "https://www.w3.org/TR/2022/CR-css-variables-1-20220616/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Cascading and Inheritance Level 3",
        href: "https://htmlspecs.com/css/css-cascade-3/",
        src: "https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Cascading and Inheritance Level 4",
        href: "https://htmlspecs.com/css/css-cascade-4/",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-4-20220113/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Cascading and Inheritance Level 5",
        href: "https://htmlspecs.com/css/css-cascade-5/",
        src: "https://www.w3.org/TR/2022/CR-css-cascade-5-20220113/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Cascading and Inheritance Level 6",
        href: "https://htmlspecs.com/css/css-cascade-6/",
        src: "https://www.w3.org/TR/2024/WD-css-cascade-6-20240906/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Syntax Module Level 3",
        href: "https://htmlspecs.com/css/css-syntax-3/",
        src: "https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Values and Units Module Level 3",
        href: "https://htmlspecs.com/css/css-values-3/",
        src: "https://www.w3.org/TR/2024/CRD-css-values-3-20240322/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Values and Units Module Level 4",
        href: "https://htmlspecs.com/css/css-values-4/",
        src: "https://www.w3.org/TR/2024/WD-css-values-4-20240312/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Values and Units Module Level 5",
        href: "https://htmlspecs.com/css/css-values-5/",
        src: "https://www.w3.org/TR/2024/WD-css-values-5-20241111/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Environment Variables Module Level 1",
        href: "https://htmlspecs.com/css/css-env-1/",
        src: "https://www.w3.org/TR/2025/WD-css-env-1-20250923/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Logical Properties and Values Level 1",
        href: "https://htmlspecs.com/css/css-logical-1/",
        src: "https://www.w3.org/TR/2025/WD-css-logical-1-20251204/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 颜色、背景、边框与视觉效果|색상, 배경, 테두리 및 시각 효과|色・背景・境界・視覚効果
    {
        text: "CSS Color Module Level 3",
        href: "https://htmlspecs.com/css/css-color-3/",
        src: "https://www.w3.org/TR/2022/REC-css-color-3-20220118/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Color Module Level 4",
        href: "https://htmlspecs.com/css/css-color-4/",
        src: "https://www.w3.org/TR/2026/CRD-css-color-4-20260502/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Color Module Level 5",
        href: "https://htmlspecs.com/css/css-color-5/",
        src: "https://www.w3.org/TR/2026/WD-css-color-5-20260605/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Color Adjustment Module Level 1",
        href: "https://htmlspecs.com/css/css-color-adjust-1/",
        src: "https://www.w3.org/TR/2025/CR-css-color-adjust-1-20251216/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Color HDR Module Level 1",
        href: "https://htmlspecs.com/css/css-color-hdr-1/",
        src: "https://www.w3.org/TR/2026/WD-css-color-hdr-1-20260303/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Filter Effects Module Level 1",
        href: "https://htmlspecs.com/css/filter-effects-1/",
        src: "https://www.w3.org/TR/2018/WD-filter-effects-1-20181218/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Compositing and Blending Level 1",
        href: "https://htmlspecs.com/css/compositing-1/",
        src: "https://www.w3.org/TR/2024/CRD-compositing-1-20240321/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Fill and Stroke Module Level 3",
        href: "https://htmlspecs.com/css/fill-stroke-3/",
        src: "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Backgrounds and Borders Level 3",
        href: "https://htmlspecs.com/css/css-backgrounds-3/",
        src: "https://www.w3.org/TR/2024/CRD-css-backgrounds-3-20240311/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Backgrounds Module Level 4",
        href: "https://htmlspecs.com/css/css-backgrounds-4/",
        src: "https://www.w3.org/TR/2025/WD-css-backgrounds-4-20251125/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Borders and Box Decorations Module Level 4",
        href: "https://htmlspecs.com/css/css-borders-4/",
        src: "https://www.w3.org/TR/2025/WD-css-borders-4-20251216/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 字体、文本、列表与书写模式|글꼴, 텍스트, 목록 및 쓰기 모드|フォント・テキスト・リスト・書字方向
    {
        text: "CSS Fonts Module Level 3",
        href: "https://htmlspecs.com/css/css-fonts-3/",
        src: "https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Fonts Module Level 4",
        href: "https://htmlspecs.com/css/css-fonts-4/",
        src: "https://www.w3.org/TR/2026/WD-css-fonts-4-20260422/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Fonts Module Level 5",
        href: "https://htmlspecs.com/css/css-fonts-5/",
        src: "https://www.w3.org/TR/2026/WD-css-fonts-5-20260303/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Font Loading Module Level 3",
        href: "https://htmlspecs.com/css/css-font-loading/",
        src: "https://www.w3.org/TR/2023/WD-css-font-loading-3-20230406/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Text Module Level 3",
        href: "https://htmlspecs.com/css/css-text-3/",
        src: "https://www.w3.org/TR/2026/CRD-css-text-3-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Text Module Level 4",
        href: "https://htmlspecs.com/css/css-text-4/",
        src: "https://www.w3.org/TR/2026/WD-css-text-4-20260608/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Counter Styles Level 3",
        href: "https://htmlspecs.com/css/css-counter-styles-3/",
        src: "https://www.w3.org/TR/2021/CR-css-counter-styles-3-20210727/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Lists and Counters Module Level 3",
        href: "https://htmlspecs.com/css/css-lists-3/",
        src: "https://www.w3.org/TR/2020/WD-css-lists-3-20201117/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Text Decoration Level 3",
        href: "https://htmlspecs.com/css/css-text-decor-3/",
        src: "https://www.w3.org/TR/2022/CRD-css-text-decor-3-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Text Decoration Level 4",
        href: "https://htmlspecs.com/css/css-text-decor-4/",
        src: "https://www.w3.org/TR/2022/WD-css-text-decor-4-20220504/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Ruby Annotation Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-ruby-1/",
        src: "https://www.w3.org/TR/2022/WD-css-ruby-1-20221231/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Rhythm Module Level 1",
        href: "https://htmlspecs.com/css/css-rhythm-1/",
        src: "https://www.w3.org/TR/2026/WD-css-rhythm-1-20260217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Writing Modes Level 3",
        href: "https://htmlspecs.com/css/css-writing-modes-3/",
        src: "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Writing Modes Level 4",
        href: "https://htmlspecs.com/css/css-writing-modes-4/",
        src: "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Speech Module Level 1",
        href: "https://htmlspecs.com/css/css-speech-1/",
        src: "https://www.w3.org/TR/2023/CRD-css-speech-1-20230214/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 布局、盒模型与定位|레이아웃, 박스 모델 및 위치 지정|レイアウト・ボックスモデル・配置
    {
        text: "CSS Box Model Level 3",
        href: "https://htmlspecs.com/css/css-box-3/",
        src: "https://www.w3.org/TR/2024/REC-css-box-3-20240411/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Box Model Level 4",
        href: "https://htmlspecs.com/css/css-box-4/",
        src: "https://www.w3.org/TR/2024/WD-css-box-4-20240804/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Geometry Interfaces Module Level 1",
        href: "https://htmlspecs.com/css/geometry-1/",
        src: "https://www.w3.org/TR/2025/CRD-geometry-1-20251204/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Display Module Level 3",
        href: "https://htmlspecs.com/css/css-display-3/",
        src: "https://www.w3.org/TR/2026/CRD-css-display-3-20260605/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Display Module Level 4",
        href: "https://htmlspecs.com/css/css-display-4/",
        src: "https://www.w3.org/TR/2025/WD-css-display-4-20251106/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Flexible Box Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-flexbox-1/",
        src: "https://www.w3.org/TR/2025/CRD-css-flexbox-1-20251014/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-grid-1/",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-1-20250326/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-grid-2/",
        src: "https://www.w3.org/TR/2025/CRD-css-grid-2-20250326/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Grid Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-grid-3/",
        src: "https://www.w3.org/TR/2026/WD-css-grid-3-20260121/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Table Module Level 3",
        href: "https://htmlspecs.com/css/css-tables-3/",
        src: "https://www.w3.org/TR/2025/WD-css-tables-3-20251216/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Inline Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-inline-3/",
        src: "https://www.w3.org/TR/2024/WD-css-inline-3-20241218/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Shapes Module Level 1",
        href: "https://htmlspecs.com/css/css-shapes-1/",
        src: "https://www.w3.org/TR/2025/CRD-css-shapes-1-20250612/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Positioned Layout Module Level 3",
        href: "https://htmlspecs.com/css/css-position-3/",
        src: "https://www.w3.org/TR/2025/WD-css-position-3-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Positioned Layout Module Level 4",
        href: "https://htmlspecs.com/css/css-position-4/",
        src: "https://www.w3.org/TR/2025/WD-css-position-4-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Box Sizing Module Level 3",
        href: "https://htmlspecs.com/css/css-sizing-3/",
        src: "https://www.w3.org/TR/2021/WD-css-sizing-3-20211217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Box Sizing Module Level 4",
        href: "https://htmlspecs.com/css/css-sizing-4/",
        src: "https://www.w3.org/TR/2021/WD-css-sizing-4-20210520/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Box Alignment Module Level 3",
        href: "https://htmlspecs.com/css/css-align-3/",
        src: "https://www.w3.org/TR/2026/WD-css-align-3-20260130/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Gap Decorations Module Level 1",
        href: "https://htmlspecs.com/css/css-gaps-1/",
        src: "https://www.w3.org/TR/2026/WD-css-gaps-1-20260227/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Anchor Positioning Module Level 1",
        href: "https://htmlspecs.com/css/css-anchor-position-1/",
        src: "https://www.w3.org/TR/2026/WD-css-anchor-position-1-20260327/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Anchor Positioning Module Level 2",
        href: "https://htmlspecs.com/css/css-anchor-position-2/",
        src: "https://www.w3.org/TR/2025/WD-css-anchor-position-2-20251021/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 分页、分栏、分片与生成内容|페이지, 다단, 단편화 및 생성 콘텐츠|ページ・段組み・断片化・生成コンテンツ
    {
        text: "CSS Multi-column Layout Module Level 1",
        href: "https://htmlspecs.com/css/css-multicol-1/",
        src: "https://www.w3.org/TR/2024/CR-css-multicol-1-20240516/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Multi-column Layout Module Level 2",
        href: "https://htmlspecs.com/css/css-multicol-2/",
        src: "https://www.w3.org/TR/2024/WD-css-multicol-2-20241219/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Paged Media Module Level 3",
        href: "https://htmlspecs.com/css/css-page-3/",
        src: "https://www.w3.org/TR/2023/WD-css-page-3-20230914/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Generated Content for Paged Media Module",
        href: "https://htmlspecs.com/css/css-gcpm-3/",
        src: "https://www.w3.org/TR/2024/WD-css-gcpm-3-20240125/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Generated Content Module Level 3",
        href: "https://htmlspecs.com/css/css-content-3/",
        src: "https://www.w3.org/TR/2025/WD-css-content-3-20251204/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Fragmentation Module Level 3",
        href: "https://htmlspecs.com/css/css-break-3/",
        src: "https://www.w3.org/TR/2018/CR-css-break-3-20181204/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },

    //### 滚动、溢出、视口与空间导航|스크롤, 오버플로, 뷰포트 및 공간 내비게이션|スクロール・オーバーフロー・ビューポート・空間ナビゲーション
    {
        text: "CSS Overflow Module Level 3",
        href: "https://htmlspecs.com/css/css-overflow-3/",
        src: "https://www.w3.org/TR/2025/WD-css-overflow-3-20251007/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overflow Module Level 4",
        href: "https://htmlspecs.com/css/css-overflow-4/",
        src: "https://www.w3.org/TR/2023/WD-css-overflow-4-20230321/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overflow Module Level 5",
        href: "https://htmlspecs.com/css/css-overflow-5/",
        src: "https://www.w3.org/TR/2024/WD-css-overflow-5-20241217/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Spatial Navigation Level 1",
        href: "https://htmlspecs.com/css/css-nav-1/",
        src: "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Overscroll Behavior Module Level 1",
        href: "https://htmlspecs.com/css/css-overscroll-1/",
        src: "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Scroll Snap Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-snap-1/",
        src: "https://www.w3.org/TR/2021/CR-css-scroll-snap-1-20210311/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Scroll Snap Module Level 2",
        href: "https://htmlspecs.com/css/css-scroll-snap-2/",
        src: "https://www.w3.org/TR/2024/WD-css-scroll-snap-2-20240723/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Scrollbars Styling Module Level 1",
        href: "https://htmlspecs.com/css/css-scrollbars-1/",
        src: "https://www.w3.org/TR/2021/CR-css-scrollbars-1-20211209/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Scroll Anchoring Module Level 1",
        href: "https://htmlspecs.com/css/css-scroll-anchoring-1/",
        src: "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20201111/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSSOM View Module",
        href: "https://htmlspecs.com/css/cssom-view/",
        src: "https://www.w3.org/TR/2025/WD-cssom-view-1-20250916/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Viewport Module Level 1",
        href: "https://htmlspecs.com/css/css-viewport-1/",
        src: "https://www.w3.org/TR/2024/WD-css-viewport-1-20240125/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 图像、遮罩与图形装饰|이미지, 마스킹 및 그래픽 장식|画像・マスク・グラフィック装飾
    {
        text: "CSS Images Module Level 3",
        href: "https://htmlspecs.com/css/css-images-3/",
        src: "https://www.w3.org/TR/2023/CRD-css-images-3-20231218/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Images Module Level 4",
        href: "https://htmlspecs.com/css/css-images-4/",
        src: "https://www.w3.org/TR/2025/WD-css-images-4-20250930/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Image Animation Module Level 1",
        href: "https://htmlspecs.com/css/css-image-animation-1/",
        src: "https://www.w3.org/TR/2026/WD-css-image-animation-1-20260409/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Masking Module Level 1",
        href: "https://htmlspecs.com/css/css-masking-1/",
        src: "https://www.w3.org/TR/2021/CRD-css-masking-1-20210805/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 动画、变换、过渡与视图切换|애니메이션, 변환, 전환 및 뷰 전환|アニメーション・変形・遷移・ビュー遷移
    {
        text: "CSS Easing Functions Level 1",
        href: "https://htmlspecs.com/css/css-easing-1/",
        src: "https://www.w3.org/TR/2023/CRD-css-easing-1-20230213/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Easing Functions Level 2",
        href: "https://htmlspecs.com/css/css-easing-2/",
        src: "https://www.w3.org/TR/2024/WD-css-easing-2-20240829/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transforms Module Level 1",
        href: "https://htmlspecs.com/css/css-transforms-1/",
        src: "https://www.w3.org/TR/2019/CR-css-transforms-1-20190214/",
        "last-modified": "-",
        lang: "cjk",
        state: "CR"
    },
    {
        text: "CSS Transforms Module Level 2",
        href: "https://htmlspecs.com/css/css-transforms-2/",
        src: "https://www.w3.org/TR/2021/WD-css-transforms-2-20211109/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transitions",
        href: "https://htmlspecs.com/css/css-transitions-1/",
        src: "https://www.w3.org/TR/2026/WD-css-transitions-1-20260108/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Transitions Level 2",
        href: "https://htmlspecs.com/css/css-transitions-2/",
        src: "https://www.w3.org/TR/2026/WD-css-transitions-2-20260204/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animations Level 1",
        href: "https://htmlspecs.com/css/css-animations-1/",
        src: "https://www.w3.org/TR/2023/WD-css-animations-1-20230302/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animations Level 2",
        href: "https://htmlspecs.com/css/css-animations-2/",
        src: "https://www.w3.org/TR/2023/WD-css-animations-2-20230602/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web Animations",
        href: "https://htmlspecs.com/css/web-animations-1/",
        src: "https://www.w3.org/TR/2023/WD-web-animations-1-20230605/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Web Animations Module Level 2",
        href: "https://htmlspecs.com/css/web-animations-2/",
        src: "https://www.w3.org/TR/2025/WD-web-animations-2-20251120/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Motion Path Module Level 1",
        href: "https://htmlspecs.com/css/motion-1/",
        src: "https://www.w3.org/TR/2024/WD-motion-1-20241105/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS View Transitions Module Level 1",
        href: "https://htmlspecs.com/css/css-view-transitions-1/",
        src: "https://www.w3.org/TR/2024/CRD-css-view-transitions-1-20240328/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS View Transitions Module Level 2",
        href: "https://htmlspecs.com/css/css-view-transitions-2/",
        src: "https://www.w3.org/TR/2024/WD-css-view-transitions-2-20241113/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Animation Worklet API",
        href: "https://htmlspecs.com/css/css-animation-worklet-1/",
        src: "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Will Change Module Level 1",
        href: "https://htmlspecs.com/css/css-will-change-1/",
        src: "https://www.w3.org/TR/2022/CRD-css-will-change-1-20220505/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },

    //### 条件、容器、作用域与响应式|조건, 컨테이너, 스코프 및 반응형|条件・コンテナー・スコープ・レスポンシブ
    {
        text: "CSS Conditional Rules Module Level 3",
        href: "https://htmlspecs.com/css/css-conditional-3/",
        src: "https://www.w3.org/TR/2024/CRD-css-conditional-3-20240815/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Conditional Rules Module Level 4",
        href: "https://htmlspecs.com/css/css-conditional-4/",
        src: "https://www.w3.org/TR/2025/CRD-css-conditional-4-20250904/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Conditional Rules Module Level 5",
        href: "https://htmlspecs.com/css/css-conditional-5/",
        src: "https://www.w3.org/TR/2025/WD-css-conditional-5-20251030/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "Media Queries Level 3",
        href: "https://htmlspecs.com/css/mediaqueries-3/",
        src: "https://www.w3.org/TR/2024/REC-mediaqueries-3-20240521/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "Media Queries Level 4",
        href: "https://htmlspecs.com/css/mediaqueries-4/",
        src: "https://www.w3.org/TR/2026/CRD-mediaqueries-4-20260219/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "Media Queries Level 5",
        href: "https://htmlspecs.com/css/mediaqueries-5/",
        src: "https://www.w3.org/TR/2026/WD-mediaqueries-5-20260219/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Containment Module Level 1",
        href: "https://htmlspecs.com/css/css-contain-1/",
        src: "https://www.w3.org/TR/2024/REC-css-contain-1-20240625/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Containment Module Level 2",
        href: "https://htmlspecs.com/css/css-contain-2/",
        src: "https://www.w3.org/TR/2022/WD-css-contain-2-20220917/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Containment Module Level 3",
        href: "https://htmlspecs.com/css/css-contain-3/",
        src: "https://www.w3.org/TR/2022/WD-css-contain-3-20220818/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Mixins Module Level 1",
        href: "https://htmlspecs.com/css/css-mixins-1/",
        src: "https://www.w3.org/TR/2025/WD-css-mixins-1-20250515/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Scoping Module Level 1",
        href: "https://htmlspecs.com/css/css-scoping-1/",
        src: "https://www.w3.org/TR/2014/WD-css-scoping-1-20140403/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Shadow Parts Module Level 1",
        href: "https://htmlspecs.com/css/css-shadow-parts-1/",
        src: "https://www.w3.org/TR/2025/WD-css-shadow-parts-1-20251216/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### UI、表单、高亮与用户交互|UI, 폼, 하이라이트 및 사용자 상호작용|UI・フォーム・ハイライト・ユーザー操作
    {
        text: "CSS Custom Highlight API Module Level 1",
        href: "https://htmlspecs.com/css/css-highlight-api-1/",
        src: "https://www.w3.org/TR/2021/WD-css-highlight-api-1-20211215/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Pseudo-Elements Module Level 4",
        href: "https://htmlspecs.com/css/css-pseudo-4/",
        src: "https://www.w3.org/TR/2025/WD-css-pseudo-4-20250627/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Basic User Interface Module Level 3",
        href: "https://htmlspecs.com/css/css-ui-3/",
        src: "https://www.w3.org/TR/2026/REC-css-ui-3-20260407/",
        "last-modified": "-",
        lang: "cjk",
        state: "REC"
    },
    {
        text: "CSS Basic User Interface Module Level 4",
        href: "https://htmlspecs.com/css/css-ui-4/",
        src: "https://www.w3.org/TR/2026/WD-css-ui-4-20260120/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Form Control Styling Level 1",
        href: "https://htmlspecs.com/css/css-forms-1/",
        src: "https://www.w3.org/TR/2025/WD-css-forms-1-20250325/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### CSSOM、Houdini 与自定义扩展|CSSOM, Houdini 및 사용자 정의 확장|CSSOM・Houdini・カスタム拡張
    {
        text: "CSS Object Model (CSSOM)",
        href: "https://htmlspecs.com/css/cssom-1/",
        src: "https://www.w3.org/TR/2021/WD-cssom-1-20210826/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Typed OM Level 1",
        href: "https://htmlspecs.com/css/css-typed-om-1/",
        src: "https://www.w3.org/TR/2024/WD-css-typed-om-1-20240321/",

        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Painting API Level 1",
        href: "https://htmlspecs.com/css/css-paint-api-1/",
        src: "https://www.w3.org/TR/2021/CRD-css-paint-api-1-20211216/",
        "last-modified": "-",
        lang: "cjk",
        state: "CRD"
    },
    {
        text: "CSS Layout API Level 1",
        href: "https://htmlspecs.com/css/css-layout-api-1/",
        src: "https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },
    {
        text: "CSS Properties and Values API Level 1",
        href: "https://htmlspecs.com/css/css-properties-values-api-1/",
        src: "https://www.w3.org/TR/2024/WD-css-properties-values-api-1-20240326/",
        "last-modified": "-",
        lang: "cjk",
        state: "WD"
    },

    //### 设计令牌|디자인 토큰|デザイントークン
    {
        text: "Design Tokens Technical Reports 2025.10",
        href: "https://htmlspecs.com/css/design-tokens/",
        src: "https://www.designtokens.org/tr/2025.10/",
        "last-modified": "0",
        lang: "cjk",
        state: "CG-FINAL"
    },
    {
        text: "Design Tokens Format Module 2025.10",
        href: "https://htmlspecs.com/css/design-tokens-format/",
        src: "https://www.designtokens.org/tr/2025.10/format/",
        "last-modified": "0",
        lang: "cjk",
        state: "CG-FINAL"
    },
    {
        text: "Design Tokens Color Module 2025.10",
        href: "https://htmlspecs.com/css/design-tokens-color/",
        src: "https://www.designtokens.org/tr/2025.10/color/",
        "last-modified": "0",
        lang: "cjk",
        state: "CG-FINAL"
    },
    {
        text: "Design Tokens Resolver Module 2025.10",
        href: "https://htmlspecs.com/css/design-tokens-resolver/",
        src: "https://www.designtokens.org/tr/2025.10/resolver/",
        "last-modified": "0",
        lang: "cjk",
        state: "CG-FINAL"
    }
];

const httpLinks = [

    //## HTTP|HTTP|HTTP
    {
        text: "index",
        href: "https://htmlspecs.com/http/",
        src: "https://httpwg.org/specs/",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-2f19",
        lang: "cjk",
        state: ""
    },

    //### HTTP 核心、版本与压缩|HTTP 핵심, 버전 및 압축|HTTP 中核・バージョン・圧縮
    {
        text: "HTTP Semantics",
        href: "https://htmlspecs.com/http/rfc9110.html",
        src: "https://httpwg.org/specs/rfc9110.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-df679",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Caching",
        href: "https://htmlspecs.com/http/rfc9111.html",
        src: "https://httpwg.org/specs/rfc9111.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-2b98d",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/1.1",
        href: "https://htmlspecs.com/http/rfc9112.html",
        src: "https://httpwg.org/specs/rfc9112.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-36986",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/2",
        href: "https://htmlspecs.com/http/rfc9113.html",
        src: "https://httpwg.org/specs/rfc9113.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-4fb9e",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP/3",
        href: "https://htmlspecs.com/http/rfc9114.html",
        src: "https://httpwg.org/specs/rfc9114.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-44fa1",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HPACK: Header Compression for HTTP/2",
        href: "https://htmlspecs.com/http/rfc7541.html",
        src: "https://httpwg.org/specs/rfc7541.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-2921e",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "QPACK: Field Compression for HTTP/3",
        href: "https://htmlspecs.com/http/rfc9204.html",
        src: "https://httpwg.org/specs/rfc9204.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-27785",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Structured Field Values for HTTP",
        href: "https://htmlspecs.com/http/rfc9651.html",
        src: "https://httpwg.org/specs/rfc9651.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-2132a",
        lang: "cjk",
        state: "RFC"
    },

    //### 方法、状态码与协议构建|메서드, 상태 코드 및 프로토콜 구축|メソッド・ステータスコード・プロトコル構築
    {
        text: "Building Protocols with HTTP",
        href: "https://htmlspecs.com/http/rfc9205.html",
        src: "https://httpwg.org/specs/rfc9205.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-1dd77",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "PATCH Method for HTTP",
        href: "https://htmlspecs.com/http/rfc5789.html",
        src: "https://httpwg.org/specs/rfc5789.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-9b07",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Additional HTTP Status Codes",
        href: "https://htmlspecs.com/http/rfc6585.html",
        src: "https://httpwg.org/specs/rfc6585.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-90ef",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "An HTTP Status Code to Report Legal Obstacles",
        href: "https://htmlspecs.com/http/rfc7725.html",
        src: "https://httpwg.org/specs/rfc7725.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-68db",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "An HTTP Status Code for Indicating Hints",
        href: "https://htmlspecs.com/http/rfc8297.html",
        src: "https://httpwg.org/specs/rfc8297.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-73c4",
        lang: "cjk",
        state: "RFC"
    },

    //### 缓存与重用|캐시 및 재사용|キャッシュと再利用
    {
        text: "HTTP Cache-Control Extensions for Stale Content",
        href: "https://htmlspecs.com/http/rfc5861.html",
        src: "https://httpwg.org/specs/rfc5861.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-6a77",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Immutable Responses",
        href: "https://htmlspecs.com/http/rfc8246.html",
        src: "https://httpwg.org/specs/rfc8246.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-6f44",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Cache-Status HTTP Response Header Field",
        href: "https://htmlspecs.com/http/rfc9211.html",
        src: "https://httpwg.org/specs/rfc9211.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-abd1",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Targeted HTTP Cache Control",
        href: "https://htmlspecs.com/http/rfc9213.html",
        src: "https://httpwg.org/specs/rfc9213.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-a034",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Cache Groups",
        href: "https://htmlspecs.com/http/rfc9875.html",
        src: "https://httpwg.org/specs/rfc9875.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-7de6",
        lang: "cjk",
        state: "RFC"
    },

    //### 表示元数据、链接与内容编码|표현 메타데이터, 링크 및 콘텐츠 인코딩|表現メタデータ・リンク・内容エンコーディング
    {
        text: "HTTP State Management Mechanism",
        href: "https://htmlspecs.com/http/rfc6265.html",
        src: "https://httpwg.org/specs/rfc6265.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-1d2cd",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)",
        href: "https://htmlspecs.com/http/rfc6266.html",
        src: "https://httpwg.org/specs/rfc6266.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-de1b",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Hypertext Transfer Protocol (HTTP) Client-Initiated Content-Encoding",
        href: "https://htmlspecs.com/http/rfc7694.html",
        src: "https://httpwg.org/specs/rfc7694.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-8a24",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Web Linking",
        href: "https://htmlspecs.com/http/rfc8288.html",
        src: "https://httpwg.org/specs/rfc8288.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-14cc2",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Compression Dictionary Transport",
        href: "https://htmlspecs.com/http/rfc9842.html",
        src: "https://httpwg.org/specs/rfc9842.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-144e8",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Digest Fields",
        href: "https://htmlspecs.com/http/rfc9530.html",
        src: "https://httpwg.org/specs/rfc9530.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-2016f",
        lang: "cjk",
        state: "RFC"
    },

    //### 客户端提示、偏好与优先级|클라이언트 힌트, 선호 및 우선순위|クライアントヒント・優先・優先度
    {
        text: "Prefer Header for HTTP",
        href: "https://htmlspecs.com/http/rfc7240.html",
        src: "https://httpwg.org/specs/rfc7240.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-d5cb",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Client Hints",
        href: "https://htmlspecs.com/http/rfc8942.html",
        src: "https://httpwg.org/specs/rfc8942.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-c560",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Extensible Prioritization Scheme for HTTP",
        href: "https://htmlspecs.com/http/rfc9218.html",
        src: "https://httpwg.org/specs/rfc9218.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-1843f",
        lang: "cjk",
        state: "RFC"
    },

    //### 连接、中介、代理与隧道|연결, 중개자, 프록시 및 터널|接続・中介・プロキシ・トンネル
    {
        text: "The ALPN HTTP Header Field",
        href: "https://htmlspecs.com/http/rfc7639.html",
        src: "https://httpwg.org/specs/rfc7639.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-86f9",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Alternative Services",
        href: "https://htmlspecs.com/http/rfc7838.html",
        src: "https://httpwg.org/specs/rfc7838.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-139cc",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The ORIGIN HTTP/2 Frame",
        href: "https://htmlspecs.com/http/rfc8336.html",
        src: "https://httpwg.org/specs/rfc8336.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-aabc",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Bootstrapping WebSockets with HTTP/2",
        href: "https://htmlspecs.com/http/rfc8441.html",
        src: "https://httpwg.org/specs/rfc8441.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-9881",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Proxy-Status HTTP Response Header Field",
        href: "https://htmlspecs.com/http/rfc9209.html",
        src: "https://httpwg.org/specs/rfc9209.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-14f69",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Bootstrapping WebSockets with HTTP/3",
        href: "https://htmlspecs.com/http/rfc9220.html",
        src: "https://httpwg.org/specs/rfc9220.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-6676",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Proxying UDP in HTTP",
        href: "https://htmlspecs.com/http/rfc9298.html",
        src: "https://www.rfc-editor.org/rfc/rfc9298",
        "last-modified": "0",
        etag: null,
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The ORIGIN Extension in HTTP/3",
        href: "https://htmlspecs.com/http/rfc9412.html",
        src: "https://httpwg.org/specs/rfc9412.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-64f2",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Client-Cert HTTP Header Field",
        href: "https://htmlspecs.com/http/rfc9440.html",
        src: "https://httpwg.org/specs/rfc9440.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-105df",
        lang: "cjk",
        state: "RFC"
    },

    //### 认证、签名与安全|인증, 서명 및 보안|認証・署名・セキュリティ
    {
        text: "HTTP Digest Access Authentication",
        href: "https://htmlspecs.com/http/rfc7616.html",
        src: "https://httpwg.org/specs/rfc7616.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-1b777",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The 'Basic' HTTP Authentication Scheme",
        href: "https://htmlspecs.com/http/rfc7617.html",
        src: "https://httpwg.org/specs/rfc7617.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-e5a0",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Encrypted Content-Encoding for HTTP",
        href: "https://htmlspecs.com/http/rfc8188.html",
        src: "https://httpwg.org/specs/rfc8188.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-eab6",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "Using Early Data in HTTP",
        href: "https://htmlspecs.com/http/rfc8470.html",
        src: "https://httpwg.org/specs/rfc8470.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-caa3",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "HTTP Message Signatures",
        href: "https://htmlspecs.com/http/rfc9421.html",
        src: "https://httpwg.org/specs/rfc9421.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-5a94f",
        lang: "cjk",
        state: "RFC"
    },
    {
        text: "The Concealed HTTP Authentication Scheme",
        href: "https://htmlspecs.com/http/rfc9729.html",
        src: "https://httpwg.org/specs/rfc9729.html",
        "last-modified": "Mon, 20 Oct 2025 04:56:46 GMT",
        etag: "695b0d14-11b87",
        lang: "cjk",
        state: "RFC"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { links, cssLinks, httpLinks };
}
