# 개발 가이드

## 🚀 개발 환경 설정

### 필수 요구사항

- **Node.js**: 18.0.0 이상
- **npm**: 9.0.0 이상
- **Git**: 2.30.0 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd sidyyy_front

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 테스트 실행
npm run test
```

## 📋 사용 가능한 스크립트

```bash
# 개발
npm run dev              # 개발 서버 실행
npm run build            # 프로덕션 빌드
npm run preview          # 빌드 결과 미리보기

# 코드 품질
npm run lint             # ESLint 검사
npm run lint:fix         # ESLint 자동 수정
npm run format           # Prettier 포맷팅
npm run format:check     # Prettier 검사
npm run type-check       # TypeScript 타입 검사

# 테스트
npm run test             # 테스트 실행
npm run test:watch       # 테스트 감시 모드
npm run test:coverage    # 커버리지 포함 테스트
npm run test:ci          # CI용 테스트 실행
```

## 🔧 최근 리팩토링 완료 (2024-12-19)

### 코드 구조 개선

- **긴 파일 분리**: 300줄 이상의 파일들을 작은 모듈로 분리
- **컴포넌트 분리**: 단일 책임 원칙에 따라 컴포넌트 분리
- **유틸리티 모듈화**: 기능별로 유틸리티 함수 분리
- **타입 안전성 향상**: TypeScript 타입 정의 개선

### 리팩토링된 파일들

1. **SidebarContent.tsx**: 221줄 → 41줄 (81% 감소)
2. **WritePostPage.tsx**: 318줄 → 48줄 (85% 감소)
3. **useNormalizedStore.ts**: 340줄 → 89줄 (74% 감소)
4. **normalizationUtils.ts**: 289줄 → 31줄 (89% 감소)

# 배포

npm run deploy # GitHub Pages 배포

# Git 훅

npm run prepare # Husky 설치

````

## 🛠️ 개발 도구

### VS Code 확장 프로그램 (권장)

- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

### 설정 파일

- **`.eslintrc.js`**: ESLint 설정
- **`.prettierrc`**: Prettier 설정
- **`tsconfig.json`**: TypeScript 설정
- **`tailwind.config.js`**: Tailwind CSS 설정
- **`vite.config.ts`**: Vite 설정
- **`jest.config.js`**: Jest 테스트 설정
- **`postcss.config.js`**: PostCSS 설정
- **`package.json`**: 프로젝트 의존성 및 스크립트
- **`.husky/`**: Git 훅 설정
- **`lint-staged`**: 커밋 전 린트 검사 설정

## 📝 코딩 컨벤션

### 파일명 규칙

- **컴포넌트**: `PascalCase.tsx` (예: `PostCard.tsx`)
- **훅**: `camelCase.ts` (예: `useProjectLogNumber.ts`)
- **유틸리티**: `camelCase.ts` (예: `projectUtils.ts`)
- **타입**: `camelCase.ts` (예: `postTypes.ts`)

### 변수명 규칙

- **변수/함수**: `camelCase` (예: `userName`, `handleClick`)
- **상수**: `UPPER_SNAKE_CASE` (예: `API_BASE_URL`)
- **타입/인터페이스**: `PascalCase` (예: `UserProfile`)
- **컴포넌트**: `PascalCase` (예: `PostCard`)

### 컴포넌트 구조

```tsx
// 1. React imports
import { memo, useState, useEffect } from 'react';

// 2. Third-party imports
import { useNavigate } from 'react-router-dom';

// 3. Internal imports (절대 경로 사용)
import { ProfileSection } from '@/components/common/ProfileSection';
import { useUI } from '@/stores';

// 4. Types
interface ComponentProps {
  // props 정의
}

// 5. Component
export const ComponentName = memo(function ComponentName({
  prop1,
  prop2,
}: ComponentProps) {
  // 6. Hooks
  const navigate = useNavigate();
  const { someState } = useUI();

  // 7. Local state
  const [localState, setLocalState] = useState('');

  // 8. Effects
  useEffect(() => {
    // effect logic
  }, []);

  // 9. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 10. Render helpers
  const renderContent = () => {
    // helper functions
  };

  // 11. JSX
  return <div>{/* JSX content */}</div>;
});
````

## 🧪 테스트 작성

### 컴포넌트 테스트

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ActionButton } from '@/components/common/ActionButton';

