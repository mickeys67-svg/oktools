import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "무료운세 모음 - 타로, 토정비결, MBTI궁합, 꿈해몽",
  description:
    "무료 타로카드 리딩, 토정비결, MBTI 궁합, 별자리 운세, 혈액형 궁합, 이름 궁합, 꿈해몽까지 한곳에서 무료로 확인하세요.",
  keywords: ["무료운세", "타로카드", "토정비결", "MBTI궁합", "꿈해몽", "별자리운세", "혈액형궁합", "이름궁합", "띠계산기", "오늘의운세"],
  openGraph: {
    url: "/fortune",
    title: "무료운세 모음 - 타로, 토정비결, MBTI궁합, 꿈해몽",
    description:
      "무료 타로카드 리딩, 토정비결, MBTI 궁합, 별자리 운세, 혈액형 궁합, 이름 궁합, 꿈해몽까지 한곳에서 무료로 확인하세요.",
  },
  alternates: {
    canonical: "/fortune",
  },
};

export default function FortunePage() {
  const category = getCategoryById("fortune")!;
  const tools = getToolsByCategory("fortune");

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
          <span className="text-xl font-bold">✦</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>타로카드, 토정비결, 별자리 운세, MBTI 궁합, 꿈해몽, 혈액형 궁합, 이름 궁합, 띠 계산기까지 다양한 운세와 궁합 콘텐츠를 무료로 즐기세요. 재미로 보는 오늘의 운세부터 전통 토정비결까지, 회원가입 없이 바로 결과를 확인할 수 있습니다.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-fortune dark:bg-violet-950">
              <span className="text-lg font-bold">✦</span>
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
          "name": "운세/재미",
          "url": "https://www.oktools.co.kr/fortune",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "타로카드", "url": "https://www.oktools.co.kr/fortune/tarot" },
              { "@type": "ListItem", "position": 2, "name": "토정비결", "url": "https://www.oktools.co.kr/fortune/tojeong" },
              { "@type": "ListItem", "position": 3, "name": "별자리 운세", "url": "https://www.oktools.co.kr/fortune/zodiac" },
              { "@type": "ListItem", "position": 4, "name": "MBTI 궁합", "url": "https://www.oktools.co.kr/fortune/mbti" },
              { "@type": "ListItem", "position": 5, "name": "꿈해몽", "url": "https://www.oktools.co.kr/fortune/dream" },
              { "@type": "ListItem", "position": 6, "name": "혈액형 궁합", "url": "https://www.oktools.co.kr/fortune/blood-type" },
              { "@type": "ListItem", "position": 7, "name": "이름 궁합", "url": "https://www.oktools.co.kr/fortune/name-match" },
              { "@type": "ListItem", "position": 8, "name": "띠 계산기", "url": "https://www.oktools.co.kr/fortune/zodiac-animal" }
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
            { "@type": "ListItem", "position": 2, "name": "운세·재미" }
          ]
        }) }}
      />
    </div>
  );
}
