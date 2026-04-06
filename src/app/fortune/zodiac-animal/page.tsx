import type { Metadata } from "next";
import Link from "next/link";
import ZodiacAnimalApp from "@/components/fortune/ZodiacAnimalApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "띠 계산기 - 12간지 띠 성격 궁합 확인",
  description:
    "출생년도 입력으로 12간지 띠를 무료 확인하세요. 띠별 성격, 궁합, 유명인 정보까지 한눈에 알아볼 수 있습니다.",
  keywords: ["띠계산기", "12간지", "띠확인", "띠별성격", "띠별궁합", "올해띠", "용띠", "뱀띠", "말띠", "12지신", "나이띠계산", "출생년도띠"],
  openGraph: {
    url: "/fortune/zodiac-animal",
    title: "띠 계산기 - 12간지 띠 성격 궁합 확인",
    description:
      "출생년도 입력으로 12간지 띠를 무료 확인하세요. 띠별 성격, 궁합, 유명인 정보까지 한눈에 알아볼 수 있습니다.",
  },
  alternates: {
    canonical: "/fortune/zodiac-animal",
  },
};

export default function ZodiacAnimalPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">띠 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        띠 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        출생년도를 입력하면 12간지 띠와 성격, 궁합 정보를 확인할 수 있습니다.
      </p>

      <ZodiacAnimalApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">띠 계산기 사용 가이드</h2>
          <p>
            띠 계산기는 출생년도를 입력하면 12간지 중 해당하는 띠를 알려주고, 띠별 성격 특성과 다른 띠와의 궁합 정보를 제공합니다.
            12간지(십이지)는 자(쥐), 축(소), 인(호랑이), 묘(토끼), 진(용), 사(뱀), 오(말), 미(양),
            신(원숭이), 유(닭), 술(개), 해(돼지)의 12동물을 순서대로 배치한 동양의 시간 체계입니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">띠 계산 방법</h3>
          <p>
            띠는 출생년도에서 4를 빼고 12로 나눈 나머지로 결정됩니다. 나머지가 0이면 쥐띠, 1이면 소띠, 순서대로 11이면 돼지띠입니다.
            2026년은 말띠(오, 午)의 해이며, 12년 주기로 같은 띠가 반복됩니다.
            음력 설 이전에 태어난 경우 전년도 띠에 해당할 수 있으므로, 양력 1~2월생은 음력 기준을 확인하는 것이 정확합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">띠별 궁합과 상극</h3>
          <p>
            전통적으로 삼합(三合) 관계에 있는 띠끼리 궁합이 좋다고 알려져 있습니다. 예를 들어 쥐·용·원숭이, 소·뱀·닭,
            호랑이·말·개, 토끼·양·돼지가 삼합 관계입니다. 반면 6년 차이 나는 띠끼리는 충(冲) 관계로 상극이라 합니다.
            띠별 성격과 궁합은 전통 해석을 바탕으로 한 재미 콘텐츠이므로 참고 용도로만 활용하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/fortune/tojeong" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            토정비결
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "12간지 띠는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "출생년도에서 4를 빼고 12로 나눈 나머지로 계산합니다. 나머지가 0이면 쥐, 1이면 소, ... 11이면 돼지입니다.",
                },
              },
              {
                "@type": "Question",
                name: "올해 2026년은 무슨 띠인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년은 말띠(오, 午)의 해입니다.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "운세·재미", "item": "https://www.oktools.co.kr/fortune" },
            { "@type": "ListItem", "position": 3, "name": "띠 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "띠 계산기",
          "url": "https://www.oktools.co.kr/fortune/zodiac-animal",
          "applicationCategory": "EntertainmentApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "출생년도 입력으로 12간지 띠를 무료 확인하세요. 띠별 성격, 궁합, 유명인 정보까지 한눈에 알아볼 수 있습니다."
        }) }}
      />
    </div>
  );
}
