import type { Metadata } from "next";
import Link from "next/link";
import TrafficFineCalc from "@/components/life/TrafficFineCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "과태료 계산기 - 속도위반 주정차위반 벌점 조회",
  description:
    "무료 과태료 계산기로 속도위반·주정차위반 과태료와 벌점을 조회하세요. 일반도로, 고속도로, 어린이보호구역 기준 벌금과 면허정지 기준을 즉시 확인.",
  keywords: ["과태료계산기", "속도위반과태료", "주정차위반과태료", "교통벌금", "벌점조회", "어린이보호구역과태료", "고속도로과태료", "면허정지기준", "속도위반벌점", "교통범칙금"],
  alternates: {
    canonical: "/life/traffic-fine",
  },
};

export default function TrafficFinePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">과태료 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        과태료 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        속도위반, 주정차위반 과태료와 벌점을 간편하게 조회하세요.
      </p>
      <TrafficFineCalc />
      <ResultAd />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "과태료 계산기",
          "description": "속도위반, 주정차위반 과태료 및 벌점 조회",
          "url": "https://www.oktools.co.kr/life/traffic-fine",
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
            { "@type": "ListItem", "position": 3, "name": "과태료 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
