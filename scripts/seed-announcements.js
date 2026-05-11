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
    title: "📢 커뮤니티 게시판에 오신 것을 환영합니다!",
    content: `안녕하세요! 옥사주 커뮤니티 게시판입니다.

이곳은 자유롭게 의견을 나누고 정보를 공유하는 공간입니다.

**게시판 이용 방법:**
1. Google 로그인으로 계정 연동
2. "글쓰기" 버튼으로 새 글 작성
3. 글은 관리자 승인 후 공개됩니다
4. 댓글로 다른 사용자와 소통

**우리의 약속:**
- 서로 존중하고 배려하는 태도
- 건설적이고 긍정적인 의견 교환
- 모두가 편하게 참여할 수 있는 환경

더 궁금한 점은 다른 공지글을 참고해주세요. 감사합니다! 🙏`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "✍️ 글쓰기 가이드 — 좋은 글을 작성하려면",
    content: `게시판에 글을 올릴 때 지켜주세요!

**글쓰기 전 체크리스트:**
✅ 제목: 명확하고 간결하게 (10자 이상 권장)
✅ 내용: 정중하고 건설적인 표현
✅ 관련성: 게시판 주제와 맞는지 확인

**피해야 할 표현:**
❌ 과도한 비난이나 인신공격
❌ 상업 목적의 홍보
❌ 개인정보 공개
❌ 욕설이나 부적절한 언어

**좋은 글의 특징:**
🌟 구체적이고 정보가 풍부함
🌟 타인을 배려하는 표현
🌟 적절한 문단 나눔으로 읽기 쉬움
🌟 질문이 있으면 명확하게 표현

모든 새 글은 관리자 승인 후 공개되므로, 약간의 시간이 걸릴 수 있습니다.
감사합니다!`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "💬 댓글 규칙 및 에티켓",
    content: `다른 사용자의 글에 댓글을 남길 때 꼭 읽어주세요!

**댓글 작성 기본 원칙:**
1️⃣ 존중: 다른 의견도 인정하고 존중하기
2️⃣ 정중함: 높임말 사용 권장
3️⃣ 정확함: 글의 내용을 제대로 이해한 후 댓글
4️⃣ 건설성: 비판할 때는 개선안과 함께

**댓글 예시:**

❌ 나쁜 예:
"이건 말도 안 돼. 개소리네."

✅ 좋은 예:
"좋은 의견 감사합니다. 다만 이 부분은 다르게 생각해요. 왜냐하면..."

**금지 사항:**
🚫 욕설, 비하, 혐오 표현
🚫 스팸, 광고성 댓글
🚫 개인정보 공개
🚫 반복되는 중복 댓글

**팁:**
💡 길어지면 새 글로 작성하기
💡 데이터/링크를 공유할 때는 출처 명시
💡 의견 차이는 토론이지 싸움이 아니에요

감사합니다! 🙏`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "🤝 커뮤니티 규칙 및 가이드라인",
    content: `옥사주 커뮤니티가 건강하게 유지되기 위한 규칙입니다.

**1. 포용성 (Inclusivity)**
우리는 모든 배경을 존중합니다. 인종, 성별, 나이, 종교, 능력을 이유로 한 차별은 금지됩니다.

**2. 개인정보 보호**
다른 사용자의 개인정보(전화번호, 주소, 이메일, SNS)를 공개하지 마세요.
자신의 개인정보도 신중하게 공유하세요.

**3. 저작권 존중**
남의 글, 사진, 영상을 무단으로 공유하지 마세요.
출처를 명시하고, 필요시 저자의 동의를 받으세요.

**4. 건강한 토론**
- 다양한 의견을 환영합니다
- 의견 차이를 존중하세요
- "네 의견도 좋은 점이 있네" 같은 표현이 좋습니다
- 개인 공격은 금지입니다

**5. 광고 및 홍보**
과도한 자기 홍보는 금지됩니다.
정보성 공유는 적절히 허용되지만, 스팸은 즉시 삭제됩니다.

**규칙 위반 시 처리:**
⚠️ 1차: 경고
⚠️ 2차: 글/댓글 삭제
⚠️ 3차: 게시 제한

건강한 커뮤니티를 함께 만들어요! 💚`,
    author: "관리자",
    authorEmail: "admin@oktools.kr",
    approved: true,
  },
  {
    title: "❓ 자주 묻는 질문 (FAQ)",
    content: `**Q1. 로그인하지 않고 글을 볼 수 있나요?**
A. 네! 모든 공개된 글은 로그인 없이 볼 수 있습니다. 글을 쓰려면 Google 로그인이 필요합니다.

**Q2. 내가 쓴 글이 왜 안 보여요?**
A. 새 글은 관리자 승인 후 공개됩니다. 승인까지 보통 24시간 이내입니다. 부적절한 내용은 거부될 수 있으니, 위의 가이드를 확인하세요.

**Q3. 글을 삭제하고 싶어요.**
A. 자신이 쓴 글은 댓글이 없으면 직접 삭제할 수 있습니다. 댓글이 있으면 관리자에게 문의하세요.

**Q4. 스팸이나 부적절한 글을 발견했어요.**
A. 글 아래 신고 버튼을 눌러주세요. 관리자가 검토 후 처리합니다.

**Q5. 계정을 두 개 이상 만들 수 있나요?**
A. Google 계정 1개당 1계정 원칙입니다. 별도 Google 계정으로 여러 계정 생성은 가능하지만, 스팸/악용 목적이면 제재합니다.

**Q6. 댓글은 승인이 필요한가요?**
A. 아니요. 댓글은 즉시 공개됩니다. 하지만 부적절한 댓글은 언제든 삭제될 수 있습니다.

**Q7. 관리자에게 어떻게 연락하나요?**
A. 게시판 상단의 "문의" 버튼을 사용하거나, 우리 공식 이메일: contact@oktools.kr

**Q8. 익명으로 글을 쓸 수 있나요?**
A. 계정은 실명 연동(Google)이지만, 닉네임은 자유롭게 설정할 수 있습니다.

더 궁금한 점이 있으면 언제든 문의해주세요! 😊`,
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
      comments: [],
    };
    db.posts.push(post);
  });

  writeDB(db);
  console.log(`✅ 공지글 ${announcements.length}개를 생성했습니다!`);
  console.log("📍 locations: data/board.json");
}

main();
