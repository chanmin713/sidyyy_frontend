# 인증 및 권한 관리 가이드

## 개요

이 문서는 Sidyyy 프로젝트의 인증 및 권한 관리 시스템에 대한 상세한 가이드를 제공합니다.

## 📁 인증 문서 구조

```
auth/
├── README.md               # 이 파일 - 인증 문서 개요
├── jwt.md                  # JWT 인증
├── oauth.md                # OAuth 인증
├── permissions.md          # 권한 관리
└── security.md             # 보안 가이드
```

## 🎯 인증 문서

### JWT 인증

- [**JWT 인증**](./jwt.md) - JWT 토큰 기반 인증 시스템

### OAuth 인증

- [**OAuth 인증**](./oauth.md) - OAuth 2.0 소셜 로그인

### 권한 관리

- [**권한 관리**](./permissions.md) - 역할 기반 접근 제어 (RBAC)

### 보안 가이드

- [**보안 가이드**](./security.md) - 보안 모범 사례

## 📋 인증 시스템 아키텍처

### 1. 인증 플로우

```
1. 사용자 로그인 요청
2. 이메일/비밀번호 검증
3. JWT 토큰 생성 (Access + Refresh)
4. 토큰을 클라이언트에 전달
5. 클라이언트는 이후 요청에 토큰 포함
6. 서버에서 토큰 검증 및 사용자 식별
```

### 2. 토큰 구조

- **Access Token**: API 접근용 (15분 만료)
- **Refresh Token**: 토큰 갱신용 (7일 만료)
- **ID Token**: 사용자 정보 포함 (OAuth용)

### 3. 권한 레벨

- **Super Admin**: 모든 권한
- **Admin**: 관리자 권한
- **Moderator**: 중재자 권한
- **User**: 일반 사용자 권한
- **Guest**: 게스트 권한

## 🔐 JWT 인증 구현

### JWT 설정

```typescript
import jwt from 'jsonwebtoken';

const JWT_CONFIG = {
  accessTokenSecret: process.env.JWT_ACCESS_SECRET!,
  refreshTokenSecret: process.env.JWT_REFRESH_SECRET!,
  accessTokenExpiry: '15m',
  refreshTokenExpiry: '7d',
  issuer: 'sidyyy-api',
  audience: 'sidyyy-client',
};

// 토큰 생성
export const generateTokens = (userId: string, role: string) => {
  const payload = {
    sub: userId,
    role: role,
    iat: Math.floor(Date.now() / 1000),
  };

  const accessToken = jwt.sign(payload, JWT_CONFIG.accessTokenSecret, {
    expiresIn: JWT_CONFIG.accessTokenExpiry,
    issuer: JWT_CONFIG.issuer,
    audience: JWT_CONFIG.audience,
  });

  const refreshToken = jwt.sign(
    { sub: userId },
    JWT_CONFIG.refreshTokenSecret,
    {
      expiresIn: JWT_CONFIG.refreshTokenExpiry,
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
    }
  );

  return { accessToken, refreshToken };
};
```

### 인증 미들웨어

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
    email: string;
  };
}

export const authenticateToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'MISSING_TOKEN',
        message: '인증 토큰이 필요합니다.',
      },
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET!, {
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
    }) as any;

    // 사용자 정보 조회
    const user = await getUserById(decoded.sub);
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_USER',
          message: '유효하지 않은 사용자입니다.',
        },
      });
    }

    req.user = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'TOKEN_EXPIRED',
          message: '토큰이 만료되었습니다.',
        },
      });
    }

    return res.status(403).json({
      success: false,
      error: {
        code: 'INVALID_TOKEN',
        message: '유효하지 않은 토큰입니다.',
      },
    });
  }
};
```

### 토큰 갱신

```typescript
export const refreshAccessToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'MISSING_REFRESH_TOKEN',
        message: '리프레시 토큰이 필요합니다.',
      },
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!, {
      issuer: JWT_CONFIG.issuer,
      audience: JWT_CONFIG.audience,
    }) as any;

    // 사용자 정보 조회
    const user = await getUserById(decoded.sub);
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_USER',
          message: '유효하지 않은 사용자입니다.',
        },
      });
    }

    // 새로운 토큰 생성
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user.id,
      user.role
    );

    res.json({
      success: true,
      data: {
        accessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      error: {
        code: 'INVALID_REFRESH_TOKEN',
        message: '유효하지 않은 리프레시 토큰입니다.',
      },
    });
  }
};
```

## 🔑 권한 관리 (RBAC)

### 역할 정의

```typescript
export enum Role {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
  GUEST = 'guest',
}

export enum Permission {
  // 사용자 관리
  USER_CREATE = 'user:create',
  USER_READ = 'user:read',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',

  // 포스트 관리
  POST_CREATE = 'post:create',
  POST_READ = 'post:read',
  POST_UPDATE = 'post:update',
  POST_DELETE = 'post:delete',
  POST_PUBLISH = 'post:publish',

  // 댓글 관리
  COMMENT_CREATE = 'comment:create',
  COMMENT_READ = 'comment:read',
  COMMENT_UPDATE = 'comment:update',
  COMMENT_DELETE = 'comment:delete',
  COMMENT_MODERATE = 'comment:moderate',

  // 시스템 관리
  SYSTEM_ADMIN = 'system:admin',
  SYSTEM_ANALYTICS = 'system:analytics',
}

