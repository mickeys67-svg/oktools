import type { Metadata } from "next";
import Link from "next/link";
import GiftTaxCalc from "@/components/finance/GiftTaxCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "증여세 계산기 2026 - 세율표 공제한도 자동계산",
  description:
    "무료 증여세 계산기로 증여세를 바로 확인하세요. 2026년 세율표 적용, 배우자/자녀 공제한도, 과세표준, 실효세율 자동 계산.",
  keywords: [
    "증여세계산기",
    "증여세율",
    "증여세면제한도",
    "증여공제",
    "배우자증여",
    "자녀증여",
    "증여세율표2026",
    "증여세신고",
    "부동산증여",
    "증여세절세",
  ],
  openGraph: {
    title: "증여세 계산기 2026 - 세율표 공제한도 자동계산",
    description:
      "무료 증여세 계산기로 증여세를 바로 확인하세요. 2026년 세율표 적용, 배우자/자녀 공제한도, 과세표준, 실효세율 자동 계산.",
  },
  alternates: {
    canonical: "/finance/gift-tax",
  },
};

export default function GiftTaxPage() {
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
        <span className="text-gray-900 dark:text-gray-100">증여세 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        증여세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        증여재산 가액과 관계를 입력하면 2026년 세율 기준으로 증여세를 계산합니다.
      </p>

      <GiftTaxCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            증여세 계산기 사용 가이드
          </h2>
          <p>
            증여세 계산기는 타인에게 재산을 무상으로 이전할 때 부과되는 증여세를 계산하는 도구입니다.
            증여자와 수증자의 관계에 따라 공제 한도가 다르며, 10년 이내 동일인으로부터 받은 증여액은
            합산하여 과세됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            증여 공제 한도 (10년 합산)
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>배우자: 6억원</li>
            <li>직계존속 (부모 → 자녀): 5,000만원</li>
            <li>직계존속 (부모 → 미성년 자녀): 2,000만원</li>
            <li>직계비속 (자녀 → 부모): 5,000만원</li>
            <li>기타 친족: 1,000만원</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
            증여세 신고 및 납부
          </h3>
          <p>
            증여를 받은 날이 속하는 달의 말일부터 3개월 이내에 관할 세무서에 신고해야 합니다.
            자진 신고 시 3% 세액공제 혜택이 있습니다. 분할 납부는 증여세가 1,000만원을 초과할 경우
            2개월 이내 분납이 가능하며, 2,000만원 초과 시 5년 이내 연부연납도 가능합니다.
          </p>
        </div>
      </section>

      <InArticleAd />

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
            href="/finance/acquisition-tax"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            취득세 계산기
          </Link>
          <Link
            href="/finance/broker-fee"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            부동산 중개보수 계산기
          </Link>
          <Link
            href="/finance/year-end-tax"
            className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
          >
            연말정산 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "증여세 계산기",
            description:
              "배우자, 자녀 증여세 세율 계산 및 공제한도 조회",
            url: "https://www.oktools.co.kr/finance/gift-tax",
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
                name: "증여세 계산기",
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
                name: "증여세 면제 한도는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "배우자 간 증여는 6억원, 부모가 성인 자녀에게 증여 시 5,000만원, 미성년 자녀에게는 2,000만원까지 공제됩니다. 이 한도는 10년간 합산 기준입니다.",
                },
              },
              {
                "@type": "Question",
                name: "증여세 신고 기한은 언제인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "증여를 받은 날이 속하는 달의 말일부터 3개월 이내에 신고해야 합니다. 자진 신고 시 3% 세액공제 혜택이 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "증여세 세율은 어떻게 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "과세표준 1억 이하 10%, 5억 이하 20%, 10억 이하 30%, 30억 이하 40%, 30억 초과 50%의 누진세율이 적용됩니다.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
