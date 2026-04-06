import type { NextConfig } from "next";

const SITE_URL = "https://www.oktools.co.kr";

const securityHeaders = [
  // Prevent MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Disable legacy XSS filter (rely on CSP instead)
  { key: "X-XSS-Protection", value: "0" },
  // HSTS: enforce HTTPS for 1 year + subdomains
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Only send origin as referrer for cross-origin requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://ep1.adtrafficquality.google https://fundingchoicesmessages.google.com",
      "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://pagead2.googlesyndication.com https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com",
      "font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com",
      "connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com",
      "frame-src 'self' https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.google.com https://fundingchoicesmessages.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",

  async rewrites() {
    return [
      {
        source: "/naver88beb20b4255fa30a98d713917c45eb3.html",
        destination: "/api/naver-verify",
      },
    ];
  },

  async headers() {
    return [
      {
        // Cache static assets for 1 year
        source: "/:all*(svg|jpg|png|webp|ico|woff2|css|js)",
        headers: [
          ...securityHeaders,
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
