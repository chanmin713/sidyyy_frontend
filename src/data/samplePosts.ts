import type { Post } from '@/types'

export const samplePosts: Post[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
    author: "김짧은글",
    timestamp: "2시간 전",
    content: `오늘도 열심히 코딩했어요! 💪`,
    hashtags: ["일상", "코딩"],
    likes: 3,
    comments: 1,
    category: "DailyCoding"
  },
  {
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
  }
]