import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact UnitConvert.tools - Send us your feedback or suggestions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Contact</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <p className="text-gray-600 mb-6">
          Have a question, suggestion, or found a bug? We would love to hear from you.
          Please reach out using the information below.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@unitconvert.tools</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-800">Feature Requests</h3>
              <p className="text-gray-600">
                Want to see a new unit or converter? Let us know and we will add it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🐛</span>
            <div>
              <h3 className="font-semibold text-gray-800">Bug Reports</h3>
              <p className="text-gray-600">
                Found an incorrect conversion or a broken page? Please report it
                so we can fix it promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
