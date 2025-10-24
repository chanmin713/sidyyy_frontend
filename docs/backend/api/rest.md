# REST API 가이드

## 개요

이 문서는 Sidyyy 프로젝트의 REST API 설계 및 구현에 대한 상세한 가이드를 제공합니다.

## 🏗️ REST API 설계 원칙

### 1. 리소스 중심 설계

#### 리소스 식별

```
GET    /api/v1/posts          # 포스트 목록 조회
GET    /api/v1/posts/123      # 특정 포스트 조회
POST   /api/v1/posts          # 새 포스트 생성
PUT    /api/v1/posts/123      # 포스트 전체 수정
PATCH  /api/v1/posts/123      # 포스트 부분 수정
DELETE /api/v1/posts/123      # 포스트 삭제
```

#### 중첩 리소스

```
GET    /api/v1/posts/123/comments     # 포스트의 댓글 목록
POST   /api/v1/posts/123/comments     # 포스트에 댓글 추가
GET    /api/v1/posts/123/comments/456 # 특정 댓글 조회
```

### 2. HTTP 메서드 사용

#### GET - 조회

```typescript
// 포스트 목록 조회
GET /api/v1/posts?page=1&limit=10&category=tech

// 응답
{
  "data": [
    {
      "id": "123",
      "title": "포스트 제목",
      "content": "포스트 내용",
      "author": "작성자",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

#### POST - 생성

```typescript
// 새 포스트 생성
POST /api/v1/posts
Content-Type: application/json

{
  "title": "새 포스트",
  "content": "포스트 내용",
  "category": "tech"
}

// 응답
{
  "data": {
    "id": "124",
    "title": "새 포스트",
    "content": "포스트 내용",
    "category": "tech",
    "author": "현재 사용자",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

#### PUT - 전체 수정

```typescript
// 포스트 전체 수정
PUT /api/v1/posts/123
Content-Type: application/json

{
  "title": "수정된 제목",
  "content": "수정된 내용",
  "category": "design"
}
```

#### PATCH - 부분 수정

```typescript
// 포스트 부분 수정
PATCH /api/v1/posts/123
Content-Type: application/json

{
  "title": "수정된 제목만"
}
```

#### DELETE - 삭제

```typescript
// 포스트 삭제
DELETE /api/v1/posts/123

// 응답
{
  "message": "포스트가 성공적으로 삭제되었습니다."
}
```

## 📊 상태 코드 사용

### 성공 응답 (2xx)

- **200 OK**: 성공적인 GET, PUT, PATCH 요청
- **201 Created**: 성공적인 POST 요청 (리소스 생성)
- **204 No Content**: 성공적인 DELETE 요청

### 클라이언트 에러 (4xx)

- **400 Bad Request**: 잘못된 요청
- **401 Unauthorized**: 인증 실패
- **403 Forbidden**: 권한 없음
- **404 Not Found**: 리소스 없음
- **409 Conflict**: 충돌 (중복 등)
- **422 Unprocessable Entity**: 유효성 검사 실패

### 서버 에러 (5xx)

- **500 Internal Server Error**: 서버 내부 오류
- **502 Bad Gateway**: 게이트웨이 오류
- **503 Service Unavailable**: 서비스 사용 불가

## 🔍 쿼리 파라미터

### 페이징

```
GET /api/v1/posts?page=1&limit=10
```

### 정렬

```
GET /api/v1/posts?sort=createdAt&order=desc
```

### 필터링

```
GET /api/v1/posts?category=tech&status=published
```

### 검색

```
GET /api/v1/posts?search=react&category=tech
```

### 필드 선택

```
GET /api/v1/posts?fields=id,title,createdAt
```

## 📝 요청/응답 형식

### 요청 헤더

```typescript
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <token>",
  "Accept": "application/json",
  "X-Request-ID": "unique-request-id"
}
```

### 응답 형식

```typescript
// 성공 응답
{
  "success": true,
  "data": {
    // 실제 데이터
  },
  "message": "성공 메시지",
  "timestamp": "2024-01-01T00:00:00Z"
}

// 에러 응답
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "유효성 검사 실패",
    "details": [
      {
        "field": "title",
        "message": "제목은 필수입니다."
      }
    ]
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## 🔐 인증 및 권한

### JWT 토큰 인증

```typescript
// 요청 헤더
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

// 토큰 검증 미들웨어
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '토큰이 필요합니다.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '유효하지 않은 토큰입니다.' });
    }
    req.user = user;
    next();
  });
};
```

### 권한 검사

```typescript
// 역할 기반 접근 제어
const requireRole = roles => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: '인증이 필요합니다.' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '권한이 없습니다.' });
    }

    next();
  };
};

// 사용 예시
app.get(
  '/api/v1/admin/users',
  authenticateToken,
  requireRole(['admin']),
  getUsers
);
```

## ✅ 입력 검증

### Joi를 사용한 검증

```typescript
import Joi from 'joi';

const createPostSchema = Joi.object({
  title: Joi.string().min(1).max(200).required(),
  content: Joi.string().min(1).max(10000).required(),
  category: Joi.string().valid('tech', 'design', 'business').required(),
  tags: Joi.array().items(Joi.string().max(50)).max(10).optional(),
});

const validatePost = (req, res, next) => {
  const { error } = createPostSchema.validate(req.body);

  if (error) {
    return res.status(422).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: '입력 데이터가 유효하지 않습니다.',
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message,
        })),
      },
    });
  }

  next();
};
```

## 🚀 성능 최적화

### 캐싱

```typescript
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

// 캐시 미들웨어
const cache = (duration = 300) => {
  return async (req, res, next) => {
    const key = `cache:${req.originalUrl}`;

    try {
      const cached = await redis.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }

      // 원본 응답 함수 저장
      const originalSend = res.json;
      res.json = function (data) {
        redis.setex(key, duration, JSON.stringify(data));
        originalSend.call(this, data);
      };

      next();
    } catch (error) {
      next();
    }
  };
};

// 사용 예시
app.get('/api/v1/posts', cache(300), getPosts);
```

### Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

// 일반 API 제한
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100, // 최대 100 요청
  message: {
    error: '너무 많은 요청입니다. 15분 후 다시 시도해주세요.',
  },
});

// 로그인 API 제한
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 최대 5회 시도
  message: {
    error: '로그인 시도가 너무 많습니다. 15분 후 다시 시도해주세요.',
  },
});

app.use('/api/v1/', generalLimiter);
app.use('/api/v1/auth/login', loginLimiter);
```

## 📚 API 문서화

### Swagger/OpenAPI 설정

```typescript
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sidyyy API',
      version: '1.0.0',
      description: 'Sidyyy 프로젝트 API 문서',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: '개발 서버',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // API 경로
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
```

### API 문서 예시

```typescript
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: 포스트 목록 조회
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: 페이지 번호
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: 페이지당 항목 수
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 */
app.get('/posts', getPosts);
```

## 관련 문서

- [GraphQL API 가이드](./graphql.md) - GraphQL API 개발
- [WebSocket API 가이드](./websocket.md) - 실시간 통신
- [API 문서화 가이드](./documentation.md) - API 문서 작성
- [인증 문서](../auth/README.md) - 인증 및 권한
- [미들웨어 문서](../middleware/README.md) - 미들웨어 설정
