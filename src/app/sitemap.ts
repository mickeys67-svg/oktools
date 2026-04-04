import type { MetadataRoute } from "next";
import { categories, getAllConverterSlugs } from "@/data/conversions";

const BASE_URL = "https://unitconvert.tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const converterSlugs = getAllConverterSlugs();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.2 },
  ];

  // New tool pages
  const toolPages: MetadataRoute.Sitemap = [
    // Finance
    { url: `${BASE_URL}/finance`, priority: 0.9 },
    { url: `${BASE_URL}/finance/loan-calculator`, priority: 0.9 },
    { url: `${BASE_URL}/finance/installment`, priority: 0.8 },
    { url: `${BASE_URL}/finance/salary`, priority: 0.9 },
    // Health
    { url: `${BASE_URL}/health`, priority: 0.8 },
    { url: `${BASE_URL}/health/bmi`, priority: 0.8 },
    { url: `${BASE_URL}/health/biorhythm`, priority: 0.7 },
    { url: `${BASE_URL}/health/age`, priority: 0.8 },
    // Tools
    { url: `${BASE_URL}/tools`, priority: 0.7 },
    { url: `${BASE_URL}/tools/clock`, priority: 0.7 },
    { url: `${BASE_URL}/tools/timer`, priority: 0.7 },
    { url: `${BASE_URL}/tools/stopwatch`, priority: 0.6 },
    // Fortune
    { url: `${BASE_URL}/fortune`, priority: 0.7 },
    { url: `${BASE_URL}/fortune/tarot`, priority: 0.7 },
    { url: `${BASE_URL}/fortune/tojeong`, priority: 0.8 },
    { url: `${BASE_URL}/fortune/mbti`, priority: 0.7 },
    // Space
    { url: `${BASE_URL}/space`, priority: 0.6 },
    { url: `${BASE_URL}/space/planet-weight`, priority: 0.6 },
    { url: `${BASE_URL}/space/planet-age`, priority: 0.6 },
    { url: `${BASE_URL}/space/travel-time`, priority: 0.6 },
    { url: `${BASE_URL}/space/distance`, priority: 0.6 },
    // Finance (new)
    { url: `${BASE_URL}/finance/retirement`, priority: 0.8 },
    { url: `${BASE_URL}/finance/savings`, priority: 0.8 },
    { url: `${BASE_URL}/finance/deposit`, priority: 0.8 },
    { url: `${BASE_URL}/finance/compound-interest`, priority: 0.8 },
    // Health (new)
    { url: `${BASE_URL}/health/bmr`, priority: 0.7 },
    { url: `${BASE_URL}/health/dday`, priority: 0.7 },
    { url: `${BASE_URL}/health/pregnancy`, priority: 0.7 },
    // Tools (new)
    { url: `${BASE_URL}/tools/character-count`, priority: 0.7 },
    { url: `${BASE_URL}/tools/random-number`, priority: 0.6 },
    // Fortune (new)
    { url: `${BASE_URL}/fortune/zodiac`, priority: 0.7 },
    { url: `${BASE_URL}/fortune/dream`, priority: 0.7 },
    // Life
    { url: `${BASE_URL}/life`, priority: 0.7 },
    { url: `${BASE_URL}/life/percentage`, priority: 0.7 },
    { url: `${BASE_URL}/life/discount`, priority: 0.7 },
    { url: `${BASE_URL}/life/electricity`, priority: 0.7 },
    { url: `${BASE_URL}/life/gpa`, priority: 0.6 },
  ].map((p) => ({ ...p, lastModified: now, changeFrequency: "weekly" as const }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/${cat.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const converterPages: MetadataRoute.Sitemap = converterSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug.category}/${slug.converter}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticPages, ...toolPages, ...categoryPages, ...converterPages];
}
