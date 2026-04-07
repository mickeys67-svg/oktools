import type { Metadata } from "next";
import Link from "next/link";
import YoutubeTracklist from "@/components/tools/YoutubeTracklist";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "YouTube 트랙리스트 생성기 - 타임스탬프 자동 계산 | 유튜브 챕터 만들기",
  description:
    "음악 폴더를 선택하면 파일명과 재생시간을 자동으로 읽어 유튜브 설명란용 트랙리스트(챕터)를 생성합니다. 무음 구간 자동 감지, 파형 시각화, 드래그앤드롭 편집. 파일 업로드 없이 브라우저에서 바로 분석.",
  keywords: [
    "유튜브 트랙리스트",
    "YouTube tracklist",
    "타임스탬프 생성기",
    "유튜브 챕터",
    "유튜브 챕터 만들기",
    "유튜브 설명란",
    "트랙리스트 만들기",
    "음악 타임라인",
    "YouTube timestamp generator",
    "YouTube chapter maker",
    "유튜브 타임스탬프",
    "무음 구간 감지",
    "유튜브 설명란 타임스탬프",
    "음악 파일 분석",
  ],
  openGraph: {
    url: "/tools/youtube-tracklist",
    title: "YouTube 트랙리스트 생성기 - 타임스탬프 자동 계산 | 유튜브 챕터",
    description:
      "음악 폴더 선택만으로 유튜브 챕터용 타임스탬프를 자동 생성합니다. 무음 구간 감지, 파형 시각화, 다양한 출력 형식 지원.",
    type: "website",
    siteName: "오케이툴즈",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube 트랙리스트 생성기 - 타임스탬프 자동 계산",
    description:
      "음악 폴더 선택만으로 유튜브 챕터용 타임스탬프를 자동 생성합니다. 파일 업로드 없이 브라우저에서 바로 분석.",
  },
  alternates: {
    canonical: "/tools/youtube-tracklist",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function YoutubeTracklistPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      {/* 브레드크럼 */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">YouTube 트랙리스트 생성기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        YouTube 트랙리스트 생성기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        음악 폴더 또는 단일 파일을 선택하면 유튜브 설명란에 바로 붙여넣을 수 있는 트랙리스트를 자동으로 생성합니다.
        파일은 업로드되지 않으며, 모든 분석은 브라우저에서 처리됩니다.
      </p>

      <YoutubeTracklist />
      <ResultAd />

      {/* ── SEO 본문 콘텐츠 ── */}
      <section className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {/* 사용 방법 */}
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            YouTube 트랙리스트 생성기 사용 방법
          </h2>
          <p className="mb-3">
            이 도구는 세 가지 모드를 제공합니다. 각 모드는 서로 다른 상황에 최적화되어 있어
            어떤 형태의 음악 파일이든 빠르게 트랙리스트를 만들 수 있습니다.
          </p>
          <ol className="ml-5 list-decimal space-y-2">
            <li>
              <strong className="text-gray-800 dark:text-gray-200">폴더 분석 모드</strong> — 여러 음악 파일이
              들어있는 폴더를 선택하면 파일명에서 곡 제목을, 메타데이터에서 재생시간을 자동으로 읽어
              누적 타임스탬프를 계산합니다. DJ 믹스, 컴필레이션 앨범 등 여러 곡을 하나의 영상으로 올릴 때 유용합니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">단일 파일 분석 모드</strong> — 한 파일에 여러 곡이
              이어져 있는 경우 Web Audio API로 파형을 분석해 무음 구간을 자동 감지합니다. 감도를 높음/보통/낮음으로
              조절할 수 있으며, 분석 결과는 파형(Waveform) 그래프로 시각적으로 확인할 수 있습니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">텍스트 가져오기 모드</strong> — 기존에 작성해둔
              타임스탬프 텍스트(&ldquo;00:00 - 곡 제목&rdquo; 형식)를 붙여넣으면 자동으로 파싱하여 편집할 수 있습니다.
              다른 사람의 트랙리스트를 참고하거나 기존 형식을 수정할 때 편리합니다.
            </li>
          </ol>
        </div>

        {/* 유튜브 챕터 가이드 */}
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            유튜브 챕터(타임스탬프) 설정 가이드
          </h2>
          <p className="mb-3">
            유튜브 영상 설명란에 타임스탬프 목록을 넣으면 시청자가 원하는 부분으로 바로 이동할 수 있는
            <strong> 챕터 기능</strong>이 자동으로 활성화됩니다. 챕터가 적용되면 재생 바에 구간이 나뉘어
            표시되고, 검색 결과에서도 챕터별로 노출되어 SEO에 큰 도움이 됩니다.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">유튜브 챕터 필수 조건</h3>
            <ul className="ml-4 list-disc space-y-1">
              <li>첫 번째 타임스탬프가 반드시 <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">00:00</code>이어야 합니다</li>
              <li>최소 <strong>3개 이상</strong>의 타임스탬프가 필요합니다</li>
              <li>각 챕터의 최소 길이는 <strong>10초</strong>입니다</li>
              <li>타임스탬프 형식: <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">0:00</code>, <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">00:00</code>, <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">0:00:00</code> 모두 인식</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              이 도구는 위 조건을 자동으로 맞춰주므로 생성된 결과를 그대로 복사·붙여넣기하면 됩니다.
            </p>
          </div>
        </div>

        {/* 지원 파일 형식 */}
        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">지원하는 음악·영상 파일 형식</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 pr-4 font-semibold text-gray-800 dark:text-gray-200">분류</th>
                  <th className="py-2 font-semibold text-gray-800 dark:text-gray-200">지원 형식</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4 font-medium text-gray-700 dark:text-gray-300">오디오</td>
                  <td>MP3, WAV, FLAC, AAC, OGG, M4A, WMA, AIFF, ALAC, OPUS</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-gray-700 dark:text-gray-300">영상</td>
                  <td>MP4, WebM, MKV, AVI, MOV</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            모든 분석은 브라우저 내에서 이루어지며, 파일이 서버로 전송되지 않아 개인정보 걱정 없이 안전하게 사용할 수 있습니다.
            브라우저가 재생할 수 있는 형식이라면 분석이 가능합니다.
          </p>
        </div>

        {/* 고급 편집 기능 */}
        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">고급 편집 기능</h3>
          <ul className="ml-4 list-disc space-y-1">
            <li><strong>드래그 앤 드롭</strong> — 마우스로 트랙을 잡아 원하는 위치로 이동</li>
            <li><strong>트랙 병합(⊕)</strong> — 인접한 두 트랙을 하나로 합치기</li>
            <li><strong>트랙 분할(✂)</strong> — 하나의 트랙을 반으로 나누기</li>
            <li><strong>제목 직접 편집</strong> — 각 트랙의 곡명을 클릭해서 수정</li>
            <li><strong>다양한 출력 형식</strong> — YouTube(기본), Markdown 테이블, 텍스트</li>
            <li><strong>번호 매기기</strong> — 1. 곡명 형식으로 자동 번호 표시</li>
            <li><strong>구분자 선택</strong> — 하이픈(-), 파이프(|), 가운뎃점(·), 마침표(.) 중 선택</li>
          </ul>
        </div>

        {/* 활용 팁 */}
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            유튜브 트랙리스트 활용 팁
          </h2>
          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-3 dark:border-blue-600 dark:bg-blue-900/20">
              <h4 className="mb-1 text-xs font-bold text-blue-800 dark:text-blue-300">🎵 DJ 믹스 / 라이브 공연</h4>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                단일 파일 모드로 긴 녹음 파일을 분석하면 곡 사이의 무음 구간을 자동으로 찾아 트랙을 나눠줍니다.
                감도를 &ldquo;높음&rdquo;으로 설정하면 짧은 무음도 감지합니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green-400 bg-green-50 p-3 dark:border-green-600 dark:bg-green-900/20">
              <h4 className="mb-1 text-xs font-bold text-green-800 dark:text-green-300">📀 컴필레이션 앨범</h4>
              <p className="text-xs text-green-700 dark:text-green-400">
                폴더 분석 모드로 앨범 폴더를 선택하면 파일명 순서대로 자동 정렬됩니다.
                &ldquo;01 - 곡명.mp3&rdquo; 형식이면 번호가 자동 제거되어 깔끔한 제목이 생성됩니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-400 bg-purple-50 p-3 dark:border-purple-600 dark:bg-purple-900/20">
              <h4 className="mb-1 text-xs font-bold text-purple-800 dark:text-purple-300">📋 기존 트랙리스트 수정</h4>
              <p className="text-xs text-purple-700 dark:text-purple-400">
                다른 영상의 트랙리스트를 복사해 텍스트 가져오기 모드에 붙여넣으면 곡명 편집, 순서 변경,
                구분자 스타일 변경 등을 손쉽게 할 수 있습니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-orange-400 bg-orange-50 p-3 dark:border-orange-600 dark:bg-orange-900/20">
              <h4 className="mb-1 text-xs font-bold text-orange-800 dark:text-orange-300">📈 YouTube SEO 효과</h4>
              <p className="text-xs text-orange-700 dark:text-orange-400">
                챕터가 있는 영상은 Google 검색 결과에서 &ldquo;Key Moments&rdquo;로 표시되어 클릭률이 크게 높아집니다.
                시청 지속 시간도 늘어나 알고리즘 추천에도 유리합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 무음 감지 기술 설명 */}
        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">무음 구간 감지 원리</h3>
          <p className="mb-2">
            단일 파일 분석 모드에서 사용하는 무음 감지 알고리즘은 <strong>RMS(Root Mean Square) 기반 분석</strong>을 사용합니다.
            오디오 파형을 50ms 단위 윈도우로 나누어 각 구간의 에너지(볼륨)를 계산하고, 설정된 임곗값보다
            낮은 에너지가 일정 시간 이상 지속되면 해당 구간을 무음(곡 사이 경계)으로 판정합니다.
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li><strong>높음 감도</strong> — 임곗값 0.005, 최소 무음 0.3초 (클래식, 어쿠스틱 음악에 적합)</li>
            <li><strong>보통 감도</strong> — 임곗값 0.01, 최소 무음 0.8초 (일반적인 팝/록 음악)</li>
            <li><strong>낮음 감도</strong> — 임곗값 0.02, 최소 무음 1.5초 (EDM, 라이브 등 무음이 짧은 음악)</li>
          </ul>
        </div>

        {/* 다른 도구와 비교 */}
        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">오케이툴즈 트랙리스트 생성기의 장점</h3>
          <ul className="ml-4 list-disc space-y-1">
            <li>파일 업로드 없이 <strong>100% 브라우저 처리</strong> — 개인정보 안전</li>
            <li>폴더 통째 분석으로 <strong>수십 곡도 한 번에</strong> 처리</li>
            <li>Web Audio API 기반 <strong>파형 분석 + 시각화</strong></li>
            <li>드래그앤드롭, 병합, 분할 등 <strong>직관적 편집</strong></li>
            <li>YouTube / Markdown / 텍스트 <strong>다중 출력 형식</strong></li>
            <li>PC, 태블릿, 모바일 <strong>반응형 디자인</strong></li>
            <li><strong>완전 무료</strong>, 로그인 불필요</li>
          </ul>
        </div>
      </section>

      <InArticleAd />

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { href: "/tools/timer", label: "타이머" },
            { href: "/tools/stopwatch", label: "스톱워치" },
            { href: "/tools/character-count", label: "글자수 세기" },
            { href: "/tools/clock", label: "온라인 시계" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── JSON-LD: FAQPage (7개 질문) ── */}
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
                  text: "아닙니다. 모든 파일 분석은 브라우저 내 Web Audio API와 File API를 이용해 처리됩니다. 파일이 서버로 전송되지 않으므로 안전하게 사용할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "어떤 파일 형식을 지원하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MP3, WAV, FLAC, AAC, OGG, M4A, WMA, AIFF, ALAC, OPUS 등 주요 오디오 형식과 MP4, WebM, MKV, AVI, MOV 등 영상 형식을 지원합니다. 브라우저가 재생할 수 있는 형식이면 모두 분석 가능합니다.",
                },
              },
              {
                "@type": "Question",
                name: "한 파일에 여러 곡이 있으면 어떻게 나누나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "단일 파일 분석 모드에서 Web Audio API로 오디오 파형을 분석하여 무음 구간을 자동 감지합니다. RMS(Root Mean Square) 알고리즘으로 곡 사이의 경계를 찾아 자동으로 트랙을 분할합니다. 감도를 높음/보통/낮음으로 조절할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "유튜브 챕터를 넣으면 어떤 효과가 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "챕터가 있는 영상은 재생 바에 구간이 나뉘어 표시되고, 시청자가 원하는 곡으로 바로 이동할 수 있습니다. Google 검색에서 'Key Moments'로 표시되어 클릭률이 높아지고, 시청 지속 시간 증가로 알고리즘 추천에도 유리합니다.",
                },
              },
              {
                "@type": "Question",
                name: "트랙 순서를 변경하거나 편집할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "네. 드래그 앤 드롭으로 트랙 순서를 변경하고, 곡명을 직접 수정할 수 있습니다. 또한 인접 트랙 병합(⊕), 트랙 분할(✂), 개별 삭제 기능도 제공합니다. 구분자 스타일(하이픈, 파이프, 가운뎃점)과 출력 형식(YouTube, Markdown, 텍스트)도 선택 가능합니다.",
                },
              },
              {
                "@type": "Question",
                name: "모바일에서도 사용할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "네. 반응형 디자인으로 PC, 태블릿, 스마트폰 모두에서 사용할 수 있습니다. 다만 폴더 선택 기능(webkitdirectory)은 일부 모바일 브라우저에서 지원하지 않을 수 있으며, 이 경우 텍스트 가져오기 모드를 사용하시면 됩니다.",
                },
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD: HowTo ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "유튜브 트랙리스트(챕터) 만드는 방법",
            description:
              "음악 파일로 유튜브 영상 설명란에 넣을 타임스탬프 트랙리스트를 자동으로 만드는 방법입니다.",
            totalTime: "PT2M",
            tool: [
              { "@type": "HowToTool", name: "웹 브라우저 (Chrome, Edge, Firefox 등)" },
              { "@type": "HowToTool", name: "음악 또는 영상 파일" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "모드 선택",
                text: "폴더 분석, 단일 파일 분석, 텍스트 가져오기 중 원하는 모드를 선택합니다.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "파일 선택 또는 텍스트 입력",
                text: "폴더 분석 모드에서는 음악 폴더를, 단일 파일 모드에서는 음악 파일을 선택합니다. 텍스트 가져오기 모드에서는 기존 타임스탬프를 붙여넣습니다.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "트랙 편집",
                text: "자동 생성된 트랙 목록에서 곡명 수정, 순서 변경(드래그앤드롭), 트랙 병합/분할 등 편집을 합니다.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "출력 옵션 설정",
                text: "헤더, 구분자, 출력 형식(YouTube/Markdown/텍스트), 번호 표시 여부를 설정합니다.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "복사 및 붙여넣기",
                text: "미리보기에서 '복사' 버튼을 클릭하고, 유튜브 영상 설명란에 붙여넣으면 자동으로 챕터가 만들어집니다.",
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "YouTube 트랙리스트 생성기",
            alternateName: "유튜브 챕터 만들기",
            description:
              "음악 폴더를 선택하면 유튜브 설명란용 트랙리스트 타임스탬프를 자동 생성합니다. 무음 구간 감지, 파형 시각화, 드래그앤드롭 편집 지원.",
            url: "https://www.oktools.co.kr/tools/youtube-tracklist",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript, Web Audio API",
            softwareVersion: "1.0",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
            inLanguage: "ko-KR",
            featureList: [
              "폴더 분석 - 여러 파일 일괄 처리",
              "단일 파일 무음 구간 자동 감지",
              "파형(Waveform) 시각화",
              "드래그 앤 드롭 순서 변경",
              "트랙 병합 및 분할",
              "YouTube, Markdown, 텍스트 출력",
              "100% 브라우저 처리 (파일 업로드 없음)",
            ],
            creator: {
              "@type": "Organization",
              name: "오케이툴즈",
              url: "https://www.oktools.co.kr",
            },
          }),
        }}
      />

      {/* ── JSON-LD: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈", item: "https://www.oktools.co.kr" },
              { "@type": "ListItem", position: 2, name: "유틸리티", item: "https://www.oktools.co.kr/tools" },
              { "@type": "ListItem", position: 3, name: "YouTube 트랙리스트 생성기" },
            ],
          }),
        }}
      />
    </div>
  );
}
