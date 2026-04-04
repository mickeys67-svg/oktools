import type { Metadata } from "next";
import Link from "next/link";
import IncomeTaxCalc from "@/components/finance/IncomeTaxCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "종합소득세 계산기 2026 - 세율표 프리랜서 사업소득세",
  description:
    "무료 종합소득세 계산기로 소득세와 지방소득세를 바로 확인하세요. 2026년 세율표 적용, 프리랜서 3.3% 세금, 과세표준 실효세율 조회.",
  keywords: ["종합소득세계산기", "소득세세율", "종합소득세율표2026", "프리랜서세금", "사업소득세", "3.3%세금", "소득세계산", "과세표준", "실효세율", "종소세신고"],
  openGraph: {
    title: "종합소득세 계산기 2026 - 세율표 프리랜서 사업소득세",
    description:
      "무료 종합소득세 계산기로 소득세와 지방소득세를 바로 확인하세요. 2026년 세율표 적용, 프리랜서 3.3% 세금, 과세표준 실효세율 조회.",
  },
  alternates: {
    canonical: "/finance/income-tax",
  },
};

export default function IncomeTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">종합소득세 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        종합소득세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        소득 유형과 금액을 입력하면 2026년 세율 기준으로 종합소득세를 계산합니다.
      </p>

      <IncomeTaxCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            종합소득세 계산기 사용 가이드
          </h2>
          <p>
            종합소득세 계산기는 근로소득, 사업소득, 프리랜서 소득 등 다양한 소득 유형에 대해 과세표준을 산출하고
            2026년 세율 기준으로 납부해야 할 소득세와 지방소득세를 계산해주는 도구입니다.
            5월 종합소득세 신고 전에 예상 세액을 미리 파악할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">2026년 소득세 세율표</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>1,400만원 이하: 6%</li>
            <li>1,400만원 초과 ~ 5,000만원: 15% (누진공제 126만원)</li>
            <li>5,000만원 초과 ~ 8,800만원: 24% (누진공제 576만원)</li>
            <li>8,800만원 초과 ~ 1억 5천만원: 35% (누진공제 1,544만원)</li>
            <li>1억 5천만원 초과 ~ 3억원: 38%, 3억원 초과 ~ 5억원: 40%, 5억원 초과 ~ 10억원: 42%, 10억원 초과: 45%</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">프리랜서 및 공제 안내</h3>
          <p>
            프리랜서는 소득의 3.3%(소득세 3% + 지방소득세 0.3%)가 원천징수되며, 5월에 종합소득세 신고를 통해
            기납부세액을 정산합니다. 필요경비와 각종 공제를 적용하면 환급을 받을 수 있습니다.
            인적공제(본인 150만원, 배우자 150만원, 부양가족 1인당 150만원)와 연금보험료 공제, 신용카드 소득공제 등을
            빠짐없이 반영하는 것이 절세의 핵심입니다.
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
          <Link href="/finance/insurance4" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            4대보험 계산기
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "종합소득세 계산기",
          "description": "근로소득, 사업소득, 프리랜서 종합소득세 세율 계산",
          "url": "https://www.oktools.co.kr/finance/income-tax",
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
            { "@type": "ListItem", "position": 3, "name": "종합소득세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
