import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "건강 계산기 - BMI, 바이오리듬, 만나이, D-Day 계산",
  description:
    "BMI 계산기, 바이오리듬 차트, 만 나이 계산기, D-Day 계산기를 무료로 이용하세요. 한국 비만학회 기준 적용.",
};

export default function HealthPage() {
  const category = getCategoryById("health")!;
  const tools = getToolsByCategory("health");

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
          <span className="text-xl font-bold">♥</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-health dark:bg-rose-950">
              <span className="text-lg font-bold">♥</span>
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
    </div>
  );
}
