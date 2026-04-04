import type { Metadata } from "next";
import Link from "next/link";
import ZodiacApp from "@/components/fortune/ZodiacApp";

export const metadata: Metadata = {
  title: "별자리 운세 - 12궁 오늘의 운세",
  description:
    "생년월일로 나의 별자리를 확인하고, 오늘의 종합운, 연애운, 금전운, 건강운을 무료로 확인하세요.",
};

export default function ZodiacPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">별자리 운세</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        별자리 운세
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일 또는 별자리를 선택하면 오늘의 운세를 확인할 수 있습니다.
      </p>

      <ZodiacApp />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">별자리 운세란?</h2>
        <p>
          별자리 운세는 태양이 태어난 시점에 위치한 황도 12궁의 별자리를 기반으로 운세를 점치는 서양 점성술의 일종입니다.
          각 별자리는 불, 흙, 바람, 물의 네 가지 원소에 속하며 고유한 성격과 특성을 가집니다.
        </p>
        <p className="text-xs text-gray-400">
          * 별자리 운세는 재미와 참고 용도입니다. 중요한 결정은 신중하게 판단하세요.
        </p>
      </section>
    </div>
  );
}
