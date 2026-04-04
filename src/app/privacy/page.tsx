import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "오케이툴즈 개인정보 처리방침 - 수집 정보, 쿠키, 제3자 서비스 안내",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">개인정보 처리방침</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        개인정보 처리방침
      </h1>

      <div className="prose prose-gray max-w-none">
        <p>
          <em>최종 업데이트: 2026년 4월</em>
        </p>

        <h2>수집하는 개인정보</h2>
        <p>
          오케이툴즈는 사용자의 개인정보를 직접 수집하지 않습니다. 모든 계산과
          변환은 사용자의 브라우저 내에서 처리되며, 입력된 데이터는 서버로 전송되지
          않습니다.
        </p>

        <h2>쿠키 사용</h2>
        <p>
          오케이툴즈는 서비스 개선 및 광고 제공을 위해 다음과 같은 제3자 서비스의
          쿠키를 사용합니다:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — 방문자 통계 분석을 위해 사용됩니다.
            사이트 이용 패턴을 파악하여 서비스를 개선하는 데 활용됩니다.
          </li>
          <li>
            <strong>Google AdSense</strong> — 광고 게재를 위해 사용됩니다.
            사용자의 이전 방문 기록을 기반으로 맞춤 광고가 표시될 수 있습니다.
          </li>
        </ul>

        <h2>제3자 서비스</h2>
        <p>
          오케이툴즈는 Google에서 제공하는 서비스(Analytics, AdSense)를 사용합니다.
          이러한 서비스에서 수집하는 정보는 해당 서비스의 개인정보 처리방침에 따라
          관리됩니다. 맞춤 광고를 원하지 않으시면{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google 광고 설정
          </a>
          에서 비활성화할 수 있습니다.
        </p>

        <h2>데이터 보호</h2>
        <p>
          오케이툴즈는 사용자 데이터를 서버에 저장하지 않으므로, 데이터 유출의
          위험이 없습니다. 모든 입력값은 브라우저 세션이 종료되면 자동으로
          삭제됩니다.
        </p>

        <h2>방침 변경</h2>
        <p>
          본 개인정보 처리방침은 필요에 따라 업데이트될 수 있습니다. 변경 사항은
          이 페이지에 게시됩니다.
        </p>

        <h2>연락처</h2>
        <p>
          개인정보 처리방침에 관한 문의가 있으시면{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            문의하기
          </Link>{" "}
          페이지를 통해 연락해 주세요.
        </p>
      </div>
    </div>
  );
}
