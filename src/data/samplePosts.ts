export interface Post {
  author: string
  timestamp: string
  content: string
  hashtags?: string[]
  likes: number
  comments: number
  hasImage?: boolean
  category?: string
}

export const samplePosts: Post[] = [
  {
    author: "김개발",
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
다음 프로젝트는 뭘 만들까요? 🤔`,
    hashtags: ["첫프로젝트", "React", "TypeScript", "할일관리"],
    likes: 12,
    comments: 7,
    category: "TaskFlow"
  },
  {
    author: "박코딩",
    timestamp: "2일 전",
    content: `Next.js 14의 새로운 App Router로 개인 블로그를 만들어봤어요!

기존 Pages Router와 비교해보니:
• 더 직관적인 폴더 구조
• 서버 컴포넌트 기본 지원
• 향상된 성능

특히 서버 컴포넌트 덕분에 초기 로딩이 정말 빨라졌어요.
아직 학습 중이지만 정말 만족스럽습니다!

혹시 App Router 사용해보신 분들 있나요?
꿀팁 있으면 공유해주세요! 🙏`,
    hashtags: ["NextJS", "AppRouter", "블로그", "개발일지"],
    likes: 8,
    comments: 4,
    category: "DevBlog"
  },
  {
    author: "이백엔드",
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

Docker 처음 사용하시는 분들도 금방 익숙해질 거예요 👍`,
    hashtags: ["Docker", "DevOps", "개발환경", "팀개발"],
    likes: 18,
    comments: 9,
    category: "DockerEnv"
  },
  {
    author: "정모바일",
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

    category: "MobileApp",
    hashtags: ["ReactNative", "Flutter", "모바일개발", "크로스플랫폼"]
  },
  {
    author: "최디자인",

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

    category: "DesignSystem",
    hashtags: ["디자인시스템", "Figma", "Storybook", "UIUX"]
  },
  {
    author: "한데이터",

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

    category: "DataAnalytics",
    hashtags: ["데이터분석", "Python", "자동화", "pandas"]
  },
  {
    author: "송클라우드",

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

    category: "ServerlessAPI",
    hashtags: ["AWS", "Lambda", "서버리스", "API"]
  },
  {
    author: "윤보안",

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

    category: "AuthSystem",
    hashtags: ["JWT", "인증", "보안", "토큰"]
  },
  {
    author: "강머신러닝",

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

    category: "CatDogAI",
    hashtags: ["머신러닝", "TensorFlow", "CNN", "이미지분류"]
  },
  {
    author: "조블록체인",

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

    category: "EthereumDApp",
    hashtags: ["블록체인", "Solidity", "스마트컨트랙트", "Web3"]
  },
  {
    author: "김테스트",

    timestamp: "4일 전",
    content: `프로젝트에 테스트 자동화를 도입해봤어요!

🧪 단위 테스트 (Jest):
• 컴포넌트 렌더링 테스트
• 비즈니스 로직 검증
• API 모킹 및 테스트

🎭 E2E 테스트 (Cypress):
• 사용자 시나리오 테스트
• 크로스 브라우저 호환성
• 시각적 회귀 테스트

결과적으로 버그 발견률이 70% 감소했어요!
테스트 코드 작성이 처음엔 번거로웠는데
이제는 없으면 불안하네요 😅

테스트 자동화 경험 있으신 분들
베스트 프랙티스 공유해주세요! 🚀

#테스트자동화 #Jest #Cypress #QA`,
    likes: 17,
    comments: 9,

    category: "TestSuite",
    hashtags: ["테스트자동화", "Jest", "Cypress", "QA"]
  },
  {
    author: "박게임",

    timestamp: "5일 전",
    content: `처음으로 완성한 게임을 출시했어요!

🎮 게임 특징:
• 2D 픽셀 아트 스타일
• 5개 스테이지, 3개 보스
• 모바일 터치 컨트롤 지원

🛠️ 개발 과정:
• Unity 2D 물리 엔진 활용
• C# 스크립팅
• Google Play Console 출시

게임 개발은 정말 어려워요...
하지만 플레이어들의 반응을 보면
모든 고생이 사라져요! ✨

인디게임 개발자분들
마케팅 꿀팁 있으면 알려주세요! 🎯

#게임개발 #Unity #인디게임 #2D`,
    likes: 23,
    comments: 16,

    category: "PixelJump",
    hashtags: ["게임개발", "Unity", "인디게임", "2D"]
  },
  {
    author: "이알고리즘",

    timestamp: "6일 전",
    content: `드디어 LeetCode 100문제를 풀었어요!

📈 성장 과정:
• 1-20문제: 기본 문법 익히기
• 21-50문제: 자료구조 이해
• 51-80문제: 알고리즘 패턴 학습
• 81-100문제: 복잡한 문제 도전

💡 배운 점:
• 문제 해결 사고력 향상
• 코드 최적화 능력
• 시간 복잡도 분석

처음엔 정말 어려웠는데
꾸준히 하니까 실력이 늘어나네요!

알고리즘 공부 방법이나
추천 문제 있으면 공유해주세요! 🧠

#알고리즘 #LeetCode #코딩테스트 #자료구조`,
    likes: 21,
    comments: 13,

    category: "LeetCode100",
    hashtags: ["알고리즘", "LeetCode", "코딩테스트", "자료구조"]
  },
  {
    author: "정오픈소스",

    timestamp: "1주 전",
    content: `처음으로 오픈소스에 기여해봤어요!

🌟 기여한 프로젝트:
• React 라이브러리 버그 수정
• 문서화 개선
• 테스트 코드 추가

📝 기여 과정:
• 이슈 확인 및 분석
• 포크 후 로컬 개발
• PR 작성 및 리뷰 반영

오픈소스 커뮤니티의 따뜻함을 느꼈어요!
메인테이너분이 정말 친절하게
가이드해주셨네요 🙏

오픈소스 기여 경험 있으신 분들
추천 프로젝트나 팁 부탁드려요! 🌱

#오픈소스 #GitHub #기여 #커뮤니티`,
    likes: 19,
    comments: 11,

    category: "OpenSource",
    hashtags: ["오픈소스", "GitHub", "기여", "커뮤니티"]
  },
  {
    author: "최성능",

    timestamp: "2주 전",
    content: `웹사이트 성능 최적화 프로젝트를 완료했어요!

⚡ 최적화 방법:
• 이미지 WebP 변환 및 압축
• 코드 스플리팅 적용
• CDN 도입
• 번들 크기 50% 감소

📊 결과:
• 로딩 시간: 3.2초 → 0.5초
• Lighthouse 점수: 45 → 95
• 이탈률: 30% → 8%

사용자 경험이 정말 많이 개선됐어요!
성능 최적화는 정말 보람있는 작업이네요 🚀

웹 성능 최적화 꿀팁 있으면
공유해주세요! ⚡

#웹성능 #최적화 #Lighthouse #CoreWebVitals`,
    likes: 26,
    comments: 19,

    category: "WebOptimizer",
    hashtags: ["웹성능", "최적화", "Lighthouse", "CoreWebVitals"]
  },
  {
    author: "박짧은글",

    timestamp: "3시간 전",
    content: `오늘은 React Hook을 공부했어요!
useState와 useEffect 정말 유용하네요 😊`,
    hashtags: ["React", "Hook", "공부"],
    likes: 5,
    comments: 2,

    category: "CodingDiary"
  },
  {
    author: "김간단",

    timestamp: "5시간 전",
    content: `feat: 새로운 기능 추가
fix: 버그 수정
style: 코드 스타일 변경

이제 커밋 메시지가 깔끔해졌어요! ✨`,
    hashtags: ["Git", "커밋", "컨벤션"],
    likes: 8,
    comments: 3,

    category: "GitConvention"
  },
  {
    author: "이한줄",

    timestamp: "1일 전",
    content: `console.log() 대신 console.table()을 사용하면 객체를 표 형태로 볼 수 있어요! 

#JavaScript #디버깅`,
    likes: 12,
    comments: 4,

    category: "DebugHelper",
    hashtags: ["JavaScript", "디버깅"]
  },
  {
    author: "김짧은글",

    timestamp: "2시간 전",
    content: `오늘도 열심히 코딩했어요! 💪`,
    hashtags: ["일상", "코딩"],
    likes: 3,
    comments: 1,

    category: "DailyCoding"
  },
  {
    author: "박간단",

    timestamp: "4시간 전",
    content: `flexbox로 가운데 정렬할 때:
justify-content: center;
align-items: center;

이거 하나면 끝! ✨`,
    hashtags: ["CSS", "팁"],
    likes: 7,
    comments: 2,

    category: "FlexboxGuide"
  },
  {
    author: "이한줄",

    timestamp: "6시간 전",
    content: `console.log() 대신 console.table()을 사용하면 객체를 표 형태로 볼 수 있어요!`,
    hashtags: ["JavaScript", "디버깅"],
    likes: 5,
    comments: 1,

    category: "ConsoleTools"
  },
  {
    author: "김짧은글2",

    timestamp: "1시간 전",
    content: `오늘도 열심히! 💪`,
    likes: 2,
    comments: 0,

    category: "DailyCoding"
  },
  {
    author: "박간단2",

    timestamp: "30분 전",
    content: `margin: 0 auto; 

이거 하나면 가운데 정렬! ✨`,
    likes: 4,
    comments: 1,

    category: "FlexboxGuide"
  }
]
