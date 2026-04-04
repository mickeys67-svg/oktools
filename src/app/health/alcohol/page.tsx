import type { Metadata } from "next";
import Link from "next/link";
import AlcoholCalc from "@/components/health/AlcoholCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "음주 측정기 - 혈중알코올농도 BAC 계산기 2026",
  description:
    "무료 음주 측정기로 혈중알코올농도(BAC)를 계산하세요. 소주·맥주 음주량 입력으로 운전 가능 시간, 면허취소 기준, 알코올 분해 시간을 즉시 확인.",
  keywords: ["음주측정기", "혈중알코올농도", "BAC계산기", "음주운전기준", "알코올분해시간", "음주후운전가능시간", "소주몇잔음주운전", "음주측정기준", "면허취소기준", "0.03퍼센트"],
  alternates: {
    canonical: "/health/alcohol",
  },
};

export default function AlcoholPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">음주 측정기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        음주 측정기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        Widmark 공식으로 혈중 알코올 농도(BAC)를 계산하고 음주운전 기준을 확인합니다.
      </p>

      <AlcoholCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            음주 측정기 사용 가이드
          </h2>
          <p>
            음주 측정기는 체중, 성별, 음주량, 경과 시간을 입력하면 현재 추정 혈중 알코올 농도(BAC)와
            알코올이 완전히 분해되는 예상 시간을 계산해주는 도구입니다.
            음주 후 운전 가능 여부를 판단하거나, 음주량에 따른 몸 상태를 이해하는 데 활용할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Widmark 공식과 계산 원리</h3>
          <p>
            BAC = (음주량mL x 알코올도수 x 0.7894) / (체중kg x 성별계수) - (0.015 x 경과시간).
            성별계수는 남성 0.68, 여성 0.55이며, 시간당 약 0.015%씩 알코올이 분해됩니다.
            이 공식은 스웨덴 의학자 에릭 위드마크가 개발한 것으로 전 세계적으로 널리 사용됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">음주운전 처벌 기준 (한국)</h3>
          <p>
            BAC 0.03% 이상이면 음주운전으로 처벌됩니다. 0.03~0.08%는 면허정지(벌금 300~500만원),
            0.08% 이상은 면허취소(1~5년 이하 징역 또는 500~2,000만원 이하 벌금)에 해당합니다.
            개인 체질과 컨디션에 따라 실제 BAC는 크게 달라지므로, 음주 후에는 절대 운전하지 마시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
          </Link>
          <Link href="/health/bmr" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            기초대사량 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
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
                name: "혈중 알코올 농도(BAC)란?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BAC(Blood Alcohol Concentration)는 혈액 속에 포함된 알코올의 농도를 백분율로 나타낸 것입니다. 한국에서는 0.03% 이상일 경우 음주운전으로 처벌됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "음주 후 운전 가능 시간은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반적으로 체중 70kg 성인 남성 기준 소주 1병(360mL) 음주 시 약 6~8시간 후에 BAC가 0% 가까이 내려갑니다. 하지만 개인차가 크므로 충분한 시간을 두는 것이 안전합니다.",
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
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "음주 측정기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "음주 측정기",
          "url": "https://www.oktools.co.kr/health/alcohol",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 음주 측정기로 혈중알코올농도(BAC)를 계산하세요. 소주·맥주 음주량 입력으로 운전 가능 시간, 면허취소 기준, 알코올 분해 시간을 즉시 확인."
        }) }}
      />
    </div>
  );
}
