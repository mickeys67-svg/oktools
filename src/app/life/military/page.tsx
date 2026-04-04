import type { Metadata } from "next";
import Link from "next/link";
import MilitaryCalc from "@/components/life/MilitaryCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "전역일 계산기 2026 - 군 복무기간 진급일 전역일",
  description:
    "무료 전역일 계산기로 군 복무기간과 전역 예정일을 계산하세요. 육군·해군·공군·해병대·사회복무요원 입대일 입력으로 진급일, 복무 진행률을 즉시 확인.",
  keywords: ["전역일계산기", "군복무기간", "전역일확인", "육군전역일", "공군전역일", "해군전역일", "해병대전역일", "사회복무요원전역일", "진급일계산", "군대전역일", "입대일기준전역일", "복무진행률"],
  openGraph: {
    title: "전역일 계산기 2026 - 군 복무기간 진급�� 전역일",
    description:
      "무료 전역일 계산기로 군 복무기간��� 전역 예정일을 계산하세요. 육군·해군·공군·해병��·사회복무요��� 입대일 입력으로 진급일, 복무 진행률을 즉시 확인.",
  },
  alternates: {
    canonical: "/life/military",
  },
};

export default function MilitaryPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전역일 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        전역일 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        입대일과 군종을 선택하면 전역 예정일, 복무 진행률, 진급 일정을 한눈에 확인할 수 있습니다.
      </p>
      <MilitaryCalc />
      <ResultAd />

      {/* SEO content */}
      <section className="mt-12 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">한국 남성 병역의무 안내</h2>
        <p>
          대한민국 남성은 만 18세 이상이 되면 병역의무가 발생하며, 군종에 따라 18~21개월의 현역 복무를 수행합니다.
          육군과 해병대는 18개월, 해군은 20개월, 공군은 21개월이며, 사회복무요원은 21개월 복무합니다.
        </p>
        <p>
          병사 진급 체계는 이등병(입대 시), 일병(2개월), 상병(8개월), 병장(14개월)으로 구성됩니다.
          전역일은 입대일 기준으로 복무 일수를 더하여 계산합니다.
        </p>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/traffic-fine" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            과태료 계산기
          </Link>
          <Link href="/life/car-tax" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            자동차세 계산기
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "���역일 계산기",
          "description": "군 복무기간 계산, 전역 예정일 및 진급일 확인",
          "url": "https://www.oktools.co.kr/life/military",
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
                name: "육군 복무기간은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년 기준 육군과 해병대의 복무기간은 18개월, 해군은 20개월, 공군은 21개월입니다. 입영일로부터 해당 기간이 지난 날의 전날이 전역 예정일이 됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "군대 진급 시기는 언제인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "육군 기준으로 이등병에서 일병 진급은 입대 후 3개월, 일병에서 상병은 7개월, 상병에서 병장은 13개월 시점입니다. 해군, 공군은 복무기간에 비례하여 진급 시점이 다소 다릅니다.",
                },
              },
              {
                "@type": "Question",
                name: "전역일은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전역일은 입영일로부터 군종별 복무기간을 더한 날짜의 전날입니다. 예를 들어 육군은 입영일 + 18개월 - 1일이 전역 예정일입니다.",
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
            { "@type": "ListItem", "position": 2, "name": "생활 도구", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "전역일 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
