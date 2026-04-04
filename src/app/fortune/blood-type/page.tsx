import type { Metadata } from "next";
import Link from "next/link";
import BloodTypeApp from "@/components/fortune/BloodTypeApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "혈액형 궁합 - A B O AB형 궁합 테스트",
  description:
    "나와 상대 혈액형을 선택하면 연애·우정·직장 궁합을 무료로 확인하세요. A형, B형, O형, AB형 성격과 궁합 총정리.",
  keywords: ["혈액형궁합", "혈액형성격", "A형성격", "B형성격", "O형성격", "AB형성격", "혈액형별궁합", "연애궁합", "혈액형테스트", "커플궁합"],
  openGraph: {
    title: "혈액형 궁합 - A B O AB형 궁합 테스트",
    description:
      "나와 상대 혈액형을 선택하면 연애·우정·직장 궁합을 무료로 확인하세요. A형, B형, O형, AB형 성격과 궁합 총정리.",
  },
  alternates: {
    canonical: "/fortune/blood-type",
  },
};

export default function BloodTypePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">혈액형 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        혈액형 궁합
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        나와 상대의 혈액형을 선택하면 궁합 점수와 장단점을 확인할 수 있습니다.
      </p>

      <BloodTypeApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">혈액형 궁합 가이드</h2>
          <p>
            혈액형 궁합은 ABO 혈액형 분류에 따른 성격 유형을 바탕으로 두 사람의 관계 적합성을 재미로 알아보는 테스트입니다.
            나와 상대의 혈액형을 선택하면 연애, 우정, 직장 관계에서의 궁합 점수와 장단점을 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">혈액형별 성격 특성</h3>
          <p>
            A형은 꼼꼼하고 배려심이 깊으며, B형은 자유롭고 창의적인 성격으로 알려져 있습니다.
            O형은 리더십이 강하고 사교적이며, AB형은 이성적이고 독특한 감성을 가졌다고 합니다.
            이러한 분류는 과학적 근거보다는 한국과 일본에서 오랫동안 이어져 온 대중문화적 관습에 기반합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">궁합 해석 방법</h3>
          <p>
            궁합 점수는 두 혈액형의 성격 특성이 얼마나 조화를 이루는지를 기준으로 산출됩니다.
            높은 점수가 나왔다면 성격적 조화가 좋다는 의미이고, 낮은 점수라도 서로의 차이를 이해하면 좋은 관계를 만들 수 있습니다.
            혈액형 궁합은 재미와 대화 소재로 활용하시고, 실제 관계에서는 서로의 노력이 가장 중요합니다.
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
          <Link href="/fortune/name-match" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            이름 궁합
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
          <Link href="/fortune/zodiac" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            별자리 운세
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
                name: "혈액형 궁합에서 가장 잘 맞는 조합은 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "대중적으로 O형과 A형 조합이 가장 좋은 궁합으로 알려져 있습니다. O형의 적극적이고 넓은 포용력이 A형의 섬세하고 신중한 성격과 잘 어울린다고 합니다. AB형과 O형, B형과 O형도 좋은 궁합으로 평가됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "혈액형별 성격은 과학적 근거가 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "혈액형과 성격의 연관성은 과학적으로 입증되지 않았습니다. 1970년대 일본에서 대중화된 개념으로, 한국과 일본에서 문화적으로 널리 퍼져 있습니다. 재미와 대화 소재로는 좋지만, 실제 사람의 성격은 혈액형보다 환경, 경험, 교육 등에 의해 형성됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "AB형은 왜 특이하다고 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AB형은 전체 인구의 약 11% 정도로 비교적 적은 비율을 차지하며, A형과 B형의 특성을 모두 가지고 있다고 알려져 있습니다. 이중적이고 예측하기 어려운 성격으로 묘사되지만, 이는 문화적 인식일 뿐 과학적 근거는 없습니다.",
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
          "name": "혈액형 궁합",
          "description": "A, B, O, AB 혈액형별 궁합 테스트",
          "url": "https://www.oktools.co.kr/fortune/blood-type",
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
            { "@type": "ListItem", "position": 3, "name": "혈액형 궁합" }
          ]
        }) }}
      />
    </div>
  );
}
