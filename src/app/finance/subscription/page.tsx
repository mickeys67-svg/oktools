import type { Metadata } from "next";
import Link from "next/link";
import SubscriptionCalc from "@/components/finance/SubscriptionCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "청약 가점 계산기 - 주택청약 가점제 점수 계산 2026",
  description:
    "무료 청약 가점 계산기로 나의 청약 가점 점수를 확인하세요. 무주택기간, 부양가족수, 청약통장 가입기간별 점수와 당첨 가능성을 바로 계산합니다.",
  keywords: ["청약가점계산기", "주택청약가점", "청약점수계산", "무주택기간점수", "부양가족점수", "청약통장점수", "아파트청약", "청약당첨", "가점제계산", "청약가점84점"],
  openGraph: {
    url: "/finance/subscription",
    title: "청약 가점 계산기 - 주택청약 가점제 점수 계산 2026",
    description:
      "무료 청약 가점 계산기로 나의 청약 가점 점수를 확인하세요. 무주택기간, 부양가족수, 청약통장 가입기간별 점수와 당첨 가능성을 바로 계산합니다.",
  },
  alternates: {
    canonical: "/finance/subscription",
  },
};

export default function SubscriptionPage() {
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
        <span className="text-gray-900 dark:text-gray-100">청약 가점 계산기</span>
      </nav>

      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        청약 가점 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        무주택기간, 부양가족수, 청약통장 가입기간을 입력하면 총 가점 점수와 당첨 가능성을 계산합니다.
      </p>

      {/* Calculator */}
      <SubscriptionCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            청약 가점제란?
          </h2>
          <p>
            청약 가점제는 주택 청약 시 무주택기간, 부양가족수, 청약통장 가입기간의 3가지 항목을 합산하여 가점이 높은 순서대로 당첨자를 선정하는 제도입니다. 총 84점 만점이며, 민영주택 85m2 이하에 적용됩니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            가점 항목별 배점
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">무주택기간 (0~32점)</h3>
              <p>만 30세부터 산정하며, 1년 미만 0점에서 15년 이상 32점까지 배점됩니다. 기혼자는 혼인신고일부터 산정합니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">부양가족수 (5~35점)</h3>
              <p>본인을 제외한 부양가족 수에 따라 0명 5점에서 6명 이상 35점까지 배점됩니다. 배우자, 직계존비속이 포함됩니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">청약통장 가입기간 (0~17점)</h3>
              <p>6개월 미만 0점에서 15년 이상 17점까지 배점됩니다. 청약저축, 주택청약종합저축 가입기간이 적용됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      <InArticleAd />

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/dsr" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            DSR 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            대출 이자 계산기
          </Link>
          <Link href="/finance/acquisition-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            취득세 계산기
          </Link>
          <Link href="/finance/jeonwolse" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            전월세 전환율 계산기
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
                name: "청약 가점 만점은 몇 점인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "청약 가점 만점은 84점입니다. 무주택기간 32점, 부양가족수 35점, 청약통장 가입기간 17점으로 구성됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "무주택기간은 언제부터 산정하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "무주택기간은 만 30세부터 산정합니다. 다만 기혼자는 혼인신고일부터 산정하며, 만 30세 이전에 혼인한 경우 혼인신고일부터 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "청약 가점 몇 점이면 당첨 가능한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "지역과 단지에 따라 다르지만, 서울 인기 단지는 70점 이상, 수도권은 55~65점, 지방은 40~50점 정도가 당첨 커트라인입니다.",
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
            { "@type": "ListItem", "position": 3, "name": "청약 가점 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "청약 가점 계산기",
          "url": "https://www.oktools.co.kr/finance/subscription",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 청약 가점 계산기로 나의 청약 가점 점수를 확인하세요. 무주택기간, 부양가족수, 청약통장 가입기간별 점수와 당첨 가능성을 바로 계산합니다."
        }) }}
      />
    </div>
  );
}
