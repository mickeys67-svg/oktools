import type { Metadata } from "next";
import Link from "next/link";
import PlanetAgeCalc from "@/components/space/PlanetAgeCalc";

export const metadata: Metadata = {
  title: "행성 나이 계산기 - 화성 목성에서의 내 나이",
  description:
    "지구 나이를 입력하면 화성·목성·토성 등 태양계 행성에서의 나이를 무료로 계산합니다. 공전주기 기반 우주 나이 확인.",
  keywords: ["행성나이계산기", "화성나이", "목성나이", "행성공전주기", "우주나이", "태양계나이", "행성년수"],
  alternates: {
    canonical: "/space/planet-age",
  },
};

export default function PlanetAgePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">행성 나이 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">행성 나이 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">내 나이가 다른 행성에서는 몇 살인지 확인해보세요.</p>
      <PlanetAgeCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "행성 나이 계산기",
          "description": "다른 행성에서의 내 나이 계산",
          "url": "https://www.oktools.co.kr/space/planet-age",
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
            { "@type": "ListItem", "position": 2, "name": "우주/과학", "item": "https://www.oktools.co.kr/space" },
            { "@type": "ListItem", "position": 3, "name": "행성 나이 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
