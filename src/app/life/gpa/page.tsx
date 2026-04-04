import type { Metadata } from "next";
import Link from "next/link";
import GPACalculator from "@/components/life/GPACalculator";

export const metadata: Metadata = {
  title: "학점 계산기 - 대학교 GPA 평균 평점 계산",
  description: "과목별 학점과 성적을 입력하면 평균 평점(GPA)을 계산합니다. 4.5 및 4.3 만점 지원.",
};

export default function GPAPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">학점 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">학점 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산합니다.</p>
      <GPACalculator />
    </div>
  );
}
