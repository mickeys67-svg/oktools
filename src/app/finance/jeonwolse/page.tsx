import type { Metadata } from "next";
import Link from "next/link";
import JeonwolseCalc from "@/components/finance/JeonwolseCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "전월세 전환율 계산기 2026 - 전세 월세 환산 무료",
  description:
    "무료 전월세 전환율 계산기로 전세를 월세로, 월세를 전세로 바로 환산하세요. 적정 월세 확인, 전세가율 조회, 부동산 전월세 계산.",
  keywords: ["전월세전환율", "전세월세전환", "전월세계산기", "월세전세환산", "전환율계산", "적정월세", "전세가율", "월세계산", "전세보증금", "부동산전월세"],
  openGraph: {
    url: "/finance/jeonwolse",
    title: "전월세 전환율 계산기 2026 - 전세 월세 환산 무료",
    description:
      "무료 전월세 전환율 계산기로 전세를 월세로, 월세를 전세로 바로 환산하세요. 적정 월세 확인, 전세가율 조회, 부동산 전월세 계산.",
  },
  alternates: {
    canonical: "/finance/jeonwolse",
  },
};

export default function JeonwolsePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전월세 전환율 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        전월세 전환율 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        전세 보증금과 월세를 상호 환산하고, 적정 전환율을 확인하세요.
      </p>

      <JeonwolseCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            전월세 전환율 계산기 사용 가이드
          </h2>
          <p>
            전월세 전환율 계산기는 전세를 월세로 바꾸거나, 월세를 전세로 환산할 때 적정 금액을 산출해주는 도구입니다.
            전세 계약을 월세로 전환하려는 임대인이나, 전세와 반전세 중 유리한 조건을 비교하려는 임차인 모두에게 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">전환율 공식과 법정 상한</h3>
          <p>
            전환율 = (월세 x 12) / (전세보증금 - 월세보증금) x 100으로 계산합니다.
            주택임대차보호법에 따라 전환율의 법정 상한은 한국은행 기준금리 + 2.0%입니다.
            전환율이 낮을수록 전세 대비 월세가 저렴하다는 의미이며, 반대로 전환율이 높으면 전세가 유리합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">전월세 선택 팁</h3>
          <p>
            전세는 목돈이 필요하지만 월 거주비 부담이 없고, 월세는 초기 자금이 적지만 매월 고정 지출이 발생합니다.
            전세자금대출 금리와 전환율을 비교하여 전세대출 이자가 월세보다 낮다면 전세가, 높다면 월세가 유리할 수 있습니다.
            계약 전 전입신고와 확정일자를 반드시 받아 보증금을 보호하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/broker-fee" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            부동산 중개보수 계산기
          </Link>
          <Link href="/finance/acquisition-tax" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            취득세 계산기
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
                name: "전월세 전환율이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전월세 전환율은 전세금을 월세로 바꿀 때 적용하는 비율입니다. 예를 들어 전환율 5%에서 전세 1억원을 월세로 전환하면 월세는 약 41.7만원(1억 x 5% / 12)입니다. 2026년 법정 전환율 상한은 기준금리 + 2%입니다.",
                },
              },
              {
                "@type": "Question",
                name: "전세와 월세 중 어느 것이 유리한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전세는 목돈이 필요하지만 월 지출이 없고, 월세는 초기 비용이 적지만 매월 지출이 발생합니다. 전세금을 투자하여 월세 이상의 수익을 올릴 수 있다면 월세가, 안정적인 주거를 원한다면 전세가 유리합니다. 금리가 높을수록 월세가 상대적으로 유리해집니다.",
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
          "name": "전월세 전환율 계산기",
          "description": "전세 ↔ 월세 전환율 계산 및 환산가 비교",
          "url": "https://www.oktools.co.kr/finance/jeonwolse",
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
            { "@type": "ListItem", "position": 3, "name": "전월세 전환율 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
