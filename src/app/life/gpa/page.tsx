import type { Metadata } from "next";
import Link from "next/link";
import GPACalculator from "@/components/life/GPACalculator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "학점 계산기 - 대학교 GPA 평균평점 계산 (4.5/4.3)",
  description:
    "무료 학점 계산기로 대학교 평균 평점(GPA)을 계산하세요. 과목별 학점·성적 입력으로 4.5만점, 4.3만점 기준 GPA를 즉시 확인할 수 있습니다.",
  keywords: ["학점계산기", "GPA계산기", "대학학점계산", "평균평점계산", "4.5만점학점", "4.3만점학점", "학점평균", "성적계산기", "학점관리"],
  openGraph: {
    url: "/life/gpa",
    title: "학점 계산기 - 대학교 GPA 평균평점 계산 (4.5/4.3)",
    description:
      "무료 학점 계산기로 대학교 평균 평점(GPA)을 계산하세요. 과목별 학점·성적 입력으로 4.5만점, 4.3만점 기준 GPA를 즉시 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/gpa",
  },
};

export default function GPAPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">학점 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">학점 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산합니다.</p>
      <GPACalculator />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">학점 계산기 사용 가이드</h2>
          <p>
            학점 계산기는 과목별 이수 학점과 성적(A+, A0, B+ 등)을 입력하면 가중 평균 방식으로 평균 평점(GPA)을 계산해주는 도구입니다.
            장학금 신청, 대학원 진학, 교환학생 지원 등 GPA가 필요한 상황에서 빠르게 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">GPA 계산 공식</h3>
          <p>
            GPA = (과목1 학점 x 성적점수 + 과목2 학점 x 성적점수 + ...) / 총 이수 학점.
            4.5만점 기준 A+ = 4.5, A0 = 4.0, B+ = 3.5, B0 = 3.0, C+ = 2.5, C0 = 2.0, D+ = 1.5, D0 = 1.0, F = 0.0입니다.
            4.3만점 기준은 A+ = 4.3, A0 = 4.0으로 최고점만 다르고 나머지는 동일합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">학점 관리 팁</h3>
          <p>
            3학점 과목에서 받는 성적이 1학점 과목보다 GPA에 미치는 영향이 크므로, 학점이 큰 전공 과목에 집중하는 것이 유리합니다.
            재수강(성적 정정)을 활용하면 낮은 성적을 개선할 수 있지만, 일부 대학은 재수강 횟수를 제한하거나 원래 성적을 표기합니다.
            P/F(Pass/Fail) 과목은 GPA 계산에서 제외되므로 전략적으로 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/percentage" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            퍼센트 계산기
          </Link>
          <Link href="/life/discount" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            할인율 계산기
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
                name: "4.5 만점 기준 학점 계산은 어떻게 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "4.5 만점 기준에서 A+는 4.5, A0는 4.0, B+는 3.5, B0는 3.0 등으로 환산합니다. 평균 학점은 각 과목의 (학점 x 성적 점수)를 합산한 뒤 총 이수 학점으로 나누어 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "4.5 만점을 4.0 만점으로 변환하는 방법은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반적으로 4.5 만점 학점에 4.0/4.5(약 0.889)를 곱하면 4.0 만점으로 환산할 수 있습니다. 예를 들어 4.5 만점에서 3.8이면 4.0 만점으로 약 3.38이 됩니다. 다만 대학원이나 유학 지원 시 기관마다 변환 기준이 다를 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "취업 시 학점 기준은 보통 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "대기업 기준 4.5 만점에서 3.5 이상이면 무난하고, 3.0 이상이면 지원 가능한 곳이 많습니다. 공기업은 일부 3.0 이상 컷을 두기도 합니다. 학점보다 직무 경험, 자격증, 어학 점수를 종합적으로 평가하는 추세입니다.",
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
          "name": "학점 계산기",
          "description": "대학교 학점(GPA) 계산",
          "url": "https://www.oktools.co.kr/life/gpa",
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
            { "@type": "ListItem", "position": 3, "name": "학점 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
