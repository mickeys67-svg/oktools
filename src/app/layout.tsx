import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "오케이툴즈 - 계산기, 변환기, 유틸리티 모음",
    template: "%s | 오케이툴즈",
  },
  description:
    "대출이자 계산기, 연봉 실수령액, BMI, 바이오리듬, 단위변환, 타로, 온라인 시계 등 61가지 무료 도구를 제공합니다. 깔끔한 디자인, 빠른 계산.",
  keywords: [
    "계산기",
    "대출이자계산기",
    "연봉실수령액",
    "할부계산기",
    "BMI계산기",
    "단위변환",
    "평수계산기",
    "바이오리듬",
    "온라인시계",
    "타로",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "오케이툴즈",
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Pretendard Variable Font */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Google AdSense - Replace with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* Dark mode: prevent flash */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-gray-900 dark:bg-surface-dark dark:text-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
