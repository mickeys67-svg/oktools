import type { Metadata } from "next";
import Link from "next/link";
import PercentageCalc from "@/components/life/PercentageCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "퍼센트 계산기 - % 증가 감소 비율 계산",
  description:
    "무료 퍼센트 계산기로 증가율, 감소율, 비율을 계산하세요. A의 B%는? A에서 B로 몇% 변화? A는 B의 몇%? 세 가지 모드를 즉시 이용할 수 있습니다.",
  keywords: ["퍼센트계산기", "퍼센트계산", "백분율계산", "퍼센트증가율", "퍼센트감소율", "비율계산기", "할인퍼센트", "증감률계산"],
  openGraph: {
    url: "/life/percentage",
    title: "퍼센트 계산기 - % ��가 감소 비��� 계산",
    description:
      "무료 퍼센트 계산기로 증가��, 감소율, 비율을 계산하세요. A의 B%는? A에서 B로 몇% 변���? A는 B의 몇%? 세 가지 모드를 즉시 이용할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/percentage",
  },
};

export default function PercentagePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">퍼센트 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">퍼센트 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">퍼센트 계산 세 가지 모드를 지원합니다.</p>
      <PercentageCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">퍼센트 계산기 사용 가이드</h2>
          <p>
            퍼센트 계산기는 세 가지 모드를 제공합니다. 특정 숫자의 몇 퍼센트를 구하거나, 두 숫자 간의 증감률을 계산하거나,
            한 숫자가 다른 숫자의 몇 퍼센트인지 구할 수 있습니다. 할인율 계산, 성적 비율, 매출 증감 분석 등 일상에서 자주 필요한 계산을 빠르게 수행합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">세 가지 계산 모드</h3>
          <p>
            모드 1: A의 B%는 얼마? → A x B / 100 (예: 50,000의 20% = 10,000원).
            모드 2: A에서 B로 몇% 변화? → (B - A) / A x 100 (예: 100에서 130으로 = 30% 증가).
            모드 3: A는 B의 몇%? → A / B x 100 (예: 75는 150의 50%).
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">활용 사례</h3>
          <p>
            세일 할인 금액 계산, 연봉 인상률 확인, 시험 점수 비율 산출, 다이어트 목표 체중 대비 달성률,
            매출 전월 대비 증감률 분석 등 퍼센트 계산이 필요한 거의 모든 상황에서 활용 가능합니다.
            계산 결과는 소수점 둘째 자리까지 표시하여 정확한 비율을 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/discount" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            할인율 계산기
          </Link>
          <Link href="/life/gpa" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            학점 계산기
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
                name: "퍼센트 증가율은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "퍼센트 증가율 = ((새 값 - 원래 값) / 원래 값) x 100입니다. 예를 들어 100에서 130으로 증가했다면 (130-100)/100 x 100 = 30% 증가입니다.",
                },
              },
              {
                "@type": "Question",
                name: "A의 B%는 어떻게 구하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A x B / 100으로 계산합니다. 예를 들어 500의 20%는 500 x 20 / 100 = 100입니다. 할인 계산, 세금 계산, 팁 계산 등에 자주 사용되는 기본 퍼센트 공식입니다.",
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
          "name": "퍼센트 계산기",
          "description": "퍼센트 증가/감소, 비율 계산",
          "url": "https://www.oktools.co.kr/life/percentage",
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
            { "@type": "ListItem", "position": 3, "name": "퍼센트 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
