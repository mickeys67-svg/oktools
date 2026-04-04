"use client";

import { useState, useMemo } from "react";

type VehicleType = "passenger" | "van" | "truck" | "special" | "electric";

interface VehicleOption {
  id: VehicleType;
  label: string;
}

const VEHICLE_TYPES: VehicleOption[] = [
  { id: "passenger", label: "승용차" },
  { id: "van", label: "승합차" },
  { id: "truck", label: "화물차" },
  { id: "special", label: "특수차" },
  { id: "electric", label: "전기차" },
];

function getPassengerTax(cc: number, business: boolean): number {
  if (business) {
    if (cc <= 1000) return cc * 18;
    if (cc <= 1600) return cc * 18;
    return cc * 19;
  }
  if (cc <= 1000) return cc * 80;
  if (cc <= 1600) return cc * 140;
  return cc * 200;
}

function getAgeDiscount(registrationYear: number): { rate: number; years: number } {
  const currentYear = new Date().getFullYear();
  const age = currentYear - registrationYear;
  if (age < 3) return { rate: 0, years: age };
  const discountYears = age - 2; // 3년차부터 (index 1)
  const rate = Math.min(discountYears * 5, 50);
  return { rate, years: age };
}

export default function CarTaxCalc() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("passenger");
  const [cc, setCc] = useState(1600);
  const [regYear, setRegYear] = useState(2020);
  const [isBusiness, setIsBusiness] = useState(false);

  const result = useMemo(() => {
    let baseTax = 0;

    if (vehicleType === "electric") {
      baseTax = 100000;
    } else if (vehicleType === "passenger") {
      baseTax = getPassengerTax(cc, isBusiness);
    } else if (vehicleType === "van") {
      baseTax = isBusiness ? 25000 : 65000;
    } else if (vehicleType === "truck") {
      baseTax = isBusiness ? 6600 : 28500;
    } else {
      // special
      baseTax = isBusiness ? 13500 : 58000;
    }

    const { rate: discountRate, years } = getAgeDiscount(regYear);
    const discountAmount = Math.floor(baseTax * (discountRate / 100));
    const taxAfterDiscount = baseTax - discountAmount;

    const educationTax = Math.floor(taxAfterDiscount * 0.3);
    const totalAnnual = taxAfterDiscount + educationTax;

    const halfYear = Math.ceil(totalAnnual / 2);

    // 연납 할인 약 4.57%
    const annualPayDiscount = Math.floor(totalAnnual * 0.0457);
    const annualPayTotal = totalAnnual - annualPayDiscount;

    return {
      baseTax,
      discountRate,
      discountAmount,
      taxAfterDiscount,
      educationTax,
      totalAnnual,
      halfYear,
      annualPayDiscount,
      annualPayTotal,
      vehicleAge: years,
    };
  }, [vehicleType, cc, regYear, isBusiness]);

  const needsCc = vehicleType === "passenger";

  return (
    <div className="space-y-6">
      {/* Vehicle type */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-50">차량 유형</h2>
        <div className="flex flex-wrap gap-2">
          {VEHICLE_TYPES.map((v) => (
            <button
              key={v.id}
              onClick={() => setVehicleType(v.id)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                vehicleType === v.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-50">차량 정보</h2>
        <div className="space-y-4">
          {needsCc && (
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">배기량 (cc)</label>
              <input
                type="number"
                min={0}
                value={cc}
                onChange={(e) => setCc(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">최초등록년도</label>
            <input
              type="number"
              min={1990}
              max={new Date().getFullYear()}
              value={regYear}
              onChange={(e) => setRegYear(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </div>
          {vehicleType !== "electric" && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBusiness(!isBusiness)}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  isBusiness ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    isBusiness ? "translate-x-5" : ""
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700 dark:text-gray-300">영업용 차량</span>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-gray-50">자동차세 계산 결과</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">기본 자동차세</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {result.baseTax.toLocaleString("ko-KR")}원
            </span>
          </div>

          {result.discountRate > 0 && (
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3 dark:bg-blue-950">
              <span className="text-sm text-blue-600 dark:text-blue-400">
                차령 경감 ({result.vehicleAge}년, -{result.discountRate}%)
              </span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                -{result.discountAmount.toLocaleString("ko-KR")}원
              </span>
            </div>
          )}

          <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">경감 후 자동차세</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {result.taxAfterDiscount.toLocaleString("ko-KR")}원
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">교육세 (30%)</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {result.educationTax.toLocaleString("ko-KR")}원
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-blue-100 px-4 py-3 dark:bg-blue-900">
            <span className="text-sm font-bold text-blue-800 dark:text-blue-200">연간 합계</span>
            <span className="text-xl font-extrabold text-blue-700 dark:text-blue-300">
              {result.totalAnnual.toLocaleString("ko-KR")}원
            </span>
          </div>
        </div>
      </div>

      {/* Payment info */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-50">납부 안내</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400">상반기 (6월)</div>
            <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">
              {result.halfYear.toLocaleString("ko-KR")}원
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400">하반기 (12월)</div>
            <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">
              {(result.totalAnnual - result.halfYear).toLocaleString("ko-KR")}원
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">연납 시 (4.57% 할인)</div>
              <div className="mt-1 text-lg font-bold text-green-700 dark:text-green-300">
                {result.annualPayTotal.toLocaleString("ko-KR")}원
              </div>
            </div>
            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900 dark:text-green-300">
              -{result.annualPayDiscount.toLocaleString("ko-KR")}원 절약
            </div>
          </div>
        </div>
      </div>

      {/* Passenger car rate table */}
      {vehicleType === "passenger" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-50">승용차 세율 기준</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 text-left font-medium text-gray-500">배기량</th>
                  <th className="py-2 text-right font-medium text-gray-500">비영업용</th>
                  <th className="py-2 text-right font-medium text-gray-500">영업용</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2">1,000cc 이하</td>
                  <td className="py-2 text-right">cc당 80원</td>
                  <td className="py-2 text-right">cc당 18원</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2">1,000~1,600cc</td>
                  <td className="py-2 text-right">cc당 140원</td>
                  <td className="py-2 text-right">cc당 18원</td>
                </tr>
                <tr>
                  <td className="py-2">1,600cc 초과</td>
                  <td className="py-2 text-right">cc당 200원</td>
                  <td className="py-2 text-right">cc당 19원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
