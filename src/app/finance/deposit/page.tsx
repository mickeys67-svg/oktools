import type { Metadata } from "next";
import Link from "next/link";
import DepositCalc from "@/components/finance/DepositCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "예금 이자 계산기 2026 - 정기예금 세후이자 무료 계산",
  description: "무료 예금 이자 계산기로 금리별 만기 수령액과 세후 이자를 바로 확인하세요. 1억 예금이자, 이자소득세 계산, 예금 금리 비교.",
  keywords: ["예금이자계산기", "정기예금이자", "예금이자계산", "세후이자", "예금만기수령액", "예금금리비교", "1억예금이자", "이자소득세"],
  alternates: {
    canonical: "/finance/deposit",
  },
};

export default function DepositPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">예금 이자 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">예금 이자 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">예금 금액, 금리, 기간을 입력하면 세후 이자와 만기 수령액을 계산합니다.</p>
      <DepositCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            예금 이자 계산기 사용 가이드
          </h2>
          <p>
            예금 이자 계산기는 정기예금에 일정 금액을 맡겼을 때 만기 시 받게 되는 세후 이자와 총 수령액을 미리 계산해주는 도구입니다.
            은행별 금리를 비교하거나 목돈 운용 계획을 세울 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">이자 계산 방식</h3>
          <p>
            단리는 원금에만 이자를 적용합니다. 세전이자 = 원금 x 연이자율 x 기간(년)으로 계산됩니다.
            복리는 원금과 이자의 합계에 이자를 붙이므로 기간이 길수록 단리보다 유리합니다.
            대부분의 정기예금은 단리 방식이며, 일부 특판 상품에서 복리를 적용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">세금 및 비과세 혜택</h3>
          <p>
            예금 이자에는 이자소득세 14%와 지방소득세 1.4%, 총 15.4%의 세금이 부과됩니다. 세금우대 저축(9.5%)이나
            비과세 종합저축(세금 면제)을 활용하면 실제 수령액을 높일 수 있습니다.
            비과세 종합저축은 만 65세 이상, 장애인 등이 가입 가능하며 5천만 원까지 비과세 혜택을 받을 수 있습니다.
          </p>
        </div>
      </section>

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/finance/savings" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            적금 계산기
          </Link>
          <Link href="/finance/compound-interest" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            복리 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            대출 이자 계산기
          </Link>
          <Link href="/finance/installment" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            할부 계산기
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
              "name": "단리와 복리의 차이는 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "단리는 원금에만 이자가 붙고, 복리는 원금과 이자의 합계에 이자가 붙습니다. 같은 금리라면 복리가 더 많은 이자를 받게 되며, 기간이 길수록 차이가 커집니다." }
            },
            {
              "@type": "Question",
              "name": "예금 이자에 세금이 얼마나 붙나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "예금 이자에는 이자소득세 14%와 지방소득세 1.4%, 총 15.4%의 세금이 부과됩니다. 세금우대 저축은 9.5%, 비과세 상품은 세금이 면제됩니다." }
            },
            {
              "@type": "Question",
              "name": "1억 원을 연 3%로 1년 예금하면 이자는?",
              "acceptedAnswer": { "@type": "Answer", "text": "세전 이자는 300만원이며, 15.4% 세금(46.2만원)을 제외하면 세후 약 253.8만원의 이자를 받게 됩니다. 만기 수령액은 약 1억 253.8만원입니다." }
            },
            {
              "@type": "Question",
              "name": "세전이자와 세후이자는 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "세전이자는 세금 공제 전 이자 금액이고, 세후이자는 이자소득세(15.4%)를 공제한 후 실제 받는 금액입니다. 금융상품 비교 시 세후이자를 기준으로 비교하는 것이 정확합니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "예금 이자 계산기",
          "description": "예금 이자 및 세후 수령액 계산",
          "url": "https://www.oktools.co.kr/finance/deposit",
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
            { "@type": "ListItem", "position": 3, "name": "예금 이자 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
