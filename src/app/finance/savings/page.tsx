import type { Metadata } from "next";
import Link from "next/link";
import SavingsCalc from "@/components/finance/SavingsCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "적금 이자 계산기 2026 - 만기 수령액 세후이자 무료 계산",
  description: "무료 적금 이자 계산기로 월 납입금, 금리별 만기 수령액을 바로 확인하세요. 단리 복리 적금 세후이자 계산, 적금 추천 비교.",
  keywords: ["적금이자계산기", "적금만기수령액", "적금이자계산", "월적금이자", "단리복리적금", "적금추천", "정기적금이자", "세후이자계산"],
  openGraph: {
    title: "적금 이자 계산기 2026 - 만기 수령액 세후이자 무료 계산",
    description: "무료 적금 이자 계산기로 월 납입금, 금리별 만기 수령액을 바로 확인하세요. 단리 복리 적금 세후이자 계산, 적금 추천 비교.",
  },
  alternates: {
    canonical: "/finance/savings",
  },
};

export default function SavingsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">적금 이자 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">적금 이자 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">월 납입금, 금리, 기간을 입력하면 만기 수령액을 계산합니다.</p>
      <SavingsCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            적금 이자 계산기 사용 가이드
          </h2>
          <p>
            적금 이자 계산기는 매월 일정 금액을 납입했을 때 만기 시 받게 되는 원금, 이자, 세후 수령액을 미리 계산해주는 도구입니다.
            목돈 마련 계획을 세우거나 은행별 적금 상품을 비교할 때 활용하면 좋습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">적금 이자 계산 방식</h3>
          <p>
            적금은 매월 납입하는 구조이므로, 첫 달 납입금은 만기까지 12개월간 이자가 붙지만 마지막 달 납입금은 1개월만 이자가 붙습니다.
            단리 적금의 경우 이자 = 월납입금 x 금리 x (n x (n+1)) / (2 x 12)로 계산합니다(n = 납입 개월 수).
            복리 적금은 매월 발생한 이자가 원금에 합산되어 다음 달 이자 계산에 반영됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">적금 활용 팁</h3>
          <p>
            적금 가입 시 우대금리 조건(급여이체, 카드 실적, 자동이체 등)을 충족하면 기본금리보다 0.2~1.0%p 높은 금리를 받을 수 있습니다.
            이자에는 15.4%의 이자소득세가 부과되므로, 세금우대(9.5%)나 비과세 상품을 이용하면 실수령액이 늘어납니다.
            중도해지 시에는 약정 금리보다 훨씬 낮은 중도해지 이율이 적용되므로 만기까지 유지하는 것이 중요합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/deposit" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            예금 이자 계산기
          </Link>
          <Link href="/finance/compound-interest" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            복리 계산기
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
                name: "적금 단리와 복리의 차이는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "단리는 원금에만 이자가 붙고, 복리는 원금+이자에 이자가 붙습니다. 같은 금리라도 복리가 만기 수령액이 더 많습니다. 대부분의 시중 적금은 단리 방식이며, 일부 특판 적금이나 적립식 펀드가 복리 방식을 적용합니다.",
                },
              },
              {
                "@type": "Question",
                name: "적금 이자에 세금은 얼마나 내나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반 과세의 경우 이자소득의 15.4%(소득세 14% + 지방소득세 1.4%)가 원천징수됩니다. 비과세종합저축(65세 이상 등)이나 세금우대(9.5%) 적용이 가능한 경우 세금을 줄일 수 있습니다.",
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
          "name": "적금 이자 계산기",
          "description": "단리/복리 적금 만기 수령액 계산",
          "url": "https://www.oktools.co.kr/finance/savings",
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
            { "@type": "ListItem", "position": 3, "name": "적금 이자 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
