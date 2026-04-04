import type { Metadata } from "next";
import Link from "next/link";
import InstallmentCalc from "@/components/finance/InstallmentCalc";

export const metadata: Metadata = {
  title: "할부 계산기 - 카드할부 수수료 월납입금 무료 계산 2025",
  description:
    "무료 할부 계산기로 월 할부금과 총 수수료를 바로 확인하세요. 카드할부 이자율별 12개월, 24개월 할부금 계산 및 무이자 비교.",
  keywords: ["할부계산기", "카드할부이자", "무이자할부", "할부수수료계산", "월할부금", "12개월할부", "24개월할부", "할부이자율", "신용카드할부"],
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
