"use client";

import { useState, useMemo } from "react";

interface AnimalInfo {
  name: string;
  hanja: string;
  emoji: string;
  personality: string;
  goodMatch: number[];
  badMatch: number[];
  famous: string[];
  fortune: string;
}

const ANIMALS: AnimalInfo[] = [
  { name: "쥐", hanja: "자(子)", emoji: "\uD83D\uDC00", personality: "영리하고 재치있으며 적응력이 뛰어납니다. 사교적이고 매력적이지만, 때로는 욕심이 많을 수 있습니다. 세밀한 관찰력으로 기회를 잘 포착합니다.", goodMatch: [4, 8, 1], badMatch: [6, 7], famous: ["정조대왕", "세종대왕", "이소라"], fortune: "새로운 인연이 찾아오는 해, 적극적으로 움직이세요." },
  { name: "소", hanja: "축(丑)", emoji: "\uD83D\uDC02", personality: "성실하고 인내심이 강하며 신뢰할 수 있습니다. 꾸준한 노력으로 목표를 달성하는 타입. 보수적이지만 한번 마음먹으면 끝까지 밀고 나갑니다.", goodMatch: [5, 9, 0], badMatch: [6, 7], famous: ["이순신 장군", "김연아", "나폴레옹"], fortune: "꾸준한 노력이 결실을 맺는 해입니다." },
  { name: "호랑이", hanja: "인(寅)", emoji: "\uD83D\uDC05", personality: "용감하고 자신감이 넘치며 리더십이 뛰어납니다. 정의감이 강하고 도전적이지만, 충동적일 수 있습니다. 카리스마로 주변을 이끕니다.", goodMatch: [6, 10, 3], badMatch: [8, 5], famous: ["퀸 엘리자베스 2세", "톰 크루즈", "이민호"], fortune: "리더십을 발휘할 기회가 많아지는 해입니다." },
  { name: "토끼", hanja: "묘(卯)", emoji: "\uD83D\uDC07", personality: "온화하고 예의 바르며 감성이 풍부합니다. 예술적 감각이 뛰어나고 평화를 사랑합니다. 신중하지만 때로는 우유부단할 수 있습니다.", goodMatch: [7, 11, 2], badMatch: [9, 4], famous: ["알베르트 아인슈타인", "아이유", "데이비드 베컴"], fortune: "예술적 감성이 빛나는 해, 창의적 활동에 집중하세요." },
  { name: "용", hanja: "진(辰)", emoji: "\uD83D\uDC09", personality: "열정적이고 에너지가 넘치며 야심이 큽니다. 카리스마와 자신감으로 큰 일을 성취합니다. 때로는 독선적일 수 있습니다.", goodMatch: [0, 8, 5], badMatch: [3, 10], famous: ["브루스 리", "존 레논", "이영애"], fortune: "큰 도전이 큰 성공으로 이어지는 해입니다." },
  { name: "뱀", hanja: "사(巳)", emoji: "\uD83D\uDC0D", personality: "지혜롭고 직관력이 뛰어나며 신비로운 매력이 있습니다. 깊은 사고력과 분석력을 가졌으며, 목표를 향해 조용히 움직입니다.", goodMatch: [1, 9, 4], badMatch: [2, 11], famous: ["간디", "피카소", "테일러 스위프트"], fortune: "직관을 믿고 행동하면 좋은 결과가 있는 해입니다." },
  { name: "말", hanja: "오(午)", emoji: "\uD83D\uDC0E", personality: "활동적이고 자유를 사랑하며 낙관적입니다. 넓은 인맥과 뛰어난 행동력을 가졌습니다. 성급하지만 정이 많습니다.", goodMatch: [2, 10, 7], badMatch: [0, 1], famous: ["칭기즈 칸", "폴 매카트니", "성룡"], fortune: "여행과 이동에서 행운이 따르는 해입니다." },
  { name: "양", hanja: "미(未)", emoji: "\uD83D\uDC11", personality: "온순하고 예술적이며 동정심이 깊습니다. 창의력과 상상력이 뛰어나며 조화를 추구합니다. 결단력이 부족할 때도 있습니다.", goodMatch: [3, 11, 6], badMatch: [0, 1], famous: ["미켈란젤로", "마크 트웨인", "줄리아 로버츠"], fortune: "예술과 창작에서 영감이 넘치는 해입니다." },
  { name: "원숭이", hanja: "신(申)", emoji: "\uD83D\uDC12", personality: "재치있고 영리하며 다재다능합니다. 문제 해결 능력이 뛰어나고 유머 감각이 좋습니다. 호기심이 많지만 끈기가 부족할 수 있습니다.", goodMatch: [0, 4, 9], badMatch: [2, 11], famous: ["레오나르도 다빈치", "윌 스미스", "셀레나 고메즈"], fortune: "새로운 기술을 배우면 크게 도움되는 해입니다." },
  { name: "닭", hanja: "유(酉)", emoji: "\uD83D\uDC13", personality: "부지런하고 정직하며 관찰력이 뛰어납니다. 완벽주의 성향이 있고 자기 표현이 확실합니다. 날카로운 비판력을 가졌습니다.", goodMatch: [1, 5, 8], badMatch: [3, 11], famous: ["공자", "엘튼 존", "비욘세"], fortune: "세밀한 계획이 큰 성과로 이어지는 해입니다." },
  { name: "개", hanja: "술(戌)", emoji: "\uD83D\uDC15", personality: "충직하고 정의롭며 책임감이 강합니다. 진실된 성품으로 신뢰를 받으며, 가족과 친구를 소중히 여깁니다. 걱정이 많을 수 있습니다.", goodMatch: [2, 6, 11], badMatch: [4, 5], famous: ["소크라테스", "마더 테레사", "마이클 잭슨"], fortune: "가까운 사람들과의 관계가 더욱 깊어지는 해입니다." },
  { name: "돼지", hanja: "해(亥)", emoji: "\uD83D\uDC16", personality: "낙천적이고 관대하며 복이 많습니다. 사교적이고 성실하며, 물질적 풍요를 추구합니다. 순진해서 손해를 볼 수 있습니다.", goodMatch: [3, 7, 10], badMatch: [5, 8], famous: ["헨리 포드", "로널드 레이건", "힐러리 클린턴"], fortune: "재물운이 강한 해, 투자에 적기입니다." },
];

