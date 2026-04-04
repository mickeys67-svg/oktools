import type { Metadata } from "next";
import Link from "next/link";
import MBTICompatibility from "@/components/fortune/MBTICompatibility";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "MBTI 궁합 테스트 - 16유형 연애 친구 궁합",
  description:
    "나와 상대 MBTI를 선택하면 궁합 점수와 관계 분석을 무료로 확인하세요. 16유형 연애·친구·직장 궁합 총정리.",
  keywords: ["MBTI궁합", "MBTI궁합테스트", "MBTI연애궁합", "INFP궁합", "ENFP궁합", "INTJ궁합", "MBTI성격유형", "MBTI테스트", "16유형궁합", "MBTI커플궁합"],
  alternates: {
    canonical: "/fortune/mbti",
  },
};

export default function MBTIPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">MBTI 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        MBTI 궁합
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        나와 상대방의 MBTI를 선택하면 궁합 점수와 관계 분석을 확인합니다.
      </p>

      <MBTICompatibility />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">MBTI 궁합 가이드</h2>
          <p>
            MBTI(Myers-Briggs Type Indicator)는 캐서린 브릭스와 이사벨 마이어스가 개발한 성격 유형 검사입니다.
            4가지 선호 지표(외향/내향, 감각/직관, 사고/감정, 판단/인식)의 조합으로 16가지 성격 유형을 분류합니다.
            나와 상대의 MBTI를 선택하면 궁합 점수와 관계 분석을 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">궁합 판정 기준</h3>
          <p>
            MBTI 궁합은 인지기능(Cognitive Functions) 이론을 기반으로 합니다. 일반적으로 일부 지표가 같고 일부가 다른
            조합이 서로를 보완하여 좋은 궁합으로 알려져 있습니다. 예를 들어 INFP와 ENFJ, INTJ와 ENTP는 높은 궁합으로 평가됩니다.
            같은 유형끼리는 공감대가 높지만 비슷한 약점을 가질 수 있고, 정반대 유형은 매력적이지만 갈등이 생길 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">참고사항</h3>
          <p>
            MBTI는 심리학적 도구로 널리 사용되지만, 성격을 16가지로 명확히 구분하기는 어렵다는 학술적 비판도 있습니다.
            궁합 결과는 재미와 대화 소재로 활용하시고, 실제 관계에서는 개인의 성장과 상호 이해가 더 중요합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/fortune/blood-type" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            혈액형 궁합
          </Link>
          <Link href="/fortune/name-match" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            이름 궁합
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
          "name": "MBTI 궁합",
          "description": "MBTI 유형별 궁합 확인",
          "url": "https://www.oktools.co.kr/fortune/mbti",
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
            { "@type": "ListItem", "position": 2, "name": "운세/재미", "item": "https://www.oktools.co.kr/fortune" },
            { "@type": "ListItem", "position": 3, "name": "MBTI 궁합" }
          ]
        }) }}
      />
    </div>
  );
}
