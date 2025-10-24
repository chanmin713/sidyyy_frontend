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
  },
  {
    author: "최디자인",
    title: "Figma에서 코드로, 디자인 시스템 구축기",
    subtitle: "UI/UX 디자이너",
    timestamp: "3일 전",
    content: `디자인 시스템을 처음 구축해봤는데 정말 신기해요!

🎨 디자인 단계:
• 컴포넌트 아토믹 디자인
• 일관된 컬러 팔레트
• 타이포그래피 시스템

💻 개발 단계:
• Storybook으로 컴포넌트 문서화
• Tailwind CSS로 스타일링
• 디자인 토큰 자동화

결과적으로 디자이너와 개발자 간 소통이
정말 편해졌어요! 

디자인 시스템 구축 경험 있으신 분들
조언 부탁드려요! 🙋‍♀️

#디자인시스템 #Figma #Storybook #UIUX`,
    likes: 15,
    comments: 8,
    shares: 3,
    bookmarks: 9
  },
  {
    author: "한데이터",
    title: "Python으로 데이터 분석 자동화하기",
    subtitle: "데이터 분석가",
    timestamp: "5일 전",
    content: `매일 반복되는 데이터 분석 작업을 자동화해봤어요!

📊 자동화한 작업들:
• 일일 리포트 생성
• 이상치 탐지 및 알림
• 차트 자동 업데이트

🛠️ 사용 기술:
• pandas, numpy (데이터 처리)
• matplotlib, seaborn (시각화)
• schedule (작업 스케줄링)

이제 하루 2시간 걸리던 작업이
5분이면 끝나네요! 

데이터 분석 자동화 꿀팁 있으면
공유해주세요! 📈

#데이터분석 #Python #자동화 #pandas`,
    likes: 20,
    comments: 12,
    shares: 6,
    bookmarks: 14
  },
  {
    author: "송클라우드",
    title: "AWS Lambda로 서버리스 API 만들기",
    subtitle: "클라우드 엔지니어",
    timestamp: "6일 전",
    content: `서버 관리 없이 API를 만들어봤는데 정말 편해요!

☁️ AWS Lambda 장점:
• 서버 관리 불필요
• 사용한 만큼만 비용
• 자동 스케일링

🔧 구현한 기능:
• REST API 엔드포인트
• DynamoDB 연동
• API Gateway 설정

처음엔 복잡해 보였는데
문서 보면서 하니까 금방 익숙해졌어요!

서버리스 아키텍처 경험 있으신 분들
꿀팁 부탁드려요! 🚀

#AWS #Lambda #서버리스 #API`,
    likes: 16,
    comments: 6,
    shares: 4,
    bookmarks: 11
  },
  {
    author: "윤보안",
    title: "JWT 토큰으로 인증 시스템 구축하기",
    subtitle: "보안 엔지니어",
    timestamp: "1주 전",
    content: `JWT를 사용한 인증 시스템을 만들어봤어요!

🔐 JWT의 장점:
• 서버 상태 불필요
• 확장성 좋음
• 다양한 플랫폼 지원

🛡️ 보안 고려사항:
• 토큰 만료 시간 설정
• Refresh Token 사용
• HTTPS 필수

처음엔 보안이 걱정됐는데
적절한 설정으로 안전하게 사용할 수 있네요!

인증/보안 관련 경험 있으신 분들
조언 부탁드려요! 🔒

#JWT #인증 #보안 #토큰`,
    likes: 19,
    comments: 10,
    shares: 5,
    bookmarks: 13
  },
  {
    author: "강머신러닝",
    title: "TensorFlow로 이미지 분류 모델 만들기",
    subtitle: "ML 엔지니어",
    timestamp: "2주 전",
    content: `고양이와 개를 구분하는 모델을 만들어봤어요!

🤖 모델 학습 과정:
• 데이터 수집 및 전처리
• CNN 모델 설계
• 하이퍼파라미터 튜닝

📈 결과:
• 정확도 95% 달성
• 실시간 예측 가능
• 웹에서 테스트 가능

머신러닝은 정말 재미있어요!
다음엔 자연어 처리도 해보고 싶어요.

ML 경험 있으신 분들
프로젝트 아이디어 공유해주세요! 🧠

#머신러닝 #TensorFlow #CNN #이미지분류`,
    likes: 25,
    comments: 18,
    shares: 9,
    bookmarks: 20
  },
  {
    author: "조블록체인",
    title: "Solidity로 첫 스마트 컨트랙트 작성하기",
    subtitle: "블록체인 개발자",
    timestamp: "3주 전",
    content: `이더리움 스마트 컨트랙트를 처음 작성해봤어요!

⛓️ 구현한 기능:
• 간단한 토큰 전송
• 잔액 조회
• 이벤트 로깅

🔧 개발 환경:
• Remix IDE 사용
• Ganache 로컬 테스트
• MetaMask 연동

블록체인은 정말 신기한 기술이에요!
아직 배울 게 많지만 재미있네요.

Web3 개발 경험 있으신 분들
초보자 가이드 부탁드려요! 🌐

#블록체인 #Solidity #스마트컨트랙트 #Web3`,
    likes: 14,
    comments: 7,
    shares: 3,
    bookmarks: 8
  }
]
