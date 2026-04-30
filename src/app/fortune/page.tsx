import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "무료운세 모음 - 타로, 토정비결, MBTI궁합, 꿈해몽, 3D 사다리게임",
  description:
    "무료 타로카드, 토정비결, MBTI 궁합, 별자리 운세, 혈액형 궁합, 이름 궁합, 꿈해몽, 3D 사다리타기 게임까지 한곳에서 무료로 즐겨보세요.",
  keywords: ["무료운세", "타로카드", "토정비결", "MBTI궁합", "꿈해몽", "별자리운세", "혈액형궁합", "이름궁합", "띠계산기", "오늘의운세", "사다리타기", "사다리게임"],
  openGraph: {
    url: "/fortune",
    title: "무료운세 모음 - 타로, 토정비결, MBTI궁합, 꿈해몽, 3D 사다리게임",
    description:
      "무료 타로카드, 토정비결, MBTI 궁합, 별자리 운세, 혈액형 궁합, 이름 궁합, 꿈해몽, 3D 사다리타기 게임까지 한곳에서 무료로 즐겨보세요.",
  },
  alternates: {
    canonical: "/fortune",
  },
};

export default function FortunePage() {
  const category = getCategoryById("fortune")!;
  const tools = getToolsByCategory("fortune");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>

      <div className="mb-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.colorHex }}
        >
          <span className="text-xl font-bold">✦</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>타로카드, 토정비결, 별자리 운세, MBTI 궁합, 꿈해몽, 혈액형 궁합, 이름 궁합, 띠 계산기까지 다양한 운세와 궁합 콘텐츠를 무료로 즐기세요. 재미로 보는 오늘의 운세부터 전통 토정비결까지, 회원가입 없이 바로 결과를 확인할 수 있습니다.</p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-gray-100">8가지 운세·궁합 한눈에 보기</h2>
        <p className="mb-3"><strong>타로카드</strong>는 78장 메이저·마이너 아르카나 중 무작위로 카드를 뽑아 오늘의 메시지·연애·직업·과거-현재-미래 등 다양한 스프레드를 즉석에서 풀이해줍니다. <strong>토정비결</strong>은 조선시대 이지함 선생이 지은 전통 신년 운세서로, 음력 생년월일을 입력하면 144개 괘 중 하나를 뽑아 한 해의 흐름을 12개월별로 보여줍니다.</p>
        <p className="mb-3"><strong>별자리 운세</strong>는 양자리부터 물고기자리까지 12궁의 일일 운세, 성격, 사랑/일/재물 운, 행운의 색·숫자를 제공합니다. <strong>MBTI 궁합</strong>은 16가지 유형 간 256개 조합의 연인·친구·직장 상성을 5단계로 평가합니다. <strong>꿈해몽</strong>은 1,500개 이상의 꿈 키워드 사전에서 동물·사물·상황별 길몽·흉몽 해석을 검색해 보여줍니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">궁합 도구 3종</h3>
        <p className="mb-3"><strong>혈액형 궁합</strong>은 A·B·O·AB 4가지 혈액형 조합 16가지의 성격 매칭과 갈등 포인트를 알려주고, <strong>이름 궁합</strong>은 두 사람의 이름 자모를 획수로 환산해 0~100점 궁합 점수를 계산합니다. <strong>띠 계산기</strong>는 양력/음력 생년월일로 12지지 동물띠와 60갑자, 본인의 띠 동물 성격을 즉시 확인할 수 있습니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">재미와 전통이 함께</h3>
        <p>모든 운세는 가입·결제 없이 무료로 이용할 수 있습니다. 타로·MBTI 궁합은 심리 콘텐츠로, 토정비결·꿈해몽·띠는 한국 전통 운세 문화로서 오랜 세월 사랑받아 온 재미 콘텐츠입니다. 결과는 가벼운 마음으로 즐기시고, 친구·가족과 결과 화면을 공유해 보세요.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-fortune dark:bg-violet-950">
              <span className="text-lg font-bold">✦</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
            </div>
            <svg
              className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "운세/재미",
          "url": "https://www.oktools.co.kr/fortune",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "타로카드", "url": "https://www.oktools.co.kr/fortune/tarot" },
              { "@type": "ListItem", "position": 2, "name": "토정비결", "url": "https://www.oktools.co.kr/fortune/tojeong" },
              { "@type": "ListItem", "position": 3, "name": "별자리 운세", "url": "https://www.oktools.co.kr/fortune/zodiac" },
              { "@type": "ListItem", "position": 4, "name": "MBTI 궁합", "url": "https://www.oktools.co.kr/fortune/mbti" },
              { "@type": "ListItem", "position": 5, "name": "꿈해몽", "url": "https://www.oktools.co.kr/fortune/dream" },
              { "@type": "ListItem", "position": 6, "name": "혈액형 궁합", "url": "https://www.oktools.co.kr/fortune/blood-type" },
              { "@type": "ListItem", "position": 7, "name": "이름 궁합", "url": "https://www.oktools.co.kr/fortune/name-match" },
              { "@type": "ListItem", "position": 8, "name": "띠 계산기", "url": "https://www.oktools.co.kr/fortune/zodiac-animal" },
              { "@type": "ListItem", "position": 9, "name": "3D 사다리게임", "url": "https://www.oktools.co.kr/fortune/ladder-game" }
            ]
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "운세·재미" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "타로카드와 토정비결은 어떻게 다른가요?", "acceptedAnswer": { "@type": "Answer", "text": "타로카드는 78장의 카드 중 무작위로 뽑아 현재 상황·연애·미래 등 구체적인 질문에 즉답하는 서양 점술이고, 토정비결은 음력 생년월일을 기반으로 144개 괘 중 하나를 도출해 1년 전체 운세를 12개월별로 보여주는 한국 전통 신년 운세입니다. 즉답형은 타로, 연간 운세는 토정비결을 추천합니다." } },
            { "@type": "Question", "name": "MBTI 궁합과 혈액형 궁합 중 어떤 게 더 정확한가요?", "acceptedAnswer": { "@type": "Answer", "text": "둘 다 통계적·심리학적 근거가 약한 재미 콘텐츠지만, MBTI 궁합은 16가지 성격 유형의 인지·의사결정 차이를 기반으로 한 256개 조합 분석으로 비교적 구체적입니다. 혈액형 궁합은 4가지 형 16개 조합으로 단순하지만 직관적이라 친구·연인과의 가벼운 대화 주제로 인기가 많습니다." } },
            { "@type": "Question", "name": "꿈해몽 검색어는 어떻게 입력하나요?", "acceptedAnswer": { "@type": "Answer", "text": "꿈에 등장한 동물·사물·상황의 핵심 키워드를 입력하면 됩니다. 예: '뱀', '돈', '죽는 꿈', '시험', '이빨 빠지는 꿈' 등. 1,500개 이상의 키워드 사전에서 길몽·흉몽 해석과 관련 키워드를 함께 보여줍니다." } },
            { "@type": "Question", "name": "별자리 운세는 양력 기준인가요 음력 기준인가요?", "acceptedAnswer": { "@type": "Answer", "text": "별자리는 태양이 12궁을 지나는 양력 날짜 기준입니다. 예를 들어 1월 20일~2월 18일은 물병자리, 2월 19일~3월 20일은 물고기자리입니다. 양력 생년월일을 입력하면 자동으로 별자리가 판별됩니다." } },
            { "@type": "Question", "name": "운세 결과를 공유하거나 캡처해도 되나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 모든 결과 화면은 자유롭게 캡처·공유할 수 있습니다. 친구·연인·가족과 결과를 비교해보거나 SNS에 인증샷으로 올리는 분이 많습니다. 결과는 재미용 콘텐츠이며 중대한 결정의 근거로 사용하지는 마세요." } }
          ]
        }) }}
      />
    </div>
  );
}
