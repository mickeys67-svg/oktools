import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/conversions";

export const metadata: Metadata = {
  title: "About Us",
  description: "About UnitConvert.tools - Free online unit conversion tool for length, weight, temperature, and more.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">About</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">About UnitConvert.tools</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          UnitConvert.tools is a free, fast, and reliable online unit converter designed to help
          people around the world quickly convert between different measurement units.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that unit conversion should be simple, fast, and accessible to everyone.
          Our tool provides instant, accurate conversions without requiring any registration,
          downloads, or fees.
        </p>

        <h2>What We Offer</h2>
        <p>
          We currently support {categories.length} major conversion categories:
        </p>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/${cat.id}`} className="text-blue-600 hover:underline">
                {cat.name}
              </Link>{" "}
              — {cat.units.length} units ({cat.units.map((u) => u.name).join(", ")})
            </li>
          ))}
        </ul>

        <h2>Accuracy</h2>
        <p>
          All conversion formulas are based on internationally recognized standards.
          Our tool handles both simple ratio-based conversions and complex formulas
          (like temperature conversions) with precision up to 10 decimal places.
        </p>

        <h2>Contact</h2>
        <p>
          Have a suggestion or found an issue? We would love to hear from you.
          Visit our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link> to
          get in touch.
        </p>
      </div>
    </div>
  );
}
