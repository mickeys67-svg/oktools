import Link from "next/link";
import { getPopularTools } from "@/data/tools";

export default function NotFound() {
  const popularTools = getPopularTools().slice(0, 6);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>

      <Link
        href="/"
        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-12"
      >
        홈으로 돌아가기
      </Link>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          인기 도구 바로가기
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {popularTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">{tool.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
