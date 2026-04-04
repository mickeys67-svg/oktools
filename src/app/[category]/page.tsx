import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategoryById } from "@/data/conversions";
import AdBanner from "@/components/AdBanner";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) return {};

  return {
    title: `${category.name} Converter - Convert ${category.name} Units Online`,
    description: category.description + ". Free, fast, and accurate online converter.",
    openGraph: {
      title: `${category.name} Unit Converter`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const converterPairs: { from: string; to: string; label: string }[] = [];
  for (const fromUnit of category.units) {
    for (const toUnit of category.units) {
      if (fromUnit.id !== toUnit.id) {
        converterPairs.push({
          from: fromUnit.id,
          to: toUnit.id,
          label: `${fromUnit.name} to ${toUnit.name}`,
        });
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{category.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {category.icon} {category.name} Converter
      </h1>
      <p className="text-lg text-gray-600 mb-8">{category.description}</p>

      <AdBanner slot="2345678901" format="horizontal" />

      {/* All conversion pairs */}
      <section className="py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          All {category.name} Conversions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {converterPairs.map((pair) => (
            <Link
              key={`${pair.from}-${pair.to}`}
              href={`/${category.id}/${pair.from}-to-${pair.to}`}
              className="bg-white rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100 shadow-sm"
            >
              {pair.label}
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slot="2345678902" format="auto" />

      {/* SEO content */}
      <section className="py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          About {category.name} Conversion
        </h2>
        <p className="text-gray-600">
          Use our free {category.name.toLowerCase()} converter to quickly and accurately convert
          between {category.units.length} different {category.name.toLowerCase()} units.
          Available units include {category.units.map((u) => u.name).join(", ")}.
          Select any pair above to get instant conversion results with a reference table.
        </p>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${category.name} Unit Converter`,
            description: category.description,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </div>
  );
}
