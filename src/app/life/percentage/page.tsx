import type { Metadata } from "next";
import Link from "next/link";
import PercentageCalc from "@/components/life/PercentageCalc";

export const metadata: Metadata = {
  title: "퍼센트 계산기 - % 증가 감소 비율 계산",
  description:
    "무료 퍼센트 계산기로 증가율, 감소율, 비율을 계산하세요. A의 B%는? A에서 B로 몇% 변화? A는 B의 몇%? 세 가지 모드를 즉시 이용할 수 있습니다.",
  keywords: ["퍼센트계산기", "퍼센트계산", "백분율계산", "퍼센트증가율", "퍼센트감소율", "비율계산기", "할인퍼센트", "증감률계산"],
};

export default function PercentagePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">퍼센트 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">퍼센트 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">퍼센트 계산 세 가지 모드를 지원합니다.</p>
      <PercentageCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "퍼센트 계산기",
          "description": "퍼센트 증가/감소, 비율 계산",
          "url": "https://www.oktools.co.kr/life/percentage",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
          "inLanguage": "ko-KR"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "생활 도구", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "퍼센트 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
