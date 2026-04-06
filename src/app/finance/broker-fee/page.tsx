import type { Metadata } from "next";
import Link from "next/link";
import BrokerFeeCalc from "@/components/finance/BrokerFeeCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "부동산 복비 계산기 2026 - 중개보수 수수료 무료 계산",
  description:
    "무료 부동산 복비 계산기로 매매, 전세, 임대차 중개보수를 바로 확인하세요. 2026년 요율표 적용, 아파트 복비 및 공인중개사 수수료 조회.",
  keywords: ["부동산중개보수", "복비계산기", "부동산복비", "중개수수료계산", "매매중개보수", "전세복비", "부동산수수료", "아파트복비", "공인중개사수수료", "중개보수요율표"],
  openGraph: {
    title: "부동산 복비 계산기 2026 - 중개보수 수수료 무료 계산",
    description:
      "무료 부동산 복비 계산기로 매매, 전세, 임대차 중개보수를 바로 확인하세요. 2026년 요율표 적용, 아파트 복비 및 공인중개사 수수료 조회.",
  },
  alternates: {
    canonical: "/finance/broker-fee",
  },
};

export default function BrokerFeePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">부동산 중개보수 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        부동산 중개보수 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        매매 또는 전세/임대차 거래금액을 입력하면 중개보수(복비)를 계산합니다.
      </p>

      <BrokerFeeCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            부동산 중개보수 계산기 사용 가이드
          </h2>
          <p>
            부동산 중개보수(복비) 계산기는 매매, 전세, 월세 거래 시 공인중개사에게 지불해야 하는 수수료를 미리 계산해주는 도구입니다.
            부동산 거래 전에 예상 비용을 파악하여 자금 계획을 세울 때 활용할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">중개보수 요율표 (주택)</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>매매: 5천만원 미만 0.6%(한도 25만), 2억 미만 0.5%(한도 80만), 9억 미만 0.4%, 9억 이상 0.5~0.9% 이내 협의</li>
            <li>임대(전세/월세): 5천만원 미만 0.5%(한도 20만), 1억 미만 0.4%(한도 30만), 6억 미만 0.3%, 6억 이상 0.4~0.8% 이내 협의</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">절약 팁과 주의사항</h3>
          <p>
            중개보수는 상한 요율 이내에서 협의할 수 있으므로, 거래 전에 수수료를 미리 확인하고 조율하는 것이 좋습니다.
            부가가치세(10%)는 중개보수와 별도이며, 중개보수는 매도인/매수인(또는 임대인/임차인)이 각각 부담합니다.
            오피스텔이나 상가는 주택과 다른 요율이 적용되므로 별도로 확인이 필요합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/jeonwolse" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            전월세 전환율 계산기
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
                name: "부동산 중개보수(복비)는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "중개보수는 거래 유형(매매/전세/월세)과 금액에 따라 상한 요율이 다릅니다. 매매 기준 5천만원 미만은 0.6%, 5천만~2억은 0.5%, 2억~9억은 0.4%, 9억~12억은 0.5%, 12억 초과는 0.7% 이내에서 협의합니다.",
                },
              },
              {
                "@type": "Question",
                name: "중개보수에 부가세가 붙나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "개인 중개사는 부가세 면제이지만, 법인 중개업소나 일반과세자 중개사는 중개보수의 10% 부가가치세를 추가로 내야 합니다. 계약 전에 중개업소의 과세 유형을 확인하는 것이 좋습니다.",
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
          "name": "부동산 중개보수 계산기",
          "description": "매매/전세 거래 시 중개보수(복비) 및 부가세 계산",
          "url": "https://www.oktools.co.kr/finance/broker-fee",
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
            { "@type": "ListItem", "position": 3, "name": "부동산 중개보수 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
