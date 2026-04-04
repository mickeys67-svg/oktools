import Link from "next/link";
import { categories, getPopularTools } from "@/data/tools";

export default function Footer() {
  const popular = getPopularTools().slice(0, 6);

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              카테고리
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.path}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              인기 도구
            </h3>
            <ul className="space-y-2">
              {popular.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.path}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              정보
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 text-lg font-bold text-primary-600 dark:text-primary-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-extrabold text-white">
                올
              </span>
              올툴즈
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              계산기, 변환기, 유틸리티까지.
              <br />
              필요한 도구를 빠르고 깔끔하게.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} 올툴즈. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
