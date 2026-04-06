"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error reporting service (e.g., Sentry)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <div className="mb-6 text-6xl">
        <span role="img" aria-label="경고">&#x26A0;&#xFE0F;</span>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        문제가 발생했습니다
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        일시적인 오류가 발생했습니다. 다시 시도해 주세요.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={reset}
          className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
        >
          다시 시도
        </button>
        <a
          href="/"
          className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          홈으로 돌아가기
        </a>
      </div>
      {error.digest && (
        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
          오류 코드: {error.digest}
        </p>
      )}
    </div>
  );
}
