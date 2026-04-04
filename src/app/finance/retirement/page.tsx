import type { Metadata } from "next";
import Link from "next/link";
import RetirementCalc from "@/components/finance/RetirementCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "퇴직금 계산기 2026 - 근속연수별 퇴직금 자동 계산",
  description: "무료 퇴직금 계산기로 입사일, 퇴사일, 평균 월급 입력 후 퇴직금을 바로 확인하세요. 근속연수별 퇴직금 정산, 세금 공제액까지 조회 가능.",
  keywords: ["퇴직금계산기", "퇴직금계산방법", "퇴직금계산법", "퇴직금정산", "퇴직금지급기준", "퇴직금세금", "근속연수퇴직금", "1년미만퇴직금", "퇴직연금"],
  openGraph: {
    title: "퇴직금 계산기 2026 - 근속연수별 퇴직금 자동 계산",
    description: "무료 퇴직금 계산기로 입사일, 퇴사일, 평균 월급 입력 후 퇴직금을 바로 확인하세요. 근속연수별 퇴직금 정산, 세금 공제액까지 조회 가능.",
  },
  alternates: {
    canonical: "/finance/retirement",
  },
};

export default function RetirementPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">퇴직금 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">퇴직금 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">입사일, 퇴사일, 평균 월급을 입력하면 퇴직금을 계산합니다.</p>
      <RetirementCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            퇴직금 계산기 사용 가이드
          </h2>
          <p>
            퇴직금 계산기는 입사일과 퇴사일, 퇴직 전 3개월 평균 월급을 기반으로 법정 퇴직금을 산출해주는 도구입니다.
            이직이나 퇴사를 앞두고 예상 수령액을 미리 파악할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">퇴직금 계산 공식</h3>
          <p>
            퇴직금 = (1일 평균임금 x 30일) x (총 근속일수 / 365)로 계산합니다. 1일 평균임금은 퇴직 전 3개월간 받은
            총 급여(기본급 + 상여금 + 수당)를 해당 기간의 총 일수로 나누어 구합니다. 1년 이상 근무한 근로자라면
            고용 형태(정규직, 계약직)와 관계없이 퇴직금을 받을 권리가 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">퇴직금 세금 및 수령 시 참고사항</h3>
          <p>
            퇴직금에는 퇴직소득세가 부과됩니다. 근속연수에 따라 공제 금액이 달라지며, 장기 근속자일수록 세율이 낮아집니다.
            퇴직금은 퇴직일로부터 14일 이내에 지급되어야 하며, 지연 시 지연이자(연 20%)가 발생합니다.
            퇴직연금(DB형, DC형)에 가입된 경우 계산 방식이 달라질 수 있으므로 회사 인사팀에 확인하시기 바랍니다.
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
          <Link href="/finance/income-tax" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            종합소득세 계산기
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
          "name": "퇴직금 계산기",
          "description": "근속연수 기반 퇴직금 계산",
          "url": "https://www.oktools.co.kr/finance/retirement",
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
            { "@type": "ListItem", "position": 3, "name": "퇴직금 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
