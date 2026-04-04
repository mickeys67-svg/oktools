import type { Metadata } from "next";
import Link from "next/link";
import DiscountCalc from "@/components/life/DiscountCalc";

export const metadata: Metadata = {
  title: "할인율 계산기 - 할인가 원래가격 역산",
  description:
    "무료 할인율 계산기로 할인가, 원래 가격, 할인 퍼센트를 계산하세요. 세일 가격 입력으로 할인 금액과 최종 가격을 즉시 확인할 수 있습니다.",
  keywords: ["할인율계산기", "할인가계산", "할인계산기", "세일계산", "할인퍼센트계산", "원래가격계산", "정가계산", "최종가격계산"],
  alternates: {
    canonical: "/life/discount",
  },
};

export default function DiscountPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">할인율 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">할인율 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">원래 가격과 할인율로 할인 금액과 최종 가격을 계산합니다.</p>
      <DiscountCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "할인율 계산기",
          "description": "할인가, 할인율, 원래 가격 계산",
          "url": "https://www.oktools.co.kr/life/discount",
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
            { "@type": "ListItem", "position": 3, "name": "할인율 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
