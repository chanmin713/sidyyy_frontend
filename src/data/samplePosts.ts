export interface Post {
  author: string
  title: string
  subtitle: string
  timestamp: string
  content: string
  likes: number
  comments: number
  shares: number
  bookmarks: number
  hasImage?: boolean
}

export const samplePosts: Post[] = [
  {
    author: "사이드",
    title: "Sidyyy 공식 계정입니다.",
    subtitle: "",
    timestamp: "3일 전",
    content: `📱 Sidyyy 멤버의 프로젝트 소개 - 플레이포켓
_
이런 경험, 한 번쯤 있지 않으신가요?
💸 스팀에서 결제했는데 다른 스토어가 더 쌌던 경험
⏰ 찜해두고 "나중에 사야지" 했다가 세일 놓친 경험
📦 스위치·플스·엑박·스팀에 흩어진 게임, 정리에 골머리 앓았던 경험

플레이포켓이 이 모든 고민을 해결해드립니다!

───────────────
✅ 60+ 스토어 실시간 가격 비교
어디서 사는게 가장 저렴한지 한눈에!
역대 최저가·가격 변동 그래프까지

✅ 똑똑한 가격 알림
원하는 조건에 도달/할인 시작 시 즉시 알림!
이젠 "그때 살걸" 후회 NO

✅ 나만의 게임 컬렉션
모든 플랫폼 게임을 한곳에서 관리
친구들과 컬렉션 공유까지!

✅ Steam·GOG 라이브러리 자동 동기화
클릭 한 번으로 손쉽게 불러오세요!
───────────────

구경하러 가기 👉 myplaypocket.com
완전 무료 | 모바일·PC 지원 | 다크모드 지원`,
    likes: 2,
    comments: 0,
    shares: 0,
    bookmarks: 0
  }
]
