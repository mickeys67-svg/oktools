import type { Metadata } from "next";
import Link from "next/link";
import InstallmentCalc from "@/components/finance/InstallmentCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "할부 계산기 - 카드할부 수수료 월납입금 무료 계산 2026",
  description:
    "무료 할부 계산기로 월 할부금과 총 수수료를 바로 확인하세요. 카드할부 이자율별 12개월, 24개월 할부금 계산 및 무이자 비교.",
  keywords: ["할부계산기", "카드할부이자", "무이자할부", "할부수수료계산", "월할부금", "12개월할부", "24개월할부", "할부이자율", "신용카드할부"],
  openGraph: {
    title: "할부 계산기 - 카드할부 수수료 월납입금 무료 계산 2026",
    description:
      "무료 할부 계산기로 월 할부금과 총 수수료를 바로 확인하세요. 카드할부 이자율별 12개월, 24개월 할부금 계산 및 무이자 비교.",
  },
  alternates: {
    canonical: "/finance/installment",
  },
};

export default function InstallmentPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">할부 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        할부 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        상품 가격, 할부 개월, 수수료율을 입력하면 월 할부금과 총 수수료를 계산합니다.
      </p>

      <InstallmentCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            할부 계산기 사용 가이드
          </h2>
          <p>
            할부 계산기는 상품을 할부로 구매할 때 매월 납부해야 할 금액과 총 수수료를 미리 계산해주는 도구입니다.
            가전제품, 자동차, 고가 전자기기 등을 신용카드 할부로 결제하기 전에 실제 부담 금액을 정확히 파악할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">할부 수수료 계산 방법</h3>
          <p>
            유이자 할부의 경우, 총 수수료는 상품 가격에 연 수수료율과 할부 기간을 곱하여 산출합니다.
            월 할부금은 (상품가격 + 총수수료)를 할부 개월 수로 나눈 금액입니다. 카드사마다 수수료율이 다르므로
            여러 카드사의 조건을 비교해보는 것이 좋습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">무이자 할부 활용 팁</h3>
          <p>
            무이자 할부는 카드사가 수수료를 대신 부담하는 프로모션입니다. 대형 가전이나 고가 상품 구매 시
            무이자 할부 이벤트를 활용하면 이자 부담 없이 분할 납부할 수 있습니다. 다만 부분 무이자 할부는
            일부 회차만 무이자이므로 조건을 꼼꼼히 확인하세요. 유이자 할부 시에는 가능한 짧은 기간을 선택해야 총 부담이 줄어듭니다.
          </p>
        </div>
      </section>

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/loan-calculator" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            대출 이자 계산기
          </Link>
          <Link href="/finance/deposit" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            예금 이자 계산기
          </Link>
          <Link href="/finance/savings" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            적금 계산기
          </Link>
          <Link href="/finance/compound-interest" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            복리 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "카드 할부 이자(수수료)는 어떻게 계산하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "할부 수수료는 상품 금액에 할부 수수료율과 개월 수를 적용하여 계산합니다. 총 수수료 = 상품가격 × 수수료율(연) × 할부개월/12이며, 월 할부금 = (상품가격 + 총수수료) / 할부개월입니다." }
            },
            {
              "@type": "Question",
              "name": "무이자 할부와 유이자 할부의 차이는?",
              "acceptedAnswer": { "@type": "Answer", "text": "무이자 할부는 카드사가 수수료를 부담하여 소비자가 이자 없이 분할 납부하는 방식입니다. 유이자 할부는 소비자가 수수료(연 10~20% 수준)를 부담합니다. 무이자 할부라도 가맹점 수수료가 포함될 수 있습니다." }
            },
            {
              "@type": "Question",
              "name": "할부 개월 수가 길수록 유리한가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "유이자 할부는 개월 수가 길어질수록 총 수수료가 커집니다. 월 납입금은 적어지지만 총 부담 금액이 증가하므로, 가능하면 짧은 기간으로 할부하는 것이 유리합니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "할부 계산기",
          "description": "카드 할부 수수료 및 월 할부금 계산",
          "url": "https://www.oktools.co.kr/finance/installment",
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
            { "@type": "ListItem", "position": 3, "name": "할부 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
