import type { Metadata } from "next";
import Link from "next/link";
import UnemploymentCalc from "@/components/finance/UnemploymentCalc";

export const metadata: Metadata = {
  title: "실업급여 계산기 2026 - 수령액 지급기간 자격 조회",
  description:
    "무료 실업급여 계산기로 예상 수령액과 지급기간을 바로 확인하세요. 2026년 기준 상한액 하한액 반영, 구직급여 자격 조건 조회.",
  keywords: ["실업급여계산기", "실업급여수령액", "실업급여조건", "실업급여지급기간", "구직급여", "실업급여신청", "고용보험실업급여", "실업급여상한액", "실업급여하한액", "자발적퇴사실업급여"],
  alternates: {
    canonical: "/finance/unemployment",
  },
};

export default function UnemploymentPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">실업급여 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        실업급여 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        퇴직 전 평균 월급과 고용보험 가입기간을 입력하면 예상 실업급여를 계산합니다.
      </p>

      <UnemploymentCalc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          실업급여 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>실업급여</strong>는 퇴직 전 평균임금의 60%를 지급합니다.
          </li>
          <li>
            <strong>1일 상한액</strong>: 66,000원 / <strong>하한액</strong>: 최저임금 80% 기준
          </li>
          <li>
            지급기간은 나이와 고용보험 가입기간에 따라 120~270일까지 차등 적용됩니다.
          </li>
          <li>
            실업급여 신청은 퇴직 다음날부터 12개월 이내에 해야 합니다.
          </li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2026년 기준 근사치입니다. 정확한 금액은 고용센터에서 확인하세요.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "실업급여 계산기",
          "description": "실업급여 수령액, 지급기간, 수급자격 조회",
          "url": "https://www.oktools.co.kr/finance/unemployment",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "실업급여 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
