import type { Metadata } from "next";
import Link from "next/link";
import MinimumWageCalc from "@/components/finance/MinimumWageCalc";

export const metadata: Metadata = {
  title: "최저시급 계산기 2025 2026 - 최저임금 월급 연봉 계산",
  description:
    "무료 최저시급 계산기로 2025년, 2026년 최저임금 기준 월급과 연봉을 바로 확인하세요. 주휴수당 포함 시급, 알바 시급 계산.",
  keywords: ["최저시급2025", "최저시급2026", "최저임금", "최저시급월급", "주휴수당계산", "알바시급", "최저임금인상", "주휴수당포함시급", "최저시급연봉", "아르바이트시급"],
};

export default function MinimumWagePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">최저시급 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        최저시급 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        2025년/2026년 최저시급 기준으로 일급, 주급, 월급, 연봉 예상액을 계산합니다.
      </p>

      <MinimumWageCalc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          최저임금 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>2025년 최저시급</strong>: 10,030원 (전년 대비 1.7% 인상)</li>
          <li><strong>2026년 최저시급</strong>: 10,360원 (전년 대비 3.3% 인상)</li>
          <li><strong>주휴수당</strong>: 주 15시간 이상 근무 시 1일분의 유급휴일 수당 지급</li>
          <li><strong>월급 환산</strong>: 주 40시간 근무 + 주휴 8시간 = 월 209시간 기준</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 본 계산기는 참고용이며, 실제 급여는 근로계약 조건에 따라 달라질 수 있습니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "최저시급 계산기",
          "description": "2025/2026 최저시급 기준 일급, 주급, 월급, 연봉 계산",
          "url": "https://www.oktools.co.kr/finance/minimum-wage",
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
            { "@type": "ListItem", "position": 3, "name": "최저시급 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
