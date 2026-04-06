import type { Metadata } from "next";
import Link from "next/link";
import UnemploymentCalc from "@/components/finance/UnemploymentCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "실업급여 계산기 2026 - 수령액 지급기간 자격 조회",
  description:
    "무료 실업급여 계산기로 예상 수령액과 지급기간을 바로 확인하세요. 2026년 기준 상한액 하한액 반영, 구직급여 자격 조건 조회.",
  keywords: ["실업급여계산기", "실업급여수령액", "실업급여조건", "실업급여지급기간", "구직급여", "실업급여신청", "고용보험실업급여", "실업급여상한액", "실업급여하한액", "자발적퇴사실업급여"],
  openGraph: {
    title: "실업급여 계산기 2026 - 수령액 지급기간 자격 조회",
    description:
      "무료 실업급여 계산기로 예상 수령액과 지급기간을 바로 확인하세요. 2026년 기준 상한액 하한액 반영, 구직급여 자격 조건 조회.",
  },
  alternates: {
    canonical: "/finance/unemployment",
  },
};

export default function UnemploymentPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">실업급여 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        실업급여 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        퇴직 전 평균 월급과 고용보험 가입기간을 입력하면 예상 실업급여를 계산합니다.
      </p>

      <UnemploymentCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            실업급여 계산기 사용 가이드
          </h2>
          <p>
            실업급여 계산기는 퇴직 전 평균 월급과 고용보험 가입기간, 나이를 입력하면 예상 실업급여 일액과
            총 수령액, 지급기간을 계산해주는 도구입니다. 퇴직을 앞두고 있거나 이직 기간의 생활비를 계획할 때 도움이 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">실업급여 산정 기준</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>구직급여일액 = 퇴직 전 평균임금의 60%</li>
            <li>1일 상한액: 66,000원 / 하한액: 최저임금의 80% x 8시간</li>
            <li>지급기간: 나이와 고용보험 가입기간에 따라 120~270일</li>
            <li>신청기한: 퇴직 다음날부터 12개월 이내</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">수급 자격과 신청 방법</h3>
          <p>
            실업급여를 받으려면 고용보험 가입기간이 180일 이상이어야 하며, 비자발적 퇴사(권고사직, 계약만료, 정당한 이직 사유 등)에
            해당해야 합니다. 자발적 퇴사도 임금체불, 직장 내 괴롭힘 등 정당한 사유가 있으면 수급 자격이 인정됩니다.
            워크넷에서 구직 등록 후 거주지 관할 고용센터를 방문하여 수급자격 인정 신청을 하면 됩니다.
            신청 후에는 1~4주 간격으로 구직활동을 보고하는 실업인정을 받아야 급여가 지급됩니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/salary" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            연봉 실수령액 계산기
          </Link>
          <Link href="/finance/retirement" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            퇴직금 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
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
                name: "실업급여 수급 자격은 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "실업급여를 받으려면 이직 전 18개월간 고용보험 피보험기간이 180일 이상이어야 하며, 비자발적 퇴사(권고사직, 계약만료, 정당한 사유 등)여야 합니다. 자발적 퇴사는 원칙적으로 수급 대상이 아니지만, 정당한 사유가 있으면 인정됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "실업급여는 얼마나 받을 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "실업급여 일액은 퇴직 전 3개월 평균임금의 60%이며, 상한액은 1일 66,000원, 하한액은 최저임금의 80%입니다. 지급기간은 연령과 고용보험 가입기간에 따라 120일~270일입니다.",
                },
              },
              {
                "@type": "Question",
                name: "실업급여 신청은 어떻게 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "퇴사 후 워크넷(work.go.kr)에서 구직 등록을 한 뒤, 거주지 관할 고용센터를 방문하여 수급자격 인정 신청을 합니다. 이후 1~4주마다 고용센터에 출석하여 실업 인정을 받으면 급여가 지급됩니다.",
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
          "name": "실업급여 계산기",
          "description": "실업급여 수령액, 지급기간, 수급자격 조회",
          "url": "https://www.oktools.co.kr/finance/unemployment",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "실업급여 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
