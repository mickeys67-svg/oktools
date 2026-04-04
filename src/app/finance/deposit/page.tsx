import type { Metadata } from "next";
import Link from "next/link";
import DepositCalc from "@/components/finance/DepositCalc";

export const metadata: Metadata = {
  title: "예금 이자 계산기 2025 - 정기예금 세후이자 무료 계산",
  description: "무료 예금 이자 계산기로 금리별 만기 수령액과 세후 이자를 바로 확인하세요. 1억 예금이자, 이자소득세 계산, 예금 금리 비교.",
  keywords: ["예금이자계산기", "정기예금이자", "예금이자계산", "세후이자", "예금만기수령액", "예금금리비교", "1억예금이자", "이자소득세"],
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
