import type { Metadata } from "next";
import Link from "next/link";
import Insurance4Calc from "@/components/finance/Insurance4Calc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "4대보험 계산기 2026 - 국민연금 건강보험 고용보험 계산",
  description:
    "무료 4대보험 계산기로 국민연금, 건강보험, 고용보험, 장기요양보험료를 바로 확인하세요. 2026년 요율 반영, 직장인 사업주 부담금 조회.",
  keywords: ["4대보험계산기", "4대보험요율", "국민연금계산", "건강보험료계산", "고용보험계산", "장기요양보험료", "4대보험료율2026", "직장인보험료", "사업주부담금", "보험료공제"],
  openGraph: {
    title: "4대보험 계산기 2026 - 국민연금 건강보험 고용보험 계산",
    description:
      "무료 4대보험 계산기로 국민연금, 건강보험, 고용보험, 장기요양보험료를 바로 확인하세요. 2026년 요율 반영, 직장인 사업주 부담금 조회.",
  },
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
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            4대보험 계산기 사용 가이드
          </h2>
          <p>
            4대보험 계산기는 월 급여를 입력하면 국민연금, 건강보험, 장기요양보험, 고용보험의 근로자 부담분과 사업주 부담분을
            한눈에 확인할 수 있는 도구입니다. 급여 명세서의 공제 내역을 이해하거나 인건비를 산정할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">2026년 4대보험 요율</h3>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>국민연금</strong>: 근로자 4.5% + 사업주 4.5% = 9.0% (월 소득 590만원 상한)</li>
            <li><strong>건강보험</strong>: 근로자 3.545% + 사업주 3.545% = 7.09%</li>
            <li><strong>장기요양보험</strong>: 건강보험료의 12.81%</li>
            <li><strong>고용보험</strong>: 근로자 0.9% + 사업주 0.9~1.65% (기업 규모별 차등)</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">4대보험 참고사항</h3>
          <p>
            4대보험은 근로자와 사업주가 각각 부담하며, 산재보험은 전액 사업주가 납부합니다.
            국민연금은 월 소득 상한(590만원)과 하한(37만원)이 있어 해당 범위 내에서만 보험료가 산정됩니다.
            건강보험료는 매년 4월에 전년도 소득 기준으로 정산하므로 추가 납부나 환급이 발생할 수 있습니다.
            비과세 수당(식대 월 20만원, 자가운전보조금 등)은 보험료 산정에서 제외됩니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/salary" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            연봉 실수령액 계산기
          </Link>
          <Link href="/finance/minimum-wage" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            최저시급 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "4대보험 본인 부담률은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년 기준 근로자 부담분은 국민연금 4.5%, 건강보험 3.545%, 장기요양보험(건강보험의 12.95%), 고용보험 0.9%입니다. 회사도 동일 비율(또는 그 이상)을 부담합니다.",
                },
              },
              {
                "@type": "Question",
                name: "4대보험은 어떤 항목으로 구성되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "4대보험은 국민연금, 건강보험(장기요양보험 포함), 고용보험, 산재보험 4가지입니다. 이 중 산재보험은 전액 사업주 부담이며, 나머지 3개는 근로자와 사업주가 분담합니다.",
                },
              },
              {
                "@type": "Question",
                name: "프리랜서도 4대보험에 가입해야 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "프리랜서(사업소득자)는 국민연금과 건강보험에 지역가입자로 가입해야 합니다. 고용보험은 자영업자 임의가입이 가능하며, 산재보험은 특수형태근로종사자에 해당하면 가입 대상입니다.",
                },
              },
            ],
          }),
        }}
      />
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
