/**
 * POST /api/indexnow
 *   Body: { urls: string[], token: string }
 *   - 변경된 페이지 URL을 IndexNow에 즉시 전파.
 *   - token 환경변수(INDEXNOW_TOKEN)와 일치해야 동작 (외부 abuse 방지).
 *
 * GET /api/indexnow?token=...
 *   - 사이트맵 전체 URL을 일괄 핑 (전체 색인 재요청).
 *
 * 환경변수:
 *   INDEXNOW_TOKEN — 호출자 인증용 비밀 토큰 (서버 환경변수에 설정).
 *
 * 사용 예:
 *   curl -X POST https://www.oktools.co.kr/api/indexnow \
 *     -H "Content-Type: application/json" \
 *     -d '{"urls":["https://www.oktools.co.kr/tools/clock"],"token":"YOUR_TOKEN"}'
 *
 *   curl "https://www.oktools.co.kr/api/indexnow?token=YOUR_TOKEN"
 */

import { NextRequest, NextResponse } from "next/server";
import { pingIndexNow, pingAllSitemapUrls } from "@/lib/indexnow";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "unauthorized" },
    { status: 401, headers: { "Cache-Control": "no-store" } }
  );
}

function checkToken(received: string | null): boolean {
  const expected = process.env.INDEXNOW_TOKEN;
  if (!expected || expected.length < 8) return false;
  return received === expected;
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!checkToken(token)) return unauthorized();

  const result = await pingAllSitemapUrls();
  return NextResponse.json(result, {
    status: result.ok ? 200 : 502,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: NextRequest) {
  let body: { urls?: unknown; token?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid json" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!checkToken(typeof body.token === "string" ? body.token : null)) {
    return unauthorized();
  }

  const urls = Array.isArray(body.urls) ? body.urls.filter((u): u is string => typeof u === "string") : [];
  if (urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: "urls must be a non-empty string array" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const result = await pingIndexNow(urls);
  return NextResponse.json(result, {
    status: result.ok ? 200 : 502,
    headers: { "Cache-Control": "no-store" },
  });
}
