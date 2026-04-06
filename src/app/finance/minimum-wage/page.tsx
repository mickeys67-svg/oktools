import type { Metadata } from "next";
import Link from "next/link";
import MinimumWageCalc from "@/components/finance/MinimumWageCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "최저시급 계산기 2025 2026 - 최저임금 월급 연봉 계산",
  description:
    "무료 최저시급 계산기로 2025년, 2026년 최저임금 기준 월급과 연봉을 바로 확인하세요. 주휴수당 포함 시급, 알바 시급 계산.",
  keywords: ["최저시급2025", "최저시급2026", "최저임금", "최저시급월급", "주휴수당계산", "알바시급", "최저임금인상", "주휴수당포함시급", "최저시급연봉", "아르바이트시급"],
  openGraph: {
    url: "/finance/minimum-wage",
    title: "최저시급 계산기 2025 2026 - 최저임금 월급 연봉 계산",
    description:
      "무료 최저시급 계산기로 2025년, 2026년 최저임금 기준 월급과 연봉을 바로 확인하세요. 주휴수당 포함 시급, 알바 시급 계산.",
  },
  alternates: {
    canonical: "/finance/minimum-wage",
  },
};

export default function MinimumWagePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">최저시급 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        최저시급 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        2025년/2026년 최저시급 기준으로 일급, 주급, 월급, 연봉 예상액을 계산합니다.
      </p>

      <MinimumWageCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            최저시급 계산기 사용 가이드
          </h2>
          <p>
            최저시급 계산기는 근무 시간과 연도를 입력하면 최저임금 기준으로 일급, 주급, 월급, 연봉을 계산해주는 도구입니다.
            아르바이트 급여를 확인하거나, 사업주가 최저임금법을 준수하는지 검토할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">2025~2026년 최저임금</h3>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>2025년</strong>: 시급 10,030원 / 월급 약 2,096,270원 / 연봉 약 25,155,240원</li>
            <li><strong>2026년</strong>: 시급 10,360원 / 월급 약 2,165,240원 / 연봉 약 25,982,880원</li>
            <li><strong>주휴수당</strong>: 주 15시간 이상 근무 시 1일분의 유급휴일 수당 지급</li>
            <li><strong>월급 환산</strong>: 주 40시간 + 주휴 8시간 = 월 209시간 기준</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">알바생이 알아야 할 사항</h3>
          <p>
            최저임금은 고용 형태(정규직, 계약직, 아르바이트)에 관계없이 모든 근로자에게 동일하게 적용됩니다.
            수습 기간(3개월 이내)이라도 1년 이상 근로계약을 체결한 경우에만 10% 감액이 가능하며, 단순노무직은 감액 대상에서 제외됩니다.
            최저임금 미만으로 급여를 받고 있다면 고용노동부(1350)에 신고하거나 노동청에 진정을 제기할 수 있습니다.
          </p>
        </div>
      </section>

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/salary" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            연봉 실수령액 계산기
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
              "name": "2025년 최저시급은 얼마인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "2025년 최저시급은 10,030원입니다. 주 40시간 근무 기준 월급(주휴수당 포함)은 약 2,096,270원이며, 연봉으로 환산하면 약 25,155,240원입니다." }
            },
            {
              "@type": "Question",
              "name": "주휴수당이란 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "주휴수당은 주 15시간 이상 근무한 근로자에게 1주에 1일의 유급휴일을 보장하는 수당입니다. 주 40시간 근무 시 8시간분의 추가 임금이 지급되어, 실질 시급이 약 20% 높아집니다." }
            },
            {
              "@type": "Question",
              "name": "2026년 최저시급은 얼마인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "2026년 최저시급은 10,360원으로 2025년 대비 3.3%(330원) 인상되었습니다. 월급(주휴수당 포함) 기준 약 2,165,240원, 연봉 환산 약 25,982,880원입니다." }
            },
            {
              "@type": "Question",
              "name": "최저시급 미만으로 급여를 받으면 어떻게 하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "최저임금법에 따라 최저시급 미만 지급은 위법입니다. 고용노동부(1350)에 신고하거나 노동청에 진정을 제기할 수 있으며, 사업주는 3년 이하의 징역 또는 2천만원 이하의 벌금에 처할 수 있습니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "최저시급 계산기",
          "description": "2025/2026 최저시급 기준 일급, 주급, 월급, 연봉 계산",
          "url": "https://www.oktools.co.kr/finance/minimum-wage",
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
            { "@type": "ListItem", "position": 3, "name": "최저시급 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
