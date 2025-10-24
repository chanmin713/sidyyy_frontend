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
    author: "Sidyyy",
    title: "Sidyyy 공식 계정입니다.",
    subtitle: "",
    timestamp: "3일 전",
    content: `🚀 Sidyyy에 오신 것을 환영합니다!

Sidyyy는 개발자들이 자신의 사이드 프로젝트를 자랑하고, 
함께 성장할 수 있는 커뮤니티입니다.

✨ 주요 기능:
• 프로젝트 기록 및 공유
• 개발 과정 블로그 작성
• 다른 개발자들과 소통
• 프로젝트 피드백 받기

지금 바로 여러분의 멋진 프로젝트를 자랑해보세요!
첫 프로젝트를 등록하면 특별한 배지도 받을 수 있어요 🏆

#사이드프로젝트 #개발자커뮤니티 #프로젝트공유`,
    likes: 15,
    comments: 5,
    shares: 3,
    bookmarks: 8
  },
  {
    author: "김개발",
    title: "",
    subtitle: "프론트엔드 개발자",
    timestamp: "1일 전",
    content: `🎉 드디어 첫 사이드 프로젝트 완성!

3개월 동안 틈틈이 만든 "할일 관리 앱"이 드디어 완성됐어요!

📱 프로젝트명: TaskFlow
🛠️ 기술스택: React, TypeScript, Firebase
⏰ 개발기간: 3개월 (주말마다 2-3시간)

주요 기능:
• 드래그 앤 드롭으로 할일 순서 변경
• 팀원과 실시간 협업
• 진행률 시각화
• 모바일 반응형

처음엔 정말 어려웠는데, 이제 보니 정말 뿌듯해요!
다음 프로젝트는 뭘 만들까요? 🤔

#첫프로젝트 #React #TypeScript #할일관리`,
    likes: 12,
    comments: 7,
    shares: 2,
    bookmarks: 5,
    hasImage: true
  }
]
