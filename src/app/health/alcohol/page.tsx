import type { Metadata } from "next";
import Link from "next/link";
import AlcoholCalc from "@/components/health/AlcoholCalc";

export const metadata: Metadata = {
  title: "음주 측정기 - 혈중 알코올 농도(BAC) 계산기",
  description:
    "Widmark 공식으로 혈중 알코올 농도(BAC)를 계산합니다. 성별, 체중, 음주량, 경과 시간을 입력하면 현재 BAC와 운전 가능 여부를 확인할 수 있습니다.",
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

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Widmark 공식이란?</h2>
        <p>
          스웨덴의 의학자 에릭 위드마크(Erik Widmark)가 개발한 혈중 알코올 농도 추정 공식입니다.
          체중, 성별, 음주량, 알코올 도수, 경과 시간을 고려하여 현재의 BAC를 추정합니다.
        </p>
        <p className="text-xs text-gray-400">
          * 이 계산기는 참고용이며, 실제 혈중 알코올 농도는 음식 섭취, 체질, 간 기능 등에 따라 달라집니다.
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
    </div>
  );
}
