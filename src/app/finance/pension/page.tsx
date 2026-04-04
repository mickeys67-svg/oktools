import type { Metadata } from "next";
import Link from "next/link";
import PensionCalc from "@/components/finance/PensionCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "국민연금 예상 수령액 계산기 2026 - 월 수령액 납부액 조회",
  description:
    "무료 국민연금 계산기로 예상 월 수령액을 바로 확인하세요. 2026년 기준 납부액, 수령 시작 나이, 수령 대비 납부 비율까지 한눈에.",
  keywords: [
    "국민연금계산기",
    "국민연금수령액",
    "국민연금예상수령액",
    "연금수령나이",
    "국민연금납부액",
    "연금보험료",
    "국민연금4.5%",
    "노후준비",
    "연금계산",
    "국민연금수령액조회",
  ],
  alternates: {
    canonical: "/finance/pension",
  },
};

export default function PensionPage() {
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
        <span className="text-gray-900 dark:text-gray-100">국민연금 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        국민연금 예상 수령액 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        소득과 가입 기간을 입력하면 2026년 기준으로 국민연금 예상 수령액을 계산합니다.
      </p>

      <PensionCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            국민연금 계산기 사용 가이드
          </h2>
          <p>
            국민연금 예상 수령액 계산기는 현재 소득과 가입 기간을 기반으로 65세부터 받을 수 있는
            월 연금액을 예측하는 도구입니다. 연금보험료는 소득의 9%(본인 4.5%, 사업주 4.5%)이며,
            가입 기간이 길고 소득이 높을수록 수령액이 증가합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            국민연금 수령 조건
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>최소 가입 기간: 10년 이상</li>
            <li>수령 시작 나이: 65세 (1969년 이후 출생자)</li>
            <li>조기수령: 60세부터 가능 (감액 적용)</li>
            <li>연기수령: 최대 70세까지 연기 가능 (증액 적용)</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            연금보험료 안내
          </h3>
          <p>
            2026년 기준 연금보험료율은 소득의 9%이며, 근로자는 본인 4.5%, 사업주 4.5%를 부담합니다.
            지역가입자는 9% 전액을 본인이 부담합니다. 기준소득월액 상한은 617만원, 하한은 37만원입니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link
            href="/finance/salary"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            연봉 실수령액 계산기
          </Link>
          <Link
            href="/finance/insurance4"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            4대보험 계산기
          </Link>
          <Link
            href="/finance/retirement"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            퇴직금 계산기
          </Link>
          <Link
            href="/finance/income-tax"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            종합소득세 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "국민연금 예상 수령액 계산기",
            description:
              "국민연금 예상 월 수령액, 납부액, 수령 대비 납부 비율 계산",
            url: "https://www.oktools.co.kr/finance/pension",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
            inLanguage: "ko-KR",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "홈",
                item: "https://www.oktools.co.kr",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "금융 계산기",
                item: "https://www.oktools.co.kr/finance",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "국민연금 계산기",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "국민연금 수령 나이는 몇 살인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1969년 이후 출생자 기준으로 65세부터 국민연금을 수령할 수 있습니다. 조기수령은 60세부터 가능하나 감액이 적용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "국민연금 보험료율은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년 기준 소득의 9%이며, 근로자는 본인 4.5%, 사업주 4.5%를 분담합니다. 지역가입자는 9% 전액 본인 부담입니다.",
                },
              },
              {
                "@type": "Question",
                name: "국민연금 최소 가입 기간은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "국민연금을 수령하려면 최소 10년(120개월) 이상 가입해야 합니다. 10년 미만인 경우 반환일시금으로 돌려받을 수 있습니다.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
