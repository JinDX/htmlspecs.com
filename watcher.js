const fs = require('fs');
const data = require('./data.js');

const SAVE_RESULTS =
  process.env.SAVE_RESULTS === '1' ||
  process.argv.includes('--save');

const RESULT_FILE = 'check-results.md';

const W3C_CONCURRENCY = 5;
const OTHER_CONCURRENCY = 10;

let progressText = '';

function logResult(text) {
  if (SAVE_RESULTS) {
    fs.appendFileSync(RESULT_FILE, text + '\n');
  } else {
    if (progressText) {
      process.stdout.write('\r\x1b[K');
    }

    console.log(text);

    if (progressText) {
      process.stdout.write(progressText);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseW3TrUrl(url) {
  try {
    const pathname = new URL(url).pathname;

    const match = pathname.match(
      /^\/TR\/(\d{4})\/([A-Z][A-Z0-9]*)-(.+)-(\d{8})\/?$/
    );

    if (!match) {
      return null;
    }

    return {
      year: match[1],
      status: match[2],
      shortname: match[3],
      date: match[4]
    };
  } catch {
    return null;
  }
}

function getW3Shortname(url) {
  const parsed = parseW3TrUrl(url);

  if (parsed && parsed.shortname) {
    return parsed.shortname;
  }

  try {
    const pathname = new URL(url).pathname;

    const match = pathname.match(
      /^\/TR\/([^/]+)\/?$/
    );

    if (match) {
      return match[1];
    }

    return null;
  } catch {
    return null;
  }
}

function isLatestAlias(url, shortname) {
  try {
    const pathname = new URL(url)
      .pathname
      .replace(/\/+$/, '');

    return pathname === `/TR/${shortname}`;
  } catch {
    return false;
  }
}

function getApiShortname(spec) {
  const href =
    spec &&
    spec._links &&
    spec._links.specification &&
    spec._links.specification.href;

  if (!href) {
    return null;
  }

  const match = href.match(
    /\/specifications\/([^/?#]+)\/?$/
  );

  if (!match) {
    return null;
  }

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

function isLaterW3Version(currentUrl, latestUrl) {
  const current = parseW3TrUrl(currentUrl);
  const latest = parseW3TrUrl(latestUrl);

  if (!current || !latest) {
    return false;
  }

  return latest.date > current.date;
}

async function getJsonWithRetry(url, maxRetry = 2) {
  let attempt = 0;

  while (true) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'htmlspecs-checker/1.0'
        },
        redirect: 'follow'
      });

      if (
        (res.status === 429 || res.status >= 500) &&
        attempt < maxRetry
      ) {
        attempt++;

        const retryAfterHeader =
          res.headers.get('retry-after');

        let delay = attempt * 1000;

        if (
          retryAfterHeader &&
          /^\d+$/.test(retryAfterHeader)
        ) {
          delay =
            Number(retryAfterHeader) * 1000;
        } else if (retryAfterHeader) {
          const retryDate =
            Date.parse(retryAfterHeader);

          if (Number.isFinite(retryDate)) {
            delay = Math.max(
              retryDate - Date.now(),
              1000
            );
          }
        }

        await sleep(delay);
        continue;
      }

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      if (
        err.message &&
        /^HTTP 4\d\d$/.test(err.message)
      ) {
        throw err;
      }

      if (attempt < maxRetry) {
        attempt++;

        await sleep(attempt * 1000);
        continue;
      }

      throw err;
    }
  }
}

async function mapWithConcurrency(
  items,
  limit,
  worker
) {
  let nextIndex = 0;

  async function runner() {
    while (true) {
      const index = nextIndex++;

      if (index >= items.length) {
        return;
      }

      await worker(items[index], index);
    }
  }

  const workerCount =
    Math.min(limit, items.length);

  const workers =
    Array.from(
      { length: workerCount },
      () => runner()
    );

  await Promise.all(workers);
}

// HEAD 请求与 W3C API 请求一样跟随跳转，并对限流和临时故障重试。
async function getHeadWithRetry(url, maxRetry = 2) {
  for (let attempt = 0; ; attempt++) {
    let res;

    try {
      res = await fetch(url, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'htmlspecs-checker/1.0'
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(15000)
      });
    } catch (err) {
      if (attempt >= maxRetry) {
        throw err;
      }

      await sleep((attempt + 1) * 1000);
      continue;
    }

    // 只有成功响应才能用于版本比较；304 表示未修改。
    if (res.ok || res.status === 304) {
      return res;
    }

    const finalUrlInfo =
      res.url && res.url !== url
        ? ` (final URL: ${res.url})`
        : '';

    const error = new Error(
      `HTTP ${res.status}${finalUrlInfo}`
    );

    const retryable =
      res.status === 429 ||
      (res.status >= 500 && res.status < 600);

    // 404 等永久错误立即报告，不能比较错误页面的响应头。
    if (!retryable || attempt >= maxRetry) {
      throw error;
    }

    const retryAfterHeader =
      res.headers.get('retry-after');

    let delay = (attempt + 1) * 1000;

    if (
      retryAfterHeader &&
      /^\d+$/.test(retryAfterHeader)
    ) {
      const retryDelay = Number(retryAfterHeader) * 1000;

      if (Number.isSafeInteger(retryDelay)) {
        delay = retryDelay;
      }
    } else if (retryAfterHeader) {
      const retryDate = Date.parse(retryAfterHeader);

      if (Number.isFinite(retryDate)) {
        delay = Math.max(retryDate - Date.now(), 0);
      }
    }

    // 分段等待，避免超大的 Retry-After 导致 setTimeout 溢出后立即重试。
    while (delay > 0) {
      const chunk = Math.min(delay, 60000);

      await sleep(chunk);
      delay -= chunk;
    }
  }
}

