import type { MetadataRoute } from "next";

const BASE_URL = "https://www.oktools.co.kr";
const LAST_MODIFIED = "2026-04-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/finance`, priority: 0.9 },
    { url: `${BASE_URL}/health`, priority: 0.8 },
    { url: `${BASE_URL}/tools`, priority: 0.7 },
    { url: `${BASE_URL}/fortune`, priority: 0.7 },
    { url: `${BASE_URL}/space`, priority: 0.6 },
    { url: `${BASE_URL}/life`, priority: 0.7 },
  ].map((p) => ({ ...p, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const }));

  const toolPages: MetadataRoute.Sitemap = [
    // Finance
    { url: `${BASE_URL}/finance/loan-calculator`, priority: 0.8 },
    { url: `${BASE_URL}/finance/installment`, priority: 0.8 },
    { url: `${BASE_URL}/finance/salary`, priority: 0.8 },
    { url: `${BASE_URL}/finance/retirement`, priority: 0.8 },
    { url: `${BASE_URL}/finance/savings`, priority: 0.8 },
    { url: `${BASE_URL}/finance/deposit`, priority: 0.8 },
    { url: `${BASE_URL}/finance/compound-interest`, priority: 0.8 },
    { url: `${BASE_URL}/finance/minimum-wage`, priority: 0.8 },
    { url: `${BASE_URL}/finance/jeonwolse`, priority: 0.8 },
    { url: `${BASE_URL}/finance/insurance4`, priority: 0.8 },
    { url: `${BASE_URL}/finance/broker-fee`, priority: 0.8 },
    { url: `${BASE_URL}/finance/income-tax`, priority: 0.8 },
    { url: `${BASE_URL}/finance/unemployment`, priority: 0.8 },
    { url: `${BASE_URL}/finance/acquisition-tax`, priority: 0.8 },
    { url: `${BASE_URL}/finance/dsr`, priority: 0.8 },
    { url: `${BASE_URL}/finance/capital-gains-tax`, priority: 0.8 },
    { url: `${BASE_URL}/finance/subscription`, priority: 0.8 },
    { url: `${BASE_URL}/finance/pension`, priority: 0.8 },
    { url: `${BASE_URL}/finance/gift-tax`, priority: 0.8 },
    { url: `${BASE_URL}/finance/year-end-tax`, priority: 0.8 },
    // Health
    { url: `${BASE_URL}/health/bmi`, priority: 0.8 },
    { url: `${BASE_URL}/health/bmr`, priority: 0.8 },
    { url: `${BASE_URL}/health/biorhythm`, priority: 0.8 },
    { url: `${BASE_URL}/health/age`, priority: 0.8 },
    { url: `${BASE_URL}/health/dday`, priority: 0.8 },
    { url: `${BASE_URL}/health/pregnancy`, priority: 0.8 },
    { url: `${BASE_URL}/health/alcohol`, priority: 0.8 },
    { url: `${BASE_URL}/health/body-fat`, priority: 0.8 },
    { url: `${BASE_URL}/health/pregnancy-week`, priority: 0.8 },
    { url: `${BASE_URL}/health/calorie`, priority: 0.8 },
    // Tools
    { url: `${BASE_URL}/tools/clock`, priority: 0.8 },
    { url: `${BASE_URL}/tools/timer`, priority: 0.8 },
    { url: `${BASE_URL}/tools/stopwatch`, priority: 0.8 },
    { url: `${BASE_URL}/tools/character-count`, priority: 0.8 },
    { url: `${BASE_URL}/tools/random-number`, priority: 0.8 },
    { url: `${BASE_URL}/tools/lotto`, priority: 0.8 },
    { url: `${BASE_URL}/tools/youtube-tracklist`, priority: 0.8 },
    // Fortune
    { url: `${BASE_URL}/fortune/tarot`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/tojeong`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/mbti`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/zodiac`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/dream`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/blood-type`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/name-match`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/zodiac-animal`, priority: 0.8 },
    // Space
    { url: `${BASE_URL}/space/planet-weight`, priority: 0.8 },
    { url: `${BASE_URL}/space/planet-age`, priority: 0.8 },
    { url: `${BASE_URL}/space/travel-time`, priority: 0.8 },
    { url: `${BASE_URL}/space/distance`, priority: 0.8 },
    // Life
    { url: `${BASE_URL}/life/electricity`, priority: 0.8 },
    { url: `${BASE_URL}/life/gpa`, priority: 0.8 },
    { url: `${BASE_URL}/life/percentage`, priority: 0.8 },
    { url: `${BASE_URL}/life/discount`, priority: 0.8 },
    { url: `${BASE_URL}/life/military`, priority: 0.8 },
    { url: `${BASE_URL}/life/traffic-fine`, priority: 0.8 },
    { url: `${BASE_URL}/life/car-tax`, priority: 0.8 },
    { url: `${BASE_URL}/life/dday`, priority: 0.8 },
    { url: `${BASE_URL}/life/parental-leave`, priority: 0.8 },
    { url: `${BASE_URL}/life/workdays`, priority: 0.8 },
    // Convert (single-page tool)
    { url: `${BASE_URL}/convert`, priority: 0.8 },
  ].map((p) => ({ ...p, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
