import type { Metadata } from "next";
import Link from "next/link";
import CarTaxCalc from "@/components/life/CarTaxCalc";

export const metadata: Metadata = {
  title: "자동차세 계산기 - 배기량별 자동차세 조회",
  description:
    "승용차, 승합차, 화물차, 전기차 자동차세 계산기. 배기량, 차령 경감, 교육세, 연납 할인까지 한번에 조회.",
};

export default function CarTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">자동차세 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        자동차세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        차량 유형과 배기량을 입력하면 자동차세, 교육세, 연납 할인액을 계산해 드립니다.
      </p>
      <CarTaxCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "자동차세 계산기",
          "description": "배기량별 자동차세, 교육세, 연납 할인 계산",
          "url": "https://www.oktools.co.kr/life/car-tax",
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
            { "@type": "ListItem", "position": 3, "name": "자동차세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
