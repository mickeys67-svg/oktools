import type { MetadataRoute } from "next";
import { tools, categories } from "@/data/tools";

const BASE_URL = "https://www.oktools.co.kr";

// 페이지별 우선순위 부스트 (popular 도구는 0.9, 나머지 0.8)
function toolPriority(toolId: string): number {
  const t = tools.find((x) => x.id === toolId);
  return t?.popular ? 0.9 : 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/board`, lastModified: now, changeFrequency: "daily", priority: 0.6 },
  ];

  // 카테고리 페이지: tools.ts의 categories에서 자동 추출 (convert는 단일 도구라 제외)
  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((c) => c.id !== "convert")
    .map((c) => ({
      url: `${BASE_URL}${c.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: c.id === "finance" ? 0.9 : 0.7,
    }));

  // 도구 페이지: tools.ts에서 자동 추출 (누락 방지)
  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${BASE_URL}${t.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: toolPriority(t.id),
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
