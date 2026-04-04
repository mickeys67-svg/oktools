export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  arcana: "major";
  uprightMeaning: string;
  reversedMeaning: string;
}

export const majorArcana: TarotCard[] = [
  { id: 0, name: "바보", nameEn: "The Fool", arcana: "major", uprightMeaning: "새로운 시작, 순수한 마음으로 떠나는 모험. 두려움 없이 첫 발을 내딛을 때입니다.", reversedMeaning: "무모한 행동, 준비 없는 도전은 위험합니다. 신중하게 계획을 세우세요." },
  { id: 1, name: "마법사", nameEn: "The Magician", arcana: "major", uprightMeaning: "당신에게는 원하는 것을 이룰 능력이 있습니다. 자원을 활용해 행동에 옮기세요.", reversedMeaning: "재능을 낭비하고 있거나 자기기만에 빠져있을 수 있습니다. 진정성을 되찾으세요." },
  { id: 2, name: "여사제", nameEn: "The High Priestess", arcana: "major", uprightMeaning: "직관과 내면의 목소리에 귀 기울이세요. 아직 드러나지 않은 진실이 있습니다.", reversedMeaning: "직감을 무시하고 있거나 비밀이 드러날 수 있습니다. 내면의 지혜를 신뢰하세요." },
  { id: 3, name: "여황제", nameEn: "The Empress", arcana: "major", uprightMeaning: "풍요와 창조의 에너지가 넘칩니다. 사랑, 아름다움, 풍요를 누리세요.", reversedMeaning: "자기 돌봄을 소홀히 하고 있습니다. 과도한 의존이나 집착을 경계하세요." },
  { id: 4, name: "황제", nameEn: "The Emperor", arcana: "major", uprightMeaning: "안정과 질서, 리더십을 발휘할 때입니다. 체계적으로 계획을 세우고 실행하세요.", reversedMeaning: "지나친 통제욕이나 완고함이 문제가 됩니다. 유연성을 길러야 합니다." },
  { id: 5, name: "교황", nameEn: "The Hierophant", arcana: "major", uprightMeaning: "전통과 지혜를 따르면 안정을 얻습니다. 스승이나 멘토의 조언을 구하세요.", reversedMeaning: "기존의 틀에서 벗어나 자신만의 길을 찾을 때입니다. 관습에 도전하세요." },
  { id: 6, name: "연인", nameEn: "The Lovers", arcana: "major", uprightMeaning: "중요한 선택의 기로에 서있습니다. 마음이 이끄는 대로 진정한 사랑과 조화를 선택하세요.", reversedMeaning: "관계의 불균형이나 잘못된 선택을 암시합니다. 가치관을 점검해보세요." },
  { id: 7, name: "전차", nameEn: "The Chariot", arcana: "major", uprightMeaning: "강한 의지로 목표를 향해 돌진하세요. 장애물을 넘어 승리가 기다립니다.", reversedMeaning: "방향을 잃거나 자제력이 부족합니다. 감정을 다스리고 방향을 재정비하세요." },
  { id: 8, name: "힘", nameEn: "Strength", arcana: "major", uprightMeaning: "부드러운 힘으로 어려움을 극복할 수 있습니다. 인내와 용기로 상황을 다스리세요.", reversedMeaning: "자신감 부족이나 내면의 두려움에 지배당하고 있습니다. 내면의 힘을 믿으세요." },
  { id: 9, name: "은둔자", nameEn: "The Hermit", arcana: "major", uprightMeaning: "혼자만의 시간이 필요합니다. 내면을 성찰하고 삶의 방향을 돌아보세요.", reversedMeaning: "고립이 지나치거나 세상과 단절되어 있습니다. 다시 사람들과 연결되세요." },
  { id: 10, name: "운명의 수레바퀴", nameEn: "Wheel of Fortune", arcana: "major", uprightMeaning: "운명의 전환점입니다. 좋은 변화가 찾아오고 있으니 흐름을 믿으세요.", reversedMeaning: "예상치 못한 역경이 있을 수 있습니다. 변화에 저항하지 말고 적응하세요." },
  { id: 11, name: "정의", nameEn: "Justice", arcana: "major", uprightMeaning: "공정한 결과가 따릅니다. 정직하게 행동하면 올바른 결과를 얻을 것입니다.", reversedMeaning: "불공정함이나 불균형이 있습니다. 자신의 행동에 책임을 지세요." },
  { id: 12, name: "매달린 사람", nameEn: "The Hanged Man", arcana: "major", uprightMeaning: "잠시 멈추고 다른 시각에서 바라보세요. 기다림 속에서 새로운 깨달음을 얻습니다.", reversedMeaning: "불필요한 희생이나 제자리걸음입니다. 과감하게 결단을 내려야 합니다." },
  { id: 13, name: "죽음", nameEn: "Death", arcana: "major", uprightMeaning: "끝은 새로운 시작입니다. 과거를 놓아주고 변화를 받아들이면 성장할 수 있습니다.", reversedMeaning: "변화를 거부하고 과거에 집착하고 있습니다. 놓아주는 연습을 하세요." },
  { id: 14, name: "절제", nameEn: "Temperance", arcana: "major", uprightMeaning: "균형과 조화가 핵심입니다. 인내심을 가지고 중용의 길을 걸으세요.", reversedMeaning: "균형이 깨지고 극단으로 치우치고 있습니다. 절제와 조율이 필요합니다." },
  { id: 15, name: "악마", nameEn: "The Devil", arcana: "major", uprightMeaning: "유혹이나 집착에 빠져있진 않은지 돌아보세요. 스스로를 옭아매는 것에서 벗어나야 합니다.", reversedMeaning: "속박에서 벗어나고 있습니다. 자유를 되찾고 나쁜 습관을 끊을 수 있습니다." },
  { id: 16, name: "탑", nameEn: "The Tower", arcana: "major", uprightMeaning: "갑작스러운 변화나 충격이 있지만, 이는 거짓 위에 세운 것을 무너뜨리고 진실을 드러냅니다.", reversedMeaning: "변화를 피하려 하지만 결국 올 것은 옵니다. 미리 대비하고 유연하게 대처하세요." },
  { id: 17, name: "별", nameEn: "The Star", arcana: "major", uprightMeaning: "희망과 영감이 가득한 시기입니다. 밝은 미래를 믿고 꿈을 향해 나아가세요.", reversedMeaning: "희망을 잃었거나 자신감이 떨어져 있습니다. 작은 빛이라도 찾아 따라가세요." },
  { id: 18, name: "달", nameEn: "The Moon", arcana: "major", uprightMeaning: "불안이나 환상에 주의하세요. 진실이 보이지 않는 시기이니 직감을 따르되 신중하세요.", reversedMeaning: "혼란이 걷히고 진실이 드러나고 있습니다. 두려움을 극복할 수 있습니다." },
  { id: 19, name: "태양", nameEn: "The Sun", arcana: "major", uprightMeaning: "기쁨, 성공, 활력이 넘칩니다. 모든 것이 밝게 빛나는 최고의 시기입니다.", reversedMeaning: "기쁨이 줄어들거나 자신감이 흔들립니다. 긍정적 에너지를 되찾으세요." },
  { id: 20, name: "심판", nameEn: "Judgement", arcana: "major", uprightMeaning: "새로운 부름에 응답할 때입니다. 과거를 정리하고 더 높은 차원으로 도약하세요.", reversedMeaning: "자기반성이 부족하거나 중요한 결정을 미루고 있습니다. 용기를 내세요." },
  { id: 21, name: "세계", nameEn: "The World", arcana: "major", uprightMeaning: "완성과 성취의 카드입니다. 한 사이클이 끝나고 더 큰 세계가 열립니다.", reversedMeaning: "완결을 짓지 못하고 있습니다. 마무리를 확실히 하고 다음 단계로 나아가세요." },
];

export const allTarotCards = majorArcana;

export function drawCards(count: number): TarotCard[] {
  const shuffled = [...allTarotCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const CARD_EMOJIS: Record<number, string> = {
  0: "🃏", 1: "🪄", 2: "🌙", 3: "👑", 4: "🏛️", 5: "📿",
  6: "💕", 7: "⚔️", 8: "🦁", 9: "🏔️", 10: "🎡", 11: "⚖️",
  12: "🔮", 13: "🦋", 14: "☯️", 15: "🔗", 16: "⚡", 17: "⭐",
  18: "🌕", 19: "☀️", 20: "📯", 21: "🌍",
};

export function getCardEmoji(card: TarotCard): string {
  return CARD_EMOJIS[card.id] ?? "🎴";
}
