import type { Metadata } from "next";
import Link from "next/link";
import CharacterCount from "@/components/tools/CharacterCount";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "글자수 세기 - 공백포함 제외, 바이트 계산기",
  description: "무료 글자수 세기 도구. 공백 포함·제외 글자수, 단어수, 바이트수를 실시간 계산하세요. 자기소개서·이력서·SNS 글자수 확인.",
  keywords: ["글자수세기", "글자수카운터", "자기소개서글자수", "이력서글자수", "바이트계산", "공백포함글자수", "공백제외글자수", "한글글자수", "SNS글자수"],
  openGraph: {
    url: "/tools/character-count",
    title: "글자수 세기 - 공백포함 제외, 바이트 계산기",
    description: "무료 글자수 세기 도구. 공백 포함·제외 글자수, 단어수, 바이트수를 실시간 계산하세요. 자기소개서·이력서·SNS 글자수 확인.",
  },
  alternates: {
    canonical: "/tools/character-count",
  },
};

export default function CharacterCountPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">글자수 세기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">글자수 세기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">텍스트를 입력하면 글자수, 단어수, 바이트수를 실시간으로 계산합니다.</p>
      <CharacterCount />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">글자수 세기 사용 가이드</h2>
          <p>
            글자수 세기 도구는 입력한 텍스트의 글자수(공백 포함/제외), 단어수, 바이트수를 실시간으로 계산합니다.
            자기소개서, 이력서, 대학 과제, SNS 게시글 등 글자수 제한이 있는 글을 작성할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">바이트 계산 방식</h3>
          <p>
            한글은 UTF-8 기준 한 글자당 3바이트, 영문과 숫자는 1바이트로 계산됩니다.
            SMS 문자 메시지는 한글 기준 70자(영문 160자)까지 단문, 그 이상은 장문(LMS)으로 분류됩니다.
            일부 시스템에서는 EUC-KR 인코딩을 사용하며, 이 경우 한글은 2바이트로 계산됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">주요 글자수 제한 참고</h3>
          <p>
            자기소개서는 보통 500~1,000자, 이력서 자유기술란은 200~500자가 일반적입니다.
            트위터(X)는 280자, 인스타그램 캡션은 2,200자, 네이버 블로그 제목은 100자 제한이 있습니다.
            공백 포함 여부에 따라 글자수가 달라지므로, 제출 조건에 맞는 기준을 확인하고 작성하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/random-number" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            랜덤 번호 생성기
          </Link>
          <Link href="/tools/lotto" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            로또 번호 추천
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
                name: "자기소개서 글자수는 공백 포함인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "대부분의 자기소개서와 입사 지원서는 '공백 포함' 글자수를 기준으로 합니다. 다만 일부 기업이나 공공기관은 '공백 제외' 기준을 사용하기도 하므로, 모집 요강에 명시된 기준을 반드시 확인하세요.",
                },
              },
              {
                "@type": "Question",
                name: "한글 1글자는 몇 바이트인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한글은 인코딩 방식에 따라 다릅니다. UTF-8 기준으로 한글 1글자는 3바이트이고, EUC-KR 기준으로는 2바이트입니다. 영문, 숫자, 기본 특수문자는 두 인코딩 모두 1바이트입니다.",
                },
              },
              {
                "@type": "Question",
                name: "트위터(X) 글자수 제한은 몇 자인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "트위터(X)의 일반 게시물은 280자까지 작성할 수 있습니다. 한글, 영문 모두 동일하게 1글자로 카운트됩니다. X Premium 구독자는 최대 25,000자까지 작성 가능합니다.",
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
          "name": "글자수 세기",
          "description": "한글, 영문, 공백 포함/제외 글자수 카운트",
          "url": "https://www.oktools.co.kr/tools/character-count",
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
            { "@type": "ListItem", "position": 1, "name": "��", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "유틸리티", "item": "https://www.oktools.co.kr/tools" },
            { "@type": "ListItem", "position": 3, "name": "글자수 세기" }
          ]
        }) }}
      />
    </div>
  );
}
