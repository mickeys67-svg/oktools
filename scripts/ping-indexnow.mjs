#!/usr/bin/env node
/**
 * Build-time IndexNow ping
 *
 * 빌드 산출물을 배포한 직후(또는 sitemap 변경 시) 호출하면 IndexNow에
 * 사이트맵 전체 URL을 일괄 제출하여 Bing/Naver/Yandex 등이 즉시 색인을 시도합니다.
 *
 * 사용:
 *   node scripts/ping-indexnow.mjs
 *
 * 옵션 환경변수:
 *   INDEXNOW_DRY_RUN=1   실제 요청 없이 페이로드만 출력
 *   INDEXNOW_URLS=...    쉼표로 구분된 특정 URL만 핑 (생략 시 sitemap 전체)
 */

const INDEXNOW_KEY = "49c45be40196fb052620bdac086efb00";
const HOST = "www.oktools.co.kr";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const BASE_URL = `https://${HOST}`;
const LAST_MODIFIED = new Date().toISOString().slice(0, 10);

// sitemap.ts와 동일한 URL 목록을 평문 배열로 인라인 — 빌드 의존성 없이 실행되도록
const STATIC = ["", "/about", "/privacy", "/contact"];
const CATEGORIES = ["/finance", "/health", "/tools", "/fortune", "/space", "/convert", "/life"];
const TOOLS = [
  // Finance
  "/finance/loan-calculator", "/finance/installment", "/finance/salary", "/finance/retirement",
  "/finance/savings", "/finance/deposit", "/finance/compound-interest", "/finance/minimum-wage",
  "/finance/jeonwolse", "/finance/insurance4", "/finance/broker-fee", "/finance/income-tax",
  "/finance/unemployment", "/finance/acquisition-tax", "/finance/dsr", "/finance/capital-gains-tax",
  "/finance/subscription", "/finance/pension", "/finance/gift-tax", "/finance/year-end-tax",
  // Health
  "/health/bmi", "/health/bmr", "/health/biorhythm", "/health/age", "/health/dday",
  "/health/pregnancy", "/health/alcohol", "/health/body-fat", "/health/pregnancy-week", "/health/calorie",
  // Tools
  "/tools/clock", "/tools/timer", "/tools/stopwatch", "/tools/character-count",
  "/tools/random-number", "/tools/lotto", "/tools/youtube-tracklist",
  // Fortune
  "/fortune/tarot", "/fortune/tojeong", "/fortune/mbti", "/fortune/zodiac",
  "/fortune/dream", "/fortune/blood-type", "/fortune/name-match", "/fortune/zodiac-animal",
  // Space
  "/space/planet-weight", "/space/planet-age", "/space/travel-time", "/space/distance",
  // Life
  "/life/electricity", "/life/gpa", "/life/percentage", "/life/discount",
  "/life/military", "/life/traffic-fine", "/life/car-tax", "/life/dday",
  "/life/parental-leave", "/life/workdays",
];

function buildUrlList() {
  const fromEnv = process.env.INDEXNOW_URLS;
  if (fromEnv) {
    return fromEnv.split(",").map((u) => u.trim()).filter(Boolean);
  }
  return [...STATIC, ...CATEGORIES, ...TOOLS].map((p) => `${BASE_URL}${p}`);
}

async function main() {
  const urls = buildUrlList();
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  console.log(`[indexnow] ${urls.length} URLs prepared (${LAST_MODIFIED})`);

  if (process.env.INDEXNOW_DRY_RUN === "1") {
    console.log("[indexnow] DRY RUN — payload preview:");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const text = await res.text().catch(() => "");
    if (res.ok || res.status === 202) {
      console.log(`[indexnow] OK (${res.status}) — ${urls.length} URLs submitted`);
    } else {
      console.error(`[indexnow] FAIL (${res.status}) — ${text.slice(0, 200)}`);
      // 빌드는 통과시키되 종료 코드만 다르게
      process.exitCode = 1;
    }
  } catch (e) {
    console.error("[indexnow] network error:", e?.message || e);
    process.exitCode = 1;
  }
}

main();
