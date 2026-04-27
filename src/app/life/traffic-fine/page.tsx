import type { Metadata } from "next";
import Link from "next/link";
import TrafficFineCalc from "@/components/life/TrafficFineCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "과태료 계산기 - 속도위반 주정차위반 벌점 조회",
  description:
    "무료 과태료 계산기로 속도위반·주정차위반 과태료와 벌점을 조회하세요. 일반도로, 고속도로, 어린이보호구역 기준 벌금과 면허정지 기준을 즉시 확인.",
  keywords: ["과태료계산기", "속도위반과태료", "주정차위반과태료", "교통벌금", "벌점조회", "어린이보호구역과태료", "고속도로과태료", "면허정지기준", "속도위반벌점", "교통범칙금"],
  openGraph: {
    url: "/life/traffic-fine",
    title: "과태료 계산기 - 속도위반 주정차위반 벌점 조회",
    description:
      "무료 과태료 계산기로 속도위반·주정차위반 과태료와 벌점을 조회하세요. 일반도로, 고속도로, 어린이보호구역 기준 벌금과 면허정지 기준을 즉시 확인.",
  },
  alternates: {
    canonical: "/life/traffic-fine",
  },
};

export default function TrafficFinePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">과태료 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        과태료 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        속도위반, 주정차위반 과태료와 벌점을 간편하게 조회하세요.
      </p>
      <TrafficFineCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">과태료 계산기 사용 가이드</h2>
          <p>
            과태료 계산기는 위반 유형(속도위반, 주정차위반 등)과 도로 종류, 초과 속도를 입력하면
            예상 과태료 금액과 벌점을 조회할 수 있는 도구입니다. 교통 위반 시 예상되는 처분 내용을 미리 확인할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">속도위반 과태료 기준</h3>
          <p>
            일반도로에서 20km/h 이하 초과 시 과태료 4만원(벌점 없음), 20~40km/h 초과 시 7만원(벌점 15점),
            40~60km/h 초과 시 10만원(벌점 30점), 60km/h 초과 시 13만원(벌점 60점)이 부과됩니다.
            어린이보호구역(스쿨존)에서는 과태료가 2~3배 가중되며, 사고 발생 시 가중처벌 대상이 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">벌점과 면허정지 기준</h3>
          <p>
            벌점이 1년간 40점 이상 누적되면 면허정지(1점당 1일), 3년간 누적 271점 이상이면 면허취소 대상입니다.
            과태료는 자진납부 시 20% 감경되며, 납부 기한을 넘기면 가산금이 추가됩니다.
            이의가 있는 경우 통지서 수령일로부터 60일 이내에 이의신청을 할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/car-tax" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            자동차세 계산기
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
                name: "속도위반 과태료는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반도로 기준 20km/h 초과 시 승용차 4만원, 40km/h 초과 시 7만원, 60km/h 초과 시 10만원, 80km/h 초과 시 13만원의 과태료가 부과됩니다. 범칙금(현장 적발)의 경우 금액이 다르며 벌점도 부과됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "과태료와 범칙금의 차이는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "과태료는 무인 카메라 등으로 적발되어 차량 소유자에게 부과되는 행정 제재이며, 벌점이 없습니다. 범칙금은 경찰관에 의해 현장에서 운전자에게 직접 부과되며 벌점이 함께 부과됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "벌점이 쌓이면 어떻게 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "벌점 40점 이상이면 면허정지(1점당 1일), 벌점 누적 121점 이상이면 면허취소 처분을 받습니다. 1년간 벌점이 없으면 누적 벌점이 소멸되며, 특별교육 이수 시 20점까지 감경받을 수 있습니다.",
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
          "name": "과태료 계산기",
          "description": "속도위반, 주정차위반 과태료 및 벌점 조회",
          "url": "https://www.oktools.co.kr/life/traffic-fine",
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
            { "@type": "ListItem", "position": 3, "name": "과태료 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
