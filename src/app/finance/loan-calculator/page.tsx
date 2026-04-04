import type { Metadata } from "next";
import Link from "next/link";
import LoanCalculator from "@/components/finance/LoanCalculator";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "대출 이자 계산기 - 원리금균등 원금균등 만기일시 2026",
  description:
    "무료 대출이자 계산기로 월상환액과 총이자를 확인하세요. 원리금균등, 원금균등, 만기일시 상환 방식별 상환 스케줄을 바로 조회할 수 있습니다.",
  keywords: ["대출이자계산기", "주택담보대출계산기", "원리금균등상환", "원금균등상환", "만기일시상환", "대출이자계산", "월상환액계산", "대출상환스케줄", "은행대출이자", "전세대출이자", "신용대출이자율", "대출금리비교"],
  alternates: {
    canonical: "/finance/loan-calculator",
  },
};

export default function LoanCalculatorPage() {
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
        <span className="text-gray-900 dark:text-gray-100">대출 이자 계산기</span>
      </nav>

      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        대출 이자 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        대출 금액, 이자율, 기간을 입력하면 상환 방식별 월 상환액과 총 이자를 계산합니다.
      </p>

      {/* Calculator */}
      <LoanCalculator />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            상환 방식 안내
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">원리금균등상환</h3>
              <p>매달 같은 금액을 상환합니다. 초기에는 이자 비중이 크고, 시간이 지날수록 원금 비중이 커집니다. 가장 일반적인 상환 방식입니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">원금균등상환</h3>
              <p>매달 같은 금액의 원금을 상환하고, 이자는 남은 원금에 대해 계산됩니다. 초기 상환 부담이 크지만 총 이자가 원리금균등보다 적습니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">만기일시상환</h3>
              <p>매달 이자만 납부하고, 만기일에 원금을 한꺼번에 상환합니다. 월 부담은 가장 적지만 총 이자가 가장 많습니다.</p>
            </div>
          </div>
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
          <Link href="/finance/deposit" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            예금 이자 계산기
          </Link>
          <Link href="/finance/installment" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            할부 계산기
          </Link>
          <Link href="/finance/compound-interest" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            복리 계산기
          </Link>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "원리금균등상환과 원금균등상환의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "원리금균등상환은 매달 같은 금액을 상환하며, 원금균등상환은 매달 같은 원금에 줄어드는 이자를 더해 상환합니다. 원금균등이 총 이자는 적지만 초기 상환 부담이 큽니다.",
                },
              },
              {
                "@type": "Question",
                name: "1억 원을 연 3.5%로 30년 대출하면 월 상환액은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "원리금균등상환 기준 월 약 449,045원입니다. 총 이자는 약 6,165만 원이며, 총 상환액은 약 1억 6,165만 원입니다.",
                },
              },
              {
                "@type": "Question",
                name: "만기일시상환은 어떤 경우에 유리한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "만기일시상환은 매달 이자만 납부하고 만기에 원금을 한꺼번에 갚는 방식입니다. 월 부담은 적지만 총 이자가 가장 많아, 단기 대출이나 목돈이 예정된 경우에 적합합니다.",
                },
              },
              {
                "@type": "Question",
                name: "대출 이자는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "대출 이자는 남은 원금에 연이자율을 적용하여 월 단위로 계산합니다. 월이자 = 남은 원금 x (연이자율 / 12)이며, 상환 방식에 따라 매달 이자 금액이 달라집니다.",
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
            { "@type": "ListItem", "position": 3, "name": "대출 이자 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "대출 이자 계산기",
          "url": "https://www.oktools.co.kr/finance/loan-calculator",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 대출이자 계산기로 월상환액과 총이자를 확인하세요. 원리금균등, 원금균등, 만기일시 상환 방식별 상환 스케줄을 바로 조회할 수 있습니다."
        }) }}
      />
    </div>
  );
}
