import type { Metadata } from "next";
import Link from "next/link";
import LightTravelCalc from "@/components/space/LightTravelCalc";

export const metadata: Metadata = {
  title: "빛 여행 시간 계산기 - 빛 비행기 KTX 우주여행",
  description:
    "태양계 행성까지 빛·비행기·KTX·자동차로 여행하면 얼마나 걸리는지 무료로 계산하세요. 화성·달까지 시간 비교.",
  keywords: ["빛여행시간", "우주여행시간", "광속", "빛의속도", "화성까지시간", "달까지시간", "태양까지시간", "우주여행"],
  alternates: {
    canonical: "/space/travel-time",
  },
};

export default function TravelTimePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">빛 여행 시간 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">빛 여행 시간 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">태양계 행성까지 다양한 이동 수단으로 걸리는 시간을 비교합니다.</p>
      <LightTravelCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "빛 여행 시간 계산기",
          "description": "빛, 비행기, KTX로 우주를 여행하면 걸리는 시간",
          "url": "https://www.oktools.co.kr/space/travel-time",
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
            { "@type": "ListItem", "position": 3, "name": "빛 여행 시간 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
