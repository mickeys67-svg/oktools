export interface Planet {
  id: string;
  name: string;
  nameEn: string;
  emoji: string;
  gravity: number; // relative to Earth (Earth = 1)
  orbitalPeriod: number; // Earth days
  distanceFromSun: number; // million km (average)
  diameter: number; // km
  color: string; // hex
}

export const planets: Planet[] = [
  { id: "sun", name: "태양", nameEn: "Sun", emoji: "☀️", gravity: 27.94, orbitalPeriod: 0, distanceFromSun: 0, diameter: 1392700, color: "#FCD34D" },
  { id: "mercury", name: "수성", nameEn: "Mercury", emoji: "🪨", gravity: 0.38, orbitalPeriod: 87.97, distanceFromSun: 57.9, diameter: 4879, color: "#9CA3AF" },
  { id: "venus", name: "금성", nameEn: "Venus", emoji: "🌕", gravity: 0.91, orbitalPeriod: 224.7, distanceFromSun: 108.2, diameter: 12104, color: "#FDE68A" },
  { id: "earth", name: "지구", nameEn: "Earth", emoji: "🌍", gravity: 1.0, orbitalPeriod: 365.25, distanceFromSun: 149.6, diameter: 12756, color: "#3B82F6" },
  { id: "moon", name: "달", nameEn: "Moon", emoji: "🌙", gravity: 0.166, orbitalPeriod: 27.32, distanceFromSun: 149.6, diameter: 3475, color: "#D1D5DB" },
  { id: "mars", name: "화성", nameEn: "Mars", emoji: "🔴", gravity: 0.38, orbitalPeriod: 687, distanceFromSun: 227.9, diameter: 6792, color: "#EF4444" },
  { id: "jupiter", name: "목성", nameEn: "Jupiter", emoji: "🟤", gravity: 2.34, orbitalPeriod: 4333, distanceFromSun: 778.6, diameter: 142984, color: "#D97706" },
  { id: "saturn", name: "토성", nameEn: "Saturn", emoji: "🪐", gravity: 0.93, orbitalPeriod: 10759, distanceFromSun: 1433.5, diameter: 120536, color: "#F59E0B" },
  { id: "uranus", name: "천왕성", nameEn: "Uranus", emoji: "🔵", gravity: 0.92, orbitalPeriod: 30687, distanceFromSun: 2872.5, diameter: 51118, color: "#67E8F9" },
  { id: "neptune", name: "해왕성", nameEn: "Neptune", emoji: "🔷", gravity: 1.12, orbitalPeriod: 60190, distanceFromSun: 4495.1, diameter: 49528, color: "#6366F1" },
  { id: "pluto", name: "명왕성", nameEn: "Pluto", emoji: "⚪", gravity: 0.07, orbitalPeriod: 90560, distanceFromSun: 5906.4, diameter: 2376, color: "#A78BFA" },
];

export function calcPlanetWeight(earthWeight: number, planet: Planet): number {
  return earthWeight * planet.gravity;
}

export function calcPlanetAge(earthAge: number, planet: Planet): number {
  if (planet.orbitalPeriod === 0) return 0;
  const earthDays = earthAge * 365.25;
  return earthDays / planet.orbitalPeriod;
}

/** 빛 여행 시간 (초) - distance in million km */
export function calcLightTravelTime(distanceMKm: number): number {
  return (distanceMKm * 1_000_000) / 299792; // seconds
}

/** Format seconds to human readable Korean */
export function formatTravelTime(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(1)}초`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)}분`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)}시간`;
  if (seconds < 86400 * 365.25) return `${(seconds / 86400).toFixed(1)}일`;
  return `${(seconds / (86400 * 365.25)).toFixed(1)}년`;
}
