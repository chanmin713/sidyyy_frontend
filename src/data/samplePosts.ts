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
    title: "Sidyyy에 오신 것을 환영합니다! 🎉",
    subtitle: "공식 계정",
    timestamp: "3일 전",
    content: `안녕하세요! Sidyyy 공식 계정입니다.

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
    author: "최디자인",
    title: "Figma에서 코드로, 디자인 시스템 구축기",
    subtitle: "UI/UX 디자이너",
    timestamp: "5일 전",
    content: `디자인 시스템을 처음 구축해봤는데 정말 신기했어요!

진행 과정:
1. Figma에서 컴포넌트 설계
2. Storybook으로 문서화
3. React 컴포넌트로 구현
4. TypeScript로 타입 정의

특히 Storybook이 정말 유용했어요.
개발자분들이 컴포넌트를 어떻게 사용하는지
한눈에 볼 수 있어서 소통이 훨씬 원활해졌어요.

디자인 시스템 구축하신 분들 경험담 들어보고 싶어요!
어떤 도구들 사용하셨나요?

#디자인시스템 #Figma #Storybook #UIUX`,
    likes: 14,
    comments: 6,
    shares: 3,
    bookmarks: 9,
    hasImage: true
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
  },
  {
    author: "한데이터",
    title: "Python으로 데이터 분석 자동화하기",
    subtitle: "데이터 분석가",
    timestamp: "1주 전",
    content: `매일 반복되는 데이터 분석 작업을 자동화해봤어요!

사용한 도구들:
• pandas: 데이터 처리
• matplotlib: 시각화
• schedule: 작업 스케줄링
• smtplib: 이메일 발송

이제 매일 아침 9시에 자동으로:
1. 데이터 수집
2. 분석 및 시각화
3. 리포트 생성
4. 팀원들에게 이메일 발송

시간이 정말 많이 절약됐어요!
다음에는 머신러닝 모델도 추가해볼 예정이에요.

데이터 분석 자동화 경험 있으신 분들 조언 부탁드려요! 📊

#Python #데이터분석 #자동화 #pandas`,
    likes: 16,
    comments: 8,
    shares: 4,
    bookmarks: 11
  },
  {
    author: "오클라우드",
    title: "AWS Lambda로 서버리스 API 만들기",
    subtitle: "클라우드 엔지니어",
    timestamp: "2주 전",
    content: `AWS Lambda로 서버리스 API를 만들어봤는데
정말 신기한 경험이었어요!

장점:
• 서버 관리 불필요
• 사용한 만큼만 비용 지불
• 자동 스케일링
• 높은 가용성

단점:
• 콜드 스타트 이슈
• 실행 시간 제한
• 메모리 제한

Serverless Framework로 배포했는데
정말 간편했어요!

서버리스 아키텍처 도입 고려 중이신 분들
궁금한 점 있으면 언제든 물어보세요!

#AWS #Lambda #서버리스 #Serverless`,
    likes: 19,
    comments: 11,
    shares: 6,
    bookmarks: 14
  }
]
