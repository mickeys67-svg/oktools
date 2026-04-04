import type { Metadata } from "next";
import Link from "next/link";
import SalaryCalculator from "@/components/finance/SalaryCalculator";

export const metadata: Metadata = {
  title: "연봉 실수령액 계산기 2026 - 4대보험 소득세 공제 후 월급",
  description:
    "무료 연봉 실수령액 계산기로 4대보험, 소득세 공제 후 월급을 바로 확인하세요. 2026년 기준 요율 반영, 연봉 3000~5000만원 실수령액 조회.",
  keywords: ["연봉실수령액", "연봉계산기", "월급계산기", "4대보험계산", "소득세계산", "실수령액", "연봉3000실수령", "연봉4000실수령", "연봉5000실수령", "세후월급", "급여계산기", "연봉협상"],
  alternates: {
    canonical: "/finance/salary",
  },
};

export default function SalaryPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">연봉 실수령액 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        연봉 실수령액 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        연봉(세전)을 입력하면 4대 보험과 소득세를 공제한 월 실수령액을 계산합니다.
      </p>

      <SalaryCalculator />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          공제 항목 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>국민연금</strong>: 월 급여의 4.5% (근로자 부담분)</li>
          <li><strong>건강보험</strong>: 월 급여의 3.545%</li>
          <li><strong>장기요양보험</strong>: 건강보험의 12.95%</li>
          <li><strong>고용보험</strong>: 월 급여의 0.9%</li>
          <li><strong>소득세</strong>: 과세표준 구간별 누진세율 (6~45%)</li>
          <li><strong>지방소득세</strong>: 소득세의 10%</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2026년 기준 요율을 적용한 근사치입니다. 실제 금액은 회사 정책 및 개인 상황에 따라 다를 수 있습니다.
        </p>
      </section>

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/minimum-wage" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            최저시급 계산기
          </Link>
          <Link href="/finance/income-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            소득세 계산기
          </Link>
          <Link href="/finance/insurance4" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            4대보험 계산기
          </Link>
          <Link href="/finance/unemployment" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            실업급여 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "연봉 실수령액은 어떻게 계산하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "연봉에서 4대 보험(국민연금, 건강보험, 장기요양보험, 고용보험)과 소득세, 지방소득세를 공제한 금액이 월 실수령액입니다. 연봉을 12로 나눈 월 급여에서 각 항목을 차감합니다." }
            },
            {
              "@type": "Question",
              "name": "4대 보험 본인 부담률은 얼마인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "2026년 기준 근로자 부담분은 국민연금 4.5%, 건강보험 3.545%, 장기요양보험(건강보험의 12.95%), 고용보험 0.9%입니다. 회사도 동일 비율(또는 그 이상)을 부담합니다." }
            },
            {
              "@type": "Question",
              "name": "연봉 3000만원 실수령액은?",
              "acceptedAnswer": { "@type": "Answer", "text": "연봉 3,000만원의 월 실수령액은 약 224만원 내외입니다. 4대 보험과 소득세 공제 후 금액이며, 부양가족 수와 비과세 항목에 따라 달라질 수 있습니다." }
            },
            {
              "@type": "Question",
              "name": "세금 공제 항목에는 무엇이 있나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "급여에서 공제되는 항목은 국민연금, 건강보험, 장기요양보험, 고용보험(4대 보험)과 소득세, 지방소득세(소득세의 10%)입니다. 비과세 수당(식대, 교통비 등)은 공제 대상에서 제외됩니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "연봉 실수령액 계산기",
          "description": "4대 보험, 소득세 공제 후 실수령액 계산",
          "url": "https://www.oktools.co.kr/finance/salary",
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
            { "@type": "ListItem", "position": 3, "name": "연봉 실수령액 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
