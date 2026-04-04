import type { Metadata } from "next";
import ClockApp from "@/components/tools/ClockApp";

export const metadata: Metadata = {
  title: "온라인 시계 - 아름다운 전체화면 벽시계",
  description:
    "미니멀, 클래식, 네온, 우주, 레트로 5가지 테마의 아름다운 온라인 벽시계. 전체화면 지원, 아날로그+디지털 동시 표시.",
};

export default function ClockPage() {
  return <ClockApp />;
}
