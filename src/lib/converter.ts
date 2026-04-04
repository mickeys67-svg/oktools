import { categories, type Unit } from "@/data/conversions";

export function convert(
  categoryId: string,
  fromUnitId: string,
  toUnitId: string,
  value: number
): number {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) throw new Error(`Category "${categoryId}" not found`);

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);
  if (!fromUnit || !toUnit) throw new Error("Unit not found");

  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
}

export function formatNumber(num: number): string {
  if (num === 0) return "0";
  if (Math.abs(num) >= 1e15 || (Math.abs(num) < 1e-10 && num !== 0)) {
    return num.toExponential(6);
  }
  // Up to 10 decimal places, trim trailing zeros
  const fixed = num.toFixed(10);
  return parseFloat(fixed).toString();
}

export function generateConversionTable(
  categoryId: string,
  fromUnitId: string,
  toUnitId: string
): { from: number; to: string }[] {
  const values = [1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100, 500, 1000];
  return values.map((v) => ({
    from: v,
    to: formatNumber(convert(categoryId, fromUnitId, toUnitId, v)),
  }));
}

export function getUnitPair(
  categoryId: string,
  converterSlug: string
): { fromUnit: Unit; toUnit: Unit } | null {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  const match = converterSlug.match(/^(.+)-to-(.+)$/);
  if (!match) return null;

  const fromUnit = category.units.find((u) => u.id === match[1]);
  const toUnit = category.units.find((u) => u.id === match[2]);
  if (!fromUnit || !toUnit) return null;

  return { fromUnit, toUnit };
}
