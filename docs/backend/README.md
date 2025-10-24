# 백엔드 개발 문서

## 개요

이 문서는 Sidyyy 프로젝트의 백엔드 개발을 위한 상세한 가이드를 모듈별로 정리한 문서입니다.

## 📁 백엔드 문서 구조

```
backend/
├── README.md                    # 이 파일 - 백엔드 문서 개요
├── api/                        # API 개발 가이드
│   ├── README.md               # API 문서 개요
│   ├── rest.md                 # REST API 가이드
│   ├── graphql.md              # GraphQL API 가이드
│   ├── websocket.md            # WebSocket API 가이드
│   └── documentation.md        # API 문서화 가이드
├── database/                   # 데이터베이스 가이드
│   ├── README.md               # 데이터베이스 문서 개요
│   ├── design.md               # 데이터베이스 설계
│   ├── migrations.md           # 마이그레이션 가이드
│   ├── queries.md              # 쿼리 최적화
│   └── backup.md               # 백업 및 복구
├── auth/                       # 인증 및 권한
│   ├── README.md               # 인증 문서 개요
│   ├── jwt.md                  # JWT 인증
│   ├── oauth.md                # OAuth 인증
│   ├── permissions.md          # 권한 관리
│   └── security.md             # 보안 가이드
├── middleware/                 # 미들웨어
│   ├── README.md               # 미들웨어 문서 개요
│   ├── cors.md                 # CORS 설정
│   ├── rate-limiting.md        # Rate Limiting
│   ├── logging.md              # 로깅 미들웨어
│   └── validation.md           # 유효성 검사
├── utils/                      # 유틸리티
│   ├── README.md               # 유틸리티 문서 개요
│   ├── email.md                # 이메일 유틸리티
│   ├── file-upload.md          # 파일 업로드
│   ├── caching.md              # 캐싱 유틸리티
│   └── monitoring.md           # 모니터링
├── testing/                    # 테스트
│   ├── README.md               # 테스트 문서 개요
│   ├── unit.md                 # 단위 테스트
│   ├── integration.md          # 통합 테스트
│   ├── e2e.md                  # E2E 테스트
│   └── performance.md          # 성능 테스트
└── deployment/                 # 배포
    ├── README.md               # 배포 문서 개요
    ├── docker.md               # Docker 배포
    ├── aws.md                  # AWS 배포
    ├── monitoring.md           # 모니터링 설정
    └── scaling.md              # 스케일링
```

## 🎯 백엔드 문서

### API 개발

- [**API 문서**](./api/README.md) - REST, GraphQL, WebSocket API 개발 가이드

### 데이터베이스

- [**데이터베이스 문서**](./database/README.md) - 데이터베이스 설계 및 관리

### 인증 및 권한

- [**인증 문서**](./auth/README.md) - JWT, OAuth, 권한 관리

### 미들웨어

- [**미들웨어 문서**](./middleware/README.md) - CORS, Rate Limiting, 로깅

### 유틸리티

- [**유틸리티 문서**](./utils/README.md) - 이메일, 파일 업로드, 캐싱

### 테스트

- [**테스트 문서**](./testing/README.md) - 단위, 통합, E2E 테스트

### 배포

- [**배포 문서**](./deployment/README.md) - Docker, AWS, 모니터링

## 📋 백엔드 개발 가이드

### 기술 스택

- **Node.js**: 18.x 이상
- **Express.js**: 웹 프레임워크
- **TypeScript**: 타입 안정성
- **PostgreSQL**: 메인 데이터베이스
- **Redis**: 캐싱 및 세션 저장
- **JWT**: 인증 토큰
- **Docker**: 컨테이너화

### 개발 환경 설정

1. **Node.js 설치**: 18.x 이상 버전
2. **PostgreSQL 설치**: 데이터베이스 설정
3. **Redis 설치**: 캐싱 서버 설정
4. **환경 변수 설정**: `.env` 파일 구성
5. **의존성 설치**: `npm install`

### 프로젝트 구조

```
backend/
├── src/
│   ├── controllers/        # 컨트롤러
│   ├── services/          # 비즈니스 로직
│   ├── models/            # 데이터 모델
│   ├── middleware/        # 미들웨어
│   ├── routes/            # 라우트
│   ├── utils/             # 유틸리티
│   ├── config/            # 설정
│   └── types/             # 타입 정의
├── tests/                 # 테스트 파일
├── docs/                  # API 문서
└── scripts/               # 스크립트
```

## 관련 문서

- [프론트엔드 문서](../README.md) - 프론트엔드 개발 가이드
- [API 문서](../api/README.md) - 프론트엔드 API 사용법
- [아키텍처 문서](../architecture/README.md) - 전체 시스템 아키텍처
