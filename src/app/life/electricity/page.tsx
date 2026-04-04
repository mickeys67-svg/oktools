import type { Metadata } from "next";
import Link from "next/link";
import ElectricityCalc from "@/components/life/ElectricityCalc";

export const metadata: Metadata = {
  title: "전기요금 계산기 - 한국전력 누진세 반영 전기요금 계산",
  description: "월간 전력 사용량(kWh)을 입력하면 한국전력 누진세를 반영한 전기요금을 계산합니다.",
};

export default function ElectricityPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전기요금 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">전기요금 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">한국전력 주택용(저압) 누진세를 반영하여 전기요금을 계산합니다.</p>
      <ElectricityCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "전기요금 계산기",
          "description": "한국전력 누진세 반영 전기요금 계산",
          "url": "https://www.oktools.co.kr/life/electricity",
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
            { "@type": "ListItem", "position": 3, "name": "전기요금 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
