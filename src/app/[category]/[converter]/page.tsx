import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getAllConverterSlugs, getCategoryById } from "@/data/conversions";
import { getUnitPair, convert, formatNumber } from "@/lib/converter";
import ConverterForm from "@/components/ConverterForm";
import ConversionTable from "@/components/ConversionTable";
import AdBanner from "@/components/AdBanner";

interface Props {
  params: Promise<{ category: string; converter: string }>;
}

export function generateStaticParams() {
  return getAllConverterSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId, converter: converterSlug } = await params;
  const category = getCategoryById(categoryId);
  if (!category) return {};

  const pair = getUnitPair(categoryId, converterSlug);
  if (!pair) return {};

  const { fromUnit, toUnit } = pair;
  const sampleConversion = formatNumber(convert(categoryId, fromUnit.id, toUnit.id, 1));

  const title = `${fromUnit.name} to ${toUnit.name} | Convert ${fromUnit.symbol} to ${toUnit.symbol}`;
  const description = `Convert ${fromUnit.name} (${fromUnit.symbol}) to ${toUnit.name} (${toUnit.symbol}) instantly. 1 ${fromUnit.symbol} = ${sampleConversion} ${toUnit.symbol}. Free online ${category.name.toLowerCase()} converter with conversion table.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ConverterPage({ params }: Props) {
  const { category: categoryId, converter: converterSlug } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const pair = getUnitPair(categoryId, converterSlug);
  if (!pair) notFound();

  const { fromUnit, toUnit } = pair;
  const sampleConversion = formatNumber(convert(categoryId, fromUnit.id, toUnit.id, 1));

  // Related converters
  const relatedConverters = category.units
    .filter((u) => u.id !== fromUnit.id && u.id !== toUnit.id)
    .slice(0, 6)
    .flatMap((u) => [
      { from: fromUnit.id, to: u.id, label: `${fromUnit.name} to ${u.name}` },
      { from: u.id, to: toUnit.id, label: `${u.name} to ${toUnit.name}` },
    ])
    .slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${category.id}`} className="hover:text-blue-600">{category.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{fromUnit.name} to {toUnit.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {fromUnit.name} to {toUnit.name} Converter
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Convert {fromUnit.name} ({fromUnit.symbol}) to {toUnit.name} ({toUnit.symbol}).
        1 {fromUnit.symbol} = {sampleConversion} {toUnit.symbol}
      </p>

      <AdBanner slot="3456789012" format="horizontal" />

      {/* Converter Form */}
      <section className="py-4">
        <ConverterForm
          categoryId={category.id}
          initialFrom={fromUnit.id}
          initialTo={toUnit.id}
        />
      </section>

      <AdBanner slot="3456789013" format="auto" />

      {/* Conversion Table */}
      <section className="py-6">
        <ConversionTable
          categoryId={category.id}
          fromUnitId={fromUnit.id}
          fromUnitName={fromUnit.name}
          fromUnitSymbol={fromUnit.symbol}
          toUnitId={toUnit.id}
          toUnitName={toUnit.name}
          toUnitSymbol={toUnit.symbol}
        />
      </section>

      <AdBanner slot="3456789014" format="auto" />

      {/* How to Convert */}
      <section className="py-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            How to Convert {fromUnit.name} to {toUnit.name}
          </h2>
          <p className="text-gray-600 mb-4">
            To convert {fromUnit.name} ({fromUnit.symbol}) to {toUnit.name} ({toUnit.symbol}),
            you can use the following relationship:
          </p>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-blue-800">
              1 {fromUnit.symbol} = {sampleConversion} {toUnit.symbol}
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Simply multiply your {fromUnit.name.toLowerCase()} value by {sampleConversion} to
            get the equivalent in {toUnit.name.toLowerCase()}.
            Use our converter above for instant, accurate results.
          </p>
        </div>
      </section>

      {/* Related Converters */}
      <section className="py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <Link
            href={`/${category.id}/${toUnit.id}-to-${fromUnit.id}`}
            className="bg-white rounded-lg px-4 py-3 text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors border border-blue-100 shadow-sm"
          >
            {toUnit.name} to {fromUnit.name}
          </Link>
          {relatedConverters.map((rc) => (
            <Link
              key={`${rc.from}-${rc.to}`}
              href={`/${category.id}/${rc.from}-to-${rc.to}`}
              className="bg-white rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100 shadow-sm"
            >
              {rc.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${fromUnit.name} to ${toUnit.name} Converter`,
            description: `Convert ${fromUnit.name} to ${toUnit.name} online. 1 ${fromUnit.symbol} = ${sampleConversion} ${toUnit.symbol}`,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How many ${toUnit.name.toLowerCase()} are in 1 ${fromUnit.name.toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `1 ${fromUnit.name} (${fromUnit.symbol}) is equal to ${sampleConversion} ${toUnit.name} (${toUnit.symbol}).`,
                },
              },
              {
                "@type": "Question",
                name: `How to convert ${fromUnit.name} to ${toUnit.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `To convert ${fromUnit.name} to ${toUnit.name}, multiply the value by ${sampleConversion}. For example, 5 ${fromUnit.symbol} = ${formatNumber(convert(categoryId, fromUnit.id, toUnit.id, 5))} ${toUnit.symbol}.`,
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
