export interface Unit {
  id: string;
  name: string;
  symbol: string;
  toBase: (value: number) => number; // convert to base unit
  fromBase: (value: number) => number; // convert from base unit
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  baseUnit: string;
  units: Unit[];
}

// ─── LENGTH (base: meter) ───────────────────────────────────────────
const lengthUnits: Unit[] = [
  { id: "meter", name: "Meter", symbol: "m", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilometer", name: "Kilometer", symbol: "km", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "centimeter", name: "Centimeter", symbol: "cm", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  { id: "millimeter", name: "Millimeter", symbol: "mm", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "micrometer", name: "Micrometer", symbol: "μm", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "nanometer", name: "Nanometer", symbol: "nm", toBase: (v) => v / 1e9, fromBase: (v) => v * 1e9 },
  { id: "mile", name: "Mile", symbol: "mi", toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
  { id: "yard", name: "Yard", symbol: "yd", toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
  { id: "foot", name: "Foot", symbol: "ft", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: "inch", name: "Inch", symbol: "in", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  { id: "nautical-mile", name: "Nautical Mile", symbol: "nmi", toBase: (v) => v * 1852, fromBase: (v) => v / 1852 },
];

// ─── WEIGHT (base: kilogram) ────────────────────────────────────────
const weightUnits: Unit[] = [
  { id: "kilogram", name: "Kilogram", symbol: "kg", toBase: (v) => v, fromBase: (v) => v },
  { id: "gram", name: "Gram", symbol: "g", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "milligram", name: "Milligram", symbol: "mg", toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: "metric-ton", name: "Metric Ton", symbol: "t", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "pound", name: "Pound", symbol: "lb", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
  { id: "ounce", name: "Ounce", symbol: "oz", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
  { id: "stone", name: "Stone", symbol: "st", toBase: (v) => v * 6.35029, fromBase: (v) => v / 6.35029 },
];

// ─── TEMPERATURE (special: not ratio-based) ─────────────────────────
const temperatureUnits: Unit[] = [
  { id: "celsius", name: "Celsius", symbol: "°C", toBase: (v) => v, fromBase: (v) => v },
  { id: "fahrenheit", name: "Fahrenheit", symbol: "°F", toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => v * 9 / 5 + 32 },
  { id: "kelvin", name: "Kelvin", symbol: "K", toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
];

// ─── AREA (base: square meter) ──────────────────────────────────────
const areaUnits: Unit[] = [
  { id: "square-meter", name: "Square Meter", symbol: "m²", toBase: (v) => v, fromBase: (v) => v },
  { id: "square-kilometer", name: "Square Kilometer", symbol: "km²", toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
  { id: "square-centimeter", name: "Square Centimeter", symbol: "cm²", toBase: (v) => v / 1e4, fromBase: (v) => v * 1e4 },
  { id: "hectare", name: "Hectare", symbol: "ha", toBase: (v) => v * 1e4, fromBase: (v) => v / 1e4 },
  { id: "acre", name: "Acre", symbol: "ac", toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
  { id: "square-foot", name: "Square Foot", symbol: "ft²", toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
  { id: "square-inch", name: "Square Inch", symbol: "in²", toBase: (v) => v * 0.00064516, fromBase: (v) => v / 0.00064516 },
  { id: "square-yard", name: "Square Yard", symbol: "yd²", toBase: (v) => v * 0.836127, fromBase: (v) => v / 0.836127 },
  { id: "square-mile", name: "Square Mile", symbol: "mi²", toBase: (v) => v * 2.59e6, fromBase: (v) => v / 2.59e6 },
];

// ─── VOLUME (base: liter) ───────────────────────────────────────────
const volumeUnits: Unit[] = [
  { id: "liter", name: "Liter", symbol: "L", toBase: (v) => v, fromBase: (v) => v },
  { id: "milliliter", name: "Milliliter", symbol: "mL", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: "cubic-meter", name: "Cubic Meter", symbol: "m³", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: "gallon-us", name: "US Gallon", symbol: "gal", toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
  { id: "gallon-uk", name: "UK Gallon", symbol: "imp gal", toBase: (v) => v * 4.54609, fromBase: (v) => v / 4.54609 },
  { id: "quart", name: "US Quart", symbol: "qt", toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
  { id: "pint", name: "US Pint", symbol: "pt", toBase: (v) => v * 0.473176, fromBase: (v) => v / 0.473176 },
  { id: "cup", name: "US Cup", symbol: "cup", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
  { id: "fluid-ounce", name: "US Fluid Ounce", symbol: "fl oz", toBase: (v) => v * 0.0295735, fromBase: (v) => v / 0.0295735 },
  { id: "tablespoon", name: "Tablespoon", symbol: "tbsp", toBase: (v) => v * 0.0147868, fromBase: (v) => v / 0.0147868 },
  { id: "teaspoon", name: "Teaspoon", symbol: "tsp", toBase: (v) => v * 0.00492892, fromBase: (v) => v / 0.00492892 },
];

// ─── SPEED (base: meter per second) ─────────────────────────────────
const speedUnits: Unit[] = [
  { id: "meter-per-second", name: "Meter per Second", symbol: "m/s", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilometer-per-hour", name: "Kilometer per Hour", symbol: "km/h", toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
  { id: "mile-per-hour", name: "Mile per Hour", symbol: "mph", toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
  { id: "knot", name: "Knot", symbol: "kn", toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
  { id: "foot-per-second", name: "Foot per Second", symbol: "ft/s", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
];

// ─── DATA (base: byte) ─────────────────────────────────────────────
const dataUnits: Unit[] = [
  { id: "byte", name: "Byte", symbol: "B", toBase: (v) => v, fromBase: (v) => v },
  { id: "kilobyte", name: "Kilobyte", symbol: "KB", toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
  { id: "megabyte", name: "Megabyte", symbol: "MB", toBase: (v) => v * 1024 ** 2, fromBase: (v) => v / 1024 ** 2 },
  { id: "gigabyte", name: "Gigabyte", symbol: "GB", toBase: (v) => v * 1024 ** 3, fromBase: (v) => v / 1024 ** 3 },
  { id: "terabyte", name: "Terabyte", symbol: "TB", toBase: (v) => v * 1024 ** 4, fromBase: (v) => v / 1024 ** 4 },
  { id: "bit", name: "Bit", symbol: "b", toBase: (v) => v / 8, fromBase: (v) => v * 8 },
  { id: "kilobit", name: "Kilobit", symbol: "Kb", toBase: (v) => v * 128, fromBase: (v) => v / 128 },
  { id: "megabit", name: "Megabit", symbol: "Mb", toBase: (v) => v * 131072, fromBase: (v) => v / 131072 },
  { id: "gigabit", name: "Gigabit", symbol: "Gb", toBase: (v) => v * 1.342e8, fromBase: (v) => v / 1.342e8 },
];

// ─── ALL CATEGORIES ─────────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: "length",
    name: "Length",
    description: "Convert between meters, feet, inches, kilometers, miles and more length units",
    icon: "📏",
    baseUnit: "meter",
    units: lengthUnits,
  },
  {
    id: "weight",
    name: "Weight",
    description: "Convert between kilograms, pounds, ounces, grams and more weight units",
    icon: "⚖️",
    baseUnit: "kilogram",
    units: weightUnits,
  },
  {
    id: "temperature",
    name: "Temperature",
    description: "Convert between Celsius, Fahrenheit and Kelvin temperature scales",
    icon: "🌡️",
    baseUnit: "celsius",
    units: temperatureUnits,
  },
  {
    id: "area",
    name: "Area",
    description: "Convert between square meters, acres, hectares, square feet and more",
    icon: "📐",
    baseUnit: "square-meter",
    units: areaUnits,
  },
  {
    id: "volume",
    name: "Volume",
    description: "Convert between liters, gallons, cups, fluid ounces and more volume units",
    icon: "🧪",
    baseUnit: "liter",
    units: volumeUnits,
  },
  {
    id: "speed",
    name: "Speed",
    description: "Convert between km/h, mph, m/s, knots and more speed units",
    icon: "🚀",
    baseUnit: "meter-per-second",
    units: speedUnits,
  },
  {
    id: "data",
    name: "Digital Storage",
    description: "Convert between bytes, kilobytes, megabytes, gigabytes and more data units",
    icon: "💾",
    baseUnit: "byte",
    units: dataUnits,
  },
];

// Helper to get all converter slugs for SSG
export function getAllConverterSlugs(): { category: string; converter: string }[] {
  const slugs: { category: string; converter: string }[] = [];
  for (const cat of categories) {
    for (const fromUnit of cat.units) {
      for (const toUnit of cat.units) {
        if (fromUnit.id !== toUnit.id) {
          slugs.push({
            category: cat.id,
            converter: `${fromUnit.id}-to-${toUnit.id}`,
          });
        }
      }
    }
  }
  return slugs;
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getPopularConverters(): { category: string; from: string; to: string; label: string }[] {
  return [
    { category: "length", from: "centimeter", to: "inch", label: "cm to inches" },
    { category: "length", from: "inch", to: "centimeter", label: "inches to cm" },
    { category: "length", from: "meter", to: "foot", label: "meters to feet" },
    { category: "length", from: "foot", to: "meter", label: "feet to meters" },
    { category: "length", from: "kilometer", to: "mile", label: "km to miles" },
    { category: "length", from: "mile", to: "kilometer", label: "miles to km" },
    { category: "length", from: "millimeter", to: "inch", label: "mm to inches" },
    { category: "weight", from: "kilogram", to: "pound", label: "kg to lbs" },
    { category: "weight", from: "pound", to: "kilogram", label: "lbs to kg" },
    { category: "weight", from: "ounce", to: "gram", label: "oz to grams" },
    { category: "temperature", from: "celsius", to: "fahrenheit", label: "°C to °F" },
    { category: "temperature", from: "fahrenheit", to: "celsius", label: "°F to °C" },
    { category: "volume", from: "liter", to: "gallon-us", label: "liters to gallons" },
    { category: "volume", from: "cup", to: "milliliter", label: "cups to mL" },
    { category: "speed", from: "kilometer-per-hour", to: "mile-per-hour", label: "km/h to mph" },
    { category: "data", from: "megabyte", to: "gigabyte", label: "MB to GB" },
  ];
}
