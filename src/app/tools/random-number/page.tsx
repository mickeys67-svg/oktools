import type { Metadata } from "next";
import Link from "next/link";
import RandomGenerator from "@/components/tools/RandomGenerator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "랜덤 번호 생성기 - 로또 주사위 동전 던지기",
  description: "무료 랜덤 번호 생성기. 로또 번호, 주사위 굴리기, 동전 던지기, 추첨 번호 등 다양한 무작위 생성 도구를 바로 사용하세요.",
  keywords: [
    "랜덤번호생성기", "랜덤숫자", "로또번호", "추첨번호", "주사위굴리기",
    "동전던지기", "무작위번호", "제비뽑기", "랜덤뽑기", "랜덤번호",
    "온라인주사위", "온라인동전던지기", "팀나누기", "발표순서정하기", "이벤트추첨",
    "회식메뉴추첨", "당첨자추첨", "랜덤이름뽑기", "Random Number Generator",
  ],
  openGraph: {
    url: "/tools/random-number",
    title: "랜덤 번호 생성기 - 로또 주사위 동전 던지기",
    description: "무료 랜덤 번호 생성기. 로또 번호, 주사위 굴리기, 동전 던지기, 추첨 번호 등 다양한 무작위 생성 도구를 바로 사용하세요.",
  },
  alternates: {
    canonical: "/tools/random-number",
  },
};

