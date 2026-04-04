"use client";

import { useState, useMemo } from "react";
import { MBTI_TYPES, mbtiInfo, getCompatibility } from "@/data/mbti-data";

const GROUPS = [
  { label: "분석가", types: ["INTJ", "INTP", "ENTJ", "ENTP"], color: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300" },
  { label: "외교관", types: ["INFJ", "INFP", "ENFJ", "ENFP"], color: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300" },
  { label: "관리자", types: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { label: "탐험가", types: ["ISTP", "ISFP", "ESTP", "ESFP"], color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
];

function getLevelColor(level: string): string {
  switch (level) {
    case "best": return "text-rose-500";
    case "good": return "text-emerald-500";
    case "neutral": return "text-blue-500";
    case "bad": return "text-amber-500";
    default: return "text-gray-500";
  }
}

function getLevelBg(level: string): string {
  switch (level) {
    case "best": return "bg-rose-50 border-rose-200 dark:bg-rose-950/30 dark:border-rose-800";
    case "good": return "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800";
    case "neutral": return "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800";
    case "bad": return "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800";
    default: return "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700";
  }
}

export default function MBTICompatibility() {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  const result = useMemo(() => {
    if (!type1 || !type2) return null;
    return getCompatibility(type1, type2);
  }, [type1, type2]);

  const info1 = type1 ? mbtiInfo[type1] : null;
  const info2 = type2 ? mbtiInfo[type2] : null;

  return (
    <div className="space-y-6">
      {/* Type Selection */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "나의 MBTI", value: type1, setter: setType1 },
          { label: "상대방 MBTI", value: type2, setter: setType2 },
        ].map(({ label, value, setter }, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
            {GROUPS.map((group) => (
              <div key={group.label} className="mb-2">
                <p className="mb-1 text-[10px] font-medium text-gray-400">{group.label}</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {group.types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setter(t)}
                      className={`rounded-lg py-2 text-xs font-bold transition-all ${
                        value === t
                          ? "bg-violet-600 text-white shadow-md"
                          : `${group.color} hover:opacity-80`
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Selected Type Info */}
      {(info1 || info2) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {[info1, info2].map((info, i) =>
            info ? (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {info.type} <span className="text-sm font-normal text-gray-400">{info.nickname}</span>
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px] font-medium text-emerald-500">강점</p>
                    {info.strengths.map((s, j) => (
                      <p key={j} className="text-xs text-gray-600 dark:text-gray-400">• {s}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-amber-500">약점</p>
                    {info.weaknesses.map((w, j) => (
                      <p key={j} className="text-xs text-gray-600 dark:text-gray-400">• {w}</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}

      {/* Compatibility Result */}
      {result && (
        <div className={`animate-fade-in-up rounded-xl border p-6 text-center ${getLevelBg(result.level)}`}>
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {type1} × {type2} 궁합
          </p>
          <p className={`text-4xl font-extrabold sm:text-5xl ${getLevelColor(result.level)}`}>
            {result.score}<span className="text-xl">점</span>
          </p>
          <p className={`mt-2 text-lg font-bold ${getLevelColor(result.level)}`}>
            {result.title}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {result.description}
          </p>
        </div>
      )}
    </div>
  );
}
