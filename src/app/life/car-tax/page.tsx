import type { Metadata } from "next";
import Link from "next/link";
import CarTaxCalc from "@/components/life/CarTaxCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "자동차세 계산기 2026 - 배기량별 자동차세 연납할인",
  description:
    "무료 자동차세 계산기로 배기량별 자동차세를 계산하세요. 승용차·전기차 자동차세, 교육세, 차령 경감, 연납 할인액을 한번에 조회할 수 있습니다.",
  keywords: ["자동차세계산기", "자동차세조회", "자동차세연납", "배기량자동차세", "자동차세할인", "자동차세납부", "전기차자동차세", "교육세", "자동차세경감", "자동차세납부시기"],
  openGraph: {
    url: "/life/car-tax",
    title: "자동차세 계산기 2026 - 배기량별 자동차세 연납할인",
    description:
      "무료 자동차세 계산기로 배기량별 자동차세를 계산하세요. 승용차·전기차 자동차세, 교육세, 차령 경감, 연납 할인액을 한번에 조회할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/car-tax",
  },
};

export default function CarTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">자동차세 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        자동차세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        차량 유형과 배기량을 입력하면 자동차세, 교육세, 연납 할인액을 계산해 드립니다.
      </p>
      <CarTaxCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">자동차세 계산기 사용 가이드</h2>
          <p>
            자동차세 계산기는 차량 종류와 배기량, 차령(연식)을 입력하면 연간 자동차세와 교육세, 연납 할인액을 계산해주는 도구입니다.
            차량 구매 전 유지비를 예상하거나, 연납 신청으로 절세 효과를 확인할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">자동차세 세율 (비영업용 승용차)</h3>
          <p>
            배기량 1,000cc 이하는 cc당 80원, 1,000~1,600cc는 cc당 140원, 1,600cc 초과는 cc당 200원이 적용됩니다.
            여기에 교육세(자동차세의 30%)가 추가됩니다. 전기차는 배기량이 없으므로 연 10만원의 정액 자동차세가 부과됩니다.
            차령이 3년 이상이면 매년 5%씩 경감되어 최대 50%까지 할인됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">연납 할인 제도</h3>
          <p>
            자동차세는 매년 6월과 12월에 나누어 납부하지만, 1월에 1년분을 한꺼번에 납부하면 약 4.6% 할인을 받을 수 있습니다.
            3월 납부 시 약 3.8%, 6월 약 2.5%, 9월 약 1.3% 할인이 적용됩니다.
            위택스(wetax.go.kr)에서 온라인으로 연납 신청이 가능합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/traffic-fine" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            과태료 계산기
          </Link>
          <Link href="/life/military" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            전역일 계산기
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
                name: "자동차세는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "자동차세는 배기량(cc)에 cc당 세율을 곱하여 계산합니다. 비영업용 승용차 기준 1,000cc 이하는 cc당 80원, 1,600cc 이하는 140원, 1,600cc 초과는 200원입니다. 여기에 교육세(자동차세의 30%)가 추가됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "자동차세 연납 할인은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "자동차세를 1월에 연납하면 약 4.6% 할인을 받을 수 있습니다(2026년 기준). 3월 납부 시 약 3.8%, 6월 약 2.5%, 9월 약 1.3% 할인됩니다. 연납 신청은 위택스(wetax.go.kr)에서 온라인으로 가능합니다.",
                },
              },
              {
                "@type": "Question",
                name: "전기차 자동차세는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전기차는 배기량이 없으므로 영업용 20,000원, 비영업용 100,000원의 정액 자동차세가 부과됩니다. 여기에 교육세 30%가 추가되어 비영업용 기준 연간 총 130,000원입니다.",
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
          "name": "자동차세 계산기",
          "description": "배기량별 자동차세, 교육세, 연납 할인 계산",
          "url": "https://www.oktools.co.kr/life/car-tax",
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
            { "@type": "ListItem", "position": 3, "name": "자동차세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
