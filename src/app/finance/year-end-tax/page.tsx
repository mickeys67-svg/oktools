import type { Metadata } from "next";
import Link from "next/link";
import YearEndTaxCalc from "@/components/finance/YearEndTaxCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "연말정산 환급금 계산기 2026 - 예상 환급액 공제 자동계산",
  description:
    "무료 연말정산 계산기로 예상 환급액을 바로 확인하세요. 신용카드, 의료비, 교육비, 기부금, 연금저축 공제 반영. 2026년 세율 기준.",
  keywords: [
    "연말정산계산기",
    "연말정산환급금",
    "예상환급액",
    "연말정산공제",
    "신용카드공제",
    "의료비공제",
    "교육비공제",
    "연금저축세액공제",
    "기부금공제",
    "13월의월급",
  ],
  alternates: {
    canonical: "/finance/year-end-tax",
  },
};

export default function YearEndTaxPage() {
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
        <span className="text-gray-900 dark:text-gray-100">연말정산 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        연말정산 환급금 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        급여와 공제 항목을 입력하면 2026년 세율 기준으로 예상 환급액을 계산합니다.
      </p>

      <YearEndTaxCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            연말정산 계산기 사용 가이드
          </h2>
          <p>
            연말정산 환급금 계산기는 근로소득자가 1년간 납부한 소득세와 실제 결정세액의 차이를 계산하여
            환급 여부를 확인하는 도구입니다. 소득공제(신용카드 등)와 세액공제(의료비, 교육비, 연금저축 등)를
            꼼꼼히 반영할수록 정확한 결과를 얻을 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            주요 공제 항목 안내
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>신용카드 소득공제: 총급여 25% 초과 사용분의 15% (한도 300만원)</li>
            <li>의료비 세액공제: 총급여 3% 초과분의 15%</li>
            <li>교육비 세액공제: 교육비의 15%</li>
            <li>기부금 세액공제: 1,000만원 이하 15%, 초과분 30%</li>
            <li>연금저축 세액공제: 납입액의 12~15% (한도 600만원)</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            연말정산 절세 팁
          </h3>
          <p>
            연말정산 환급을 극대화하려면 신용카드 사용액을 총급여의 25% 이상으로 유지하고,
            체크카드와 현금영수증 비중을 높이세요 (공제율 30%). 개인연금저축(IRP 포함)은
            최대 900만원까지 납입하면 세액공제 혜택을 최대로 받을 수 있습니다.
            의료비는 가족 중 한 명에게 몰아서 공제받는 것이 유리합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link
            href="/finance/income-tax"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            종합소득세 계산기
          </Link>
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
            href="/finance/pension"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            국민연금 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "연말정산 환급금 계산기",
            description:
              "연말정산 예상 환급액, 소득공제, 세액공제 자동 계산",
            url: "https://www.oktools.co.kr/finance/year-end-tax",
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
                name: "연말정산 계산기",
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
                name: "연말정산 환급금은 어떻게 결정되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1년간 매월 원천징수된 세금(기납부세액)과 실제 결정세액의 차이로 결정됩니다. 기납부세액이 더 크면 환급, 적으면 추가 납부입니다.",
                },
              },
              {
                "@type": "Question",
                name: "신용카드 소득공제 조건은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "총급여의 25%를 초과하여 사용한 금액에 대해 공제됩니다. 신용카드 15%, 체크카드/현금영수증 30%, 전통시장/대중교통 40% 공제율이 적용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "연금저축 세액공제 한도는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "연금저축은 연 600만원, IRP 포함 시 900만원까지 세액공제 대상입니다. 총급여 5,500만원 이하 15%, 초과 시 12% 공제율이 적용됩니다.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
