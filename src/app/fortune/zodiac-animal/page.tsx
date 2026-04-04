import type { Metadata } from "next";
import Link from "next/link";
import ZodiacAnimalApp from "@/components/fortune/ZodiacAnimalApp";

export const metadata: Metadata = {
  title: "띠 계산기 - 12간지 띠 성격 궁합 확인",
  description:
    "출생년도 입력으로 12간지 띠를 무료 확인하세요. 띠별 성격, 궁합, 유명인 정보까지 한눈에 알아볼 수 있습니다.",
  keywords: ["띠계산기", "12간지", "띠확인", "띠별성격", "띠별궁합", "올해띠", "용띠", "뱀띠", "말띠", "12지신", "나이띠계산", "출생년도띠"],
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

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">12간지란?</h2>
        <p>
          12간지(십이지)는 자(쥐), 축(소), 인(호랑이), 묘(토끼), 진(용), 사(뱀), 오(말), 미(양),
          신(원숭이), 유(닭), 술(개), 해(돼지)의 12동물을 순서대로 배치한 동양의 시간 체계입니다.
          태어난 해에 따라 띠가 정해지며, 각 띠마다 고유한 성격과 특성이 있다고 알려져 있습니다.
        </p>
        <p className="text-xs text-gray-400">
          * 띠별 성격과 궁합은 전통적인 해석이며, 재미로 참고하시기 바랍니다.
        </p>
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
    </div>
  );
}
