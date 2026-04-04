import type { Metadata } from "next";
import ClockApp from "@/components/tools/ClockApp";

export const metadata: Metadata = {
  title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
  description:
    "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시.",
  keywords: ["온라인시계", "전체화면시계", "벽시계", "디지털시계", "아날로그시계", "현재시각", "실시간시계", "네온시계", "큰화면시계"],
};

export default function ClockPage() {
  return (
    <>
      <ClockApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "온라인 시계",
          "description": "아름다운 디자인의 전체화면 벽시계",
          "url": "https://www.oktools.co.kr/tools/clock",
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
            { "@type": "ListItem", "position": 3, "name": "온라인 시계" }
          ]
        }) }}
      />
    </>
  );
}
