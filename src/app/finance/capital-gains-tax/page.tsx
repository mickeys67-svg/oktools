import type { Metadata } from "next";
import Link from "next/link";
import CapitalGainsTaxCalc from "@/components/finance/CapitalGainsTaxCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "양도소득세 계산기 - 부동산 양도세 자동계산 2026",
  description:
    "무료 양도소득세 계산기로 부동산 양도세를 자동 계산하세요. 2026 세율 적용, 장기보유특별공제, 과세표준, 지방소득세까지 한번에 확인할 수 있습니다.",
  keywords: ["양도소득세계산기", "양도세계산", "부동산양도세", "장기보유특별공제", "양도차익계산", "과세표준", "양도소득세세율", "부동산세금", "양도세자동계산", "지방소득세"],
  alternates: {
    canonical: "/finance/capital-gains-tax",
  },
};

export default function CapitalGainsTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">양도소득세 계산기</span>
      </nav>

      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        양도소득세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        취득가액과 양도가액을 입력하면 양도소득세, 지방소득세, 장기보유특별공제를 계산합니다.
      </p>

      {/* Calculator */}
      <CapitalGainsTaxCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            양도소득세란?
          </h2>
          <p>
            양도소득세는 부동산, 주식 등 자산을 양도할 때 발생하는 소득에 대해 부과되는 세금입니다. 양도가액에서 취득가액과 필요경비를 차감한 양도차익에 대해 누진세율(6%~45%)을 적용합니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            2026 양도소득세 세율
          </h2>
          <div className="overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr className="text-xs text-gray-500 dark:text-gray-400">
                  <th className="px-3 py-2 text-left">과세표준</th>
                  <th className="px-3 py-2 text-right">세율</th>
                  <th className="px-3 py-2 text-right">누진공제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">1,400만원 이하</td><td className="px-3 py-2 text-right">6%</td><td className="px-3 py-2 text-right">-</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">5,000만원 이하</td><td className="px-3 py-2 text-right">15%</td><td className="px-3 py-2 text-right">126만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">8,800만원 이하</td><td className="px-3 py-2 text-right">24%</td><td className="px-3 py-2 text-right">576만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">1.5억원 이하</td><td className="px-3 py-2 text-right">35%</td><td className="px-3 py-2 text-right">1,544만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">3억원 이하</td><td className="px-3 py-2 text-right">38%</td><td className="px-3 py-2 text-right">1,994만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">5억원 이하</td><td className="px-3 py-2 text-right">40%</td><td className="px-3 py-2 text-right">2,594만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">10억원 이하</td><td className="px-3 py-2 text-right">42%</td><td className="px-3 py-2 text-right">3,594만원</td></tr>
                <tr className="text-gray-700 dark:text-gray-300"><td className="px-3 py-2">10억원 초과</td><td className="px-3 py-2 text-right">45%</td><td className="px-3 py-2 text-right">6,594만원</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            장기보유특별공제
          </h2>
          <p>
            3년 이상 보유한 부동산을 양도할 때 양도차익에서 일정 비율을 공제합니다. 보유기간 3년 이상 시 연 6%씩, 최대 30%까지 공제받을 수 있습니다. 1세대 1주택의 경우 최대 80%까지 공제 가능합니다.
          </p>
        </div>
      </section>

      <InArticleAd />

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/acquisition-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            취득세 계산기
          </Link>
          <Link href="/finance/income-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            종합소득세 계산기
          </Link>
          <Link href="/finance/broker-fee" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            부동산 중개보수 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            대출 이자 계산기
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "양도소득세는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "양도소득세 = (양도가액 - 취득가액 - 필요경비 - 장기보유특별공제 - 기본공제 250만원) x 세율 - 누진공제액으로 계산합니다. 2026년 기준 6%~45% 누진세율이 적용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "장기보유특별공제란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "장기보유특별공제는 3년 이상 보유한 부동산을 양도할 때 양도차익에서 공제하는 제도입니다. 보유기간 연 6%씩, 최대 30%까지 공제됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "양도소득세 기본공제는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "양도소득세 기본공제는 연 250만원입니다. 양도차익에서 장기보유특별공제를 적용한 후 기본공제 250만원을 차감합니다.",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "양도소득세 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "양도소득세 계산기",
          "url": "https://www.oktools.co.kr/finance/capital-gains-tax",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 양도소득세 계산기로 부동산 양도세를 자동 계산하세요. 2026 세율 적용, 장기보유특별공제, 과세표준, 지방소득세까지 한번에 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
