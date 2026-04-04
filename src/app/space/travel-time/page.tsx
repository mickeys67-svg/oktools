import type { Metadata } from "next";
import Link from "next/link";
import LightTravelCalc from "@/components/space/LightTravelCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

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
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">빛 여행 시간 계산기 사용 가이드</h2>
          <p>
            빛 여행 시간 계산기는 태양계 행성까지의 거리를 빛, 비행기, KTX, 자동차 등 다양한 이동 수단으로
            여행하면 얼마나 걸리는지 비교해주는 도구입니다. 우주의 광대한 스케일을 일상적인 기준으로 체감할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">이동 수단별 속도</h3>
          <p>
            빛은 초속 약 30만 km로, 달까지 약 1.3초, 태양까지 약 8분 19초 걸립니다.
            비행기(시속 900km)로 달까지 약 17일, 태양까지는 약 19년이 소요됩니다.
            KTX(시속 305km)나 자동차(시속 100km)로는 천문학적인 시간이 필요해, 우주의 거대한 스케일을 실감할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">재미있는 우주 여행 사실</h3>
          <p>
            화성까지 빛으로 약 3~22분(거리에 따라 변동), 비행기로는 약 7개월~2년이 걸립니다.
            보이저 1호는 1977년 발사 후 현재까지 약 240억 km를 비행했으며, 가장 가까운 별까지 도달하려면 약 7만 년이 더 필요합니다.
            이 도구는 이러한 우주의 스케일을 직관적으로 이해하도록 도와주는 교육 콘텐츠입니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/space/distance" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            우주 거리 변환
          </Link>
          <Link href="/space/planet-age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            행성 나이 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
          </Link>
        </div>
      </section>

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
