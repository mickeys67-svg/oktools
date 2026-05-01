import type { Metadata } from "next";
import Link from "next/link";
import { categories, getPopularTools, getToolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "오케이툴즈 - 무료 온라인 계산기 60종 모음 | 금융, 건강, 생활",
  description: "대출이자, 연봉실수령액, BMI, 전역일, 4대보험, 전월세전환율, 음주측정기, 혈액형궁합 등 61가지 무료 계산기. 설치 없이 바로 사용.",
  keywords: ["무료 계산기", "온라인 계산기", "대출이자계산기", "연봉실수령액계산기", "BMI계산기", "전역일계산기", "4대보험계산기", "전월세전환율", "단위변환", "퍼센트계산기", "학점계산기", "타로", "혈액형궁합", "로또번호추천"],
  openGraph: {
    url: "/",
    title: "오케이툴즈 - 무료 온라인 계산기 60종 모음 | 금융, 건강, 생활",
    description: "대출이자, 연봉실수령액, BMI, 전역일, 4대보험, 전월세전환율, 음주측정기, 혈액형궁합 등 61가지 무료 계산기. 설치 없이 바로 사용.",
  },
  alternates: {
    canonical: "https://www.oktools.co.kr/",
    languages: {
      "ko-KR": "https://www.oktools.co.kr/",
      "x-default": "https://www.oktools.co.kr/",
    },
  },
};

export default function HomePage() {
  const popularTools = getPopularTools();

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Hero */}
      <section className="mb-10 text-center sm:mb-14">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-50">
          오늘 필요한 도구,{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-600">
            바로 찾아보세요
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg dark:text-gray-400">
          대출 계산기부터 타로카드까지, 61가지 도구를 깔끔한 디자인으로 무료 제공합니다.
        </p>
      </section>

      {/* Popular Tools */}
      <section className="mb-12 sm:mb-16">
        <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl dark:text-gray-100">
          인기 도구
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {popularTools.map((tool) => {
            const cat = categories.find((c) => c.id === tool.category);
            return (
              <Link
                key={tool.id}
                href={tool.path}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 transition-all group-hover:w-1.5"
                  style={{ backgroundColor: cat?.colorHex }}
                />
                <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base dark:text-gray-100">
                  {tool.name}
                </h3>
                <p className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl dark:text-gray-100">
          카테고리
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const catTools = getToolsByCategory(cat.id);
            return (
              <Link
                key={cat.id}
                href={cat.path}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: cat.colorHex }}
                  >
                    <span className="text-lg font-bold">
                      {cat.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {catTools.length}개 도구
                  </span>
                </div>
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {cat.name}
                </h3>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {catTools.slice(0, 3).map((t) => (
                    <span
                      key={t.id}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {t.name}
                    </span>
                  ))}
                  {catTools.length > 3 && (
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                      +{catTools.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-16 rounded-xl bg-gray-50 p-6 sm:p-8 dark:bg-gray-900">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
          오케이툴즈 소개
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            오케이툴즈는 대출이자 계산기, 연봉 실수령액 계산기, BMI 계산기, 바이오리듬,
            단위변환, 타로카드, 온라인 시계 등 일상에서 자주 필요한 도구를 한곳에 모은
            종합 도구 사이트입니다.
          </p>
          <p>
            복잡한 금융 계산부터 재미있는 운세까지, 깔끔한 디자인과 빠른 속도로
            누구나 쉽게 사용할 수 있습니다. 모든 도구는 무료이며, 회원가입 없이
            바로 이용 가능합니다.
          </p>
        </div>
      </section>

      {/* JSON-LD: CollectionPage + ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "오케이툴즈 - 무료 온라인 계산기 60종 모음",
            description:
              "대출이자, 연봉실수령액, BMI, 전역일, 4대보험, 전월세전환율 등 61가지 무료 계산기",
            url: "https://www.oktools.co.kr",
            inLanguage: "ko-KR",
            isPartOf: { "@id": "https://www.oktools.co.kr/#website" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: popularTools.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: tool.name,
              url: `https://www.oktools.co.kr${tool.path}`,
            })),
          }),
        }}
      />
    </div>
  );
}
