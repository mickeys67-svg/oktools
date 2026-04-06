import type { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "@/components/health/BMICalculator";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "BMI 계산기 - 체질량지수 비만도 측정 (한국 기준)",
  description:
    "무료 BMI 계산기로 체질량지수와 비만도를 측정하세요. 키와 몸무게 입력만으로 한국 비만학회 기준 저체중·정상·과체중·비만 단계를 즉시 확인할 수 있습니다.",
  keywords: ["BMI계산기", "체질량지수", "비만도측정", "비만도계산기", "BMI계산", "키몸무게비만", "표준체중계산", "한국비만기준", "비만학회기준", "적정체중", "다이어트체중"],
  openGraph: {
    url: "/health/bmi",
    title: "BMI 계산기 - 체질량지수 비만도 측정 (한국 기준)",
    description:
      "무료 BMI 계산기로 체질량지수와 비만도를 측정하세요. 키와 몸무게 입력만으로 한국 비만학회 기준 저체중·정상·과체중·비만 단계를 즉시 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/health/bmi",
  },
};

export default function BMIPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">BMI 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        BMI 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        키와 몸무게를 입력하면 체질량지수(BMI)를 계산하고 비만도를 판정합니다.
      </p>

      <BMICalculator />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          한국 비만학회 BMI 기준
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2.5 font-medium">분류</th>
                <th className="px-4 py-2.5 font-medium">BMI (kg/m²)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr><td className="px-4 py-2.5">저체중</td><td className="px-4 py-2.5">&lt; 18.5</td></tr>
              <tr><td className="px-4 py-2.5">정상</td><td className="px-4 py-2.5">18.5 ~ 22.9</td></tr>
              <tr><td className="px-4 py-2.5">과체중 (비만 전단계)</td><td className="px-4 py-2.5">23.0 ~ 24.9</td></tr>
              <tr><td className="px-4 py-2.5">1단계 비만</td><td className="px-4 py-2.5">25.0 ~ 29.9</td></tr>
              <tr><td className="px-4 py-2.5">2단계 비만</td><td className="px-4 py-2.5">30.0 ~ 34.9</td></tr>
              <tr><td className="px-4 py-2.5">3단계 비만 (고도비만)</td><td className="px-4 py-2.5">&ge; 35.0</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          * WHO 기준과 다릅니다. 한국인은 같은 BMI에서도 체지방률이 높아 더 낮은 기준을 적용합니다.
        </p>
        <p className="mt-4">
          BMI(Body Mass Index, 체질량지수)는 체중(kg)을 키(m)의 제곱으로 나눈 값으로, 비만도를 간편하게
          판정하는 대표적인 지표입니다. 계산 공식은 BMI = 체중(kg) / 키(m)²이며, 키 170cm에 체중 70kg인
          경우 BMI는 약 24.2로 과체중(비만 전단계)에 해당합니다. BMI는 간편하지만 근육량과 체지방률을
          구분하지 못하는 한계가 있으므로, 보다 정확한 건강 평가를 위해 체지방률 측정이나 허리둘레 측정을
          병행하는 것이 좋습니다. 정기적으로 BMI를 확인하면 체중 변화 추이를 파악하고 건강 관리 목표를
          설정하는 데 도움이 됩니다.
        </p>
      </section>

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/health/bmr" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            기초대사량 계산기
          </Link>
          <Link href="/health/body-fat" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            체지방률 계산기
          </Link>
          <Link href="/health/calorie" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            칼로리 계산기
          </Link>
          <Link href="/health/alcohol" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            음주 계산기
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
                name: "BMI가 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI(Body Mass Index, 체질량지수)는 체중(kg)을 키(m)의 제곱으로 나눈 값으로, 비만도를 판정하는 지표입니다.",
                },
              },
              {
                "@type": "Question",
                name: "한국 기준 정상 BMI 범위는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한국 비만학회 기준 정상 BMI는 18.5~22.9입니다. WHO 기준(18.5~24.9)보다 낮으며, 한국인은 같은 BMI에서도 체지방률이 높아 별도 기준을 사용합니다.",
                },
              },
              {
                "@type": "Question",
                name: "BMI 25 이상이면 비만인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한국 비만학회 기준 BMI 25 이상은 1단계 비만에 해당합니다. 23~24.9는 과체중(비만 전단계), 30 이상은 2단계 비만, 35 이상은 3단계 비만(고도비만)으로 분류됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "BMI의 한계는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI는 근육량과 체지방률을 구분하지 못합니다. 근육이 많은 사람은 BMI가 높게 나올 수 있고, 마른 비만(체지방률 높음)은 정상으로 나올 수 있어 체지방률 측정을 병행하는 것이 좋습니다.",
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
            { "@type": "ListItem", "position": 3, "name": "BMI 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "BMI 계산기",
          "url": "https://www.oktools.co.kr/health/bmi",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 BMI 계산기로 체질량지수와 비만도를 측정하세요. 키와 몸무게 입력만으로 한국 비만학회 기준 저체중·정상·과체중·비만 단계를 즉시 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