async function checkOtherLink(link) {
  try {
    const res = await getHeadWithRetry(link.src);

    if (res.status === 304) {
      return;
    }

    const etag = res.headers.get('etag');
    const lastModified =
      res.headers.get('last-modified');

    function getEtagSuffix(raw) {
      if (!raw) {
        return null;
      }

      const cleaned =
        raw.replace(/"/g, '');

      const parts =
        cleaned.split('-');

      return (
        parts[parts.length - 1] ||
        cleaned
      );
    }

    const etagSuffix =
      getEtagSuffix(etag);

    const hasStoredEtag =
      Object.prototype
        .hasOwnProperty
        .call(link, 'etag');

    const storedLastIsZero =
      link['last-modified'] === '0';

    if (hasStoredEtag) {
      let stored = link.etag;

      if (stored) {
        stored =
          stored.replace(/"/g, '');
      }

      const storedSuffix =
        getEtagSuffix(stored);

      if (etagSuffix) {
        if (
          storedSuffix !== etagSuffix
        ) {
          logResult(
            `- ${link.text} ETag changed:\n` +
            `  - Old ETag suffix: ${storedSuffix}\n` +
            `  - New ETag suffix: ${etagSuffix}\n` +
            `  - Link: ${link.src}`
          );
        }
      } else if (
        !storedLastIsZero &&
        lastModified &&
        link['last-modified']
      ) {
        const newTime =
          new Date(lastModified);

        const oldTime =
          new Date(
            link['last-modified']
          );

        const diffMs =
          Math.abs(newTime - oldTime);

        const diffMin =
          diffMs / 1000 / 60;

        if (diffMin > 2) {
          logResult(
            `- ${link.text} has been updated (no ETag from server):\n` +
            `  - New time: ${newTime.toUTCString()}\n` +
            `  - Old time: ${oldTime.toUTCString()}\n` +
            `  - Link: ${link.src}`
          );
        }
      }
    } else if (
      !storedLastIsZero &&
      lastModified &&
      link['last-modified']
    ) {
      const newTime =
        new Date(lastModified);

      const oldTime =
        new Date(
          link['last-modified']
        );

      const diffMs =
        Math.abs(newTime - oldTime);

      const diffMin =
        diffMs / 1000 / 60;

      if (diffMin > 2) {
        logResult(
          `- ${link.text} has been updated:\n` +
          `  - New time: ${newTime.toUTCString()}\n` +
          `  - Old time: ${oldTime.toUTCString()}\n` +
          `  - Link: ${link.src}`
        );
      }
    }
  } catch (err) {
    logResult(
      `- Failed to fetch ${link.src}: ${err.message} 😢`
    );
  }
}

const checkLinks = async (
  links,
  category
) => {
  const total = links.length;
  let finished = 0;

  logResult(
    `## Checking category: ${category} 😊\n`
  );

  const showProgress = () => {
    finished++;

    progressText =
      `\rProgress: ${finished}/${total}`;

    process.stdout.write(
      progressText
    );
  };

  const w3Links =
    links.filter(
      item =>
        item.src &&
        item.src.includes('w3.org/TR')
    );

  const otherLinks =
    links.filter(
      item =>
        !item.src ||
        !item.src.includes('w3.org/TR')
    );

  const w3Requests =
    mapWithConcurrency(
      w3Links,
      W3C_CONCURRENCY,
      async link => {
        const shortname =
          getW3Shortname(link.src);

        if (!shortname) {
          logResult(
            `- Failed to determine W3C shortname: ${link.src} 😅`
          );

          showProgress();
          return;
        }

        if (
          isLatestAlias(
            link.src,
            shortname
          )
        ) {
          showProgress();
          return;
        }

        const apiUrl =
          'https://api.w3.org/specifications/' +
          encodeURIComponent(shortname) +
          '/versions/latest';

        try {
          const currentSpec =
            await getJsonWithRetry(
              apiUrl,
              2
            );

          const latestUrl =
            currentSpec.uri;

          if (!latestUrl) {
            logResult(
              `- W3C API returned no uri for ${link.text}: ${apiUrl} 😅`
            );

            showProgress();
            return;
          }

          const apiShortname =
            getApiShortname(
              currentSpec
            );

          if (
            apiShortname &&
            apiShortname.toLowerCase() !==
            shortname.toLowerCase()
          ) {
            logResult(
              `- Note: ${link.text} W3C shortname has changed or redirects: \`${shortname}\` → \`${apiShortname}\`\n` +
              `  - Original link: ${link.src}\n` +
              `  - API latest specification: ${latestUrl} ✨`
            );

            showProgress();
            return;
          }

          if (
            isLaterW3Version(
              link.src,
              latestUrl
            )
          ) {
            const current =
              parseW3TrUrl(link.src);

            const latest =
              parseW3TrUrl(latestUrl);

            let statusInfo = '';

            if (
              current &&
              latest &&
              current.status &&
              latest.status &&
              current.status !==
              latest.status
            ) {
              statusInfo =
                `\n  - Status: ${current.status} → ${latest.status}`;
            }

            logResult(
              `- Note: ${link.text} ([original link](${link.src})) has a newer version available: [latest specification](${latestUrl}) ✨` +
              statusInfo
            );
          }
        } catch (err) {
          logResult(
            `- Request to W3C API failed for ${link.src}: ${err.message} 😢`
          );
        }

        showProgress();
      }
    );

  const otherRequests =
    mapWithConcurrency(
      otherLinks,
      OTHER_CONCURRENCY,
      async link => {
        await checkOtherLink(link);
        showProgress();
      }
    );

  await Promise.all([
    w3Requests,
    otherRequests
  ]);

  progressText = '';

  process.stdout.write('\n');

  logResult('\n');
};

const main = async () => {
  if (SAVE_RESULTS) {
    fs.writeFileSync(
      RESULT_FILE,
      '# Specification Check Summary\n\n'
    );
  }

  await checkLinks(
    data.links,
    'Standard Specifications'
  );

  await checkLinks(
    data.cssLinks,
    'CSS Related Specifications'
  );

  await checkLinks(
    data.httpLinks,
    'HTTP Related Specifications'
  );

  logResult(
    'All checks completed! 😊'
  );

  process.exit(0);
};

main();