# 📋 Sidyyy Frontend 개발 TODO

## ✅ 완료된 기능들

### 1. 기본 프로젝트 구조

- ✅ **React 18 + TypeScript + Vite** 설정 완료
- ✅ **Tailwind CSS** 스타일링 시스템 구축
- ✅ **Zustand** 상태 관리 시스템 구현
- ✅ **React Router** 라우팅 시스템 구축
- ✅ **Jest + React Testing Library** 테스트 환경 설정

### 2. 페이지 구조 (11개 페이지)

- ✅ **HomePage**: 메인 페이지
- ✅ **LogPage**: 로그 페이지 (개발 로그) - 필터링, 검색, 정렬 기능 포함
- ✅ **ProjectPage**: 프로젝트 목록 페이지 (기본 구조)
- ✅ **ProjectDetailPage**: 프로젝트 상세 페이지
- ✅ **RecruitPage**: 모집 페이지 (기본 구조)
- ✅ **MemberPage**: 멤버 페이지 (기본 구조)
- ✅ **ProfilePage**: 내 프로필 페이지 (기본 구조)
- ✅ **UserProfilePage**: 다른 사용자 프로필 페이지 (기본 구조)
- ✅ **MessagePage**: DM 페이지 (기본 구조)
- ✅ **PostDetailPage**: 포스트 상세 페이지 - 댓글 시스템 포함
- ✅ **WritePostPage**: 포스트 작성 페이지 - 이미지 업로드, 해시태그 기능 포함

### 3. 컴포넌트 시스템

- ✅ **Layout**: `DesktopHeader`, `MobileHeader`, `Footer`, `RightSidebar`, `SidebarContent`
- ✅ **Shared**: `ProfileSection`, `FloatingWriteButton`, `ScrollToTopButton`
- ✅ **Post**: `PostCard`, `PostContent`, `CommentSection`, `PostForm`
- ✅ **UI**: `AccessibleButton`, `LoadingSpinner`, `Dropdown`, `IconButton`, `SearchButton`, `ToggleGroup`

### 4. 상태 관리 (Zustand)

- ✅ **useUserStore**: 사용자 인증 및 프로필 관리
- ✅ **useSearchStore**: 검색 쿼리 및 필터 상태
- ✅ **useUIStore**: UI 상태 (사이드바, 모달 등)
- ✅ **useNotificationStore**: 알림 관리
- ✅ **useNormalizedStore**: 정규화된 데이터 관리 (CRUD, 필터링, 검색, 페이지네이션 포함)

### 5. 유틸리티 및 훅

- ✅ **유틸리티**: `accessibilityUtils`, `securityUtils`, `text-utils`, `iconUtils`, `statusUtils`, `normalizationUtils`, `crud`, `queries`
- ✅ **훅**: `useDropdown`, `useNavigation`, `useNotificationHandling`, `usePostWrite`

### 6. 개발 환경

- ✅ **ESLint, Prettier** 코드 품질 도구 설정
- ✅ **Husky, lint-staged** Git 훅 설정
- ✅ **TypeScript** 타입 안전성 보장
- ✅ **코드 스플리팅** React.lazy를 사용한 페이지 지연 로딩
- ✅ **Jest + React Testing Library** 테스트 환경 설정
- ✅ **Tailwind CSS** 스타일링 시스템 구축

---

## 📝 구현해야 할 기능

### 1. 사용자 인터페이스 개선 (최우선)

- [ ] **프로필 편집 기능** - 아바타, 소개, 기술 스택 등
- [ ] **사용자 설정** - 개인정보, 알림 설정, 프라이버시 설정

### 2. 프로젝트 UI 개선

- [ ] **프로젝트 필터링 및 검색** - 카테고리, 기술 스택, 상태별 필터
- [ ] **프로젝트 상태 표시** - 진행중, 완료, 중단 등 시각적 표시
- [ ] **프로젝트 통계 표시** - 조회수, 좋아요, 댓글 수 등

### 3. 모집 UI 개선

- [ ] **모집 필터링** - 지역, 기술 스택, 경력 등

### 4. 멤버 UI 개선

- [ ] **멤버 상세 프로필** - 포트폴리오, 기술 스택, 경력

### 5. DM UI 개선

- [ ] **채팅방 UI 개선** - 더 나은 채팅 인터페이스

### 6. 검색 UI 개선

- [ ] **검색 결과 페이지** - 검색 결과 표시 및 정렬
- [ ] **검색 히스토리** - 최근 검색어 저장
- [ ] **자동완성** - 검색어 자동완성 기능

### 7. 알림 UI 개선

- [ ] **알림 UI 개선** - 더 나은 알림 표시 및 관리

### 8. 로그 UI 개선

- [ ] **로그 템플릿** - 자주 사용하는 템플릿 저장
- [ ] **로그 내보내기** - PDF, 이미지 등으로 내보내기

### 9. 소셜 UI 개선

- [ ] **공유 기능** - 로그, 프로젝트, 모집 공유
- [ ] **좋아요/북마크** - 콘텐츠 좋아요 및 북마크
- [ ] **해시태그 시스템** - 해시태그 생성 및 팔로우

### 10. 다국어 지원 제거 작업 (완료됨)

- ✅ **i18n 관련 코드 제거 완료** - 실제로는 i18n이 구현되지 않았음
- ✅ **하드코딩된 한국어 텍스트 사용** - 모든 컴포넌트에서 한국어 텍스트 직접 사용

---

## 🛠️ 기술적 개선사항

### 1. 성능 최적화

- [ ] **PWA 기능** 추가 - 오프라인 지원, 설치 가능한 웹앱
- [ ] **서비스 워커** 구현 - 캐싱, 백그라운드 동기화
- [ ] **번들 최적화** - 더 나은 코드 스플리팅, 트리 셰이킹
- [ ] **이미지 최적화** - WebP 변환, 반응형 이미지

### 2. 개발 환경 개선

- [ ] **E2E 테스트** (Playwright) - 사용자 시나리오 테스트
- [ ] **CI/CD 파이프라인** - 자동 배포 및 테스트

### 3. 접근성 및 보안

- [ ] **보안 헤더** 설정 - CSP, HSTS, X-Frame-Options
- [ ] **CSP** (Content Security Policy) 구현
- [ ] **접근성 테스트** 자동화 - axe-core 통합
- [ ] **보안 스캔** - 의존성 취약점 검사

### 4. SEO 및 검색 최적화

- [ ] **구조화된 데이터** 확장 - 더 많은 스키마 타입
- [ ] **검색 콘솔** 연동 - Google Search Console
- [ ] **성능 모니터링** - Core Web Vitals 추적

---

## 🎨 디자인 시스템

### 1. 컴포넌트 표준화

- [ ] **디자인 시스템** 확장 - 더 많은 컴포넌트 추가
- [ ] **애니메이션** 가이드라인 - 일관된 애니메이션 시스템
- [ ] **아이콘 시스템** - 통일된 아이콘 라이브러리
- [ ] **색상 팔레트** - 더 많은 테마 색상

### 2. UX/UI 개선

- [ ] **마이크로 인터랙션** - 버튼, 카드, 모달 애니메이션
- [ ] **모바일 UX** 개선 - 터치 인터랙션 최적화
- [ ] **로딩 상태** 개선 - 스켈레톤 UI, 프로그레스 바
- [ ] **에러 상태** 개선 - 더 나은 에러 메시지 및 복구
