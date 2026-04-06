import type { Metadata } from "next";
import Link from "next/link";
import TarotApp from "@/components/fortune/TarotApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "무료 타로카드 - 원카드 쓰리카드 온라인 타로 리딩",
  description:
    "무료 온라인 타로카드 리딩. 메이저 아르카나 22장으로 원카드, 쓰리카드 스프레드를 체험하고 오늘의 타로 운세를 확인하세요.",
  keywords: ["타로카드", "무료타로", "온라인타로", "타로점", "원카드타로", "쓰리카드타로", "오늘의타로", "타로운세", "메이저아르카나", "타로카드의미", "연애타로"],
  openGraph: {
    url: "/fortune/tarot",
    title: "무료 타로카드 - 원카드 쓰리카드 온라인 타로 리딩",
    description:
      "무료 온라인 타로카드 리딩. 메이저 아르카나 22장으로 원카드, 쓰리카드 스프레드를 체험하고 오늘의 타로 운세를 확인하세요.",
  },
  alternates: {
    canonical: "/fortune/tarot",
  },
};

export default function TarotPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">타로카드</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        타로카드 리딩
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        마음을 가다듬고 카드를 선택하세요. 메이저 아르카나 22장이 메시지를 전합니다.
      </p>

      <TarotApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">타로카드 리딩 가이드</h2>
          <p>
            타로카드는 78장의 카드로 구성된 점술 도구로, 메이저 아르카나 22장과 마이너 아르카나 56장으로 이루어져 있습니다.
            이 도구에서는 가장 상징적인 메이저 아르카나 22장을 사용하며, 원카드(1장)와 쓰리카드(3장) 스프레드를 지원합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">스프레드 방식</h3>
          <p>
            원카드는 한 장의 카드로 오늘의 메시지를 전달받는 가장 간단한 방식입니다.
            쓰리카드는 과거-현재-미래 또는 상황-원인-조언 등 세 가지 관점에서 해석합니다.
            카드는 정방향과 역방향에 따라 의미가 달라지며, 역방향은 해당 에너지가 차단되거나 반대로 작용함을 나타냅니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">타로 리딩 팁</h3>
          <p>
            카드를 뽑기 전에 마음을 가다듬고 질문을 명확히 떠올리면 더 의미 있는 해석을 얻을 수 있습니다.
            타로는 정해진 운명을 알려주는 것이 아니라, 현재 상황에 대한 통찰과 방향성을 제시하는 도구로 활용하는 것이 좋습니다.
            중요한 결정은 타로에 의존하지 말고 전문가와 상담하시기 바랍니다.
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
          <Link href="/fortune/blood-type" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            혈액형 궁합
          </Link>
          <Link href="/fortune/mbti" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            MBTI 궁합
          </Link>
          <Link href="/fortune/zodiac-animal" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            띠별 운세
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
                name: "타로카드 원카드와 쓰리카드의 차이는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "원카드는 한 장의 카드로 오늘의 핵심 메시지를 빠르게 확인하는 방식이고, 쓰리카드는 세 장을 뽑아 과거-현재-미래 또는 상황-원인-조언의 세 가지 관점에서 해석하는 방식입니다. 초보자에게는 원카드, 구체적인 상황 분석에는 쓰리카드가 적합합니다.",
                },
              },
              {
                "@type": "Question",
                name: "타로카드 역방향(리버스)은 어떤 의미인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "역방향 카드는 해당 카드의 에너지가 차단되거나 왜곡된 상태를 나타냅니다. 예를 들어 정방향의 '태양' 카드가 성공과 기쁨을 의미한다면, 역방향은 자신감 부족이나 지연을 암시할 수 있습니다. 반드시 부정적인 것은 아니며 내면을 돌아보라는 메시지로 해석합니다.",
                },
              },
              {
                "@type": "Question",
                name: "메이저 아르카나 22장에는 어떤 카드가 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "메이저 아르카나는 0번 바보(The Fool)부터 21번 세계(The World)까지 총 22장으로 구성됩니다. 마법사, 여사제, 여황제, 황제, 교황, 연인, 전차, 힘, 은둔자, 운명의 수레바퀴, 정의, 매달린 남자, 죽음, 절제, 악마, 탑, 별, 달, 태양, 심판 등이 포함됩니다.",
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
          "@type": "WebApplication",
          "name": "타로카드",
          "description": "무료 온라인 타로카드 리딩",
          "url": "https://www.oktools.co.kr/fortune/tarot",
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
            { "@type": "ListItem", "position": 3, "name": "타로카드" }
          ]
        }) }}
      />
    </div>
  );
}