test('renders button with text', () => {
  render(<ActionButton onClick={jest.fn()}>Click me</ActionButton>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<ActionButton onClick={handleClick}>Click me</ActionButton>);

  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### 유틸리티 테스트

```tsx
import { truncateText } from '@/utils/ui/textUtils';

test('truncates long text', () => {
  const longText = 'This is a very long text that should be truncated';
  const truncated = truncateText(longText, 20);
  expect(truncated).toHaveLength(20);
});
```

### 훅 테스트

```tsx
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '@/hooks/ui/useDebounce';

test('should debounce value changes', () => {
  const { result } = renderHook(() => useDebounce('test', 100));

  expect(result.current).toBe('test');

  act(() => {
    // 값 변경 로직
  });

  // 디바운스된 값 확인
  expect(result.current).toBe('test');
});
```

## 🔧 Git 워크플로우

### 브랜치 전략

- **`main`**: 프로덕션 브랜치
- **`develop`**: 개발 브랜치
- **`feature/*`**: 기능 개발 브랜치
- **`hotfix/*`**: 긴급 수정 브랜치

### 커밋 메시지 규칙

```
type(scope): description

feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 프로세스 또는 도구 변경
```

### 예시

```
feat(auth): 로그인 기능 추가
fix(ui): 버튼 클릭 이벤트 수정
docs(readme): 설치 가이드 업데이트
test(component): PostCard 컴포넌트 테스트 추가
refactor(store): useUserStore 리팩토링
chore(deps): 의존성 업데이트
```

## 🚀 배포

### GitHub Pages 배포

```bash
# 빌드 및 배포
npm run deploy
```

### 수동 배포

```bash
# 빌드
npm run build

# dist 폴더를 웹 서버에 업로드
```

## 📊 성능 모니터링

### 번들 분석

```bash
# 번들 크기 분석
npm run build
# dist 폴더에서 번들 파일 확인
```

### 성능 측정

- **Lighthouse**: 웹 성능 측정
- **Web Vitals**: Core Web Vitals 모니터링
- **Bundle Analyzer**: 번들 크기 분석

## 🐛 디버깅

### 개발자 도구

- **React Developer Tools**: React 컴포넌트 디버깅
- **Redux DevTools**: Zustand 스토어 디버깅
- **Network 탭**: API 요청 모니터링
- **Console**: 에러 및 로그 확인

### 일반적인 문제 해결

1. **타입 에러**: `npm run type-check`로 타입 검사
2. **린트 에러**: `npm run lint:fix`로 자동 수정
3. **빌드 실패**: `npm run build`로 빌드 에러 확인
4. **테스트 실패**: `npm run test`로 테스트 에러 확인

## 🔧 개발 시 자주 사용하는 명령어

### 1. 개발 서버 관련

```bash
# 개발 서버 실행
npm run dev

# 개발 서버 중지
Ctrl + C

# 포트 변경하여 실행
npm run dev -- --port 3001
```

### 2. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# GitHub Pages 배포
npm run deploy
```

### 3. 코드 품질

```bash
# ESLint 검사
npm run lint

# ESLint 자동 수정
npm run lint:fix

# Prettier 포맷팅
npm run format

# Prettier 검사
npm run format:check

# TypeScript 타입 검사
npm run type-check
```

### 4. 테스트

```bash
# 테스트 실행
npm run test

# 테스트 감시 모드
npm run test:watch

# 커버리지 포함 테스트
npm run test:coverage

# 특정 파일 테스트
npm run test -- PostCard.test.tsx
```

## 🐛 자주 발생하는 문제와 해결책

### 1. 개발 서버 문제

**문제**: 포트가 이미 사용 중

```bash
Error: listen EADDRINUSE: address already in use :::5173
```

**해결**: 다른 포트 사용

```bash
npm run dev -- --port 3001
```

**문제**: 모듈을 찾을 수 없음

```bash
Module not found: Can't resolve '@/components/...'
```

**해결**: 절대 경로 설정 확인

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 2. 빌드 문제

**문제**: 빌드 실패

```bash
Build failed with errors
```

**해결**: 타입 에러 확인

```bash
npm run type-check
```

**문제**: 메모리 부족

```bash
JavaScript heap out of memory
```

**해결**: 메모리 제한 증가

```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 3. 테스트 문제

**문제**: 테스트가 실행되지 않음

```bash
No tests found
```

**해결**: 테스트 파일명 확인

```bash
# 올바른 파일명: ComponentName.test.tsx
# 잘못된 파일명: ComponentName.spec.tsx
```

**문제**: 모킹 문제

```bash
Cannot find module 'module-name'
```

**해결**: jest.config.js 설정 확인

```javascript
module.exports = {
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

## 🚀 성능 최적화 팁

### 1. 번들 크기 최적화

```bash
# 번들 분석
npm run build
# dist 폴더에서 번들 파일 확인

# 불필요한 의존성 제거
npm ls
npm uninstall package-name
```

### 2. 이미지 최적화

```tsx
// ❌ 잘못된 예시
<img src="/large-image.jpg" alt="이미지" />

// ✅ 올바른 예시
<img
  src="/large-image.jpg"
  alt="이미지"
  loading="lazy"
  width="800"
  height="600"
/>
```

### 3. 코드 스플리팅

```tsx
// 지연 로딩
const LazyComponent = lazy(() => import('./LazyComponent'));

// 사용
<Suspense fallback={<LoadingSpinner />}>
  <LazyComponent />
</Suspense>;
```

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- [Zustand 공식 문서](https://zustand-demo.pmnd.rs/)
- [Vite 공식 문서](https://vitejs.dev/)
- [Jest 공식 문서](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
