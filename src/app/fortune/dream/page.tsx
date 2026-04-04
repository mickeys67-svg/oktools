import type { Metadata } from "next";
import Link from "next/link";
import DreamApp from "@/components/fortune/DreamApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "꿈해몽 - 꿈 풀이 사전, 길몽 흉몽 확인",
  description:
    "꿈에서 본 동물·사람·장소의 의미를 무료로 풀이하세요. 돼지꿈, 뱀꿈, 치아꿈 등 길몽 흉몽을 상세하게 해석해드립니다.",
  keywords: ["꿈해몽", "꿈풀이", "꿈풀이사전", "돼지꿈", "뱀꿈", "치아꿈", "물꿈", "불꿈", "죽는꿈", "길몽흉몽", "태몽풀이", "꿈해석", "로또꿈"],
  alternates: {
    canonical: "/fortune/dream",
  },
};

export default function DreamPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">꿈해몽</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        꿈해몽
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        꿈에서 본 것을 검색하거나 카테고리별로 꿈의 의미를 알아보세요.
      </p>

      <DreamApp />
      <ResultAd />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">꿈해몽이란?</h2>
        <p>
          꿈해몽은 꿈에 나타난 상징이나 사건의 의미를 해석하는 것으로, 동양과 서양 모두에서 오랜 역사를 가지고 있습니다.
          꿈은 무의식의 메시지를 담고 있다고 여겨지며, 길몽은 좋은 조짐을, 흉몽은 주의가 필요한 신호를 나타냅니다.
        </p>
        <p className="text-xs text-gray-400">
          * 꿈해몽은 전통적 해석을 바탕으로 한 재미 콘텐츠입니다. 참고 용도로만 활용하세요.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "꿈해몽",
          "description": "꿈의 의미를 풀이하는 꿈해몽 사전",
          "url": "https://www.oktools.co.kr/fortune/dream",
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
            { "@type": "ListItem", "position": 2, "name": "운세/재미", "item": "https://www.oktools.co.kr/fortune" },
            { "@type": "ListItem", "position": 3, "name": "꿈해몽" }
          ]
        }) }}
      />
    </div>
  );
}
