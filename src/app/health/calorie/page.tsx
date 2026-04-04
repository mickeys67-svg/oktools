import type { Metadata } from "next";
import Link from "next/link";
import CalorieCalc from "@/components/health/CalorieCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "칼로리 계산기 - 기초대사량 일일 권장 칼로리 계산",
  description:
    "무료 칼로리 계산기로 기초대사량(BMR)과 일일 권장 칼로리를 계산하세요. Mifflin-St Jeor 공식 기반으로 감량, 유지, 증량 목표별 칼로리를 확인할 수 있습니다.",
  keywords: [
    "칼로리계산기",
    "기초대사량",
    "BMR계산기",
    "일일칼로리",
    "다이어트칼로리",
    "권장칼로리",
    "TDEE계산기",
    "칼로리계산",
    "감량칼로리",
    "활동대사량",
  ],
  alternates: {
    canonical: "/health/calorie",
  },
};

export default function CaloriePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">칼로리 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        칼로리 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        성별, 나이, 키, 몸무게, 활동량을 입력하면 기초대사량과 일일 권장 칼로리를 계산합니다.
      </p>

      <CalorieCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          Mifflin-St Jeor 공식이란?
        </h2>
        <p className="mb-3">
          1990년에 발표된 기초대사량(BMR) 추정 공식으로, 현재 가장 정확하다고 평가받는 공식입니다.
          성별, 나이, 키, 체중을 변수로 사용합니다.
        </p>
        <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <p className="font-mono text-xs">
            남성: BMR = 10 x 체중(kg) + 6.25 x 키(cm) - 5 x 나이 + 5<br />
            여성: BMR = 10 x 체중(kg) + 6.25 x 키(cm) - 5 x 나이 - 161
          </p>
        </div>
        <p className="mt-3">
          TDEE(일일 총 에너지 소비량)는 BMR에 활동 계수를 곱하여 산출합니다.
          체중 감량을 위해서는 TDEE보다 500kcal 적게, 증량을 위해서는 500kcal 더 섭취하는 것이 일반적입니다.
        </p>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/health/bmi" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            BMI 계산기
          </Link>
          <Link href="/health/bmr" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            기초대사량 계산기
          </Link>
          <Link href="/health/body-fat" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            체지방률 계산기
          </Link>
          <Link href="/health/biorhythm" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            바이오리듬
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
                name: "기초대사량(BMR)이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "기초대사량(BMR)은 아무런 활동을 하지 않고 안정 상태에서 생명을 유지하는 데 필요한 최소 에너지량입니다. 호흡, 혈액순환, 체온 유지 등에 소비되며, 전체 에너지 소비의 60~70%를 차지합니다.",
                },
              },
              {
                "@type": "Question",
                name: "TDEE란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDEE(Total Daily Energy Expenditure)는 하루에 소비하는 총 에너지량으로, 기초대사량(BMR)에 활동 계수를 곱하여 산출합니다. 체중 관리를 위한 기준 칼로리로 활용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "체중 감량을 위해 하루에 몇 칼로리를 먹어야 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반적으로 TDEE보다 하루 500kcal 적게 섭취하면 주당 약 0.5kg 감량이 가능합니다. 다만 BMR 이하로 섭취하는 것은 건강에 해로울 수 있으므로 전문가 상담을 권장합니다.",
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
            { "@type": "ListItem", "position": 3, "name": "칼로리 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "칼로리 계산기",
          "url": "https://www.oktools.co.kr/health/calorie",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 칼로리 계산기로 기초대사량(BMR)과 일일 권장 칼로리를 계산하세요. Mifflin-St Jeor 공식 기반으로 감량, 유지, 증량 목표별 칼로리를 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
