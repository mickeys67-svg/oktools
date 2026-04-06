"use client";

import { useState, useMemo } from "react";
import { formatNumber } from "@/lib/format-ko";
import NumberWheel from "@/components/ui/NumberWheel";

// 한국전력 주택용(저압) 2024 기준
const TIERS = [
  { max: 200, baseFee: 910, rate: 120.0, label: "1단계 (0~200kWh)" },
  { max: 400, baseFee: 1600, rate: 214.6, label: "2단계 (201~400kWh)" },
  { max: Infinity, baseFee: 7300, rate: 307.3, label: "3단계 (401kWh~)" },
];

function calcElectricity(kWh: number) {
  let baseFee = 0;
  let energyCharge = 0;
  const breakdown: { label: string; kWh: number; amount: number }[] = [];

  let remaining = kWh;
  let prevMax = 0;

  for (const tier of TIERS) {
    if (remaining <= 0) break;
    const tierKWh = Math.min(remaining, tier.max - prevMax);
    const tierAmount = tierKWh * tier.rate;
    energyCharge += tierAmount;
    breakdown.push({ label: tier.label, kWh: tierKWh, amount: Math.round(tierAmount) });
    baseFee = tier.baseFee; // 마지막으로 사용한 단계의 기본요금 적용
    remaining -= tierKWh;
    prevMax = tier.max;
  }

  const subtotal = baseFee + energyCharge;
  const vat = Math.floor(subtotal * 0.1); // 부가가치세 10%
  const fund = Math.floor(subtotal * 0.037); // 전력산업기반기금 3.7%
  const total = subtotal + vat + fund;

  // 10원 미만 절사
  const totalRounded = Math.floor(total / 10) * 10;

  return { baseFee, energyCharge: Math.round(energyCharge), vat, fund, total: totalRounded, breakdown };
}

export default function ElectricityCalc() {
  const [kWh, setKWh] = useState(300);

  const result = useMemo(() => {
    if (kWh < 0) return null;
    return calcElectricity(kWh);
  }, [kWh]);

  const presets = [100, 200, 300, 400, 500];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">월간 전력 사용량 (kWh)</label>
          <div className="flex justify-center">
            <NumberWheel
              min={0}
              max={2000}
              step={10}
              value={Math.round(kWh / 10) * 10}
              onChange={setKWh}
              unit="kWh"
              width={100}
              accentClass="bg-life/10 dark:bg-life/20"
            />
          </div>
        </div>
        <input type="range" min={0} max={1000} value={kWh} onChange={(e) => setKWh(Number(e.target.value))}
          className="mb-3 w-full accent-pink-500" />
        <div className="flex flex-wrap gap-2">
          {presets.map((v) => (
            <button key={v} onClick={() => setKWh(v)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${kWh === v ? "bg-life text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
              {v} kWh
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Total */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500">예상 전기요금</p>
              <p className="text-3xl font-extrabold text-life sm:text-4xl">{formatNumber(result.total)}원</p>
              <p className="mt-1 text-xs text-gray-400">평균 가구 사용량: 약 300kWh</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">기본요금</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(result.baseFee)}원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">전력량요금</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(result.energyCharge)}원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">부가가치세 (10%)</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(result.vat)}원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">전력산업기반기금 (3.7%)</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(result.fund)}원</span>
              </div>
              <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-700 dark:text-gray-300">합계</span>
                  <span className="text-life">{formatNumber(result.total)}원</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tier breakdown */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">구간별 사용량</h3>
            {result.breakdown.map((b) => (
              <div key={b.label} className="mb-2">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-gray-500">{b.label}</span>
                  <span className="text-gray-600 dark:text-gray-400">{b.kWh}kWh = {formatNumber(b.amount)}원</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full rounded-full bg-life transition-all"
                    style={{ width: `${kWh > 0 ? (b.kWh / kWh) * 100 : 0}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
