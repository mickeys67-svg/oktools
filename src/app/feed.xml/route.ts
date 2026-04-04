import { tools } from "@/data/tools";

const SITE_URL = "https://www.oktools.co.kr";

export async function GET() {
  const items = tools
    .map(
      (tool) => `
    <item>
      <title>${tool.name}</title>
      <link>${SITE_URL}${tool.path}</link>
      <description>${tool.description}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>오케이툴즈 - 무료 온라인 도구 모음</title>
    <link>${SITE_URL}</link>
    <description>대출 계산기부터 타로카드까지, 44가지 도구를 깔끔한 디자인으로 무료 제공합니다.</description>
    <language>ko</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
