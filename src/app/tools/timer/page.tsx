import type { Metadata } from "next";
import Link from "next/link";
import TimerApp from "@/components/tools/TimerApp";

export const metadata: Metadata = {
  title: "온라인 타이머 - 카운트다운 타이머, 프리셋 지원",
  description:
    "라면 타이머, 운동 타이머 등 다양한 프리셋을 지원하는 온라인 카운트다운 타이머. 소리 알림, 큰 화면 표시.",
};

export default function TimerPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">타이머</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        온라인 타이머
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        시간을 설정하고 시작하세요. 종료 시 소리로 알려드립니다.
      </p>

      <TimerApp />
    </div>
  );
}
