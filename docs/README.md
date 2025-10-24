# Sidyyy 프로젝트 문서

## 핵심 문서

### 프론트엔드

- [**컴포넌트 문서**](./components/README.md) - React 컴포넌트 가이드
- [**아키텍처 문서**](./architecture/README.md) - 프로젝트 구조
- [**기술 문서**](./technical/README.md) - 훅, 유틸리티, 상태 관리
- [**API 문서**](./api/README.md) - 프론트엔드 API 참조

### 백엔드

- [**백엔드 문서**](./backend/README.md) - 백엔드 개발 가이드

### 개발 및 운영

- [**개발 문서**](./development/README.md) - 개발 환경 및 가이드
- [**운영 문서**](./operations/README.md) - 배포 및 모니터링
- [**SEO 문서**](./seo/README.md) - SEO 최적화

### 프로젝트 관리

- [**TODO 목록**](./todo.md) - 구현해야 할 기능과 우선순위

## 사용 가이드

### 개발자

- **새로운 개발자**: [아키텍처 문서](./architecture.md)부터 시작
- **컴포넌트 개발**: [컴포넌트 문서](./components.md) 참고
- **개발 환경**: [개발 가이드](./development.md) 참고
- **백엔드 개발**: [백엔드 문서](./backend/README.md) 참고

### 기획자

- **프로젝트 개요**: [아키텍처 문서](./architecture.md)
- **기능 목록**: [TODO 목록](./todo.md)
- **개발 진행 상황**: [TODO 목록](./todo.md)의 완료된 기능들 확인

---

**마지막 업데이트**: 2024-12-19  
**문서 버전**: v4.0.0 (문서 간소화 및 실용성 강화 완료)

## 📊 현재 프로젝트 상태

### ✅ 완료된 기능들

- **기본 프로젝트 구조**: React 18 + TypeScript + Vite 설정 완료
- **핵심 컴포넌트**: 15개 재사용 가능한 컴포넌트 (Layout, Common, Post, UI)
- **페이지 구조**: 11개 페이지 구현 (HomePage, LogPage, ProjectPage 등)
- **상태 관리**: 5개 Zustand 스토어 (User, Search, UI, Notification, Normalized)
- **유틸리티 및 훅**: 7개 유틸리티, 5개 커스텀 훅
- **개발 환경**: ESLint, Prettier, Jest, TypeScript, Husky 설정 완료
- **문서화**: 9개 핵심 문서 (프론트엔드 5개 + 백엔드 4개)
- **코드 품질**: Git 훅, 린트 스테이지드, 자동 포맷팅 설정

### 📝 다음 우선순위

1. **사용자 인터페이스 개선** - 프로필 편집, 사용자 설정 (최우선)
2. **프로젝트 UI 개선** - 필터링, 검색, 상태 표시, 통계
3. **모집 UI 개선** - 필터링 기능
4. **멤버 UI 개선** - 상세 프로필
5. **DM UI 개선** - 채팅 인터페이스
6. **PWA 기능** - 오프라인 지원, 설치 가능한 웹앱
7. **E2E 테스트** - Playwright를 사용한 사용자 시나리오 테스트
