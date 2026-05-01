import { tools } from "@/data/tools";

const SITE_URL = "https://www.oktools.co.kr";
// 도구별 발행일 — 사이트 1차 공개일 기준 (절대값 안정성)
const TOOL_PUB_DATE = new Date("2026-04-04").toUTCString();

export async function GET() {
  const buildDate = new Date().toUTCString();

  const items = tools
    .map(
      (tool) => `
    <item>
      <title><![CDATA[${tool.name}]]></title>
      <link>${SITE_URL}${tool.path}</link>
      <guid isPermaLink="true">${SITE_URL}${tool.path}</guid>
      <description><![CDATA[${tool.description}]]></description>
      <pubDate>${TOOL_PUB_DATE}</pubDate>
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>오케이툴즈 - 무료 온라인 도구 모음</title>
    <link>${SITE_URL}</link>
    <description>대출 계산기부터 타로카드까지, ${tools.length}가지 도구를 깔끔한 디자인으로 무료 제공합니다.</description>
    <language>ko</language>
    <copyright>© 오케이툴즈</copyright>
    <managingEditor>contact@oktools.co.kr (오케이툴즈)</managingEditor>
    <generator>Next.js 16</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${SITE_URL}/icon-512.png</url>
      <title>오케이툴즈</title>
      <link>${SITE_URL}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${TOOL_PUB_DATE}</pubDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