export default function RandomNumberPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">랜덤 번호 생성기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">랜덤 번호 생성기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">로또 번호, 랜덤 숫자, 동전 던지기, 주사위 등 다양한 랜덤 도구입니다.</p>
      <RandomGenerator />
      <ResultAd />

      <section className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">랜덤 번호 생성기 사용 가이드</h2>
          <p>
            랜덤 번호 생성기는 로또 번호, 주사위, 동전 던지기, 범위 지정 랜덤 숫자 등 다양한 무작위 생성 기능을
            제공하는 도구입니다. 회식 메뉴 결정, 팀 나누기, 발표 순서, 경품 추첨, 게임 결과 결정 등 「공정한
            무작위 선택」이 필요한 모든 상황에서 활용할 수 있습니다. 별도의 가입·설치 없이 웹 브라우저에서
            바로 사용 가능하며, 결과는 매번 새롭게 생성됩니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">난수 생성 원리 — Crypto.getRandomValues</h2>
          <p>
            본 도구는 브라우저 표준 API인 <strong>Crypto.getRandomValues()</strong>를 사용해 암호학적으로
            안전한 난수(CSPRNG; Cryptographically Secure Pseudo-Random Number Generator)를 생성합니다.
            일반적인 <code>Math.random()</code>이 사용하는 PRNG는 시드값 추적·예측이 가능해 보안 분야에서는
            부적합한 반면, <code>crypto.getRandomValues()</code>는 운영체제의 엔트로피 풀(키보드 입력·마우스
            움직임·디스크 I/O 등에서 수집된 무작위성)을 활용하므로 예측이 사실상 불가능합니다. 추첨·복권·
            경품 행사 등 공정성이 중요한 상황에 적합한 품질의 난수를 제공합니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">주사위·동전·범위 지정 모드</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>주사위 모드</strong> — 1~6 사이 숫자를 1~10개까지 동시에 생성. 보드게임·테이블탑 RPG의 주사위 대용으로 활용.</li>
            <li><strong>동전 던지기</strong> — 「앞면/뒷면」을 무작위 출력. 의사결정·게임 시작 순서 결정에 사용.</li>
            <li><strong>범위 지정 랜덤</strong> — 사용자가 최소·최대값을 지정한 정수 범위 내 무작위 1개 또는 여러 개 생성. 예: 1~100 사이 랜덤, 50~80 사이 5개 등.</li>
            <li><strong>로또 모드</strong> — 1~45 사이 중복 없는 6개 번호 생성(로또 6/45 호환).</li>
            <li><strong>중복 허용/금지 옵션</strong> — 추첨 시 중복 당첨자가 나오지 않도록 「중복 금지」를 켜면 같은 번호는 다시 뽑히지 않습니다.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">실생활 활용 시나리오</h2>
          <p>
            <strong>회사·스터디</strong> — 회식 메뉴 5개 중 1개 추첨, 발표 순서 정하기, 팀 빌딩(1~6 → A·B팀 분배),
            업무 분담 추첨에 활용. <strong>학교·교실</strong> — 청소 당번 정하기, 수업 발표자 무작위 선정,
            짝꿍 정하기, 게임 그룹 만들기에 사용. <strong>이벤트·SNS</strong> — 인스타그램·블로그 댓글 이벤트
            당첨자 추첨, 카페 회원 경품 추첨, 라이브 방송 시청자 룰렛 게임에 활용. <strong>가정</strong> — 자녀 간
            게임 순서 정하기, 저녁 메뉴 정하기, 집안일 분배 등 사소한 결정을 「공정하게」 처리할 때 유용합니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">결과 검증과 공정성</h2>
          <p>
            추첨·이벤트에 사용할 때 「조작 의혹」을 피하려면 추첨 과정을 화면 녹화하거나 라이브 방송으로
            공유하는 것이 좋습니다. 본 도구는 모든 연산이 브라우저에서 클라이언트 사이드로만 실행되며 결과를
            서버에 전송하지 않으므로, 외부 조작 가능성이 없습니다. 더 강력한 공정성이 필요한 대규모 이벤트는
            <strong> 추첨 시드(timestamp)를 미리 공개</strong>하거나 블록체인 기반 검증 도구를 추가로 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/lotto" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            로또 번호 추천
          </Link>
          <Link href="/tools/character-count" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            글자수 세기
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
                name: "랜덤 번호 생성기는 공정한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "이 도구는 브라우저의 암호학적 난수 생성기(Crypto.getRandomValues)를 사용하여 예측 불가능한 무작위 값을 생성합니다. 각 숫자가 나올 확률이 균등하므로 추첨, 제비뽑기 등 공정한 무작위 선택에 적합합니다.",
                },
              },
              {
                "@type": "Question",
                name: "랜덤 번호 생성기로 로또 번호를 뽑을 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "네, 1~45 범위에서 6개의 중복 없는 랜덤 번호를 생성하면 로또 번호로 사용할 수 있습니다. 다만 모든 번호 조합의 당첨 확률은 동일하므로 당첨을 보장하지 않습니다. 통계 기반 추천이 필요하면 로또 번호 추천 도구를 이용하세요.",
                },
              },
              {
                "@type": "Question",
                name: "Math.random()과 무엇이 다른가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Math.random()은 PRNG(의사 난수 생성기)로 시드값 추적이 가능해 예측될 수 있습니다. 본 도구는 Crypto.getRandomValues() API를 사용해 운영체제의 엔트로피 풀에서 무작위성을 가져오므로 예측이 사실상 불가능한 CSPRNG(암호학적 안전 난수)입니다. 추첨·복권·경품 행사 등 공정성이 중요한 상황에 적합합니다.",
                },
              },
              {
                "@type": "Question",
                name: "추첨 결과를 외부에서 검증할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "본 도구는 모든 난수 생성을 클라이언트(사용자 브라우저)에서 처리하며 서버로 전송하지 않습니다. 추첨 과정을 화면 녹화하거나 라이브 방송으로 공유하면 참가자들이 실시간 검증할 수 있습니다. 대규모 이벤트는 추첨 시드(timestamp)를 미리 공개하거나 블록체인 검증 도구를 함께 사용하세요.",
                },
              },
              {
                "@type": "Question",
                name: "팀 나누기·발표 순서 정하기에 어떻게 사용하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "예: 8명을 두 팀으로 나누려면 「범위 지정 1~8, 8개 생성, 중복 금지」 옵션으로 결과를 받은 뒤 앞 4명을 A팀, 뒤 4명을 B팀으로 배정합니다. 발표 순서는 「범위 1~참가자수, 참가자수만큼 생성, 중복 금지」로 받은 결과 순서대로 진행하면 됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "비밀번호 생성에 사용해도 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Crypto.getRandomValues 기반이므로 비밀번호용 랜덤 숫자 생성에 사용해도 안전합니다. 다만 비밀번호는 숫자뿐 아니라 영문 대소문자·특수문자가 혼합되어야 강력하므로, 본 도구로 생성한 숫자는 일부 구성 요소로만 사용하고 별도 비밀번호 관리자(1Password, Bitwarden 등)를 함께 활용하는 것이 권장됩니다.",
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
          "name": "랜덤 번호 생성기",
          "description": "로또 번호, 랜덤 숫자, 추첨 번호 생성",
          "url": "https://www.oktools.co.kr/tools/random-number",
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
            { "@type": "ListItem", "position": 3, "name": "랜덤 번호 생성기" }
          ]
        }) }}
      />
    </div>
  );
}
