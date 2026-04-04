"use client";

import { useState, useCallback } from "react";
import { drawCards, getCardEmoji, type TarotCard } from "@/data/tarot-cards";

type Phase = "select-spread" | "drawing" | "reveal";
type Spread = "one" | "three";

const SPREAD_INFO = {
  one: { name: "원 카드", count: 1, description: "오늘의 메시지를 한 장으로 확인합니다." },
  three: { name: "쓰리 카드", count: 3, description: "과거 · 현재 · 미래를 세 장으로 읽습니다." },
};

const POSITION_LABELS = ["과거", "현재", "미래"];

interface DrawnCard {
  card: TarotCard;
  reversed: boolean;
  revealed: boolean;
}

export default function TarotApp() {
  const [phase, setPhase] = useState<Phase>("select-spread");
  const [spread, setSpread] = useState<Spread>("three");
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [revealIdx, setRevealIdx] = useState(-1);

  const startDrawing = useCallback((s: Spread) => {
    setSpread(s);
    const drawn = drawCards(SPREAD_INFO[s].count);
    setCards(
      drawn.map((card) => ({
        card,
        reversed: Math.random() < 0.3,
        revealed: false,
      }))
    );
    setRevealIdx(-1);
    setPhase("drawing");
  }, []);

  const revealCard = useCallback((idx: number) => {
    setCards((prev) =>
      prev.map((c, i) => (i === idx ? { ...c, revealed: true } : c))
    );
    setRevealIdx(idx);
    if (cards.every((c, i) => i === idx || c.revealed)) {
      setTimeout(() => setPhase("reveal"), 600);
    }
  }, [cards]);

  const restart = useCallback(() => {
    setPhase("select-spread");
    setCards([]);
    setRevealIdx(-1);
  }, []);

  return (
    <div className="space-y-6">
      {/* Spread Selection */}
      {phase === "select-spread" && (
        <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-violet-50 to-white p-6 text-center sm:p-8 dark:border-gray-800 dark:from-violet-950/30 dark:to-gray-900">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">스프레드를 선택하세요</p>
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
            어떤 방식으로 카드를 뽑으시겠습니까?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            {(["one", "three"] as const).map((s) => (
              <button
                key={s}
                onClick={() => startDrawing(s)}
                className="rounded-xl border-2 border-violet-200 bg-white px-6 py-4 text-left transition-all hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg sm:w-56 sm:text-center dark:border-violet-800 dark:bg-gray-900 dark:hover:border-violet-600"
              >
                <p className="text-lg font-bold text-violet-700 dark:text-violet-400">
                  {SPREAD_INFO[s].name}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {SPREAD_INFO[s].description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card Drawing */}
      {(phase === "drawing" || phase === "reveal") && (
        <>
          <div className="flex justify-center gap-4 sm:gap-6">
            {cards.map((dc, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                {spread === "three" && (
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {POSITION_LABELS[i]}
                  </p>
                )}
                <button
                  onClick={() => !dc.revealed && revealCard(i)}
                  disabled={dc.revealed}
                  className="group perspective-1000"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`relative h-48 w-32 sm:h-56 sm:w-36 transition-transform duration-700 ${
                      dc.revealed ? "" : "cursor-pointer"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: dc.revealed ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Card Back */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-violet-300 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 shadow-lg dark:border-violet-700"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="text-center">
                        <p className="text-3xl">✦</p>
                        <p className="mt-2 text-xs font-medium text-violet-200">
                          탭하여 공개
                        </p>
                      </div>
                    </div>
                    {/* Card Front */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-violet-200 bg-white p-3 shadow-lg dark:border-violet-800 dark:bg-gray-900"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-3xl">{getCardEmoji(dc.card)}</p>
                      <p className={`mt-2 text-center text-sm font-bold text-gray-900 dark:text-gray-100 ${
                        dc.reversed ? "rotate-180" : ""
                      }`}>
                        {dc.card.name}
                      </p>
                      {dc.reversed && (
                        <span className="mt-1 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-600 dark:bg-red-950 dark:text-red-400">
                          역방향
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Reading Results */}
          {phase === "reveal" && (
            <div className="animate-fade-in-up space-y-4">
              {cards.map((dc, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{getCardEmoji(dc.card)}</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">
                        {spread === "three" && (
                          <span className="mr-2 text-sm text-violet-500">[{POSITION_LABELS[i]}]</span>
                        )}
                        {dc.card.name}
                        {dc.reversed && (
                          <span className="ml-2 text-sm text-red-500">(역방향)</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-400">{dc.card.nameEn}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {dc.reversed ? dc.card.reversedMeaning : dc.card.uprightMeaning}
                  </p>
                </div>
              ))}

              <button
                onClick={restart}
                className="mx-auto block rounded-full bg-violet-600 px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                다시 뽑기
              </button>
            </div>
          )}

          {phase === "drawing" && !cards.every((c) => c.revealed) && (
            <p className="text-center text-sm text-gray-400">
              카드를 탭하여 공개하세요
            </p>
          )}
        </>
      )}
    </div>
  );
}
