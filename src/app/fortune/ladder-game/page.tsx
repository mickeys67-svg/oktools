import type { Metadata } from "next";
import Link from "next/link";
import LadderGame from "@/components/tools/LadderGame";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

const URL = "https://www.oktools.co.kr/fortune/ladder-game";

export const metadata: Metadata = {
  title: "3D 사다리게임 — 동물 캐릭터로 즐기는 화려한 사다리타기",
  description:
    "원숭이·다람쥐·토끼·여우·호랑이·판다 6종 동물이 화려한 3D 사다리를 내려가는 무료 사다리타기 게임. 참여자 자유 추가, 가다가 도망가는 깜짝 이벤트까지 — 회식 메뉴, 청소 당번, 한턱 정하기에 딱.",
  keywords: [
    // 핵심 검색어
    "사다리타기",
    "사다리게임",
    "사다리 추첨",
    "온라인 사다리타기",
    "무료 사다리타기",
    "사다리타기 사이트",
    "사다리 만들기",
    "랜덤 뽑기",
    // 시나리오
    "회식 메뉴 정하기",
    "점심메뉴 추첨",
    "청소 당번 정하기",
    "한턱 정하기",
    "음료 내기",
    "팀원 역할 분배",
    "당첨자 뽑기",
    // 동물·재미
    "동물 사다리타기",
    "원숭이 사다리",
    "3D 사다리게임",
    "화려한 사다리타기",
    "도망 사다리",
    // 롱테일
    "사다리 게임 만드는 사이트",
    "친구랑 사다리타기",
    "사무실 사다리타기",
    // 영문
    "online ladder game",
    "Korean ladder game",
    "ghost leg game",
    "amidakuji online",
  ],
  openGraph: {
    url: "/fortune/ladder-game",
    title: "3D 사다리게임 — 동물 캐릭터로 즐기는 화려한 사다리타기",
    description:
      "6종 동물이 화려한 3D 사다리를 내려갑니다. 가다가 옆으로 도망가는 깜짝 이벤트까지 — 회식·청소·한턱 정하기에 딱.",
    type: "website",
    siteName: "오케이툴즈",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D 사다리게임 — 동물 캐릭터로 즐기는 화려한 사다리타기",
    description:
      "원숭이·다람쥐 등 6종 동물이 3D 사다리를 내려가는 무료 게임. 도망 이벤트·결과 공유 등 재미 요소 가득.",
  },
  alternates: { canonical: "/fortune/ladder-game" },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function LadderGamePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">
          운세/재미
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">3D 사다리게임</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        3D 사다리게임 · 동물 사다리타기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        <strong className="text-gray-700 dark:text-gray-300">
          원숭이·다람쥐·토끼·여우·호랑이·판다
        </strong>{" "}
        6종 동물이 화려한 3D 사다리를 내려갑니다. 가다가 옆 줄로{" "}
        <strong className="text-gray-700 dark:text-gray-300">도망가는</strong>{" "}
        깜짝 이벤트까지 — 회식 메뉴, 청소 당번, 한턱 정하기를 가장 재미있게
        고르는 무료 사다리타기 게임입니다.
      </p>

      <LadderGame />
      <ResultAd />

      {/* ── SEO 본문 ─────────────────────────────────────────────── */}
      <section className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            사다리타기 게임 — 가장 재미있게 정하는 법
          </h2>
          <p className="mb-3">
            사다리타기(다른 말로 사다리게임, ghost leg, amidakuji)는 친구·동료끼리
            메뉴·당번·당첨자를 정할 때 가장 자주 쓰는 추첨 방식입니다. 오케이툴즈
            3D 사다리게임은{" "}
            <strong>
              화려한 3D 보드 + 동물 캐릭터 + 가다가 도망가는 깜짝 이벤트
            </strong>
            까지 더해, 단순한 사다리 그리기보다 훨씬 재미있게 결과를 뽑을 수
            있습니다.
          </p>
          <ol className="ml-5 list-decimal space-y-2">
            <li>
              <strong className="text-gray-800 dark:text-gray-200">
                참가자 추가
              </strong>{" "}
              — +/− 버튼으로 2~10명까지 자유롭게 늘리거나 줄일 수 있습니다. 이름은
              한글·영문 모두 12자까지 입력됩니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">
                동물 캐릭터 선택
              </strong>{" "}
              — 6종 동물(원숭이·다람쥐·토끼·여우·호랑이·판다) 중에서 골라
              내려갑니다. 같은 동물 중복도 허용됩니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">
                결과 입력
              </strong>{" "}
              — 직접 입력하거나, 점심메뉴·청소당번·한턱쏘기·음료내기 등 자주 쓰는{" "}
              <strong>4종 프리셋</strong>으로 한 번에 채워 넣을 수 있습니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">
                옵션 선택
              </strong>{" "}
              — 도망 이벤트, 결과 자동 섞기, 빠른 모드를 켜고 끌 수 있습니다.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-200">시작</strong>{" "}
              — ▶ 버튼을 누르면 동물들이 사다리를 row-by-row로 내려가면서
              결과 슬롯이 글로우로 빛나고 마지막에 컨페티가 터집니다.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            🏃 도망 이벤트 — 이 사다리만의 재미 요소
          </h2>
          <p className="mb-3">
            일반 사다리타기는 결과가 항상 똑같은 길로만 떨어져서, 출발 위치만
            보고도 결과를 미리 알 수 있는 단점이 있습니다. 오케이툴즈 사다리게임의{" "}
            <strong>도망 이벤트</strong>는 이 단조로움을 깨는 장치입니다.
          </p>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/30">
            <h3 className="mb-2 font-semibold text-rose-800 dark:text-rose-300">
              💨 도망 이벤트 작동 방식
            </h3>
            <ul className="ml-4 list-disc space-y-1 text-rose-700 dark:text-rose-200">
              <li>각 동물마다 약 28% 확률로 게임 도중 도망 발동</li>
              <li>
                무작위 row에 도달하면{" "}
                <strong>옆 줄(좌·우)로 점프</strong>하고 빨간 &ldquo;도망!&rdquo;
                말풍선이 0.9초 동안 표시
              </li>
              <li>점프 후에는 그 줄에서 사다리 규칙대로 다시 내려감</li>
              <li>
                결과 발표 화면에서 <strong>&ldquo;도망함&rdquo;</strong> 뱃지로
                누가 어디서 튀었는지 한눈에 확인
              </li>
            </ul>
          </div>
          <p className="mt-3">
            한 번 시작하면 결과를 끝까지 봐야 알 수 있어서 긴장감이 훨씬 커집니다.
            특히 회식 한턱쏘기처럼 &ldquo;꽝&rdquo; 비중이 큰 게임에서, 도망
            이벤트가 한 번 발동되면 분위기가 폭발적으로 달아오릅니다.
          </p>
        </div>

        <InArticleAd />

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            언제 쓰면 좋을까 — 활용 시나리오 4가지
          </h2>
          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-3 dark:border-blue-600 dark:bg-blue-900/20">
              <h4 className="mb-1 text-xs font-bold text-blue-800 dark:text-blue-300">
                🍚 회식·점심메뉴 정하기
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                메뉴 후보를 결과 슬롯에 적고 인원수만큼 사다리를 돌리면 끝.
                점심메뉴 프리셋(김치찌개·비빔밥·라면·치킨·피자·삼겹살)을
                바로 불러와 1초 만에 시작할 수 있습니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green-400 bg-green-50 p-3 dark:border-green-600 dark:bg-green-900/20">
              <h4 className="mb-1 text-xs font-bold text-green-800 dark:text-green-300">
                🧹 청소 당번·역할 분배
              </h4>
              <p className="text-xs text-green-700 dark:text-green-400">
                팀 회의 끝에 누가 청소·쓰레기·설거지를 할지 정해야 할 때.
                결과를 자동 섞기로 두면 특정인에게 몰리지 않고 매번 다른 결과가
                나옵니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-400 bg-purple-50 p-3 dark:border-purple-600 dark:bg-purple-900/20">
              <h4 className="mb-1 text-xs font-bold text-purple-800 dark:text-purple-300">
                💸 한턱쏘기·내기
              </h4>
              <p className="text-xs text-purple-700 dark:text-purple-400">
                커피값·점심값을 누가 낼지 정할 때. 도망 이벤트가 켜져 있으면
                &ldquo;안전&rdquo;하다고 안심하고 있던 사람이 갑자기 당첨 슬롯으로
                점프할 수 있어 분위기가 살아납니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-orange-400 bg-orange-50 p-3 dark:border-orange-600 dark:bg-orange-900/20">
              <h4 className="mb-1 text-xs font-bold text-orange-800 dark:text-orange-300">
                🎁 이벤트 당첨자 뽑기
              </h4>
              <p className="text-xs text-orange-700 dark:text-orange-400">
                동호회·반모임에서 경품 당첨자를 뽑을 때. 화면을 캡처해 단톡방에
                공유하면 결과 검증·인증이 자연스럽게 끝납니다.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
            6종 동물 캐릭터
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 pr-4 font-semibold text-gray-800 dark:text-gray-200">
                    동물
                  </th>
                  <th className="py-2 pr-4 font-semibold text-gray-800 dark:text-gray-200">
                    이름
                  </th>
                  <th className="py-2 font-semibold text-gray-800 dark:text-gray-200">
                    특징
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2 pr-4 text-lg">🐵</td>
                  <td className="py-2 pr-4">원숭이</td>
                  <td>날렵하게 사다리를 타고 내려옵니다</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-lg">🐿️</td>
                  <td className="py-2 pr-4">다람쥐</td>
                  <td>작고 빠른 발걸음, 도망 확률이 높아 보입니다</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-lg">🐰</td>
                  <td className="py-2 pr-4">토끼</td>
                  <td>깡총깡총 — 옆 줄 도망의 단골 주인공</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-lg">🦊</td>
                  <td className="py-2 pr-4">여우</td>
                  <td>슬쩍 옆으로 빠지는 모습이 그럴듯합니다</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-lg">🐯</td>
                  <td className="py-2 pr-4">호랑이</td>
                  <td>당당한 직진형, 도망보다 정정당당</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-lg">🐼</td>
                  <td className="py-2 pr-4">판다</td>
                  <td>느긋하지만 결국엔 결과 슬롯에 도착합니다</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
            오케이툴즈 3D 사다리게임의 장점
          </h3>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              CSS 3D Transforms 기반 <strong>화려한 3D 보드</strong> — 별도 설치
              없이 브라우저만 있으면 OK
            </li>
            <li>
              참가자 <strong>2~10명</strong> 자유 조정, 결과도 자동 동기화
            </li>
            <li>
              <strong>4종 프리셋</strong>(점심메뉴·청소당번·한턱쏘기·음료내기)으로
              1초 시작
            </li>
            <li>
              가다가 옆 줄로 튀는 <strong>도망 이벤트</strong> — 다른 사다리에는
              없는 재미 요소
            </li>
            <li>
              결과 자동 섞기로 매번 다른 사다리, <strong>완전 무료</strong>·
              로그인 불필요
            </li>
            <li>
              건너뛰기·다시 하기 등 진행 컨트롤, 모바일 반응형 지원
            </li>
            <li>
              모션 민감도(<code>prefers-reduced-motion</code>) 자동 감지로 접근성
              배려
            </li>
          </ul>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
          관련 도구
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { href: "/tools/lotto", label: "로또 번호 추천" },
            { href: "/tools/random-number", label: "랜덤 숫자 뽑기" },
            { href: "/fortune/tarot", label: "타로카드" },
            { href: "/fortune/zodiac", label: "별자리 운세" },
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

      {/* ── JSON-LD: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "홈",
                item: "https://www.oktools.co.kr",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "운세/재미",
                item: "https://www.oktools.co.kr/fortune",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "3D 사다리게임",
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
            name: "3D 사다리게임",
            alternateName: [
              "동물 사다리타기",
              "온라인 사다리게임",
              "Ghost Leg Game Online",
            ],
            description:
              "원숭이·다람쥐 등 6종 동물 캐릭터로 즐기는 무료 3D 사다리타기 게임. 참가자 자유 추가, 도망 이벤트, 결과 자동 섞기 지원.",
            url: URL,
            applicationCategory: "GameApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            softwareVersion: "1.0",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "KRW",
            },
            inLanguage: "ko-KR",
            featureList: [
              "6종 동물 캐릭터 — 원숭이·다람쥐·토끼·여우·호랑이·판다",
              "참가자 2~10명 자유 추가/제거",
              "결과 자동 섞기",
              "도망 이벤트 — 가다가 옆 줄로 점프",
              "점심메뉴·청소당번·한턱쏘기·음료내기 프리셋",
              "CSS 3D Transforms 기반 화려한 보드",
              "100% 브라우저 처리, 무료, 로그인 불필요",
              "모바일 반응형, 모션 접근성 자동 감지",
            ],
            creator: {
              "@type": "Organization",
              name: "오케이툴즈",
              url: "https://www.oktools.co.kr",
            },
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
            name: "3D 사다리게임 — 동물 사다리타기 시작하는 법",
            description:
              "참가자와 결과를 입력하고 동물을 골라 화려한 3D 사다리를 내려가는 5단계 가이드.",
            totalTime: "PT1M",
            tool: [
              { "@type": "HowToTool", name: "웹 브라우저 (Chrome, Edge, Safari)" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "참가자 추가",
                text: "+/− 버튼으로 참가자를 2~10명까지 자유롭게 추가하고 이름을 입력합니다.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "동물 선택",
                text: "원숭이·다람쥐·토끼·여우·호랑이·판다 6종 중에서 각 참가자의 캐릭터를 고릅니다.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "결과 입력",
                text: "결과 슬롯에 직접 입력하거나, 점심메뉴·청소당번·한턱쏘기·음료내기 프리셋으로 한 번에 채웁니다.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "옵션 선택",
                text: "도망 이벤트, 결과 자동 섞기, 빠른 모드 등 옵션을 켜거나 끕니다.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "시작",
                text: "▶ 게임 시작 버튼을 누르면 동물들이 3D 사다리를 내려가고, 도착하면 결과 슬롯이 빛나며 컨페티가 터집니다.",
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD: FAQPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "사다리타기 결과는 어떻게 결정되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전통적인 사다리타기 알고리즘과 동일합니다. 각 row마다 인접한 두 줄 사이에 가로 발판이 무작위로 놓이고, 동물은 발판을 만나면 옆 줄로 이동합니다. 같은 row에서 발판이 겹치지 않도록 보정해 한쪽 방향으로만 쏠리는 경우를 막습니다.",
                },
              },
              {
                "@type": "Question",
                name: "도망 이벤트는 어떻게 작동하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "각 동물마다 약 28% 확률로 게임 도중 무작위 row에서 옆 줄로 점프합니다. 점프 후에는 그 줄에서 사다리 규칙대로 다시 내려갑니다. 옵션에서 끌 수 있으며, 켜둔 경우 결과 발표에서 '도망함' 뱃지로 누가 튀었는지 확인할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "참가자는 최대 몇 명까지 가능한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2명부터 10명까지 지원합니다. 모바일에서도 보드가 자동으로 화면 폭에 맞게 축소되어 가로 스크롤 없이 한눈에 확인할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "결과 자동 섞기는 무슨 옵션인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "게임 시작 시점에 결과 슬롯의 순서를 무작위로 섞어주는 옵션입니다. 같은 입력으로 여러 번 시작해도 매번 다른 결과가 나오게 하고 싶을 때 켭니다. 끄면 입력한 순서 그대로 결과가 나갑니다.",
                },
              },
              {
                "@type": "Question",
                name: "어떤 상황에서 쓰면 좋나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "회식 메뉴 정하기, 청소 당번 정하기, 한턱쏘기, 음료 내기, 이벤트 당첨자 뽑기 등 무작위로 결과를 정해야 하는 모든 상황에 쓸 수 있습니다. 점심메뉴·청소당번 등 4종 프리셋이 내장돼 있어 1초 만에 시작할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "결과를 친구와 공유할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "결과 화면을 그대로 캡처해 단톡방·SNS에 올리면 됩니다. 동물별 결과와 도망 여부가 한눈에 보이는 카드 형태로 정리되어 결과 검증과 인증이 동시에 됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "회원가입이나 결제가 필요한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "아닙니다. 회원가입·로그인·결제 모두 필요 없이 100% 무료입니다. 모든 처리는 브라우저 내에서 이루어지므로 입력한 이름·결과 텍스트가 서버로 전송되지도 않습니다.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
