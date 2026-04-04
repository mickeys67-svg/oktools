import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "우주 계산기 - 행성 무게, 우주 거리, 빛 여행 시간",
  description:
    "무료 우주 계산기 모음. 행성 무게, 행성 나이, 우주 거리 변환, 빛 여행 시간 등 재미있는 우주과학 도구를 체험하세요.",
  keywords: ["우주계산기", "행성무게", "우주거리", "광년계산", "행성나이", "빛여행시간", "태양계", "우주과학"],
  alternates: {
    canonical: "/space",
  },
};

export default function SpacePage() {
  const category = getCategoryById("space")!;
  const tools = getToolsByCategory("space");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>

      <div className="mb-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.colorHex }}
        >
          <span className="text-xl">🚀</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-space dark:bg-cyan-950">
              <span className="text-lg">🪐</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
            </div>
            <svg
              className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "우주/과학",
          "url": "https://www.oktools.co.kr/space",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "행성 무게 계산기", "url": "https://www.oktools.co.kr/space/planet-weight" },
              { "@type": "ListItem", "position": 2, "name": "우주 거리 변환", "url": "https://www.oktools.co.kr/space/distance" },
              { "@type": "ListItem", "position": 3, "name": "빛 여행 시간 계산기", "url": "https://www.oktools.co.kr/space/travel-time" },
              { "@type": "ListItem", "position": 4, "name": "행성 나이 계산기", "url": "https://www.oktools.co.kr/space/planet-age" }
            ]
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "우주/과학" }
          ]
        }) }}
      />
    </div>
  );
}
