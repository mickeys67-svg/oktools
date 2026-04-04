import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "온라인 도구 모음 - 시계, 타이머, 글자수 세기, 로또",
  description:
    "온라인 시계, 타이머, 스톱워치, 글자수 세기, 랜덤 번호 생성기, 로또 번호 추천 등 무료 유틸리티 도구를 바로 사용하세요.",
  keywords: ["온라인도구", "무료유틸리티", "온라인시계", "타이머", "스톱워치", "글자수세기", "로또번호추천", "랜덤번호생성기"],
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  const category = getCategoryById("tools")!;
  const tools = getToolsByCategory("tools");

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
          <span className="text-xl font-bold">T</span>
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-utility dark:bg-blue-950">
              <span className="text-lg font-bold">⚙</span>
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
          "name": "유틸리티",
          "url": "https://www.oktools.co.kr/tools",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "온라인 시계", "url": "https://www.oktools.co.kr/tools/clock" },
              { "@type": "ListItem", "position": 2, "name": "타이머", "url": "https://www.oktools.co.kr/tools/timer" },
              { "@type": "ListItem", "position": 3, "name": "스톱워치", "url": "https://www.oktools.co.kr/tools/stopwatch" },
              { "@type": "ListItem", "position": 4, "name": "글자수 세기", "url": "https://www.oktools.co.kr/tools/character-count" },
              { "@type": "ListItem", "position": 5, "name": "랜덤 번호 생성기", "url": "https://www.oktools.co.kr/tools/random-number" },
              { "@type": "ListItem", "position": 6, "name": "로또 번호 추천", "url": "https://www.oktools.co.kr/tools/lotto" }
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
            { "@type": "ListItem", "position": 2, "name": "유틸리티" }
          ]
        }) }}
      />
    </div>
  );
}
