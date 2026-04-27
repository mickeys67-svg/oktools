import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "온라인 도구 모음 - 시계, 타이머, 글자수 세기, 로또",
  description:
    "온라인 시계, 타이머, 스톱워치, 글자수 세기, 랜덤 번호 생성기, 로또 번호 추천 등 무료 유틸리티 도구를 바로 사용하세요.",
  keywords: ["온라인도구", "무료유틸리티", "온라인시계", "타이머", "스톱워치", "글자수세기", "로또번호추천", "랜덤번호생성기"],
  openGraph: {
    url: "/tools",
    title: "온라인 도구 모음 - 시계, 타이머, 글자수 세기, 로또",
    description:
      "온라인 시계, 타이머, 스톱워치, 글자수 세기, 랜덤 번호 생성기, 로또 번호 추천 등 무료 유틸리티 도구를 바로 사용하세요.",
  },
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  const category = getCategoryById("tools")!;
  const tools = getToolsByCategory("tools");

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
          <span className="text-xl font-bold">T</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>온라인 시계, 카운트다운 타이머, 스톱워치, 글자수 세기, 랜덤 번호 생성기, 로또 번호 추천, 유튜브 트랙리스트 생성기 등 일상에서 바로 쓸 수 있는 유틸리티 도구 모음입니다. 앱 설치 없이 브라우저에서 즉시 사용할 수 있으며, PC와 모바일 모두 최적화되어 있습니다.</p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-gray-100">자주 쓰는 7가지 유틸리티 한눈에</h2>
        <p className="mb-3"><strong>온라인 시계</strong>는 서울/뉴욕/런던/도쿄/시드니 등 도시별 현재 시각을 동시에 보여주며, 풀스크린 모드로 회의실 디스플레이나 라이브 방송 화면 노출에도 적합합니다. <strong>타이머</strong>는 라면 3분, 운동 인터벌, 뽀모도로 25분 등 자주 쓰는 시간 프리셋과 알림음을 제공해 별도 앱 없이도 충분합니다. <strong>스톱워치</strong>는 0.01초 단위 정밀도와 랩(lap) 기록을 지원해 운동 기록 측정에 유용합니다.</p>
        <p className="mb-3"><strong>글자수 세기</strong>는 자기소개서, 블로그, 트위터 글 작성 시 공백 포함/제외 글자 수와 단어/문장 수를 실시간으로 보여줍니다. <strong>랜덤 번호 생성기</strong>는 추첨, 팀 분배, 게임용 난수를 범위·개수·중복 여부까지 지정해 만들 수 있습니다. <strong>로또 번호 추천</strong>은 가중치/제외 번호/짝수·홀수 비율 등 6가지 알고리즘으로 1~45 번호 5세트를 즉석에서 뽑아줍니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">유튜브 트랙리스트 생성기 (NEW)</h3>
        <p>음악 영상의 각 곡 시작 시간을 자동/수동으로 표시해 유튜브 챕터 형식 타임스탬프를 만듭니다. Web Audio API로 무음 구간을 자동 감지하고, 드래그 앤 드롭으로 트랙 순서를 변경하며, YouTube 챕터/마크다운 표/일반 텍스트 3가지 형식으로 내보낼 수 있어 영상 업로더에게 시간을 크게 절약해줍니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">앱 설치 없이 즉시 사용</h3>
        <p>모든 유틸리티는 브라우저(Chrome·Safari·Edge·Firefox)에서 바로 동작하며, 가입·로그인이 필요 없습니다. 다크 모드를 지원하고, 모바일 화면에서도 큰 글씨와 터치 친화 UI로 사용 편의성을 높였습니다.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-utility dark:bg-blue-950">
              <span className="text-lg font-bold">⚙</span>
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
          "name": "유틸리티",
          "url": "https://www.oktools.co.kr/tools",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "온라인 시계", "url": "https://www.oktools.co.kr/tools/clock" },
              { "@type": "ListItem", "position": 2, "name": "타이머", "url": "https://www.oktools.co.kr/tools/timer" },
              { "@type": "ListItem", "position": 3, "name": "스톱워치", "url": "https://www.oktools.co.kr/tools/stopwatch" },
              { "@type": "ListItem", "position": 4, "name": "글자수 세기", "url": "https://www.oktools.co.kr/tools/character-count" },
              { "@type": "ListItem", "position": 5, "name": "랜덤 번호 생성기", "url": "https://www.oktools.co.kr/tools/random-number" },
              { "@type": "ListItem", "position": 6, "name": "로또 번호 추천", "url": "https://www.oktools.co.kr/tools/lotto" },
              { "@type": "ListItem", "position": 7, "name": "유튜브 트랙리스트 생성기", "url": "https://www.oktools.co.kr/tools/youtube-tracklist" }
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
            { "@type": "ListItem", "position": 2, "name": "유틸리티" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "온라인 타이머와 스톱워치는 어떻게 다른가요?", "acceptedAnswer": { "@type": "Answer", "text": "타이머는 정해진 시간이 지나면 알람이 울리는 카운트다운(역방향) 도구이고, 스톱워치는 0초부터 경과 시간을 측정하는 카운트업(정방향) 도구입니다. 라면을 끓이거나 운동 인터벌처럼 정해진 시간을 지킬 때는 타이머, 100m 달리기 기록처럼 걸린 시간을 측정할 때는 스톱워치를 사용합니다." } },
            { "@type": "Question", "name": "유튜브 트랙리스트 생성기는 어떻게 동작하나요?", "acceptedAnswer": { "@type": "Answer", "text": "음악 파일을 업로드하면 Web Audio API의 RMS 알고리즘으로 무음 구간을 자동 감지해 곡 경계를 찾고, 각 트랙의 시작 시간을 0:00, 3:42, 7:15 같은 유튜브 챕터 형식으로 만들어줍니다. 드래그로 순서 변경, 트랙 병합·분할·삭제, 마크다운 표/일반 텍스트로 내보내기를 모두 지원합니다." } },
            { "@type": "Question", "name": "글자수 세기는 자기소개서 작성에 정확한가요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 한글 1글자=1자, 공백 포함/제외 모두 표시합니다. 단어 수와 문장 수도 함께 보여줘 자기소개서, 블로그, 트위터(280자), 인스타 캡션 등 글자 제한이 있는 글에 정확한 카운트를 제공합니다." } },
            { "@type": "Question", "name": "로또 번호 추천은 정말 당첨 확률이 높아지나요?", "acceptedAnswer": { "@type": "Answer", "text": "로또는 본질적으로 무작위이므로 통계적 확률을 높일 수는 없습니다. 다만 자주 나온 번호/안 나온 번호 회피, 짝홀수 균형, 연속 번호 제한 같은 6가지 알고리즘으로 다양한 번호 조합을 제안해 직접 고민하는 시간을 줄여줍니다. 재미와 편의 목적의 도구입니다." } },
            { "@type": "Question", "name": "온라인 시계를 회의실 화면이나 라이브 방송에 띄울 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 풀스크린 모드를 지원해 회의실 디스플레이, 행사장 안내 화면, 라이브 방송의 시계 위젯으로 활용할 수 있습니다. 12/24시간 토글, 다크 모드, 도시별 시간 동시 표시 기능을 제공합니다." } }
          ]
        }) }}
      />
    </div>
  );
}
