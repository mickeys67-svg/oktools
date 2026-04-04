"use client";

import { useState, useCallback } from "react";
import { getCategoryById } from "@/data/conversions";
import { convert, formatNumber } from "@/lib/converter";

interface ConverterFormProps {
  categoryId: string;
  initialFrom: string;
  initialTo: string;
}

export default function ConverterForm({ categoryId, initialFrom, initialTo }: ConverterFormProps) {
  const category = getCategoryById(categoryId)!;
  const [fromUnit, setFromUnit] = useState(initialFrom);
  const [toUnit, setToUnit] = useState(initialTo);
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState(() =>
    formatNumber(convert(categoryId, initialFrom, initialTo, 1))
  );

  const handleFromChange = useCallback(
    (value: string) => {
      setFromValue(value);
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setToValue(formatNumber(convert(categoryId, fromUnit, toUnit, num)));
      } else {
        setToValue("");
      }
    },
    [categoryId, fromUnit, toUnit]
  );

  const handleToChange = useCallback(
    (value: string) => {
      setToValue(value);
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setFromValue(formatNumber(convert(categoryId, toUnit, fromUnit, num)));
      } else {
        setFromValue("");
      }
    },
    [categoryId, fromUnit, toUnit]
  );

  const handleFromUnitChange = useCallback(
    (unitId: string) => {
      setFromUnit(unitId);
      const num = parseFloat(fromValue);
      if (!isNaN(num)) {
        setToValue(formatNumber(convert(categoryId, unitId, toUnit, num)));
      }
    },
    [categoryId, fromValue, toUnit]
  );

  const handleToUnitChange = useCallback(
    (unitId: string) => {
      setToUnit(unitId);
      const num = parseFloat(fromValue);
      if (!isNaN(num)) {
        setToValue(formatNumber(convert(categoryId, fromUnit, unitId, num)));
      }
    },
    [categoryId, fromValue, fromUnit]
  );

  const handleSwap = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
    setToValue(fromValue);
  }, [fromUnit, toUnit, fromValue, toValue]);

  const fromUnitData = category.units.find((u) => u.id === fromUnit);
  const toUnitData = category.units.find((u) => u.id === toUnit);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        {/* From */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">From</label>
          <select
            value={fromUnit}
            onChange={(e) => handleFromUnitChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {category.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleFromChange(e.target.value)}
            className="w-full px-4 py-4 text-2xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            placeholder="Enter value"
          />
        </div>

        {/* Swap button */}
        <div className="flex justify-center pb-2">
          <button
            onClick={handleSwap}
            className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
            aria-label="Swap units"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">To</label>
          <select
            value={toUnit}
            onChange={(e) => handleToUnitChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {category.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
          <input
            type="number"
            value={toValue}
            onChange={(e) => handleToChange(e.target.value)}
            className="w-full px-4 py-4 text-2xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-blue-50"
            placeholder="Result"
          />
        </div>
      </div>

      {/* Formula display */}
      {fromUnitData && toUnitData && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-600">
            <span className="font-semibold">1 {fromUnitData.name}</span> ={" "}
            <span className="font-semibold text-blue-600">
              {formatNumber(convert(categoryId, fromUnit, toUnit, 1))} {toUnitData.name}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
