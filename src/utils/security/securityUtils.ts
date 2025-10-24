/**
 * 보안 관련 유틸리티 함수들
 */

/**
 * XSS 방지를 위한 HTML 이스케이프
 * @param text - 이스케이프할 텍스트
 * @returns 이스케이프된 텍스트
 */
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

/**
 * 사용자 입력 검증 및 정제
 * @param input - 검증할 입력값
 * @param options - 검증 옵션
 * @returns 검증된 입력값
 */
export const sanitizeInput = (
  input: string,
  options: {
    maxLength?: number;
    allowHtml?: boolean;
    allowedTags?: string[];
    stripScripts?: boolean;
  } = {}
): string => {
  let sanitized = input;

  // 기본 옵션 설정
  const {
    maxLength = 1000,
    allowHtml = false,
    allowedTags = [],
    stripScripts = true,
  } = options;

  // 길이 제한
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  // HTML 허용하지 않는 경우 이스케이프
  if (!allowHtml) {
    sanitized = escapeHtml(sanitized);
  } else {
    // 스크립트 태그 제거
    if (stripScripts) {
      sanitized = sanitized.replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ''
      );
    }

    // 허용된 태그만 유지
    if (allowedTags.length > 0) {
      const allowedTagsRegex = new RegExp(
        `</?(?!(?:${allowedTags.join('|')})\\b)[^>]*>`,
        'gi'
      );
      sanitized = sanitized.replace(allowedTagsRegex, '');
    }
  }

  return sanitized;
};

/**
 * 이메일 형식 검증
 * @param email - 검증할 이메일
 * @returns 유효한 이메일 여부
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 비밀번호 강도 검증
 * @param password - 검증할 비밀번호
 * @returns 비밀번호 강도 정보
 */
export const validatePasswordStrength = (
  password: string
): {
  isValid: boolean;
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  // 길이 검증
  if (password.length < 8) {
    feedback.push('비밀번호는 최소 8자 이상이어야 합니다.');
  } else {
    score += 1;
  }

  // 대문자 포함 검증
  if (!/[A-Z]/.test(password)) {
    feedback.push('대문자를 포함해야 합니다.');
  } else {
    score += 1;
  }

  // 소문자 포함 검증
  if (!/[a-z]/.test(password)) {
    feedback.push('소문자를 포함해야 합니다.');
  } else {
    score += 1;
  }

  // 숫자 포함 검증
  if (!/\d/.test(password)) {
    feedback.push('숫자를 포함해야 합니다.');
  } else {
    score += 1;
  }

  // 특수문자 포함 검증
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    feedback.push('특수문자를 포함해야 합니다.');
  } else {
    score += 1;
  }

  return {
    isValid: score >= 4,
    score,
    feedback,
  };
};

/**
 * CSRF 토큰 생성
 * @returns CSRF 토큰
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * CSRF 토큰 검증
 * @param token - 검증할 토큰
 * @param storedToken - 저장된 토큰
 * @returns 토큰 유효성
 */
export const validateCSRFToken = (
  token: string,
  storedToken: string
): boolean => {
  return token === storedToken && token.length === 64;
};

/**
 * 입력값 길이 검증
 * @param input - 검증할 입력값
 * @param minLength - 최소 길이
 * @param maxLength - 최대 길이
 * @returns 검증 결과
 */
export const validateLength = (
  input: string,
  minLength: number,
  maxLength: number
): { isValid: boolean; message?: string } => {
  if (input.length < minLength) {
    return {
      isValid: false,
      message: `최소 ${minLength}자 이상 입력해주세요.`,
    };
  }

  if (input.length > maxLength) {
    return {
      isValid: false,
      message: `최대 ${maxLength}자까지 입력 가능합니다.`,
    };
  }

  return { isValid: true };
};

/**
 * 파일 업로드 검증
 * @param file - 검증할 파일
 * @param options - 검증 옵션
 * @returns 검증 결과
 */
export const validateFileUpload = (
  file: File,
  options: {
    maxSize?: number; // 바이트 단위
    allowedTypes?: string[];
    allowedExtensions?: string[];
  } = {}
): { isValid: boolean; message?: string } => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'],
  } = options;

  // 파일 크기 검증
  if (file.size > maxSize) {
    return {
      isValid: false,
      message: `파일 크기는 ${Math.round(maxSize / 1024 / 1024)}MB 이하여야 합니다.`,
    };
  }

  // MIME 타입 검증
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      message: '허용되지 않는 파일 형식입니다.',
    };
  }

  // 파일 확장자 검증
  if (allowedExtensions.length > 0) {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      return {
        isValid: false,
        message: '허용되지 않는 파일 확장자입니다.',
      };
    }
  }

  return { isValid: true };
};

/**
 * SQL 인젝션 방지를 위한 입력값 검증
 * @param input - 검증할 입력값
 * @returns SQL 인젝션 위험 여부
 */
export const hasSQLInjectionRisk = (input: string): boolean => {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
    /(\b(OR|AND)\s+\d+\s*=\s*\d+)/i,
    /(\b(OR|AND)\s+['"]\s*=\s*['"])/i,
    /(\b(OR|AND)\s+1\s*=\s*1)/i,
    /(\b(OR|AND)\s+true)/i,
    /(\b(OR|AND)\s+false)/i,
    /(UNION\s+SELECT)/i,
    /(DROP\s+TABLE)/i,
    /(DELETE\s+FROM)/i,
    /(INSERT\s+INTO)/i,
    /(UPDATE\s+SET)/i,
  ];

  return sqlPatterns.some(pattern => pattern.test(input));
};

/**
 * XSS 공격 패턴 검증
 * @param input - 검증할 입력값
 * @returns XSS 위험 여부
 */
export const hasXSSRisk = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
    /<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>/gi,
    /<meta\b[^<]*(?:(?!<\/meta>)<[^<]*)*<\/meta>/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /onload\s*=/gi,
    /onerror\s*=/gi,
    /onclick\s*=/gi,
    /onmouseover\s*=/gi,
  ];

  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * 안전한 URL 검증
 * @param url - 검증할 URL
 * @returns 안전한 URL 여부
 */
export const isSafeUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedProtocols = ['http:', 'https:'];
    const dangerousProtocols = ['javascript:', 'vbscript:', 'data:', 'file:'];

    // 프로토콜 검증
    if (dangerousProtocols.includes(urlObj.protocol.toLowerCase())) {
      return false;
    }

    if (!allowedProtocols.includes(urlObj.protocol)) {
      return false;
    }

    // 도메인 검증 (필요시 화이트리스트 추가)
    return true;
  } catch {
    return false;
  }
};
