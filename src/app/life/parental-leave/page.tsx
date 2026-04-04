import type { Metadata } from "next";
import Link from "next/link";
import ParentalLeaveCalc from "@/components/life/ParentalLeaveCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "육아휴직급여 계산기 - 2026년 기준 월별 수령액",
  description:
    "무료 육아휴직급여 계산기로 2026년 기준 월별 수령액과 총 급여를 계산하세요. 통상임금과 휴직 기간을 입력하면 첫째/둘째 구분에 따른 육아휴직급여를 확인할 수 있습니다.",
  keywords: [
    "육아휴직급여계산기",
    "육아휴직급여",
    "육아휴직수당",
    "육아휴직계산",
    "육아휴직급여2026",
    "통상임금80%",
    "육아휴직상한액",
    "고용보험육아휴직",
    "육아휴직기간",
    "출산휴가급여",
  ],
  alternates: {
    canonical: "/life/parental-leave",
  },
};

export default function ParentalLeavePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">육아휴직급여 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        육아휴직급여 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        통상임금과 휴직 기간을 입력하면 2026년 기준 월별 육아휴직급여를 계산합니다.
      </p>

      <ParentalLeaveCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          2026년 육아휴직급여 기준
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2.5 font-medium">기간</th>
                <th className="px-4 py-2.5 font-medium">지급률</th>
                <th className="px-4 py-2.5 font-medium">상한/하한</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-2.5">첫 3개월</td>
                <td className="px-4 py-2.5">통상임금 80%</td>
                <td className="px-4 py-2.5">상한 150만원 / 하한 70만원</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">4개월 이후</td>
                <td className="px-4 py-2.5">통상임금 50%</td>
                <td className="px-4 py-2.5">상한 120만원 / 하한 70만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          * 고용보험에 180일 이상 가입한 피보험자가 만 8세 이하 자녀의 양육을 위해 휴직한 경우 지급됩니다.
        </p>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/workdays" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            근무일수 계산기
          </Link>
          <Link href="/life/dday" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            D-Day 카운터
          </Link>
          <Link href="/finance/income-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            소득세 계산기
          </Link>
          <Link href="/health/pregnancy-week" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            임신 주수 계산기
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
                name: "육아휴직급여는 얼마나 받을 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년 기준 첫 3개월은 통상임금의 80%(상한 150만원), 4개월 이후는 통상임금의 50%(상한 120만원)를 받을 수 있습니다. 하한액은 70만원입니다.",
                },
              },
              {
                "@type": "Question",
                name: "육아휴직은 최대 얼마나 사용할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "육아휴직은 자녀 1명당 최대 1년(12개월)까지 사용할 수 있습니다. 부모 모두 사용 가능하며, 한부모 가정은 최대 2년까지 가능합니다.",
                },
              },
              {
                "@type": "Question",
                name: "통상임금이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "통상임금은 근로자에게 정기적, 일률적으로 소정 근로의 대가로 지급하기로 한 금액입니다. 기본급, 고정수당 등이 포함되며, 성과급이나 변동수당은 제외됩니다.",
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
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "생활 계산기", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "육아휴직급여 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "육아휴직급여 계산기",
          "url": "https://www.oktools.co.kr/life/parental-leave",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 육아휴직급여 계산기로 2026년 기준 월별 수령액과 총 급여를 계산하세요. 통상임금과 휴직 기간을 입력하면 육아휴직급여를 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
