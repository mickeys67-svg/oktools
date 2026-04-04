import type { Metadata } from "next";
import Link from "next/link";
import DSRCalc from "@/components/finance/DSRCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "DSR 계산기 - 총부채원리금상환비율 대출 가능액 2026",
  description:
    "무료 DSR 계산기로 총부채원리금상환비율을 확인하세요. 연소득 대비 대출 가능 여부와 최대 대출 가능액을 바로 계산할 수 있습니다.",
  keywords: ["DSR계산기", "총부채원리금상환비율", "대출가능액계산", "DSR40", "DSR70", "주택담보대출DSR", "대출한도계산", "부동산대출", "신용대출DSR", "대출심사"],
  alternates: {
    canonical: "/finance/dsr",
  },
};

export default function DSRPage() {
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
        <span className="text-gray-900 dark:text-gray-100">DSR 계산기</span>
      </nav>

      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        DSR 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        연소득과 대출 정보를 입력하면 DSR(총부채원리금상환비율)과 최대 대출 가능액을 계산합니다.
      </p>

      {/* Calculator */}
      <DSRCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            DSR이란?
          </h2>
          <p>
            DSR(Debt Service Ratio, 총부채원리금상환비율)은 모든 대출의 연간 원리금 상환액을 연소득으로 나눈 비율입니다. 대출 심사 시 차주의 상환 능력을 평가하는 핵심 지표로, 2024년부터 전 금융권에 적용됩니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            DSR 규제 기준
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">규제지역 (40%)</h3>
              <p>투기지역, 투기과열지구, 조정대상지역에서는 DSR 40% 이내여야 대출이 가능합니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">비규제지역 (70%)</h3>
              <p>비규제지역에서는 DSR 70% 이내로 완화 적용됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      <InArticleAd />

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/loan-calculator" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            대출 이자 계산기
          </Link>
          <Link href="/finance/jeonwolse" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            전월세 전환율 계산기
          </Link>
          <Link href="/finance/acquisition-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            취득세 계산기
          </Link>
          <Link href="/finance/salary" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            연봉 실수령액 계산기
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
                name: "DSR이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DSR(총부채원리금상환비율)은 모든 대출의 연간 원리금 상환액을 연소득으로 나눈 비율입니다. DSR = (모든 대출 연간 원리금 상환액 / 연소득) x 100으로 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "DSR 40%와 70% 기준의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "규제지역(투기지역, 투기과열지구, 조정대상지역)에서는 DSR 40% 이내, 비규제지역에서는 DSR 70% 이내로 적용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "연봉 5천만원일 때 DSR 40% 기준 최대 대출 가능액은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "연봉 5천만원 기준 DSR 40%는 연간 원리금 상환액이 2,000만원 이내여야 합니다. 기존 대출이 없고 금리 4.5%, 30년 상환이면 약 3억 2천만원까지 대출 가능합니다.",
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
            { "@type": "ListItem", "position": 3, "name": "DSR 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "DSR 계산기",
          "url": "https://www.oktools.co.kr/finance/dsr",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 DSR 계산기로 총부채원리금상환비율을 확인하세요. 연소득 대비 대출 가능 여부와 최대 대출 가능액을 바로 계산할 수 있습니다."
        }) }}
      />
    </div>
  );
}