// 역할별 권한 매핑
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [Role.SUPER_ADMIN]: Object.values(Permission),
  [Role.ADMIN]: [
    Permission.USER_READ,
    Permission.USER_UPDATE,
    Permission.POST_CREATE,
    Permission.POST_READ,
    Permission.POST_UPDATE,
    Permission.POST_DELETE,
    Permission.POST_PUBLISH,
    Permission.COMMENT_CREATE,
    Permission.COMMENT_READ,
    Permission.COMMENT_UPDATE,
    Permission.COMMENT_DELETE,
    Permission.COMMENT_MODERATE,
    Permission.SYSTEM_ANALYTICS,
  ],
  [Role.MODERATOR]: [
    Permission.POST_READ,
    Permission.COMMENT_CREATE,
    Permission.COMMENT_READ,
    Permission.COMMENT_UPDATE,
    Permission.COMMENT_DELETE,
    Permission.COMMENT_MODERATE,
  ],
  [Role.USER]: [
    Permission.POST_CREATE,
    Permission.POST_READ,
    Permission.POST_UPDATE,
    Permission.COMMENT_CREATE,
    Permission.COMMENT_READ,
    Permission.COMMENT_UPDATE,
  ],
  [Role.GUEST]: [Permission.POST_READ, Permission.COMMENT_READ],
};
```

### 권한 검사 미들웨어

```typescript
export const requirePermission = (permission: Permission) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHENTICATED',
          message: '인증이 필요합니다.',
        },
      });
    }

    const userPermissions = ROLE_PERMISSIONS[req.user.role as Role];

    if (!userPermissions.includes(permission)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'INSUFFICIENT_PERMISSIONS',
          message: '권한이 없습니다.',
        },
      });
    }

    next();
  };
};

// 사용 예시
app.get(
  '/api/v1/admin/users',
  authenticateToken,
  requirePermission(Permission.USER_READ),
  getUsers
);

app.delete(
  '/api/v1/posts/:id',
  authenticateToken,
  requirePermission(Permission.POST_DELETE),
  deletePost
);
```

### 소유권 검사

```typescript
export const requireOwnership = (resourceType: 'post' | 'comment') => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHENTICATED',
          message: '인증이 필요합니다.',
        },
      });
    }

    const resourceId = req.params.id;
    let resource;

    try {
      if (resourceType === 'post') {
        resource = await getPostById(resourceId);
      } else if (resourceType === 'comment') {
        resource = await getCommentById(resourceId);
      }

      if (!resource) {
        return res.status(404).json({
          success: false,
          error: {
            code: 'RESOURCE_NOT_FOUND',
            message: '리소스를 찾을 수 없습니다.',
          },
        });
      }

      // 관리자는 모든 리소스에 접근 가능
      if (req.user.role === Role.ADMIN || req.user.role === Role.SUPER_ADMIN) {
        return next();
      }

      // 소유자만 접근 가능
      if (resource.authorId !== req.user.id) {
        return res.status(403).json({
          success: false,
          error: {
            code: 'NOT_OWNER',
            message: '리소스의 소유자가 아닙니다.',
          },
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: '서버 오류가 발생했습니다.',
        },
      });
    }
  };
};
```

## 🔒 비밀번호 보안

### 비밀번호 해싱

```typescript
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// 비밀번호 강도 검증
export const validatePasswordStrength = (
  password: string
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('비밀번호는 최소 8자 이상이어야 합니다.');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('비밀번호는 대문자를 포함해야 합니다.');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('비밀번호는 소문자를 포함해야 합니다.');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('비밀번호는 숫자를 포함해야 합니다.');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('비밀번호는 특수문자를 포함해야 합니다.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
```

### 로그인 시도 제한

```typescript
import rateLimit from 'express-rate-limit';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

// 로그인 시도 제한
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 최대 5회 시도
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_ATTEMPTS',
      message: '로그인 시도가 너무 많습니다. 15분 후 다시 시도해주세요.',
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// 계정 잠금 기능
export const lockAccount = async (email: string, duration: number = 30) => {
  const lockKey = `account_lock:${email}`;
  await redis.setex(lockKey, duration * 60, 'locked');
};

export const isAccountLocked = async (email: string): Promise<boolean> => {
  const lockKey = `account_lock:${email}`;
  const locked = await redis.get(lockKey);
  return locked === 'locked';
};

export const unlockAccount = async (email: string) => {
  const lockKey = `account_lock:${email}`;
  await redis.del(lockKey);
};
```

## 🛡️ 보안 모범 사례

### 1. 토큰 보안

- **HTTPS 사용**: 모든 인증 관련 통신은 HTTPS로
- **토큰 만료**: 짧은 만료 시간 설정
- **토큰 갱신**: Refresh Token을 통한 안전한 갱신
- **토큰 저장**: 클라이언트에서 안전하게 저장

### 2. 세션 관리

- **세션 타임아웃**: 비활성 세션 자동 만료
- **동시 세션 제한**: 사용자당 최대 세션 수 제한
- **세션 무효화**: 로그아웃 시 모든 세션 무효화

### 3. 입력 검증

- **이메일 검증**: 유효한 이메일 형식 확인
- **비밀번호 정책**: 강력한 비밀번호 요구사항
- **SQL 인젝션 방지**: 파라미터화된 쿼리 사용
- **XSS 방지**: 입력 데이터 이스케이프 처리

### 4. 로깅 및 모니터링

- **인증 실패 로깅**: 로그인 시도 실패 기록
- **의심스러운 활동 감지**: 비정상적인 접근 패턴 모니터링
- **보안 이벤트 알림**: 중요한 보안 이벤트 즉시 알림

## 관련 문서

- [API 문서](../api/README.md) - API 인증 구현
- [데이터베이스 문서](../database/README.md) - 사용자 데이터 관리
- [미들웨어 문서](../middleware/README.md) - 인증 미들웨어
- [보안 문서](./security.md) - 보안 모범 사례
