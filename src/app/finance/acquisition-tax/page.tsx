import type { Metadata } from "next";
import Link from "next/link";
import AcquisitionTaxCalc from "@/components/finance/AcquisitionTaxCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "취득세 계산기 2026 - 부동산 주택 다주택자 취득세율",
  description:
    "무료 취득세 계산기로 부동산 취득세, 지방교육세, 농어촌특별세를 바로 확인하세요. 2026년 다주택자 중과세율 반영, 아파트 1주택 취득세 조회.",
  keywords: ["취득세계산기", "부동산취득세", "주택취득세", "다주택취득세", "취득세율", "아파트취득세", "1주택취득세", "지방교육세", "농어촌특별세", "부동산세금계산"],
  openGraph: {
    url: "/finance/acquisition-tax",
    title: "취득세 계산기 2026 - 부동산 주택 다주택자 취득세율",
    description:
      "무료 취득세 계산기로 부동산 취득세, 지방교육세, 농어촌특별세를 바로 확인하세요. 2026년 다주택자 중과세율 반영, 아파트 1주택 취득세 조회.",
  },
  alternates: {
    canonical: "/finance/acquisition-tax",
  },
};

export default function AcquisitionTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">취득세 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        취득세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        부동산 유형과 취득가액을 입력하면 취득세, 지방교육세, 농어촌특별세를 계산합니다.
      </p>

      <AcquisitionTaxCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            취득세 계산기 사용 가이드
          </h2>
          <p>
            취득세 계산기는 부동산 취득가액과 주택 수, 지역 등을 입력하면 취득세, 지방교육세, 농어촌특별세를 합산하여
            총 세금을 계산해주는 도구입니다. 아파트, 빌라, 오피스텔 등을 매수하기 전에 취득 비용을 미리 파악할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">주택 취득세율 안내</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>1주택: 6억 이하 1%, 6~9억 1~3%, 9억 초과 3%</li>
            <li>다주택자 중과(조정대상지역): 2주택 8%, 3주택 이상 12%</li>
            <li>지방교육세: 취득세의 10%</li>
            <li>농어촌특별세: 전용 85m2 초과 시 취득세의 10%</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">감면 혜택과 참고사항</h3>
          <p>
            생애최초 주택 구입 시 취득세 감면(200만원 한도)을 받을 수 있으며, 신혼부부 특별공급 주택이나
            공공분양 주택도 감면 혜택이 적용될 수 있습니다. 취득세는 부동산 등기 시 납부해야 하며,
            취득일로부터 60일 이내에 신고·납부하지 않으면 가산세(20%)가 부과됩니다.
            정확한 세액은 지방자치단체 세무과나 세무사에게 확인하시기 바랍니다.
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
          <Link href="/finance/jeonwolse" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            전월세 전환율 계산기
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "취득세 계산기",
          "description": "부동산 취득세, 지방교육세, 농어촌특별세 계산",
          "url": "https://www.oktools.co.kr/finance/acquisition-tax",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
          "inLanguage": "ko-KR"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "주택 취득세율은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1주택 기준 6억원 이하는 1%, 6억~9억은 1~3% 누진, 9억 초과는 3%입니다. 다주택자(조정대상지역 2주택 8%, 3주택 이상 12%)나 법인은 중과세율이 적용됩니다. 여기에 지방교육세, 농어촌특별세가 추가됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "생애최초 주택 취득세 감면은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "생애최초 주택 구입 시 취득가액 12억원 이하 주택에 대해 취득세 200만원 한도 내에서 감면받을 수 있습니다. 부부 합산 소득 기준 없이 본인과 배우자 모두 주택을 소유한 이력이 없어야 합니다.",
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
            { "@type": "ListItem", "position": 3, "name": "취득세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
