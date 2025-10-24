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
    author: "김개발",
    title: "드디어 첫 사이드 프로젝트 완성! 🎉",
    subtitle: "프론트엔드 개발자",
    timestamp: "1일 전",
    content: `3개월 동안 틈틈이 만든 "할일 관리 앱"이 드디어 완성됐어요!

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
  },
  {
    author: "박코딩",
    title: "Next.js 14 App Router로 블로그 만들기",
    subtitle: "풀스택 개발자",
    timestamp: "2일 전",
    content: `Next.js 14의 새로운 App Router로 개인 블로그를 만들어봤어요!

기존 Pages Router와 비교해보니:
• 더 직관적인 폴더 구조
• 서버 컴포넌트 기본 지원
• 향상된 성능

특히 서버 컴포넌트 덕분에 초기 로딩이 정말 빨라졌어요.
아직 학습 중이지만 정말 만족스럽습니다!

혹시 App Router 사용해보신 분들 있나요?
꿀팁 있으면 공유해주세요! 🙏

#NextJS #AppRouter #블로그 #개발일지`,
    likes: 8,
    comments: 4,
    shares: 1,
    bookmarks: 6
  },
  {
    author: "이백엔드",
    title: "Docker로 개발환경 통일하기",
    subtitle: "백엔드 개발자",
    timestamp: "4일 전",
    content: `팀에서 Docker를 도입한 후 개발환경이 정말 편해졌어요!

이전에는:
• 각자 다른 Node.js 버전
• 데이터베이스 설정 이슈
• "내 컴퓨터에서는 되는데..." 문제

Docker 사용 후:
• 모든 환경이 동일
• 새 팀원 온보딩 5분
• 배포와 개발환경 일치

Docker Compose로 프론트엔드, 백엔드, DB를 한 번에 띄우니까
정말 편하네요! 

Docker 처음 사용하시는 분들도 금방 익숙해질 거예요 👍

#Docker #DevOps #개발환경 #팀개발`,
    likes: 18,
    comments: 9,
    shares: 5,
    bookmarks: 12
  },
  {
    author: "정모바일",
    title: "React Native vs Flutter, 6개월 사용 후기",
    subtitle: "모바일 개발자",
    timestamp: "1주 전",
    content: `React Native와 Flutter를 각각 6개월씩 사용해봤는데,
솔직한 후기를 공유해드릴게요!

React Native:
✅ JavaScript로 개발 가능
✅ 웹 개발자도 쉽게 접근
❌ 네이티브 성능 한계
❌ 플랫폼별 이슈 많음

Flutter:
✅ 정말 부드러운 애니메이션
✅ 일관된 UI/UX
❌ Dart 언어 학습 필요
❌ 앱 크기가 큼

결론: 빠른 프로토타이핑은 RN, 
성능이 중요한 앱은 Flutter 추천!

어떤 기술 스택 사용하고 계신가요?

#ReactNative #Flutter #모바일개발 #크로스플랫폼`,
    likes: 22,
    comments: 15,
    shares: 8,
    bookmarks: 18
  }
]
