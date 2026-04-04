import type { Metadata } from "next";
import Link from "next/link";
import PlanetWeightCalc from "@/components/space/PlanetWeightCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "행성 무게 계산기 - 달 화성 목성에서의 내 몸무게",
  description:
    "지구 몸무게를 입력하면 달·화성·목성 등 태양계 행성에서의 몸무게를 무료로 계산합니다. 행성별 중력 비교.",
  keywords: ["행성무게계산기", "달에서몸무게", "화성무게", "목성무게", "행성중력", "우주몸무게", "태양계행성", "중력비교"],
  openGraph: {
    title: "행성 무게 계산기 - 달 화성 목성에서의 내 몸무게",
    description:
      "지구 몸무게를 입력하면 달·화성·목성 등 태양계 행성에서의 몸무게를 무료로 계산합니다. 행성별 중력 비교.",
  },
  alternates: {
    canonical: "/space/planet-weight",
  },
};

export default function PlanetWeightPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">행성 무게 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        행성 무게 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        지구에서의 몸무게를 입력하면 태양계 각 행성에서의 몸무게를 계산합니다.
      </p>

      <PlanetWeightCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">행성 무게 계산기 사용 가이드</h2>
          <p>
            행성 무게 계산기는 지구에서의 몸무게를 입력하면 태양계 각 행성과 달에서의 몸무게를 계산해주는 도구입니다.
            행성별 중력 차이를 체감적으로 이해하거나 과학 교육 자료로 활용할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">계산 원리</h3>
          <p>
            무게 = 질량 x 중력가속도입니다. 지구의 중력가속도는 9.8m/s2이며, 각 행성의 중력가속도를 지구와 비교한 비율을 곱해 계산합니다.
            달은 지구의 약 1/6, 화성은 약 38%, 목성은 약 2.5배의 중력을 가집니다.
            즉, 지구에서 60kg인 사람은 달에서 약 10kg, 목성에서는 약 150kg의 무게를 느끼게 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">행성별 중력 비교</h3>
          <p>
            태양계에서 중력이 가장 강한 행성은 목성(2.53배)이고, 가장 약한 것은 달(0.166배)입니다.
            화성(0.38배)은 인류가 이주를 꿈꾸는 행성으로, 지구보다 가벼운 몸을 경험할 수 있지만
            근육과 뼈 약화의 위험도 있어 우주 의학의 중요한 연구 주제입니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/space/planet-age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            행성 나이 계산기
          </Link>
          <Link href="/space/distance" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            우주 거리 변환
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
                name: "달에서 몸무게는 얼마나 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "달의 중력은 지구의 약 1/6(0.166배)입니다. 지구에서 60kg인 사람은 달에서 약 10kg으로 측정됩니다. 이 때문에 우주비행사들이 달에서 높이 점프하고 가볍게 움직일 수 있었습니다.",
                },
              },
              {
                "@type": "Question",
                name: "목성에서 내 몸무게는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "목성의 표면 중력은 지구의 약 2.53배입니다. 지구에서 60kg인 사람은 목성에서 약 152kg으로 느껴집니다. 목성은 태양계에서 가장 큰 행성으로 중력도 가장 강합니다.",
                },
              },
              {
                "@type": "Question",
                name: "행성마다 몸무게가 다른 이유는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "몸무게는 질량에 중력가속도를 곱한 값입니다. 각 행성의 질량과 크기가 다르기 때문에 표면 중력이 달라지고, 같은 질량의 물체라도 행성에 따라 다른 무게로 측정됩니다. 질량 자체는 어디서든 동일합니다.",
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
          "name": "행성 무게 계산기",
          "description": "다른 행성에서의 내 몸무게 계산",
          "url": "https://www.oktools.co.kr/space/planet-weight",
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
            { "@type": "ListItem", "position": 2, "name": "우주/과학", "item": "https://www.oktools.co.kr/space" },
            { "@type": "ListItem", "position": 3, "name": "행성 무게 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
