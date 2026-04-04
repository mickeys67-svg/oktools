import type { Metadata } from "next";
import Link from "next/link";
import TojeongApp from "@/components/fortune/TojeongApp";

export const metadata: Metadata = {
  title: "토정비결 2026 - 생년월일로 보는 올해의 운세",
  description:
    "생년월일을 입력하면 토정비결 상원·중원·하원 운세를 확인할 수 있습니다. 재물운, 애정운, 건강운, 직업운까지 한눈에.",
};

export default function TojeongPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">토정비결</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        토정비결
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일을 입력하면 올해의 상원(1~4월), 중원(5~8월), 하원(9~12월) 운세를 확인합니다.
      </p>

      <TojeongApp />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">토정비결이란?</h2>
        <p>
          토정비결은 조선 시대 학자 이지함(호: 토정)이 만든 것으로 알려진 한국 전통 운세입니다.
          음력 생년월일을 기반으로 한 해를 상원(1~4월), 중원(5~8월), 하원(9~12월)으로 나누어 운세를 봅니다.
        </p>
        <p>
          특히 설날을 전후로 많은 한국인이 새해 토정비결을 확인하는 것이 전통입니다.
        </p>
        <p className="text-xs text-gray-400">
          * 본 서비스는 간소화된 알고리즘을 사용합니다. 재미와 참고 용도로만 활용하세요.
        </p>
      </section>
    </div>
  );
}
