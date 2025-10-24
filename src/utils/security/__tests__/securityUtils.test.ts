import {
  escapeHtml,
  sanitizeInput,
  isValidEmail,
  validatePasswordStrength,
  hasXSSRisk,
  hasSQLInjectionRisk,
  isSafeUrl,
} from '../securityUtils';

describe('securityUtils', () => {
  describe('escapeHtml', () => {
    it('HTML 태그를 이스케이프한다', () => {
      const input = '<script>alert("xss")</script>';
      const result = escapeHtml(input);
      expect(result).toBe(
        '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      );
    });

    it('특수문자를 올바르게 이스케이프한다', () => {
      const input = '<>&"\'';
      const result = escapeHtml(input);
      expect(result).toBe('&lt;&gt;&amp;&quot;&#x27;');
    });
  });

  describe('sanitizeInput', () => {
    it('기본적으로 HTML을 이스케이프한다', () => {
      const input = '<script>alert("xss")</script>';
      const result = sanitizeInput(input);
      expect(result).not.toContain('<script>');
    });

    it('길이 제한을 적용한다', () => {
      const input = 'a'.repeat(1001);
      const result = sanitizeInput(input, { maxLength: 1000 });
      expect(result).toHaveLength(1000);
    });

    it('HTML 허용 시 스크립트만 제거한다', () => {
      const input = '<p>안전한 텍스트</p><script>alert("xss")</script>';
      const result = sanitizeInput(input, {
        allowHtml: true,
        stripScripts: true,
      });
      expect(result).toContain('<p>안전한 텍스트</p>');
      expect(result).not.toContain('<script>');
    });
  });

  describe('isValidEmail', () => {
    it('유효한 이메일을 올바르게 검증한다', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.kr')).toBe(true);
    });

    it('유효하지 않은 이메일을 올바르게 검증한다', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('validatePasswordStrength', () => {
    it('강한 비밀번호를 올바르게 검증한다', () => {
      const result = validatePasswordStrength('StrongPass123!');
      expect(result.isValid).toBe(true);
      expect(result.score).toBe(5);
      expect(result.feedback).toHaveLength(0);
    });

    it('약한 비밀번호를 올바르게 검증한다', () => {
      const result = validatePasswordStrength('weak');
      expect(result.isValid).toBe(false);
      expect(result.score).toBeLessThan(4);
      expect(result.feedback.length).toBeGreaterThan(0);
    });
  });

  describe('hasXSSRisk', () => {
    it('XSS 위험이 있는 입력을 감지한다', () => {
      expect(hasXSSRisk('<script>alert("xss")</script>')).toBe(true);
      expect(hasXSSRisk('javascript:alert("xss")')).toBe(true);
      expect(hasXSSRisk('<img src="x" onerror="alert(1)">')).toBe(true);
    });

    it('안전한 입력을 올바르게 판단한다', () => {
      expect(hasXSSRisk('안전한 텍스트')).toBe(false);
      expect(hasXSSRisk('<p>안전한 HTML</p>')).toBe(false);
    });
  });

  describe('hasSQLInjectionRisk', () => {
    it('SQL 인젝션 위험이 있는 입력을 감지한다', () => {
      expect(hasSQLInjectionRisk("'; DROP TABLE users; --")).toBe(true);
      expect(hasSQLInjectionRisk('1 OR 1=1')).toBe(true);
      expect(hasSQLInjectionRisk('UNION SELECT * FROM users')).toBe(true);
    });

    it('안전한 입력을 올바르게 판단한다', () => {
      expect(hasSQLInjectionRisk('안전한 텍스트')).toBe(false);
      expect(hasSQLInjectionRisk('SELECT * FROM users WHERE id = 1')).toBe(
        false
      );
    });
  });

  describe('isSafeUrl', () => {
    it('안전한 URL을 올바르게 검증한다', () => {
      expect(isSafeUrl('https://example.com')).toBe(true);
      expect(isSafeUrl('http://example.com')).toBe(true);
    });

    it('위험한 URL을 올바르게 감지한다', () => {
      expect(isSafeUrl('javascript:alert("xss")')).toBe(false);
      expect(isSafeUrl('vbscript:alert("xss")')).toBe(false);
      expect(isSafeUrl('data:text/html,<script>alert("xss")</script>')).toBe(
        false
      );
    });
  });
});
