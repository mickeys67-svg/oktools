import type { Metadata } from "next";
import Link from "next/link";
import SpaceDistanceCalc from "@/components/space/SpaceDistanceCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "우주 거리 변환 - 광년 AU 파섹 km 변환기",
  description:
    "광년, 천문단위(AU), 파섹, km 등 우주 거리 단위를 무료로 변환하세요. 안드로메다까지 몇 광년인지 바로 확인.",
  keywords: ["우주거리변환", "광년변환", "천문단위", "AU변환", "파섹", "광년km변환", "우주거리단위", "안드로메다거리"],
  alternates: {
    canonical: "/space/distance",
  },
};

export default function SpaceDistancePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">우주 거리 변환</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">우주 거리 변환</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">광년, AU, 파섹, km 등 우주 거리 단위를 변환합니다.</p>
      <SpaceDistanceCalc />
      <ResultAd />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "우주 거리 변환",
          "description": "광년, 천문단위, 파섹 등 우주 거리 변환",
          "url": "https://www.oktools.co.kr/space/distance",
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
            { "@type": "ListItem", "position": 3, "name": "우주 거리 변환" }
          ]
        }) }}
      />
    </div>
  );
}
