import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "생활 계산기 모음 - 전기요금 학점 퍼센트 할인율 무료",
  description:
    "전기요금계산기, 학점계산기, 퍼센트계산, 할인율계산, 전역일계산기, 과태료조회, 자동차세계산 등 일상생활에 필요한 무료 계산기 도구 모음.",
  keywords: ["생활계산기", "전기요금계산", "학점계산기", "퍼센트계산", "할인율계산", "전역일계산기", "과태료조회", "자동차세계산"],
  openGraph: {
    url: "/life",
    title: "생활 계산기 모음 - 전기요금 학점 퍼센트 할인율 무료",
    description:
      "전기요금계산기, 학점계산기, 퍼센트계산, 할인율계산, 전역일계산기, 과태료조회, 자동차세계산 등 일상생활에 필요한 무료 계산기 도구 모음.",
  },
  alternates: {
    canonical: "/life",
  },
};

export default function LifePage() {
  const category = getCategoryById("life")!;
  const tools = getToolsByCategory("life");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>
      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: category.colorHex }}>
          <span className="text-xl">🏠</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">{category.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>전기요금, 학점(GPA), 퍼센트, 할인율, 전역일, 과태료, 자동차세, D-Day, 육아휴직급여, 근무일수 등 일상생활에서 자주 필요한 계산기를 모았습니다. 복잡한 공식을 몰라도 숫자만 입력하면 즉시 결과를 확인할 수 있어 누구나 간편하게 사용할 수 있습니다.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link key={tool.id} href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-life dark:bg-pink-950">
              <span className="text-lg">🏠</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
            </div>
            <svg className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          "name": "생활 도구",
          "url": "https://www.oktools.co.kr/life",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "전기요금 계산기", "url": "https://www.oktools.co.kr/life/electricity" },
              { "@type": "ListItem", "position": 2, "name": "학점 계산기", "url": "https://www.oktools.co.kr/life/gpa" },
              { "@type": "ListItem", "position": 3, "name": "퍼센트 계산기", "url": "https://www.oktools.co.kr/life/percentage" },
              { "@type": "ListItem", "position": 4, "name": "할인율 계산기", "url": "https://www.oktools.co.kr/life/discount" },
              { "@type": "ListItem", "position": 5, "name": "전역일 계산기", "url": "https://www.oktools.co.kr/life/military" },
              { "@type": "ListItem", "position": 6, "name": "과태료 계산기", "url": "https://www.oktools.co.kr/life/traffic-fine" },
              { "@type": "ListItem", "position": 7, "name": "자동차세 계산기", "url": "https://www.oktools.co.kr/life/car-tax" },
              { "@type": "ListItem", "position": 8, "name": "D-Day 카운터", "url": "https://www.oktools.co.kr/life/dday" },
              { "@type": "ListItem", "position": 9, "name": "육아휴직급여 계산기", "url": "https://www.oktools.co.kr/life/parental-leave" },
              { "@type": "ListItem", "position": 10, "name": "근무일수 계산기", "url": "https://www.oktools.co.kr/life/workdays" }
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
            { "@type": "ListItem", "position": 2, "name": "생활 도구" }
          ]
        }) }}
      />
    </div>
  );
}
