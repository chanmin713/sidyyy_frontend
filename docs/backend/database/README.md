# 데이터베이스 개발 가이드

## 개요

이 문서는 Sidyyy 프로젝트의 데이터베이스 설계 및 관리에 대한 상세한 가이드를 제공합니다.

## 📁 데이터베이스 문서 구조

```
database/
├── README.md               # 이 파일 - 데이터베이스 문서 개요
├── design.md               # 데이터베이스 설계
├── migrations.md           # 마이그레이션 가이드
├── queries.md              # 쿼리 최적화
└── backup.md               # 백업 및 복구
```

## 🎯 데이터베이스 문서

### 데이터베이스 설계

- [**데이터베이스 설계**](./design.md) - ERD, 테이블 설계, 관계 설정

### 마이그레이션

- [**마이그레이션 가이드**](./migrations.md) - 스키마 변경, 데이터 마이그레이션

### 쿼리 최적화

- [**쿼리 최적화**](./queries.md) - 인덱스, 쿼리 성능 튜닝

### 백업 및 복구

- [**백업 및 복구**](./backup.md) - 데이터 백업, 복구 전략

## 📋 데이터베이스 기술 스택

### 메인 데이터베이스

- **PostgreSQL 15+**: 메인 관계형 데이터베이스
- **Redis 7+**: 캐싱 및 세션 저장
- **MongoDB**: 로그 및 분석 데이터 (선택사항)

### ORM/ODM

- **Prisma**: TypeScript ORM
- **TypeORM**: 대안 ORM (선택사항)
- **Mongoose**: MongoDB ODM (선택사항)

### 마이그레이션 도구

- **Prisma Migrate**: 스키마 마이그레이션
- **Alembic**: Python 마이그레이션 (선택사항)

## 🏗️ 데이터베이스 설계 원칙

### 1. 정규화

- **1NF**: 원자성 - 각 컬럼은 하나의 값만 저장
- **2NF**: 부분 함수 종속성 제거
- **3NF**: 이행 함수 종속성 제거
- **BCNF**: 보이스-코드 정규형

### 2. 인덱싱 전략

- **Primary Key**: 자동 인덱스 생성
- **Foreign Key**: 참조 무결성 및 조인 성능
- **Unique Index**: 중복 방지
- **Composite Index**: 복합 조건 쿼리 최적화
- **Partial Index**: 조건부 인덱스

### 3. 관계 설계

- **One-to-One**: 1:1 관계
- **One-to-Many**: 1:N 관계
- **Many-to-Many**: N:N 관계 (중간 테이블)
- **Self-Referencing**: 자기 참조 관계

## 🔧 데이터베이스 설정

### PostgreSQL 설정

```sql
-- 데이터베이스 생성
CREATE DATABASE sidyyy_dev;
CREATE DATABASE sidyyy_test;
CREATE DATABASE sidyyy_prod;

-- 사용자 생성
CREATE USER sidyyy_user WITH PASSWORD 'secure_password';

-- 권한 부여
GRANT ALL PRIVILEGES ON DATABASE sidyyy_dev TO sidyyy_user;
GRANT ALL PRIVILEGES ON DATABASE sidyyy_test TO sidyyy_user;
GRANT ALL PRIVILEGES ON DATABASE sidyyy_prod TO sidyyy_user;
```

### Redis 설정

```bash
# Redis 설정 파일
port 6379
bind 127.0.0.1
requirepass your_redis_password
maxmemory 256mb
maxmemory-policy allkeys-lru
```

### Prisma 설정

```typescript
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}
```

## 📊 데이터 모델링

### 핵심 엔티티

