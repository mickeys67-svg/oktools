import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories } from "@/data/tools";

const SITE = "https://www.oktools.co.kr";

export const metadata: Metadata = {
  title: "오케이툴즈 소개",
  description:
    "오케이툴즈 - 62가지 무료 온라인 도구. 금융, 건강, 생활, 운세, 단위변환, 우주 카테고리의 계산기와 변환기를 무료로 이용하세요.",
  openGraph: {
    url: "/about",
    title: "오케이툴즈 소개",
    description:
      "오케이툴즈 - 62가지 무료 온라인 도구. 금융, 건강, 생활, 운세, 단위변환, 우주 카테고리의 계산기와 변환기를 무료로 이용하세요.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">소개</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        오케이툴즈 소개
      </h1>

      <div className="prose prose-gray max-w-none">
        <p>
          오케이툴즈는 {tools.length}가지 이상의 무료 온라인 도구를 제공하는
          웹사이트입니다. 복잡한 계산과 변환을 누구나 쉽고 빠르게 할 수 있도록
          만들었습니다.
        </p>

        <h2>제공 카테고리</h2>
        <p>현재 {categories.length}개의 카테고리에서 다양한 도구를 제공하고 있습니다:</p>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={cat.path} className="text-blue-600 hover:underline">
                {cat.name}
              </Link>{" "}
              — {cat.description}
            </li>
          ))}
        </ul>

        <h2>개인정보 보호</h2>
        <p>
          오케이툴즈의 모든 계산은 사용자의 브라우저에서 직접 처리됩니다.
          입력하신 데이터는 서버로 전송되지 않으며, 개인정보가 수집되지 않습니다.
          안심하고 사용하세요.
        </p>

        <h2>무료 서비스</h2>
        <p>
          오케이툴즈의 모든 도구는 회원가입 없이 무료로 이용할 수 있습니다.
          서비스 운영은 광고 수익으로 지원됩니다.
        </p>

        <h2>문의</h2>
        <p>
          건의사항이나 오류를 발견하셨나요?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            문의하기
          </Link>{" "}
          페이지를 통해 알려주세요.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": `${SITE}/about#webpage`,
                url: `${SITE}/about`,
                name: "오케이툴즈 소개",
                description:
                  "오케이툴즈 - 62가지 무료 온라인 도구의 소개·운영 철학·카테고리 안내.",
                isPartOf: { "@id": `${SITE}/#website` },
                about: { "@id": `${SITE}/#organization` },
                inLanguage: "ko-KR",
                breadcrumb: { "@id": `${SITE}/about#breadcrumb` },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE}/about#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "홈", item: SITE },
                  { "@type": "ListItem", position: 2, name: "소개" },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
