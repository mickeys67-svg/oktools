import type { Metadata } from "next";
import Link from "next/link";
import NameMatchApp from "@/components/fortune/NameMatchApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "이름 궁합 테스트 - 획수로 보는 궁합 점수",
  description:
    "두 사람 이름을 입력하면 한글 획수 기반 피라미드 방식으로 궁합 점수를 무료 계산합니다. 커플 이름 궁합 테스트.",
  keywords: ["이름궁합", "이름궁합테스트", "이름궁합계산기", "이름으로궁합보기", "한글이름궁합", "획수궁합", "커플이름궁합", "연인궁합", "이름점"],
  alternates: {
    canonical: "/fortune/name-match",
  },
};

export default function NameMatchPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">이름 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        이름 궁합 테스트
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        두 사람의 이름을 입력하면 한글 획수 기반으로 궁합 점수를 계산합니다.
      </p>

      <NameMatchApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">이름 궁합 테스트 가이드</h2>
          <p>
            이름 궁합 테스트는 두 사람의 이름을 한글 획수로 분석하여 궁합 점수를 산출하는 재미 콘텐츠입니다.
            커플, 친구, 가족 간의 궁합을 가볍게 확인해볼 수 있으며, 이름만 입력하면 즉시 결과를 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">이름 궁합 계산 원리</h3>
          <p>
            두 이름을 한 글자씩 번갈아 배치한 뒤, 각 글자를 초성·중성·종성으로 분리하여 자모별 획수를 구합니다.
            예를 들어 ㄱ=2획, ㄴ=2획, ㄷ=3획, ㅏ=2획 등 전통 획수표를 기반으로 합니다.
            인접한 두 숫자를 더해 일의 자리만 취하는 피라미드 방식으로 줄여나가 최종 2자리 궁합 점수를 산출합니다.
            같은 이름이라도 배치 순서에 따라 결과가 달라질 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">참고사항</h3>
          <p>
            이름 궁합은 과학적 근거가 아닌 전통적 놀이 문화에 기반한 재미 콘텐츠입니다.
            실제 관계의 호환성은 서로에 대한 이해, 소통, 노력에 의해 결정되므로 결과는 가볍게 참고하시기 바랍니다.
            학교나 모임에서 분위기를 띄우는 아이스브레이커로도 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/fortune/mbti" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            MBTI 궁합
          </Link>
          <Link href="/fortune/blood-type" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            혈액형 궁합
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
          "name": "이름 궁합",
          "description": "이름 획수로 보는 궁합 테스트",
          "url": "https://www.oktools.co.kr/fortune/name-match",
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
            { "@type": "ListItem", "position": 3, "name": "이름 궁합" }
          ]
        }) }}
      />
    </div>
  );
}
