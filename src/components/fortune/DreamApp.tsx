"use client";

import { useState } from "react";
import { DREAM_CATEGORIES, searchDreams, type DreamSymbol } from "@/data/dream-data";

const TYPE_BADGE: Record<string, { label: string; className: string }> = {
  good: { label: "길몽", className: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" },
  bad: { label: "흉몽", className: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" },
  neutral: { label: "중립", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400" },
};

function DreamCard({ symbol }: { symbol: DreamSymbol }) {
  const badge = TYPE_BADGE[symbol.type];
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-base font-bold text-gray-900 dark:text-gray-100">{symbol.keyword}</span>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${badge.className}`}>
          {badge.label}
        </span>
      </div>
      <p className="mb-1.5 text-sm font-semibold text-fortune">{symbol.meaning}</p>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{symbol.detail}</p>
    </div>
  );
}

export default function DreamApp() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const searchResults = query.trim() ? searchDreams(query) : [];
  const activeCategory = activeCat ? DREAM_CATEGORIES.find((c) => c.id === activeCat) : null;

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
          꿈에서 본 것을 검색하세요
        </label>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveCat(null); }}
            placeholder="예: 뱀, 돈, 비행기..."
            className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-sm text-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Search results */}
        {query.trim() && (
          <div className="mt-4 space-y-3">
            {searchResults.length > 0 ? (
              <>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  검색 결과 {searchResults.length}건
                </p>
                {searchResults.map((sym, i) => (
                  <DreamCard key={i} symbol={sym} />
                ))}
              </>
            ) : (
              <p className="py-4 text-center text-sm text-gray-400">
                검색 결과가 없습니다. 다른 키워드로 검색해보세요.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Category browsing */}
      {!query.trim() && (
        <>
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              카테고리별 꿈 풀이
            </label>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {DREAM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)}
                  className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-3 transition-all ${
                    activeCat === cat.id
                      ? "border-violet-400 bg-violet-50 dark:border-violet-500 dark:bg-violet-950"
                      : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                  }`}
                >
                  <span className="text-xl">{cat.emoji}</span>
                  <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category symbols */}
          {activeCategory && (
            <div className="animate-fade-in-up space-y-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {activeCategory.emoji} {activeCategory.name} 관련 꿈
              </h3>
              {activeCategory.symbols.map((sym, i) => (
                <DreamCard key={i} symbol={sym} />
              ))}
            </div>
          )}

          {/* Show all if no category selected */}
          {!activeCat && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                인기 꿈 해몽
              </h3>
              {DREAM_CATEGORIES.slice(0, 3).flatMap((cat) => cat.symbols.slice(0, 2)).map((sym, i) => (
                <DreamCard key={i} symbol={sym} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
