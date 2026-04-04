import type { Metadata } from "next";
import Link from "next/link";
import BloodTypeApp from "@/components/fortune/BloodTypeApp";

export const metadata: Metadata = {
  title: "혈액형 궁합 - A B O AB형 궁합 테스트",
  description:
    "나와 상대 혈액형을 선택하면 연애·우정·직장 궁합을 무료로 확인하세요. A형, B형, O형, AB형 성격과 궁합 총정리.",
  keywords: ["혈액형궁합", "혈액형성격", "A형성격", "B형성격", "O형성격", "AB형성격", "혈액형별궁합", "연애궁합", "혈액형테스트", "커플궁합"],
};

export default function BloodTypePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">혈액형 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        혈액형 궁합
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        나와 상대의 혈액형을 선택하면 궁합 점수와 장단점을 확인할 수 있습니다.
      </p>

      <BloodTypeApp />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">혈액형 궁합이란?</h2>
        <p>
          혈액형 궁합은 ABO 혈액형 분류에 따른 성격 유형을 바탕으로 두 사람의 관계 적합성을
          재미로 알아보는 것입니다. 과학적 근거는 부족하지만, 한국과 일본에서 오랫동안 사랑받는 문화입니다.
        </p>
        <p className="text-xs text-gray-400">
          * 혈액형 궁합은 재미와 참고 용도입니다. 실제 관계는 서로의 노력이 가장 중요합니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "혈액형 궁합",
          "description": "A, B, O, AB 혈액형별 궁합 테스트",
          "url": "https://www.oktools.co.kr/fortune/blood-type",
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
            { "@type": "ListItem", "position": 3, "name": "혈액형 궁합" }
          ]
        }) }}
      />
    </div>
  );
}
