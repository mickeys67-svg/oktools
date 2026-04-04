import type { Metadata } from "next";
import Link from "next/link";
import DDayCalc from "@/components/health/DDayCalc";

export const metadata: Metadata = {
  title: "D-Day 계산기 - 디데이, 날짜 차이 계산",
  description: "특정 날짜까지 남은 일수 또는 지난 일수를 계산합니다. 시험, 기념일, 여행 등 D-Day를 확인하세요.",
};

export default function DDayPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">D-Day 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">D-Day 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">목표 날짜까지 남은 일수와 지난 일수를 계산합니다.</p>
      <DDayCalc />
    </div>
  );
}
