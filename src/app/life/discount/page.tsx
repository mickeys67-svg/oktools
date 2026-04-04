import type { Metadata } from "next";
import Link from "next/link";
import DiscountCalc from "@/components/life/DiscountCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "할인율 계산기 - 할인가 원래가격 역산",
  description:
    "무료 할인율 계산기로 할인가, 원래 가격, 할인 퍼센트를 계산하세요. 세일 가격 입력으로 할인 금액과 최종 가격을 즉시 확인할 수 있습니다.",
  keywords: ["할인율계산기", "할인가계산", "할인계산기", "세일계산", "할인퍼센트계산", "원래가격계산", "정가계산", "최종가격계산"],
  openGraph: {
    title: "할인율 계산기 - 할인가 원래가격 역산",
    description:
      "무료 할인율 계산기로 ��인가, 원래 가격, 할인 퍼센트를 계산하세요. 세일 가격 입력으로 할인 금액과 최종 가격을 즉시 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/discount",
  },
};

export default function DiscountPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">할인율 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">할인율 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">원래 가격과 할인율로 할인 금액과 최종 가격을 계산합니다.</p>
      <DiscountCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">할인율 계산기 사용 가이드</h2>
          <p>
            할인율 계산기는 원래 가격과 할인율(%)을 입력하면 할인 금액과 최종 결제 가격을 자동으로 계산해주는 도구입니다.
            반대로 세일 가격에서 원래 가격이나 할인율을 역산할 수도 있어 쇼핑 시 실제 절약 금액을 한눈에 파악할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">할인 계산 공식</h3>
          <p>
            할인 금액 = 원래 가격 x 할인율 / 100, 최종 가격 = 원래 가격 - 할인 금액.
            할인율 역산 = (원래 가격 - 세일 가격) / 원래 가격 x 100.
            예를 들어 10만원 상품이 30% 할인이면 할인 금액은 3만원, 최종 가격은 7만원입니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">스마트 쇼핑 팁</h3>
          <p>
            여러 할인이 중첩되는 경우(예: 30% 세일 + 추가 10% 쿠폰) 할인율은 단순 합산이 아닙니다.
            30% 할인 후 10% 추가 할인이면 총 할인율은 37%(1 - 0.7 x 0.9)입니다.
            원래 가격이 인상된 후 할인하는 경우도 있으므로, 평소 가격을 기억해두고 실제 할인 여부를 비교하는 것이 현명한 소비입니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/percentage" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            퍼센트 계산기
          </Link>
          <Link href="/life/gpa" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            학점 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
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
                name: "할인율은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "할인율 = (원래 가격 - 할인 가격) / 원래 가격 x 100입니다. 예를 들어 50,000원짜리 상품을 35,000원에 구매했다면 (50,000-35,000)/50,000 x 100 = 30% 할인입니다.",
                },
              },
              {
                "@type": "Question",
                name: "중복 할인은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "30% 할인 후 추가 10% 할인이면 총 40% 할인이 아닙니다. 원래 가격에 0.7을 곱한 뒤 다시 0.9를 곱하면 0.63, 즉 37% 할인이 됩니다. 중복 할인은 순차적으로 적용되므로 단순 합산보다 할인율이 적습니다.",
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
          "name": "할인율 계산기",
          "description": "할인가, 할인율, 원래 가격 계산",
          "url": "https://www.oktools.co.kr/life/discount",
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
            { "@type": "ListItem", "position": 2, "name": "생활 도구", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "할인율 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
