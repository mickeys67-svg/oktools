"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen items-center justify-center bg-white text-gray-900">
        <div className="max-w-md px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">심각한 오류가 발생했습니다</h2>
          <p className="mb-6 text-gray-600">
            페이지를 로드하는 중 문제가 발생했습니다.
          </p>
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            다시 시도
          </button>
          {error.digest && (
            <p className="mt-4 text-xs text-gray-400">오류 코드: {error.digest}</p>
          )}
        </div>
      </body>
    </html>
  );
}
