<!-- 3dfa3186-ea74-4f64-9101-3d87eafc3f6e 561bedfa-0c75-40cc-916a-50ebfb146c62 -->
# 모바일/데스크톱 컴포넌트 분리

## 1. 새로운 파일 생성

### src/components/MobileHeader.tsx
- 모바일 전용 헤더 컴포넌트
- 로고 + 검색/햄버거/프로필 아이콘
- 탭 네비게이션 (피드/프로젝트/모집)

### src/components/DesktopHeader.tsx
- 데스크톱 전용 헤더 컴포넌트
- 로고 + 검색/프로필 아이콘 (햄버거 제외)
- 탭 네비게이션 (피드/프로젝트/모집)

### src/components/MobileFooter.tsx
- 모바일 전용 푸터 컴포넌트
- Sidyyy(왼쪽) + 설명(오른쪽) 2줄
- 링크들 (파이프 구분자)
- 저작권 정보

### src/components/DesktopFooter.tsx
- 데스크톱 전용 푸터 컴포넌트
- Sidyyy + 설명 한 줄
- 링크들 + 저작권 한 줄

## 2. 기존 파일 수정

### src/components/Header.tsx
- MobileHeader와 DesktopHeader를 조건부 렌더링
- `md:hidden`과 `hidden md:block` 사용

### src/components/Footer.tsx
- MobileFooter와 DesktopFooter를 조건부 렌더링
- `md:hidden`과 `hidden md:block` 사용

## 3. 파일 구조
```
src/components/
├── Header.tsx (wrapper)
├── MobileHeader.tsx
├── DesktopHeader.tsx
├── Footer.tsx (wrapper)
├── MobileFooter.tsx
└── DesktopFooter.tsx
```

## 4. 장점
- 각 버전 독립적 수정 가능
- 코드 가독성 향상
- 디바이스별 최적화 용이