```typescript
// 사용자 (User)
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 포스트 (Post)
interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  authorId: string;
  categoryId?: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

// 댓글 (Comment)
interface Comment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
  parentId?: string; // 대댓글
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 프로젝트 (Project)
interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'completed' | 'cancelled';
  startDate?: Date;
  endDate?: Date;
  teamMembers: string[];
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔍 쿼리 최적화

### 인덱스 생성

```sql
-- 단일 컬럼 인덱스
CREATE INDEX idx_posts_author_id ON posts(author_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_created_at ON posts(created_at);

-- 복합 인덱스
CREATE INDEX idx_posts_status_created_at ON posts(status, created_at);
CREATE INDEX idx_comments_post_id_created_at ON comments(post_id, created_at);

-- 부분 인덱스
CREATE INDEX idx_posts_published ON posts(created_at) WHERE status = 'published';

-- 텍스트 검색 인덱스
CREATE INDEX idx_posts_title_search ON posts USING gin(to_tsvector('english', title));
CREATE INDEX idx_posts_content_search ON posts USING gin(to_tsvector('english', content));
```

### 쿼리 최적화 예시

```sql
-- 비효율적인 쿼리
SELECT * FROM posts WHERE status = 'published' ORDER BY created_at DESC;

-- 최적화된 쿼리 (인덱스 활용)
SELECT id, title, excerpt, created_at
FROM posts
WHERE status = 'published'
ORDER BY created_at DESC
LIMIT 20;

-- 복합 조건 쿼리
SELECT p.*, u.name as author_name
FROM posts p
JOIN users u ON p.author_id = u.id
WHERE p.status = 'published'
  AND p.created_at >= '2024-01-01'
  AND u.is_active = true
ORDER BY p.created_at DESC;
```

## 🔄 마이그레이션 관리

### Prisma 마이그레이션

```bash
# 마이그레이션 생성
npx prisma migrate dev --name add_user_avatar

# 마이그레이션 적용
npx prisma migrate deploy

# 마이그레이션 상태 확인
npx prisma migrate status

# 마이그레이션 리셋 (개발 환경)
npx prisma migrate reset
```

### 마이그레이션 파일 예시

```sql
-- 20240101000000_add_user_avatar.sql
ALTER TABLE "users" ADD COLUMN "avatar" TEXT;

-- 20240101000001_add_post_slug.sql
ALTER TABLE "posts" ADD COLUMN "slug" TEXT;
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");
```

## 🛡️ 데이터 보안

### 접근 제어

```sql
-- 역할 기반 접근 제어
CREATE ROLE sidyyy_readonly;
CREATE ROLE sidyyy_readwrite;
CREATE ROLE sidyyy_admin;

-- 읽기 전용 권한
GRANT SELECT ON ALL TABLES IN SCHEMA public TO sidyyy_readonly;

-- 읽기/쓰기 권한
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO sidyyy_readwrite;

-- 관리자 권한
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO sidyyy_admin;
```

### 데이터 암호화

```typescript
// 민감한 데이터 암호화
import crypto from 'crypto';

const encrypt = (text: string): string => {
  const algorithm = 'aes-256-gcm';
  const key = crypto.scryptSync(process.env.ENCRYPTION_KEY!, 'salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher(algorithm, key);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return iv.toString('hex') + ':' + encrypted;
};

const decrypt = (encryptedText: string): string => {
  const [ivHex, encrypted] = encryptedText.split(':');
  const algorithm = 'aes-256-gcm';
  const key = crypto.scryptSync(process.env.ENCRYPTION_KEY!, 'salt', 32);
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipher(algorithm, key);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};
```

## 📈 모니터링 및 성능

### 쿼리 성능 모니터링

```sql
-- 느린 쿼리 확인
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

-- 인덱스 사용률 확인
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE tablename = 'posts';

-- 테이블 크기 확인
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### 연결 풀 관리

```typescript
// Prisma 연결 풀 설정
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
});

// 연결 풀 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // 최대 연결 수
  idleTimeoutMillis: 30000, // 유휴 연결 타임아웃
  connectionTimeoutMillis: 2000, // 연결 타임아웃
});
```

## 관련 문서

- [API 문서](../api/README.md) - API 개발 가이드
- [인증 문서](../auth/README.md) - 사용자 인증
- [테스트 문서](../testing/README.md) - 데이터베이스 테스트
- [배포 문서](../deployment/README.md) - 데이터베이스 배포
