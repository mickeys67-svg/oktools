import type { Metadata } from "next";
import Link from "next/link";
import WheelConverter from "@/components/convert/WheelConverter";

export const metadata: Metadata = {
  title: "단위 변환 - 길이, 무게, 온도, 면적, 부피, 속도, 데이터",
  description:
    "휠 방식으로 간편하게! 길이, 무게, 온도, 면적, 부피, 속도, 데이터 용량 등 다양한 단위를 무료로 변환하세요.",
};

export default function ConvertPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">단위 변환</span>
      </nav>

      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white">
          <span className="text-xl font-bold">↔</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          단위 변환기
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          휠을 돌려 단위를 선택하고, 값을 입력하면 바로 변환됩니다.
        </p>
      </div>

      <WheelConverter />

      {/* SEO Content */}
      <section className="mt-12 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
          오케이툴즈 단위 변환기
        </h2>
        <div className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            길이, 무게, 온도, 면적, 부피, 속도, 데이터 용량까지 7가지
            카테고리의 단위를 손쉽게 변환할 수 있습니다.
          </p>
          <p>
            한국 전통 단위(평, 근, 돈, 되, 말, 리)도 지원하여 부동산
            면적 계산이나 전통 단위 환산에도 활용할 수 있습니다.
          </p>
          <p>
            휠 방식의 직관적인 인터페이스로 모바일에서도 편리하게
            사용하세요. 모든 계산은 브라우저에서 즉시 처리됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}
