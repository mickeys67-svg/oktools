import type { Metadata } from "next";
import Link from "next/link";
import YoutubeTracklist from "@/components/tools/YoutubeTracklist";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "YouTube 트랙리스트 생성기 - 타임스탬프 자동 계산",
  description: "음악 폴더를 선택하면 파일명과 재생시간을 자동으로 읽어 유튜브 설명란용 트랙리스트(챕터)를 생성합니다. 파일 업로드 없이 브라우저에서 바로 분석.",
  keywords: ["유튜브 트랙리스트", "YouTube tracklist", "타임스탬프 생성기", "유튜브 챕터", "유튜브 설명란", "트랙리스트 만들기", "음악 타임라인"],
  openGraph: {
    url: "/tools/youtube-tracklist",
    title: "YouTube 트랙리스트 생성기 - 타임스탬프 자동 계산",
    description: "음악 폴더를 선택하면 파일명과 재생시간을 자동으로 읽어 유튜브 설명란용 트랙리스트(챕터)를 생성합니다.",
  },
  alternates: {
    canonical: "/tools/youtube-tracklist",
  },
};

export default function YoutubeTracklistPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">YouTube 트랙리스트 생성기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">YouTube 트랙리스트 생성기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">음악 폴더 또는 단일 파일을 선택하면 트랙리스트를 자동으로 생성합니다. 파일은 업로드되지 않습니다.</p>
      <YoutubeTracklist />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">사용 방법</h2>
          <p>
            세 가지 모드를 지원합니다. <strong>폴더 분석</strong>은 여러 음악 파일이 들어있는 폴더를 선택하면
            파일명에서 곡 제목을, 메타데이터에서 재생시간을 자동으로 읽어 타임스탬프를 계산합니다.
            <strong>단일 파일 분석</strong>은 한 파일에 여러 곡이 이어진 경우 Web Audio API로 무음 구간을 자동 감지해
            트랙을 나누고, 파형(Waveform) 시각화로 분석 결과를 보여줍니다.
            <strong>텍스트 가져오기</strong>는 기존 타임스탬프를 붙여넣어 편집할 수 있습니다.
            생성된 트랙리스트를 복사해 유튜브 영상 설명란에 붙여넣으면 자동으로 챕터가 만들어집니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">유튜브 챕터 조건</h3>
          <p>
            유튜브 자동 챕터가 동작하려면 첫 타임스탬프가 반드시 00:00이어야 하고, 챕터는 최소 3개 이상이어야 합니다.
            각 챕터의 최소 길이는 10초입니다. 이 도구는 이 조건을 자동으로 맞춰줍니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">지원 파일 형식</h3>
          <p>
            MP3, WAV, FLAC, AAC, OGG, M4A, OPUS 등 주요 오디오 형식과 MP4, WebM, MKV 등 영상 형식을 지원합니다.
            모든 분석은 브라우저 내에서 이루어지며, 파일이 서버로 전송되지 않아 안전합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">고급 편집 기능</h3>
          <p>
            드래그 앤 드롭으로 트랙 순서를 자유롭게 변경하고, 트랙 병합(⊕)과 분할(✂) 기능으로 세밀하게 조정할 수 있습니다.
            YouTube, Markdown, 텍스트 등 다양한 출력 형식을 지원하며, 번호 자동 매기기와 커스텀 구분자도 선택 가능합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/timer" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타이머
          </Link>
          <Link href="/tools/stopwatch" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            스톱워치
          </Link>
          <Link href="/tools/character-count" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            글자수 세기
          </Link>
          <Link href="/tools/clock" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            온라인 시계
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
                name: "유튜브 챕터가 자동으로 만들어지려면 어떤 조건이 필요한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "영상 설명란에 타임스탬프 목록을 넣으면 유튜브가 자동으로 챕터를 생성합니다. 첫 타임스탬프가 00:00이어야 하고, 최소 3개 이상의 챕터가 필요하며, 각 챕터는 10초 이상이어야 합니다.",
                },
              },
              {
                "@type": "Question",
                name: "파일이 서버로 업로드되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "아닙니다. 모든 파일 분석은 브라우저 내에서 이루어집니다. 파일이 서버로 전송되지 않으므로 안전하게 사용할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "어떤 파일 형식을 지원하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MP3, WAV, FLAC, AAC, OGG, M4A, OPUS 등 주요 오디오 형식과 MP4, WebM, MKV 등 영상 형식을 지원합니다. 브라우저가 재생할 수 있는 형식이면 모두 분석 가능합니다.",
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
          "name": "YouTube 트랙리스트 생성기",
          "description": "유튜브 영상 설명란용 트랙리스트 타임스탬프 자동 생성",
          "url": "https://www.oktools.co.kr/tools/youtube-tracklist",
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
            { "@type": "ListItem", "position": 3, "name": "YouTube 트랙리스트 생성기" }
          ]
        }) }}
      />
    </div>
  );
}
