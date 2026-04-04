import type { Metadata } from "next";
import Link from "next/link";
import Insurance4Calc from "@/components/finance/Insurance4Calc";

export const metadata: Metadata = {
  title: "4대보험 계산기 2026 - 국민연금 건강보험 고용보험 계산",
  description:
    "무료 4대보험 계산기로 국민연금, 건강보험, 고용보험, 장기요양보험료를 바로 확인하세요. 2026년 요율 반영, 직장인 사업주 부담금 조회.",
  keywords: ["4대보험계산기", "4대보험요율", "국민연금계산", "건강보험료계산", "고용보험계산", "장기요양보험료", "4대보험료율2026", "직장인보험료", "사업주부담금", "보험료공제"],
  alternates: {
    canonical: "/finance/insurance4",
  },
};

export default function Insurance4Page() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">4대보험 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        4대보험 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        월 급여를 입력하면 4대보험 근로자/사업주 부담금을 한눈에 확인할 수 있습니다.
      </p>

      <Insurance4Calc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          2026년 4대보험 요율 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>국민연금</strong>: 근로자 4.5% + 사업주 4.5% = 9.0% (월 소득 590만원 상한)</li>
          <li><strong>건강보험</strong>: 근로자 3.545% + 사업주 3.545% = 7.09%</li>
          <li><strong>장기요양보험</strong>: 건강보험료의 12.81%</li>
          <li><strong>고용보험</strong>: 근로자 0.9% + 사업주 0.9~1.65% (기업 규모별 차등)</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2026년 기준 요율이며, 산재보험은 전액 사업주 부담으로 업종별 요율이 다릅니다.
          실제 금액은 회사 정책에 따라 다를 수 있습니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "4대보험 계산기",
          "description": "국민연금, 건강보험, 고용보험 근로자/사업주 부담금 계산",
          "url": "https://www.oktools.co.kr/finance/insurance4",
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
            { "@type": "ListItem", "position": 3, "name": "4대보험 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
