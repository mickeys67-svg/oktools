import type { Metadata } from "next";
import Link from "next/link";
import BrokerFeeCalc from "@/components/finance/BrokerFeeCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "부동산 복비 계산기 2026 - 중개보수 수수료 무료 계산",
  description:
    "무료 부동산 복비 계산기로 매매, 전세, 임대차 중개보수를 바로 확인하세요. 2026년 요율표 적용, 아파트 복비 및 공인중개사 수수료 조회.",
  keywords: ["부동산중개보수", "복비계산기", "부동산복비", "중개수수료계산", "매매중개보수", "전세복비", "부동산수수료", "아파트복비", "공인중개사수수료", "중개보수요율표"],
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

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          중개보수 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>중개보수는 거래금액에 상한 요율을 곱한 금액 이내에서 협의</li>
          <li>일정 금액 이하 거래는 한도액이 적용되어 요율 계산 금액보다 낮을 수 있음</li>
          <li>부가가치세(10%)는 중개보수와 별도로 부과</li>
          <li>중개보수는 매도인/매수인 또는 임대인/임차인 각각 부담</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 주택 기준 요율표이며, 오피스텔/상가 등은 별도 요율이 적용됩니다.
          실제 중개보수는 공인중개사와 협의하시기 바랍니다.
        </p>
      </section>

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
