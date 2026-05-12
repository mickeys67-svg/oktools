#!/usr/bin/env node

/**
 * seed-announcements.js
 * 게시판 공지글 5개를 자동으로 생성합니다.
 * 실행: node scripts/seed-announcements.js
 */

const fs = require("fs");
const path = require("path");

const DB_DIR = path.join(__dirname, "../data");
const DB_PATH = path.join(DB_DIR, "board.json");

function ensureDB() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ posts: [] }, null, 2));
  }
}

function readDB() {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

const announcements = [
  {
    title: "📢 게시판 이용 안내",
    content: `옥사주 커뮤니티 게시판에 오신 것을 환영합니다!

**이용 방법:**
1. Google 로그인 (글쓰기/댓글 필수)
2. "글쓰기" 버튼으로 새 글 작성
3. 관리자 승인 후 공개 (보통 24시간)
4. 댓글로 다른 사용자와 소통

**우리의 약속:**
• 서로 존중하고 배려하는 태도
• 건설적이고 긍정적인 의견 교환
• 모두가 편하게 참여할 수 있는 환경

다른 공지글을 확인한 후 글을 올려주세요. 감사합니다! 🙏`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "✍️ 좋은 글 작성하기",
    content: `**체크리스트:**
✅ 제목: 명확하고 간결하게
✅ 내용: 정중하고 건설적인 표현
✅ 관련성: 게시판 주제와 맞는지 확인

**피해야 할 것:**
❌ 비난, 인신공격, 욕설
❌ 상업 목적의 홍보
❌ 개인정보 공개

**좋은 글의 특징:**
🌟 구체적이고 정보가 풍부함
🌟 타인을 배려하는 표현
🌟 읽기 쉬운 문단 나눔
🌟 질문은 명확하게

새 글은 관리자 승인 후 공개됩니다.`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "💬 댓글 에티켓",
    content: `**기본 원칙:**
1️⃣ 존중 - 다른 의견도 인정하기
2️⃣ 정중 - 높임말 권장
3️⃣ 정확 - 글 내용을 제대로 이해 후 댓글
4️⃣ 건설성 - 비판할 때는 개선안과 함께

**좋은 댓글:**
✅ "좋은 의견 감사합니다. 다만 이 부분은 다르게 생각해요."

**피해야 할 것:**
❌ 욕설, 비하, 혐오 표현
❌ 스팸, 광고성 댓글
❌ 개인정보 공개
❌ 중복 댓글

**팁:**
💡 길어지면 새 글로 작성
💡 데이터/링크는 출처 명시
💡 의견 차이는 토론입니다`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "🤝 커뮤니티 규칙",
    content: `**1. 포용성**
모든 배경을 존중합니다. 인종, 성별, 나이, 종교, 능력 차별 금지.

**2. 개인정보 보호**
타인의 전화, 주소, 이메일, SNS 공개 금지. 자신의 정보도 신중하게.

**3. 저작권 존중**
남의 글, 사진, 영상을 무단 공유하지 마세요. 출처 명시 필수.

**4. 건강한 토론**
다양한 의견 환영. 의견 차이 존중. 개인 공격 금지.

**5. 광고 정책**
자기 홍보는 금지. 정보성 공유는 허용. 스팸은 즉시 삭제.

**위반 시 조치:**
1차 경고 → 2차 삭제 → 3차 제한

건강한 커뮤니티를 함께 만들어요! 💚`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "❓ 자주 묻는 질문",
    content: `**Q. 로그인 없이 볼 수 있나요?**
A. 네. 글은 자유롭게 봅니다. 쓰기/댓글은 Google 로그인 필요.

**Q. 내 글이 안 보여요.**
A. 관리자 승인 후 공개. 보통 24시간. 부적절 내용은 거부될 수 있습니다.

**Q. 글을 삭제하려면?**
A. 댓글 없으면 직접 삭제 가능. 있으면 관리자 문의.

**Q. 스팸을 발견했어요.**
A. 글 아래 신고 버튼 클릭. 관리자가 검토합니다.

**Q. 계정 여러 개 가능?**
A. Google 계정 1개당 1계정. 스팸/악용 목적이면 제재합니다.

**Q. 댓글도 승인 필요?**
A. 아니요. 즉시 공개. 부적절하면 언제든 삭제 가능.

**Q. 관리자 연락?**
A. 게시판 문의 버튼 또는 contact@oktools.kr

**Q. 익명 가능?**
A. 계정은 Google 실명이지만, 닉네임은 자유입니다.`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
];

function main() {
  ensureDB();
  const db = readDB();

  // Check if announcements already exist
  if (db.posts.some((p) => p.author === "관리자")) {
    console.log("✅ 공지글이 이미 존재합니다. 건너뜁니다.");
    return;
  }

  announcements.forEach((ann) => {
    const post = {
      id: crypto.randomUUID(),
      title: ann.title,
      content: ann.content,
      author: ann.author,
      authorEmail: ann.authorEmail,
      createdAt: new Date(Date.now() - Math.random() * 86400000).toISOString(),
      approved: ann.approved,
      pinned: true,
      comments: [],
    };
    db.posts.push(post);
  });

  writeDB(db);
  console.log(`✅ 공지글 ${announcements.length}개를 생성했습니다!`);
  console.log("📍 locations: data/board.json");
}

main();
