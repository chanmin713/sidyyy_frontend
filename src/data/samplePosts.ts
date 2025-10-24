import type { Post } from '@/types';

export const samplePosts: Post[] = [
  // WebOptimizer 프로젝트 (3개 로그)
  {
    id: '1',
    author: '최성능',
    authorRole: 'PO',
    timestamp: '2주 전',
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
    category: 'WebOptimizer',
    projectLikes: 42,
    projectLogo: 'VercelLogoIcon',
    hashtags: ['웹성능', '최적화', 'Lighthouse', 'CoreWebVitals'],
  },
  {
    id: '2',
    author: '최성능',
    authorRole: 'PO',
    timestamp: '1주 전',
    content: `WebOptimizer 프로젝트의 두 번째 로그입니다!

오늘은 Core Web Vitals 개선에 집중했어요.
LCP를 2.1초에서 0.8초로 줄였습니다! 🎉

주요 개선사항:
• 이미지 lazy loading 적용
• Critical CSS 인라인화
• JavaScript 번들 최적화

다음 목표는 CLS 점수 개선이에요!`,
    likes: 15,
    comments: 8,
    category: 'WebOptimizer',
    projectLikes: 42,
    projectLogo: 'VercelLogoIcon',
    hashtags: ['CoreWebVitals', 'LCP', '성능최적화'],
  },
  {
    id: '3',
    author: '최성능',
    authorRole: 'PO',
    timestamp: '3일 전',
    content: `WebOptimizer 프로젝트 마지막 로그!

CLS 점수를 0.15에서 0.05로 개선했습니다! 🚀

최종 결과:
• LCP: 0.8초
• FID: 45ms
• CLS: 0.05
• Lighthouse: 98점

프로젝트 완료! 다음은 뭘 할까요?`,
    likes: 32,
    comments: 12,
    category: 'WebOptimizer',
    projectLikes: 42,
    projectLogo: 'VercelLogoIcon',
    hashtags: ['완료', 'CLS', 'Lighthouse98점'],
  },

  // TaskFlow 프로젝트 (2개 로그)
  {
    id: '4',
    author: '김개발',
    authorRole: '백엔드 개발자',
    timestamp: '1일 전',
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
    hashtags: ['첫프로젝트', 'React', 'TypeScript', '할일관리'],
    likes: 12,
    comments: 7,
    category: 'TaskFlow',
    projectLikes: 16,
    projectLogo: 'GitHubLogoIcon',
  },
  {
    id: '5',
    author: '김개발',
    authorRole: '백엔드 개발자',
    timestamp: '12시간 전',
    content: `TaskFlow 프로젝트 업데이트!

사용자 피드백을 반영해서 새로운 기능을 추가했어요:
• 다크모드 지원
• 키보드 단축키
• 할일 템플릿 기능

사용자들이 정말 좋아해주네요! 😊`,
    likes: 8,
    comments: 3,
    category: 'TaskFlow',
    projectLikes: 16,
    projectLogo: 'GitHubLogoIcon',
    hashtags: ['업데이트', '다크모드', '피드백'],
  },

  // WebPortfolio 프로젝트 (1개 로그)
  {
    id: '6',
    author: '박포트폴리오',
    authorRole: '프론트엔드 개발자',
    timestamp: '5일 전',
    content: `개인 포트폴리오 웹사이트를 완성했어요!

💻 웹사이트 특징:
• 반응형 디자인 (모바일/태블릿/데스크톱)
• 다크모드 지원
• 애니메이션과 인터랙션 풍부
• 3D 요소와 파티클 효과

🛠️ 기술 스택:
• React + TypeScript
• Three.js (3D 그래픽)
• Framer Motion (애니메이션)
• Tailwind CSS

처음엔 3D 라이브러리가 어려웠는데
이제 보니 정말 멋진 결과가 나왔어요! ✨

포트폴리오 제작 경험 있으신 분들
피드백 부탁드려요! 🎯

#포트폴리오 #React #ThreeJS #웹개발`,
    likes: 23,
    comments: 16,
    category: 'WebPortfolio',
    projectLikes: 24,
    projectLogo: 'InstagramLogoIcon',
    hashtags: ['포트폴리오', 'React', 'ThreeJS', '웹개발'],
  },

  // DockerEnv 프로젝트 (2개 로그)
  {
    id: '7',
    author: '이백엔드',
    authorRole: 'DevOps 엔지니어',
    timestamp: '4일 전',
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
    hashtags: ['Docker', 'DevOps', '개발환경', '팀개발'],
    likes: 18,
    comments: 9,
    category: 'DockerEnv',
    projectLikes: 8,
    projectLogo: 'NotionLogoIcon',
  },
  {
    id: '8',
    author: '이백엔드',
    authorRole: 'DevOps 엔지니어',
    timestamp: '2일 전',
    content: `DockerEnv 프로젝트 두 번째 로그!

Kubernetes로 컨테이너 오케스트레이션을 도입했어요.
이제 스케일링이 정말 쉬워졌습니다! 🚀

주요 개선사항:
• 자동 스케일링 설정
• 헬스체크 구현
• 로그 수집 시스템 구축

다음은 모니터링 시스템을 구축할 예정이에요!`,
    likes: 14,
    comments: 6,
    category: 'DockerEnv',
    projectLikes: 8,
    projectLogo: 'NotionLogoIcon',
    hashtags: ['Kubernetes', '오케스트레이션', '스케일링'],
  },

  // CatDogAI 프로젝트 (1개 로그)
  {
    id: '9',
    author: '강머신러닝',
    authorRole: 'AI 연구원',
    timestamp: '2주 전',
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
    category: 'CatDogAI',
    projectLikes: 35,
    projectLogo: 'DiscordLogoIcon',
    hashtags: ['머신러닝', 'TensorFlow', 'CNN', '이미지분류'],
  },

  // DailyCoding 프로젝트 (1개 로그)
  {
    id: '10',
    author: '김짧은글',
    authorRole: '프론트엔드 개발자',
    timestamp: '2시간 전',
    content: `오늘도 열심히 코딩했어요! 💪`,
    hashtags: ['일상', '코딩'],
    likes: 3,
    comments: 1,
    category: 'DailyCoding',
    projectLikes: 3,
    projectLogo: 'GitHubLogoIcon',
  },

  // MobileApp 프로젝트 (1개 로그)
  {
    id: '11',
    author: '정모바일',
    authorRole: '모바일 개발자',
    timestamp: '1주 전',
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
    category: 'MobileApp',
    projectLikes: 18,
    projectLogo: 'GitHubLogoIcon',
    hashtags: ['ReactNative', 'Flutter', '모바일개발', '크로스플랫폼'],
  },

  // FlexboxGuide 프로젝트 (1개 로그)
  {
    id: '12',
    author: '박간단',
    authorRole: 'UI/UX 디자이너',
    timestamp: '4시간 전',
    content: `flexbox로 가운데 정렬할 때:
justify-content: center;
align-items: center;

이거 하나면 끝! ✨`,
    hashtags: ['CSS', '팁'],
    likes: 7,
    comments: 2,
    category: 'FlexboxGuide',
    projectLikes: 12,
    projectLogo: 'FigmaLogoIcon',
  },

  // AuthSystem 프로젝트 (1개 로그)
  {
    id: '13',
    author: '윤보안',
    authorRole: '보안 엔지니어',
    timestamp: '1주 전',
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
    category: 'AuthSystem',
    projectLikes: 28,
    projectLogo: 'NotionLogoIcon',
    hashtags: ['JWT', '인증', '보안', '토큰'],
  },

  // LeetCode100 프로젝트 (1개 로그)
  {
    id: '14',
    author: '이알고리즘',
    authorRole: '알고리즘 엔지니어',
    timestamp: '6일 전',
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
    category: 'LeetCode100',
    projectLikes: 6,
    projectLogo: 'VercelLogoIcon',
    hashtags: ['알고리즘', 'LeetCode', '코딩테스트', '자료구조'],
  },
];
