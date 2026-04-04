"use client";

import { useState, useMemo } from "react";

type Scale = "4.5" | "4.3";

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

const GRADES_45: Record<string, number> = {
  "A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0,
};

const GRADES_43: Record<string, number> = {
  "A+": 4.3, "A0": 4.0, "A-": 3.7, "B+": 3.3, "B0": 3.0, "B-": 2.7, "C+": 2.3, "C0": 2.0, "C-": 1.7, "D+": 1.3, "D0": 1.0, "D-": 0.7, "F": 0.0,
};

let nextId = 1;

function createCourse(credits = 3): Course {
  return { id: nextId++, name: "", credits, grade: "A+" };
}

export default function GPACalculator() {
  const [scale, setScale] = useState<Scale>("4.5");
  const [courses, setCourses] = useState<Course[]>([
    createCourse(3),
    createCourse(3),
    createCourse(3),
    createCourse(3),
    createCourse(3),
  ]);

  const grades = scale === "4.5" ? GRADES_45 : GRADES_43;
  const maxGPA = scale === "4.5" ? 4.5 : 4.3;

  const result = useMemo(() => {
    if (courses.length === 0) return null;
    let totalCredits = 0;
    let totalPoints = 0;
    for (const c of courses) {
      const point = grades[c.grade];
      if (point === undefined) continue;
      totalCredits += c.credits;
      totalPoints += c.credits * point;
    }
    if (totalCredits === 0) return null;
    const gpa = totalPoints / totalCredits;
    const percentage = (gpa / maxGPA) * 100;
    return { totalCredits, gpa, percentage };
  }, [courses, grades, maxGPA]);

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const removeCourse = (id: number) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Scale toggle */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">만점 기준</label>
          <div className="flex gap-2">
            {(["4.5", "4.3"] as const).map((s) => (
              <button key={s} onClick={() => setScale(s)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${scale === s ? "bg-life text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                {s} 만점
              </button>
            ))}
          </div>
        </div>

        {/* Course list */}
        <div className="space-y-2">
          {courses.map((c, idx) => (
            <div key={c.id} className="flex items-center gap-2">
              <span className="w-6 text-center text-xs text-gray-400">{idx + 1}</span>
              <input
                type="text"
                value={c.name}
                onChange={(e) => updateCourse(c.id, "name", e.target.value)}
                placeholder="과목명"
                className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
              <select
                value={c.credits}
                onChange={(e) => updateCourse(c.id, "credits", Number(e.target.value))}
                className="w-16 rounded-lg border border-gray-300 bg-white py-2 px-1 text-center text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              >
                {[1, 2, 3, 4].map((cr) => (
                  <option key={cr} value={cr}>{cr}학점</option>
                ))}
              </select>
              <select
                value={c.grade}
                onChange={(e) => updateCourse(c.id, "grade", e.target.value)}
                className="w-16 rounded-lg border border-gray-300 bg-white py-2 px-1 text-center text-sm font-bold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              >
                {Object.keys(grades).map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <button onClick={() => removeCourse(c.id)}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Add buttons */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[3, 2, 1].map((cr) => (
            <button key={cr} onClick={() => setCourses((prev) => [...prev, createCourse(cr)])}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              + {cr}학점 과목
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 text-center">
            <p className="mb-1 text-sm text-gray-500">평균 평점</p>
            <p className="text-3xl font-extrabold text-life sm:text-4xl">
              {result.gpa.toFixed(2)} <span className="text-lg font-normal text-gray-400">/ {maxGPA}</span>
            </p>
          </div>
          <div className="mb-4">
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full rounded-full bg-life transition-all" style={{ width: `${result.percentage}%` }} />
            </div>
            <p className="mt-1 text-center text-xs text-gray-400">{result.percentage.toFixed(1)}%</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="text-xs text-gray-500">총 취득학점</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{result.totalCredits}학점</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="text-xs text-gray-500">과목 수</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{courses.length}개</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
