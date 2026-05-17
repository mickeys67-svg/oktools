import type { Metadata } from "next";
import Link from "next/link";
import PaperSize from "@/components/tools/PaperSize";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "종이 사이즈 변환기 - 전지·국판·A4·연·평량 종합표",
  description:
    "사륙전지·국전지·하드롱전지부터 A4·B5·Letter·ANSI·ARCH 도면까지 60+ 규격. mm·cm·inch·픽셀·포인트 변환에 연(連 500매)·평량(g/m²) 종이 무게 계산까지 한 화면에서.",
  keywords: [
    "종이사이즈",
    "종이크기",
    "A4 크기",
    "A4 사이즈 mm",
    "A4 픽셀",
    "A3 크기",
    "B5 사이즈",
    "Letter 사이즈",
    "용지규격",
    "종이규격표",
    "전지 사이즈",
    "사륙전지",
    "국전지",
    "하드롱 전지",
    "국판",
    "신국판",
    "4·6판",
    "국배판",
    "크라운판",
    "1연 매수",
    "연 평량",
    "평량 g/m2",
    "종이 무게 계산",
    "모조지",
    "아트지",
    "DPI 픽셀 변환",
    "인치 mm 변환",
    "명함 사이즈",
    "사진 인화 사이즈",
    "4x6 사이즈",
    "ISO 216",
    "ANSI 도면 사이즈",
    "ARCH 건축 도면",
    "봉투 사이즈",
    "포스터 사이즈",
    "paper size",
  ],
  openGraph: {
    url: "/tools/paper-size",
    title: "종이 사이즈 변환기 - 전지·국판·A4·연·평량 종합표",
    description:
      "사륙전지·국전지·A4·B5·Letter·ANSI·ARCH 60+ 규격 + 연(連)·평량(g/m²) 종이 무게 계산. 한국 인쇄·출판 종사자용 종합 도구.",
  },
  alternates: {
    canonical: "/tools/paper-size",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function PaperSizePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">종이 사이즈 변환기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        종이 사이즈 변환기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        사륙전지·국전지·하드롱 전지부터 국판·신국판·4·6판, A·B·C 시리즈, ANSI/ARCH 도면, 명함·사진·신문까지 60+ 규격. mm·inch·픽셀 변환 + 연(連)·평량(g/m²) 무게 계산을 한 화면에서.
      </p>

      <PaperSize />
      <ResultAd />

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">한국 인쇄 종이 — 전지(全紙)부터 판형까지</h2>
        <p className="mb-3">
          한국 인쇄·출판 시장은 ISO 216(A·B 시리즈)과 별도로 <strong>전지(全紙)</strong>·<strong>판형(版型)</strong>·
          <strong>연(連)</strong>·<strong>평량(坪量)</strong>이라는 고유 단위 체계를 씁니다. 인쇄소에 발주하거나 종이를 구매할 때
          반드시 알아야 하는 개념들이며, 일반 사무용 A4 단위와는 완전히 다른 흐름입니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">전지(全紙) — 인쇄소 원지의 기본 단위</h3>
        <p className="mb-3">
          전지는 인쇄·제본 작업의 출발점인 큰 종이 원지를 뜻합니다. 한국에서는 크게 4종이 쓰입니다.
        </p>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>사륙전지 (4·6전지)</strong> — 788 × 1,091 mm. 단행본·일반 도서 인쇄의 표준 원지. 4·6판(127×188) 32면이 나옵니다.</li>
          <li className="mb-1"><strong>국전지</strong> — 636 × 939 mm. 교과서·실용서 인쇄용. 국판(148×210) 16면 또는 신국판(152×225) 16면이 나옵니다.</li>
          <li className="mb-1"><strong>하드롱 전지</strong> — 900 × 1,200 mm. 대형 포스터·캘린더·패키지 인쇄용. 인쇄기에 들어가는 가장 큰 원지 중 하나.</li>
          <li className="mb-1"><strong>A전지(625×880)·B전지(765×1085)</strong> — A판·B판 인쇄용 원지로 사륙·국전지와 별개 라인.</li>
        </ul>
        <p className="mb-3">
          전지를 반으로 자르면 <strong>2절</strong>, 4등분하면 <strong>4절</strong>, 8등분하면 <strong>8절</strong>식으로 절수(切數)가 매겨집니다.
          예: 사륙전지 16절 = 사륙판(127×188mm) 16장이 나온다는 의미.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">판형(版型) — 완성된 책의 크기</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>국판</strong> 148×210 (≈A5) — 단행본의 가장 흔한 판형</li>
          <li className="mb-1"><strong>신국판</strong> 152×225 — 교양서·문학 도서</li>
          <li className="mb-1"><strong>국배판</strong> 210×297 (≈A4) — 잡지·실용서·매뉴얼</li>
          <li className="mb-1"><strong>4·6판(시로쿠반)</strong> 127×188 — 문고본·소설책</li>
          <li className="mb-1"><strong>4·6배판</strong> 188×257 — 교과서·전공 서적</li>
          <li className="mb-1"><strong>크라운판</strong> 176×248 — 사진집·화보집</li>
          <li className="mb-1"><strong>타블로이드판</strong> 272×391 — 잡지·간행물</li>
          <li className="mb-1"><strong>문고판</strong> 105×148 (≈A6) — 소형 문고본</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">연(連)·속(束) — 종이 매수 단위</h3>
        <p className="mb-3">
          한국·일본의 인쇄 산업에서는 종이 매수를 셀 때 <strong>연(連)</strong>이라는 단위를 씁니다.
        </p>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>1연(連) = 500매</strong> — 인쇄소 견적·발주의 기본 단위</li>
          <li className="mb-1"><strong>1속(束) = 10연 = 5,000매</strong> — 대량 발주·재고 단위</li>
          <li className="mb-1"><strong>1톤(噸)</strong> — 무게 단위로도 거래 (제지 회사 출하 기준)</li>
        </ul>
        <p className="mb-3">
          예를 들어 &ldquo;사륙전지 모조지 100g 5연&rdquo;은 사륙전지(788×1091mm) 모조지 100gsm을 2,500매 발주한다는 뜻입니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">평량(坪量, g/m²) — 종이 두께·품질 기준</h3>
        <p className="mb-3">
          평량은 <strong>1제곱미터당 종이의 무게(g)</strong>로, GSM이라고도 표기합니다. 두께가 아니라 무게로 종이 품질을 표시합니다.
        </p>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>신문지</strong> 45~50 gsm — 가볍고 흡수성 좋음</li>
          <li className="mb-1"><strong>복사용지·노트</strong> 70~80 gsm — 사무용 표준</li>
          <li className="mb-1"><strong>모조지</strong> 80~120 gsm — 단행본 본문, 봉투</li>
          <li className="mb-1"><strong>아트지·스노우</strong> 100~200 gsm — 잡지·전단지 (코팅지)</li>
          <li className="mb-1"><strong>명함지·엽서</strong> 200~300 gsm — 빳빳한 카드용</li>
          <li className="mb-1"><strong>도화지·표지</strong> 200~400 gsm — 책 표지, 패키지</li>
        </ul>
        <p className="mb-3">
          <strong>무게 계산식</strong>: 종이 면적(m²) × 평량(g/m²) × 매수 = 총 무게(g). 위 계산기에서 자동 계산됩니다.
          예: A4(0.0624m²) × 80gsm × 500매 = 약 2,495g (≈ 1연 2.5kg).
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">자주 쓰이는 종이 종류</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>모조지</strong> — 가장 흔한 미색·백색 인쇄용지. 도서 본문에 가장 많이 사용.</li>
          <li className="mb-1"><strong>아트지</strong> — 표면이 매끄럽고 광택이 있는 코팅지. 잡지·전단지에 적합.</li>
          <li className="mb-1"><strong>스노우(매트지)</strong> — 아트지와 같은 코팅지지만 무광. 고급스러운 인쇄물.</li>
          <li className="mb-1"><strong>켄트지·도화지</strong> — 미술·디자인용 두꺼운 종이.</li>
          <li className="mb-1"><strong>크라프트지</strong> — 갈색 포장지. 친환경 패키지에 인기.</li>
          <li className="mb-1"><strong>러프그로스·반누보</strong> — 책 표지·고급 인쇄용 특수지.</li>
        </ul>

        <h2 className="mt-8 mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">ISO 216 표준 (A·B·C 시리즈)</h2>
        <p className="mb-3">
          국제 표준인 <strong>ISO 216</strong>은 A, B, C 세 가지 시리즈로 종이 크기를 정의합니다. 핵심 원리는
          <strong> 가로:세로 비율이 1:√2 (약 1:1.414)</strong>로 고정되어 있다는 점입니다. 한 단계 큰 종이를 반으로 접으면
          정확히 다음 단계 종이 크기가 되도록 설계되어 있어, A3를 반으로 접으면 A4, A4를 반으로 접으면 A5가 됩니다. 이
          비율 덕분에 확대·축소 인쇄에서 여백 손실이 발생하지 않습니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">A·B·C 시리즈 차이</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>A 시리즈</strong> — 일반 문서·복사·인쇄용 (기준: A0 = 1m²). 가장 익숙한 A4(210×297mm)는 사무 문서 표준.</li>
          <li className="mb-1"><strong>B 시리즈</strong> — 도서·잡지·포스터용 (기준: B0 = 1414×1000mm). A와 A 사이 크기로 출판물에 자주 쓰임. B5는 단행본 표준.</li>
          <li className="mb-1"><strong>C 시리즈</strong> — 봉투 전용. C4 봉투에 A4 종이를 접지 않고 넣고, C5에는 반접한 A4, C6에는 3접지한 A4가 들어감.</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">ANSI / ARCH — 미국 도면 규격</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>ANSI 시리즈</strong> (Y14.1) — 엔지니어링 도면. A(8.5×11)·B(11×17)·C(17×22)·D(22×34)·E(34×44 in).</li>
          <li className="mb-1"><strong>ARCH 시리즈</strong> — 건축 도면 전용. A(9×12)·B(12×18)·C(18×24)·D(24×36)·E(36×48 in). 가로세로비 4:3 또는 3:2로 ISO와 다름.</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">DPI와 픽셀 변환</h3>
        <p className="mb-3">
          DPI(Dots Per Inch)는 1인치당 점의 개수입니다. 동일한 종이라도 DPI 값에 따라 픽셀 크기가 크게 달라집니다.
          A4(210×297mm = 약 8.27×11.69 inch)를 예로 들면, 72 DPI는 595×842 px, 96 DPI는 794×1123 px,
          <strong> 300 DPI는 2480×3508 px</strong>가 됩니다. 인쇄용 이미지는 일반적으로 300 DPI 이상을 권장하며, 웹·모니터용은
          72~96 DPI면 충분합니다. 고품질 사진 인화나 도서 인쇄에는 600 DPI를 사용하기도 합니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">자주 쓰는 종이 크기 빠른 참조</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>A4</strong>: 210 × 297 mm — 사무 문서, 이력서, 복사용지 표준</li>
          <li className="mb-1"><strong>A3</strong>: 297 × 420 mm — A4 두 장 크기. 도면, 악보, 메뉴판</li>
          <li className="mb-1"><strong>A5</strong>: 148 × 210 mm — A4 반. 노트, 전단지, 핸드북</li>
          <li className="mb-1"><strong>B5</strong>: 176 × 250 mm — 도서·교과서 표준</li>
          <li className="mb-1"><strong>Letter</strong>: 215.9 × 279.4 mm (8.5×11 in) — 미국 표준 문서</li>
          <li className="mb-1"><strong>명함(한국)</strong>: 90 × 50 mm — 표준 명함 크기</li>
          <li className="mb-1"><strong>4R 사진</strong>: 102 × 152 mm (4×6 inch) — 일반 인화 표준</li>
          <li className="mb-1"><strong>증명사진/여권사진</strong>: 35 × 45 mm — 한국 신분증·여권 ICAO 표준</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">자주 묻는 질문</h3>
        <p className="mb-2">
          <strong>Q. A4 사이즈는 정확히 몇 픽셀인가요?</strong><br />
          DPI에 따라 다릅니다. 72 DPI는 595×842 px, 96 DPI는 794×1123 px, 300 DPI는 2480×3508 px입니다. 포토샵·일러스트레이터
          작업 시 인쇄용이라면 300 DPI를, 웹용이라면 72 DPI를 기준으로 잡으세요.
        </p>
        <p className="mb-2">
          <strong>Q. A4와 Letter의 차이는 무엇인가요?</strong><br />
          A4(210×297mm)는 ISO 216 국제 표준이고, Letter(215.9×279.4mm)는 미국·캐나다 등 북미 표준입니다. Letter가 A4보다
          가로로는 약 6mm 넓고, 세로로는 약 18mm 짧습니다. 미국 사이트에서 A4로 출력하면 여백이 잘리거나 축소될 수 있습니다.
        </p>
        <p className="mb-2">
          <strong>Q. A4 종이에 맞는 봉투는 어떤 크기인가요?</strong><br />
          접지 않고 넣으려면 <strong>C4 봉투(229×324mm)</strong>, 반으로 접어 넣으려면 <strong>C5(162×229mm)</strong>,
          3등분으로 접으려면 <strong>C6(114×162mm)</strong>를 사용하세요. C 시리즈는 A 시리즈와 짝을 이루도록 설계되었습니다.
        </p>
        <p>
          <strong>Q. 인쇄소에 파일을 보낼 때 DPI 설정은 어떻게 해야 하나요?</strong><br />
          상업 인쇄(명함·전단지·책자·포스터)는 <strong>300 DPI 이상</strong>이 표준입니다. 대형 현수막이나 옥외 광고는 시청 거리가
          멀어 150 DPI 정도로도 충분합니다. 사진 갤러리용 고급 인화는 600 DPI를 사용하기도 합니다.
        </p>
      </section>

      <InArticleAd />

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/convert" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            단위 변환기
          </Link>
          <Link href="/tools/character-count" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            글자수 세기
          </Link>
          <Link href="/tools/youtube-tracklist" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            YouTube 트랙리스트
          </Link>
          <Link href="/tools" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            전체 유틸리티
          </Link>
        </div>
      </section>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "A4 사이즈는 정확히 몇 mm인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A4는 ISO 216 국제 표준으로 210mm × 297mm (8.27 × 11.69 inch)입니다. 가로:세로 비율은 1:√2(약 1:1.414)이며, 반으로 접으면 정확히 A5(148×210mm)가 됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "A4를 300 DPI로 픽셀 변환하면 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A4(210×297mm)는 300 DPI 기준 2480×3508 px입니다. 72 DPI에서는 595×842 px, 96 DPI에서는 794×1123 px, 600 DPI에서는 4960×7016 px입니다. 인쇄용은 300 DPI 이상, 웹용은 72~96 DPI를 권장합니다.",
                },
              },
              {
                "@type": "Question",
                name: "A4와 Letter 용지의 차이는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A4(210×297mm)는 ISO 216 국제 표준이고 Letter(215.9×279.4mm)는 북미 표준입니다. Letter는 A4보다 가로가 약 6mm 넓고 세로는 약 18mm 짧습니다. 미국 출처의 PDF를 A4로 출력하면 여백이 다르게 표시될 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "A4 종이에 맞는 봉투 크기는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "접지 않고 그대로 넣으려면 C4(229×324mm), 반으로 접으면 C5(162×229mm), 3등분으로 접으면 C6(114×162mm)를 사용하세요. C 시리즈 봉투는 A 시리즈 종이와 정확히 짝을 이루도록 ISO 269에서 설계되었습니다.",
                },
              },
              {
                "@type": "Question",
                name: "한국 명함과 증명사진의 표준 크기는 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "표준 명함은 90×50mm입니다. 증명사진(주민등록증·여권)은 35×45mm(3.5×4.5cm)이며, 여권사진은 ICAO 국제 표준을 따릅니다. 일반 인화 사진은 4R(102×152mm, 4×6 inch)이 가장 흔합니다.",
                },
              },
              {
                "@type": "Question",
                name: "B5 사이즈는 어디에 쓰이나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "B5(176×250mm)는 도서·교과서·문제집 등 출판물의 표준 크기입니다. A4보다 작고 A5보다 커서 휴대성과 가독성의 균형이 좋아 한국에서는 대학 교재와 단행본에 널리 쓰입니다.",
                },
              },
              {
                "@type": "Question",
                name: "사륙전지·국전지·하드롱 전지는 각각 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "사륙전지(788×1091mm)는 단행본·일반 도서 인쇄의 표준 원지로 4·6판 32면이 나옵니다. 국전지(636×939mm)는 교과서·실용서용으로 국판 16면이 나오고, 하드롱 전지(900×1200mm)는 대형 포스터·캘린더·패키지 인쇄에 쓰는 가장 큰 원지 중 하나입니다.",
                },
              },
              {
                "@type": "Question",
                name: "1연(連)은 몇 매인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1연(連)은 종이 500매입니다. 한국·일본 인쇄 산업의 표준 단위로 인쇄소 견적과 발주의 기본이 됩니다. 10연 = 1속(束) = 5,000매이며, 대량 발주는 톤(噸) 단위로도 거래합니다.",
                },
              },
              {
                "@type": "Question",
                name: "평량(g/m², gsm)이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "평량(坪量)은 1제곱미터당 종이 무게를 그램으로 표시한 값입니다. 두께가 아니라 무게로 종이 품질을 나타냅니다. 신문지는 45~50gsm, 복사용지·노트는 70~80gsm, 단행본 본문 모조지는 80~120gsm, 잡지 아트지는 100~200gsm, 명함지·엽서는 200~300gsm입니다. 종이 총 무게는 면적(m²) × 평량 × 매수로 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "국판·신국판·4·6판은 어떻게 다른가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "국판(148×210mm)은 한국 단행본의 가장 흔한 판형으로 A5와 거의 같습니다. 신국판(152×225mm)은 국판보다 약간 크고 교양서·문학에 쓰입니다. 4·6판(시로쿠반, 127×188mm)은 문고본·소설책에 쓰는 작은 판형이고, 4·6배판(188×257mm)은 교과서·전공 서적에 많이 사용합니다.",
                },
              },
              {
                "@type": "Question",
                name: "ANSI와 ARCH 도면 규격은 무엇이 다른가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ANSI(Y14.1)는 엔지니어링 도면용 미국 표준으로 A(8.5×11)부터 E(34×44 in)까지 5단계입니다. ARCH는 건축 도면 전용으로 A(9×12)부터 E(36×48 in)까지 있으며 가로세로비가 ANSI와 달라 건축 평면도에 적합합니다. 한국 건축·기계 도면 작업 시 외국 클라이언트와 협업할 때 자주 쓰입니다.",
                },
              },
            ],
          }),
        }}
      />
      {/* WebApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "종이 사이즈 변환기",
            alternateName: [
              "용지 규격표",
              "Paper Size Converter",
              "A4 픽셀 변환",
              "전지 사이즈 표",
              "연 평량 종이 무게 계산기",
            ],
            description: "한국 전지(사륙·국·하드롱)·판형(국판·신국판·4·6판)·A/B/C 시리즈·ANSI·ARCH 60+ 규격 + 연(連)·평량(g/m²) 종이 무게 계산을 한 화면에서 제공합니다",
            url: "https://www.oktools.co.kr/tools/paper-size",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
            inLanguage: "ko-KR",
            featureList: [
              "한국 전지: 사륙전지·국전지·하드롱·A전지·B전지 (2절 포함)",
              "한국 판형: 국판·신국판·국배판·4·6판·4·6배판·크라운판·문고판·타블로이드판",
              "ISO 216 A/B/C 시리즈 전체 (A0~A10, B0~B8, C3~C7)",
              "ANSI Y14.1 도면 (ANSI A~E)",
              "ARCH 건축 도면 (ARCH A~E1)",
              "미국 규격 (Letter, Legal, Tabloid, Executive, Junior, Half Letter)",
              "사진 인화 표준 (3R, 4R, 5R, 8R, 11R, 16R)",
              "한국 명함·증명사진·여권사진·신문(베를리너/대판)·엽서",
              "DPI 5단계(72/96/150/300/600) 픽셀 변환",
              "mm·cm·inch·px·pt 동시 표시",
              "세로/가로 방향 전환",
              "A4 기준 시각 비교",
              "전체 규격 비교표",
              "연(連)·속(束)·평량(g/m²) 종이 무게 계산기 (1연 = 500매)",
              "평량 프리셋: 신문지·복사용지·모조지·아트지·명함지·도화지",
              "원클릭 단위별 복사",
            ],
          }),
        }}
      />
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈", item: "https://www.oktools.co.kr" },
              { "@type": "ListItem", position: 2, name: "유틸리티", item: "https://www.oktools.co.kr/tools" },
              { "@type": "ListItem", position: 3, name: "종이 사이즈 변환기" },
            ],
          }),
        }}
      />
    </div>
  );
}
