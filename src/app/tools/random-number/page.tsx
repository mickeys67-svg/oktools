import type { Metadata } from "next";
import Link from "next/link";
import RandomGenerator from "@/components/tools/RandomGenerator";

export const metadata: Metadata = {
  title: "랜덤 번호 생성기 - 로또 주사위 동전 던지기",
  description: "무료 랜덤 번호 생성기. 로또 번호, 주사위 굴리기, 동전 던지기, 추첨 번호 등 다양한 무작위 생성 도구를 바로 사용하세요.",
  keywords: ["랜덤번호생성기", "랜덤숫자", "로또번호", "추첨번호", "주사위굴리기", "동전던지기", "무작위번호", "제비뽑기", "랜덤뽑기"],
};

export default function RandomNumberPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">랜덤 번호 생성기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">랜덤 번호 생성기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">로또 번호, 랜덤 숫자, 동전 던지기, 주사위 등 다양한 랜덤 도구입니다.</p>
      <RandomGenerator />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "랜덤 번호 생성기",
          "description": "로또 번호, 랜덤 숫자, 추첨 번호 생성",
          "url": "https://www.oktools.co.kr/tools/random-number",
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
            { "@type": "ListItem", "position": 2, "name": "유틸리티", "item": "https://www.oktools.co.kr/tools" },
            { "@type": "ListItem", "position": 3, "name": "랜덤 번호 생성기" }
          ]
        }) }}
      />
    </div>
  );
}
