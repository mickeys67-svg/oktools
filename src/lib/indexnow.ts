/**
 * IndexNow client — 검색엔진(Bing, Naver, Yandex 등)에 URL 변경을 즉시 알림
 *
 * Spec: https://www.indexnow.org/documentation
 *
 * 한 번 핑하면 IndexNow 컨소시엄 전체에 전파되므로 엔드포인트 1개만 호출하면 됨.
 * 권장 엔드포인트: api.indexnow.org (모든 참여 엔진에 자동 분배)
 */

const INDEXNOW_KEY = "49c45be40196fb052620bdac086efb00";
const HOST = "www.oktools.co.kr";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

export type IndexNowResult = {
  ok: boolean;
  status: number;
  count: number;
  error?: string;
};

/**
 * URL 1~10,000개를 IndexNow에 한 번에 제출.
 * 단일 URL은 GET, 여러 개는 POST + JSON.
 */
export async function pingIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (urls.length === 0) {
    return { ok: false, status: 0, count: 0, error: "no urls" };
  }
  if (urls.length > 10000) {
    return { ok: false, status: 0, count: urls.length, error: "max 10000 urls per request" };
  }

  // 모든 URL이 같은 호스트인지 검증 (IndexNow 요구사항)
  const invalid = urls.find((u) => !u.startsWith(`https://${HOST}/`) && u !== `https://${HOST}`);
  if (invalid) {
    return { ok: false, status: 0, count: urls.length, error: `URL not on host ${HOST}: ${invalid}` };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    return {
      ok: res.ok,
      status: res.status,
      count: urls.length,
    };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      count: urls.length,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

/**
 * sitemap.ts에 정의된 URL 전체를 가져와 핑 (전체 색인 갱신용).
 */
export async function pingAllSitemapUrls(): Promise<IndexNowResult> {
  // sitemap.ts를 동적으로 import하여 URL 목록 추출
  const sitemapModule = await import("@/app/sitemap");
  const entries = sitemapModule.default();
  const urls = entries.map((e) => String(e.url));
  return pingIndexNow(urls);
}
