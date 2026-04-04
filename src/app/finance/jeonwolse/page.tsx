import type { Metadata } from "next";
import Link from "next/link";
import JeonwolseCalc from "@/components/finance/JeonwolseCalc";

export const metadata: Metadata = {
  title: "전월세 전환율 계산기 2026 - 전세 월세 환산 무료",
  description:
    "무료 전월세 전환율 계산기로 전세를 월세로, 월세를 전세로 바로 환산하세요. 적정 월세 확인, 전세가율 조회, 부동산 전월세 계산.",
  keywords: ["전월세전환율", "전세월세전환", "전월세계산기", "월세전세환산", "전환율계산", "적정월세", "전세가율", "월세계산", "전세보증금", "부동산전월세"],
  alternates: {
    canonical: "/finance/jeonwolse",
  },
};

export default function JeonwolsePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전월세 전환율 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        전월세 전환율 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        전세 보증금과 월세를 상호 환산하고, 적정 전환율을 확인하세요.
      </p>

      <JeonwolseCalc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          전월세 전환율이란?
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>전환율 공식</strong>: (월세 x 12) / (전세보증금 - 월세보증금) x 100</li>
          <li><strong>법정 상한</strong>: 한국은행 기준금리 + 2.0% (주택임대차보호법)</li>
          <li><strong>활용</strong>: 전세와 월세 중 유리한 조건을 비교할 때 사용</li>
          <li>전환율이 낮을수록 전세 대비 월세가 저렴한 것을 의미합니다</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 본 계산기는 참고용이며, 실제 계약 조건은 임대인과 협의하시기 바랍니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "전월세 전환율 계산기",
          "description": "전세 ↔ 월세 전환율 계산 및 환산가 비교",
          "url": "https://www.oktools.co.kr/finance/jeonwolse",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "전월세 전환율 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
