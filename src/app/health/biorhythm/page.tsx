import type { Metadata } from "next";
import Link from "next/link";
import BiorhythmChart from "@/components/health/BiorhythmChart";

export const metadata: Metadata = {
  title: "바이오리듬 계산기 - 오늘의 신체·감성·지성 리듬 차트",
  description:
    "생년월일을 입력하면 신체(23일), 감성(28일), 지성(33일) 바이오리듬 차트를 확인할 수 있습니다. 30일 리듬 그래프와 오늘의 컨디션 점수.",
};

export default function BiorhythmPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">바이오리듬</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        바이오리듬
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일을 입력하면 30일간의 바이오리듬 차트와 오늘의 컨디션을 확인합니다.
      </p>

      <BiorhythmChart />

      <section className="mt-10 space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          바이오리듬이란?
        </h2>
        <p>
          바이오리듬은 출생일을 기준으로 일정한 주기로 반복되는 신체적, 감성적, 지적 리듬을 말합니다.
          각 리듬은 사인파(sine wave) 형태로 +100%에서 -100% 사이를 오갑니다.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-rose-500" />
            <strong>신체 리듬 (23일 주기)</strong>: 체력, 지구력, 면역력
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-blue-500" />
            <strong>감성 리듬 (28일 주기)</strong>: 기분, 감정, 창의력
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
            <strong>지성 리듬 (33일 주기)</strong>: 집중력, 기억력, 판단력
          </div>
        </div>
        <p className="text-xs text-gray-400">
          * 바이오리듬은 과학적으로 검증된 이론은 아닙니다. 재미와 참고 용도로만 활용하세요.
        </p>
      </section>
    </div>
  );
}
