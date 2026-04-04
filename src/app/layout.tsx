import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://www.oktools.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "오케이툴즈 - 계산기, 변환기, 유틸리티 모음",
    template: "%s | 오케이툴즈",
  },
  description:
    "대출이자 계산기, 연봉 실수령액, BMI, 바이오리듬, 단위변환, 타로, 전역일 계산기, 4대보험 등 44가지 무료 도구를 제공합니다. 한국형 특화 계산기.",
  keywords: [
    "계산기",
    "대출이자계산기",
    "연봉실수령액",
    "할부계산기",
    "BMI계산기",
    "단위변환",
    "평수계산기",
    "전역일계산기",
    "4대보험계산기",
    "최저시급계산기",
    "전월세전환율",
    "음주측정기",
    "혈액형궁합",
    "이름궁합",
    "종합소득세계산기",
    "실업급여계산기",
    "취득세계산기",
    "과태료계산기",
    "자동차세계산기",
    "바이오리듬",
    "온라인시계",
    "타로",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: { "ko-KR": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "오케이툴즈",
    title: "오케이툴즈 - 계산기, 변환기, 유틸리티 모음",
    description:
      "대출이자, 연봉, BMI, 단위변환, 전역일, 4대보험, 음주측정기 등 44가지 무료 도구",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "오케이툴즈 - 44가지 무료 온라인 도구",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오케이툴즈 - 계산기, 변환기, 유틸리티 모음",
    description:
      "대출이자, 연봉, BMI, 단위변환, 전역일, 4대보험, 음주측정기 등 44가지 무료 도구",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
    other: {
      "naver-site-verification": "NAVER_VERIFICATION_CODE",
    },
  },
  other: {
    "theme-color": "#4F46E5",
    "color-scheme": "light dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Preconnect to font CDN for performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Pretendard Variable Font */}
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Dark mode: prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-gray-900 dark:bg-surface-dark dark:text-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Organization + WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "오케이툴즈",
                  url: SITE_URL,
                  logo: `${SITE_URL}/opengraph-image`,
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: "오케이툴즈",
                  url: SITE_URL,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  inLanguage: "ko-KR",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
