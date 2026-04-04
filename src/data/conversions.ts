export interface Unit {
  id: string;
  name: string;
  nameKo: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface Category {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  icon: string;
  baseUnit: string;
  units: Unit[];
}

// ─── LENGTH (base: meter) ───────────────────────────────────────────
const lengthUnits: Unit[] = [
  { id: "meter", name: "Meter", nameKo: "미터", symbol: "m", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilometer", name: "Kilometer", nameKo: "킬로미터", symbol: "km", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "centimeter", name: "Centimeter", nameKo: "센티미터", symbol: "cm", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  { id: "millimeter", name: "Millimeter", nameKo: "밀리미터", symbol: "mm", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "micrometer", name: "Micrometer", nameKo: "마이크로미터", symbol: "μm", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "nanometer", name: "Nanometer", nameKo: "나노미터", symbol: "nm", toBase: (v) => v / 1e9, fromBase: (v) => v * 1e9 },
  { id: "mile", name: "Mile", nameKo: "마일", symbol: "mi", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
  { id: "yard", name: "Yard", nameKo: "야드", symbol: "yd", toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
  { id: "foot", name: "Foot", nameKo: "피트", symbol: "ft", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: "inch", name: "Inch", nameKo: "인치", symbol: "in", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  { id: "nautical-mile", name: "Nautical Mile", nameKo: "해리", symbol: "nmi", toBase: (v) => v * 1852, fromBase: (v) => v / 1852 },
  { id: "ri", name: "Ri", nameKo: "리(里)", symbol: "리", toBase: (v) => v * 392.727, fromBase: (v) => v / 392.727 },
  { id: "pyeong-length", name: "Gan", nameKo: "간(間)", symbol: "간", toBase: (v) => v * 1.818, fromBase: (v) => v / 1.818 },
];

// ─── WEIGHT (base: kilogram) ────────────────────────────────────────
const weightUnits: Unit[] = [
  { id: "kilogram", name: "Kilogram", nameKo: "킬로그램", symbol: "kg", toBase: (v) => v, fromBase: (v) => v },
  { id: "gram", name: "Gram", nameKo: "그램", symbol: "g", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "milligram", name: "Milligram", nameKo: "밀리그램", symbol: "mg", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "metric-ton", name: "Metric Ton", nameKo: "톤", symbol: "t", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "pound", name: "Pound", nameKo: "파운드", symbol: "lb", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
  { id: "ounce", name: "Ounce", nameKo: "온스", symbol: "oz", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
  { id: "stone", name: "Stone", nameKo: "스톤", symbol: "st", toBase: (v) => v * 6.35029, fromBase: (v) => v / 6.35029 },
  { id: "geun", name: "Geun", nameKo: "근(斤)", symbol: "근", toBase: (v) => v * 0.6, fromBase: (v) => v / 0.6 },
  { id: "don", name: "Don", nameKo: "돈", symbol: "돈", toBase: (v) => v * 0.00375, fromBase: (v) => v / 0.00375 },
  { id: "nyang", name: "Nyang", nameKo: "냥(兩)", symbol: "냥", toBase: (v) => v * 0.0375, fromBase: (v) => v / 0.0375 },
];

// ─── TEMPERATURE (special: not ratio-based) ─────────────────────────
const temperatureUnits: Unit[] = [
  { id: "celsius", name: "Celsius", nameKo: "섭씨", symbol: "°C", toBase: (v) => v, fromBase: (v) => v },
  { id: "fahrenheit", name: "Fahrenheit", nameKo: "화씨", symbol: "°F", toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => v * 9 / 5 + 32 },
  { id: "kelvin", name: "Kelvin", nameKo: "켈빈", symbol: "K", toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
];

// ─── AREA (base: square meter) ──────────────────────────────────────
const areaUnits: Unit[] = [
  { id: "square-meter", name: "Square Meter", nameKo: "제곱미터", symbol: "m²", toBase: (v) => v, fromBase: (v) => v },
  { id: "square-kilometer", name: "Square Kilometer", nameKo: "제곱킬로미터", symbol: "km²", toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
  { id: "square-centimeter", name: "Square Centimeter", nameKo: "제곱센티미터", symbol: "cm²", toBase: (v) => v / 1e4, fromBase: (v) => v * 1e4 },
  { id: "hectare", name: "Hectare", nameKo: "헥타르", symbol: "ha", toBase: (v) => v * 1e4, fromBase: (v) => v / 1e4 },
  { id: "acre", name: "Acre", nameKo: "에이커", symbol: "ac", toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
  { id: "pyeong", name: "Pyeong", nameKo: "평", symbol: "평", toBase: (v) => v * 3.30579, fromBase: (v) => v / 3.30579 },
  { id: "square-foot", name: "Square Foot", nameKo: "제곱피트", symbol: "ft²", toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
  { id: "square-inch", name: "Square Inch", nameKo: "제곱인치", symbol: "in²", toBase: (v) => v * 0.00064516, fromBase: (v) => v / 0.00064516 },
  { id: "square-yard", name: "Square Yard", nameKo: "제곱야드", symbol: "yd²", toBase: (v) => v * 0.836127, fromBase: (v) => v / 0.836127 },
  { id: "square-mile", name: "Square Mile", nameKo: "제곱마일", symbol: "mi²", toBase: (v) => v * 2.59e6, fromBase: (v) => v / 2.59e6 },
];

// ─── VOLUME (base: liter) ───────────────────────────────────────────
const volumeUnits: Unit[] = [
  { id: "liter", name: "Liter", nameKo: "리터", symbol: "L", toBase: (v) => v, fromBase: (v) => v },
  { id: "milliliter", name: "Milliliter", nameKo: "밀리리터", symbol: "mL", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "cubic-meter", name: "Cubic Meter", nameKo: "세제곱미터", symbol: "m³", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "gallon-us", name: "US Gallon", nameKo: "갤런(미국)", symbol: "gal", toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
  { id: "gallon-uk", name: "UK Gallon", nameKo: "갤런(영국)", symbol: "imp gal", toBase: (v) => v * 4.54609, fromBase: (v) => v / 4.54609 },
  { id: "quart", name: "US Quart", nameKo: "쿼트", symbol: "qt", toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
  { id: "pint", name: "US Pint", nameKo: "파인트", symbol: "pt", toBase: (v) => v * 0.473176, fromBase: (v) => v / 0.473176 },
  { id: "cup", name: "US Cup", nameKo: "컵", symbol: "cup", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
  { id: "fluid-ounce", name: "US Fluid Ounce", nameKo: "액량온스", symbol: "fl oz", toBase: (v) => v * 0.0295735, fromBase: (v) => v / 0.0295735 },
  { id: "tablespoon", name: "Tablespoon", nameKo: "큰술", symbol: "tbsp", toBase: (v) => v * 0.0147868, fromBase: (v) => v / 0.0147868 },
  { id: "teaspoon", name: "Teaspoon", nameKo: "작은술", symbol: "tsp", toBase: (v) => v * 0.00492892, fromBase: (v) => v / 0.00492892 },
  { id: "doe", name: "Doe", nameKo: "되", symbol: "되", toBase: (v) => v * 1.8039, fromBase: (v) => v / 1.8039 },
  { id: "mal", name: "Mal", nameKo: "말", symbol: "말", toBase: (v) => v * 18.039, fromBase: (v) => v / 18.039 },
];

// ─── SPEED (base: meter per second) ─────────────────────────────────
const speedUnits: Unit[] = [
  { id: "meter-per-second", name: "Meter per Second", nameKo: "초속(m/s)", symbol: "m/s", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilometer-per-hour", name: "Kilometer per Hour", nameKo: "시속(km/h)", symbol: "km/h", toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
  { id: "mile-per-hour", name: "Mile per Hour", nameKo: "마일/시", symbol: "mph", toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
  { id: "knot", name: "Knot", nameKo: "노트", symbol: "kn", toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
  { id: "foot-per-second", name: "Foot per Second", nameKo: "피트/초", symbol: "ft/s", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: "mach", name: "Mach", nameKo: "마하", symbol: "Ma", toBase: (v) => v * 343, fromBase: (v) => v / 343 },
];

// ─── DATA (base: byte) ─────────────────────────────────────────────
const dataUnits: Unit[] = [
  { id: "byte", name: "Byte", nameKo: "바이트", symbol: "B", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilobyte", name: "Kilobyte", nameKo: "킬로바이트", symbol: "KB", toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
  { id: "megabyte", name: "Megabyte", nameKo: "메가바이트", symbol: "MB", toBase: (v) => v * 1024 ** 2, fromBase: (v) => v / 1024 ** 2 },
  { id: "gigabyte", name: "Gigabyte", nameKo: "기가바이트", symbol: "GB", toBase: (v) => v * 1024 ** 3, fromBase: (v) => v / 1024 ** 3 },
  { id: "terabyte", name: "Terabyte", nameKo: "테라바이트", symbol: "TB", toBase: (v) => v * 1024 ** 4, fromBase: (v) => v / 1024 ** 4 },
  { id: "bit", name: "Bit", nameKo: "비트", symbol: "b", toBase: (v) => v / 8, fromBase: (v) => v * 8 },
  { id: "kilobit", name: "Kilobit", nameKo: "킬로비트", symbol: "Kb", toBase: (v) => v * 128, fromBase: (v) => v / 128 },
  { id: "megabit", name: "Megabit", nameKo: "메가비트", symbol: "Mb", toBase: (v) => v * 131072, fromBase: (v) => v / 131072 },
  { id: "gigabit", name: "Gigabit", nameKo: "기가비트", symbol: "Gb", toBase: (v) => v * 1.342e8, fromBase: (v) => v / 1.342e8 },
];

// ─── ALL CATEGORIES ─────────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: "length",
    name: "Length",
    nameKo: "길이",
    description: "미터, 피트, 인치, 킬로미터, 마일 등 길이 단위 변환",
    icon: "📏",
    baseUnit: "meter",
    units: lengthUnits,
  },
  {
    id: "weight",
    name: "Weight",
    nameKo: "무게",
    description: "킬로그램, 파운드, 온스, 그램 등 무게 단위 변환",
    icon: "⚖️",
    baseUnit: "kilogram",
    units: weightUnits,
  },
  {
    id: "temperature",
    name: "Temperature",
    nameKo: "온도",
    description: "섭씨, 화씨, 켈빈 온도 단위 변환",
    icon: "🌡️",
    baseUnit: "celsius",
    units: temperatureUnits,
  },
  {
    id: "area",
    name: "Area",
    nameKo: "면적",
    description: "제곱미터, 에이커, 평, 제곱피트 등 면적 단위 변환",
    icon: "📐",
    baseUnit: "square-meter",
    units: areaUnits,
  },
  {
    id: "volume",
    name: "Volume",
    nameKo: "부피",
    description: "리터, 갤런, 컵, 밀리리터 등 부피 단위 변환",
    icon: "🧪",
    baseUnit: "liter",
    units: volumeUnits,
  },
  {
    id: "speed",
    name: "Speed",
    nameKo: "속도",
    description: "km/h, mph, m/s, 노트 등 속도 단위 변환",
    icon: "🚀",
    baseUnit: "meter-per-second",
    units: speedUnits,
  },
  {
    id: "data",
    name: "Digital Storage",
    nameKo: "데이터",
    description: "바이트, KB, MB, GB, TB 등 데이터 용량 변환",
    icon: "💾",
    baseUnit: "byte",
    units: dataUnits,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
