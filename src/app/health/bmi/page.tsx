import type { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "@/components/health/BMICalculator";

export const metadata: Metadata = {
  title: "BMI 계산기 - 체질량지수 측정, 한국 비만학회 기준",
  description:
    "키와 몸무게를 입력하면 BMI(체질량지수)를 계산합니다. 한국 비만학회 기준으로 저체중, 정상, 과체중, 비만 단계를 확인하세요.",
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
            ],
          }),
        }}
      />
    </div>
  );
}