function getAnimalIndex(year: number): number {
  return ((year - 4) % 12 + 12) % 12;
}

export default function ZodiacAnimalApp() {
  const [year, setYear] = useState(1990);

  const animalIdx = useMemo(() => getAnimalIndex(year), [year]);
  const animal = ANIMALS[animalIdx];

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">출생년도 입력</h2>
        <div className="mb-3">
          <input
            type="number"
            min={1924}
            max={2030}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center text-xl font-bold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
          />
        </div>
        <input
          type="range"
          min={1924}
          max={2030}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full accent-amber-500"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-400">
          <span>1924</span>
          <span>1970</span>
          <span>2030</span>
        </div>
      </div>

      {/* 12띠 그리드 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">12간지</h2>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {ANIMALS.map((a, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - animalIdx;
                setYear(year + diff);
              }}
              className={`flex flex-col items-center rounded-xl py-3 text-sm transition-colors ${
                i === animalIdx
                  ? "bg-amber-500 text-white shadow-lg ring-2 ring-amber-300"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-2xl">{a.emoji}</span>
              <span className="mt-1 text-xs font-medium">{a.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 결과 */}
      <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 sm:p-6 shadow-lg dark:border-amber-800 dark:from-amber-950 dark:to-orange-950">
        <div className="mb-4 text-center">
          <div className="text-6xl">{animal.emoji}</div>
          <div className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-50">
            {animal.name}띠
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {animal.hanja} | {year}년생
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-white/60 p-4 text-sm leading-relaxed text-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
          <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">성격 특성</h3>
          {animal.personality}
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/60 p-3 dark:bg-gray-900/60">
            <h3 className="mb-2 text-sm font-bold text-green-600">잘 맞는 띠</h3>
            <div className="flex gap-2">
              {animal.goodMatch.map((idx) => (
                <span key={idx} className="flex flex-col items-center text-xs">
                  <span className="text-xl">{ANIMALS[idx].emoji}</span>
                  <span className="text-gray-600 dark:text-gray-400">{ANIMALS[idx].name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white/60 p-3 dark:bg-gray-900/60">
            <h3 className="mb-2 text-sm font-bold text-red-600">안 맞는 띠</h3>
            <div className="flex gap-2">
              {animal.badMatch.map((idx) => (
                <span key={idx} className="flex flex-col items-center text-xs">
                  <span className="text-xl">{ANIMALS[idx].emoji}</span>
                  <span className="text-gray-600 dark:text-gray-400">{ANIMALS[idx].name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-white/60 p-3 dark:bg-gray-900/60">
          <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">같은 띠 유명인</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {animal.famous.join(", ")}
          </div>
        </div>

        <div className="rounded-lg bg-amber-100 p-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
          올해의 운세: {animal.fortune}
        </div>
      </div>
    </div>
  );
}
