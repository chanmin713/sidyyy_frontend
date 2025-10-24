# Sidyyy 프로젝트 개발 룰

## 📁 폴더 구조

```
src/
├── components/
│   ├── common/         # ProfileSection, ScrollToTopButton, FloatingWriteButton
│   ├── layout/         # Header, Footer, Sidebar (Desktop/Mobile)
│   ├── post/           # PostCard, PostContent, CommentSection
│   ├── project/        # ProjectComments, ProjectInteractions, ProjectPropertiesPanel
│   └── ui/             # 기본 UI 컴포넌트들
├── pages/              # 페이지 컴포넌트
├── hooks/              # 커스텀 훅
├── utils/              # 유틸리티 함수
├── stores/             # Zustand 상태 관리
├── types/              # TypeScript 타입 정의
├── constants/          # 상수 정의
└── data/               # 샘플 데이터
```

## 🧩 컴포넌트 작성 규칙

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
```

### 이벤트 핸들러 네이밍

- **`handle` 접두사 사용**: `handleClick`, `handleSubmit`
- **명확한 동작 설명**: `handleUserProfileClick`, `handleProjectLike`
- **이벤트 객체는 `e` 사용**: `(e: React.MouseEvent)`

## 🔄 상태 관리 (Zustand)

### 스토어 구조

```tsx
// stores/useExampleStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useExampleStore = create<ExampleState>()(
  devtools(
    (set, get) => ({
      // 1. State
      data: [],
      loading: false,

      // 2. Actions
      setData: data => set({ data }),
      setLoading: loading => set({ loading }),

      // 3. Async actions
      fetchData: async () => {
        set({ loading: true });
        try {
          const data = await api.getData();
          set({ data, loading: false });
        } catch (error) {
          set({ loading: false });
          throw error;
        }
      },
    }),
    { name: 'example-store' }
  )
);
```

### 상태 분리 원칙

- **도메인별 분리**: `useUserStore`, `useSearchStore`, `useUIStore`
- **관련 상태는 함께 관리**: 검색 쿼리와 필터는 같은 스토어
- **UI 상태와 비즈니스 로직 분리**: `useUIStore` vs `useUserStore`

## 📝 타입 정의 규칙

### 타입 네이밍

- **인터페이스**: `PascalCase` (예: `UserProfile`, `ProjectCard`)
- **타입 별칭**: `PascalCase` (예: `SortOption`, `FilterOption`)
- **제네릭**: `T`, `K`, `V` 또는 의미있는 이름 (예: `TData`, `TKey`)

### 타입 재사용

- **공통 타입은 `types/common.ts`에 정의**
- **도메인별 타입은 해당 폴더에 정의**
- **유틸리티 타입 활용**: `Partial<T>`, `Pick<T, K>`, `Omit<T, K>`

## 🛠️ 유틸리티 및 훅 작성 규칙

### 유틸리티 분리 기준

- **3개 이상 컴포넌트에서 사용**: 별도 유틸리티로 분리
- **복잡한 로직**: 별도 함수로 분리
- **재사용 가능한 로직**: 커스텀 훅으로 분리

### JSDoc 주석 필수

```tsx
/**
 * 프로젝트별 로그 번호를 계산합니다
 * @param postId - 포스트 ID
 * @param category - 프로젝트 카테고리
 * @returns 로그 번호 (1부터 시작)
 */
export const getProjectLogNumber = (
  postId: string,
  category?: string
): number => {
  // 구현
};
```

## 🎨 스타일링 규칙

### Tailwind CSS 클래스 순서

1. **레이아웃**: `flex`, `grid`, `block`, `inline`
2. **위치**: `relative`, `absolute`, `fixed`
3. **크기**: `w-`, `h-`, `max-w-`, `min-h-`
4. **여백**: `m-`, `p-`, `space-`
5. **색상**: `bg-`, `text-`, `border-`
6. **타이포그래피**: `text-`, `font-`, `leading-`
7. **효과**: `shadow-`, `opacity-`, `transition-`
8. **반응형**: `sm:`, `md:`, `lg:`, `xl:`

### 커스텀 CSS 변수 사용

```css
:root {
  --card-padding: 44px;
  --container-padding: 24px;
  --header-height: 64px;
}
```

## 🏷️ 네이밍 컨벤션

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

## ⚡ 성능 최적화

### React.memo 사용

- 무거운 컴포넌트에 memo 사용
- props가 자주 변경되지 않는 컴포넌트에 적용

### useMemo/useCallback 사용

- 복잡한 계산에 useMemo 사용
- 자식 컴포넌트에 전달하는 함수에 useCallback 사용

## 🚨 에러 처리

### API 에러 처리

```tsx
const fetchData = async () => {
  try {
    const data = await api.getData();
    setData(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    setError('데이터를 불러오는데 실패했습니다.');
  }
};
```

### 폼 유효성 검사

```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const validateForm = (data: FormData) => {
  const newErrors: Record<string, string> = {};

  if (!data.title.trim()) {
    newErrors.title = '제목을 입력해주세요.';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

## 📋 체크리스트

### 새 컴포넌트 작성 시

- [ ] 단일 책임 원칙을 따르는가?
- [ ] Props 타입이 명확히 정의되었는가?
- [ ] 이벤트 핸들러가 `handle` 접두사를 사용하는가?
- [ ] React.memo가 필요한가?
- [ ] 재사용 가능한가?

### 새 페이지 작성 시

- [ ] 라우트가 `App.tsx`에 등록되었는가?
- [ ] Layout에서 사이드바 표시 여부가 설정되었는가?
- [ ] 페이지별 액션 버튼이 적절히 설정되었는가?

### 새 상태 추가 시

- [ ] 적절한 스토어에 추가되었는가?
- [ ] 타입이 정의되었는가?
- [ ] 액션이 명확히 정의되었는가?
- [ ] devtools가 설정되었는가?

### 새 유틸리티 작성 시

- [ ] 3개 이상 컴포넌트에서 사용되는가?
- [ ] JSDoc 주석이 작성되었는가?
- [ ] 에러 처리가 포함되었는가?
