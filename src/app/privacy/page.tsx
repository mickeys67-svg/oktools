import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for UnitConvert.tools",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none">
        <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>

        <h2>Information We Collect</h2>
        <p>
          UnitConvert.tools does not collect any personal information directly.
          All conversions are performed in your browser and no data is sent to our servers.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li>
            <strong>Google AdSense</strong> — We display advertisements through Google AdSense,
            which may use cookies to serve ads based on your prior visits to this and other websites.
          </li>
          <li>
            <strong>Google Analytics</strong> — We use Google Analytics to understand how visitors
            use our site. This helps us improve the user experience.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on your
          prior visits to this website or other websites. You may opt out of personalized
          advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google&apos;s Ad Settings
          </a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted
          on this page with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
