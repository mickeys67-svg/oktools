import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "금융 계산기 모음 2026 - 대출 연봉 세금 부동산 무료 계산",
  description:
    "대출이자, 연봉실수령액, 퇴직금, 4대보험, 종합소득세, 취득세, 전월세전환율 등 15종 무료 금융 계산기. 바로 계산하고 확인하세요.",
  keywords: ["금융계산기", "대출이자계산", "연봉실수령액", "할부계산", "퇴직금계산", "적금이자", "예금이자", "복리계산", "최저시급", "전월세전환율", "4대보험", "부동산복비", "종합소득세", "실업급여", "취득세"],
  alternates: {
    canonical: "/finance",
  },
};

export default function FinancePage() {
  const category = getCategoryById("finance")!;
  const tools = getToolsByCategory("finance");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.colorHex }}
        >
          <span className="text-xl font-bold">금</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {category.description}
        </p>
      </div>

      {/* Tool List */}
      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-finance dark:bg-emerald-950"
            >
              <span className="text-lg font-bold">₩</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                {tool.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tool.description}
              </p>
            </div>
            <svg
              className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
          "name": "금융 계산기",
          "url": "https://www.oktools.co.kr/finance",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "대출 이자 계산기", "url": "https://www.oktools.co.kr/finance/loan-calculator" },
              { "@type": "ListItem", "position": 2, "name": "할부 계산기", "url": "https://www.oktools.co.kr/finance/installment" },
              { "@type": "ListItem", "position": 3, "name": "연봉 실수령액 계산기", "url": "https://www.oktools.co.kr/finance/salary" },
              { "@type": "ListItem", "position": 4, "name": "퇴직금 계산기", "url": "https://www.oktools.co.kr/finance/retirement" },
              { "@type": "ListItem", "position": 5, "name": "적금 이자 계산기", "url": "https://www.oktools.co.kr/finance/savings" },
              { "@type": "ListItem", "position": 6, "name": "예금 이자 계산기", "url": "https://www.oktools.co.kr/finance/deposit" },
              { "@type": "ListItem", "position": 7, "name": "복리 계산기", "url": "https://www.oktools.co.kr/finance/compound-interest" },
              { "@type": "ListItem", "position": 8, "name": "최저시급 계산기", "url": "https://www.oktools.co.kr/finance/minimum-wage" },
              { "@type": "ListItem", "position": 9, "name": "전월세 전환율 계산기", "url": "https://www.oktools.co.kr/finance/jeonwolse" },
              { "@type": "ListItem", "position": 10, "name": "4대보험 계산기", "url": "https://www.oktools.co.kr/finance/insurance4" },
              { "@type": "ListItem", "position": 11, "name": "부동산 중개보수 계산기", "url": "https://www.oktools.co.kr/finance/broker-fee" },
              { "@type": "ListItem", "position": 12, "name": "종합소득세 계산기", "url": "https://www.oktools.co.kr/finance/income-tax" },
              { "@type": "ListItem", "position": 13, "name": "실업급여 계산기", "url": "https://www.oktools.co.kr/finance/unemployment" },
              { "@type": "ListItem", "position": 14, "name": "취득세 계산기", "url": "https://www.oktools.co.kr/finance/acquisition-tax" }
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
