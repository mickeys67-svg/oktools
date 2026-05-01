import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.oktools.co.kr";

export const metadata: Metadata = {
  title: "문의하기",
  description: "오케이툴즈 문의하기 - 서비스 관련 문의, 건의사항, 오류 신고",
  openGraph: {
    url: "/contact",
    title: "문의하기",
    description: "오케이툴즈 문의하기 - 서비스 관련 문의, 건의사항, 오류 신고",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">문의하기</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">문의하기</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <p className="text-gray-600 mb-6">
          오케이툴즈 서비스에 대한 문의, 건의사항, 오류 신고 등은 아래 이메일로
          연락해 주세요.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold text-gray-800">이메일</h3>
              <a
                href="mailto:mickeys67@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mickeys67@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-800">기능 요청</h3>
              <p className="text-gray-600">
                새로운 도구나 기능을 원하시면 알려주세요. 검토 후 추가하겠습니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🐛</span>
            <div>
              <h3 className="font-semibold text-gray-800">오류 신고</h3>
              <p className="text-gray-600">
                잘못된 계산 결과나 페이지 오류를 발견하셨다면 신고해 주세요. 빠르게
                수정하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "@id": `${SITE}/contact#webpage`,
                url: `${SITE}/contact`,
                name: "문의하기",
                description:
                  "오케이툴즈 서비스 문의·건의사항·오류 신고 안내 페이지.",
                isPartOf: { "@id": `${SITE}/#website` },
                inLanguage: "ko-KR",
                breadcrumb: { "@id": `${SITE}/contact#breadcrumb` },
                mainEntity: {
                  "@type": "Organization",
                  "@id": `${SITE}/#organization`,
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    email: "mickeys67@gmail.com",
                    availableLanguage: ["Korean", "ko-KR"],
                    areaServed: "KR",
                  },
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE}/contact#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "홈", item: SITE },
                  { "@type": "ListItem", position: 2, name: "문의하기" },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
