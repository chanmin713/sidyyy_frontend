# Sidyyy Frontend 아키텍처

## 📁 프로젝트 구조

```
src/
├── components/          # 컴포넌트 (모듈별 분리)
│   ├── common/         # 공통 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   ├── post/           # 포스트 관련 컴포넌트
│   ├── project/        # 프로젝트 관련 컴포넌트
│   └── ui/             # UI 컴포넌트
├── hooks/              # 커스텀 훅
│   ├── data/           # 데이터 관련 훅
│   └── ui/             # UI 관련 훅
├── utils/              # 유틸리티 (기능별 분리)
│   ├── accessibility/  # 접근성 유틸리티
│   ├── data/           # 데이터 처리 유틸리티
│   ├── security/       # 보안 유틸리티
│   └── ui/             # UI 유틸리티
├── stores/             # 상태 관리 (Zustand)
├── types/              # 타입 정의
├── pages/              # 페이지 (카테고리별 분리)
│   ├── auth/           # 인증 관련 페이지
│   ├── content/        # 콘텐츠 페이지
│   └── profile/        # 프로필 페이지
└── data/               # 샘플 데이터
```

## 🔄 상태 관리 (Zustand)

### 현재 구현된 스토어들

#### useUserStore

사용자 인증 및 프로필 관리

```typescript
interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}
```

#### useUIStore

UI 상태 관리

```typescript
interface UIState {
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
}
```

#### useSearchStore

검색 쿼리 및 필터 상태

```typescript
interface SearchState {
  query: string;
  filters: {
    category: string[];
    sortBy: 'popular' | 'recent' | 'trending';
    filterBy: 'all' | 'my' | 'liked';
  };
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  clearSearch: () => void;
}
```

#### useNotificationStore

알림 관리

```typescript
interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}
```

#### useNormalizedStore

정규화된 데이터 관리 (CRUD, 필터링, 검색, 페이지네이션 포함)

```typescript
interface NormalizedStoreState<T extends BaseEntity> {
  data: NormalizedState<T>;
  loading: boolean;
  error: string | null;
  filters: Record<string, any>;
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';
  searchQuery: string;
  searchFields: (keyof T)[];
  currentPage: number;
  pageSize: number;
  selectedIds: string[];

  // CRUD 액션들
  setData: (items: T[]) => void;
  addItem: (item: T) => void;
  updateItem: (id: string, updates: Partial<T>) => void;
  removeItem: (id: string) => void;

  // 필터링, 검색, 페이지네이션
  setFilters: (filters: Record<string, any>) => void;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;

  // 계산된 값들
  getFilteredItems: () => T[];
  getSearchedItems: () => T[];
  getPaginatedItems: () => PaginatedResult<T>;
}
```

## 🛠️ 유틸리티 및 훅

### 현재 구현된 유틸리티들

#### UI 유틸리티 (`src/utils/ui/`)

- **`cn.ts`**: Tailwind CSS 클래스 유틸리티
- **`textUtils.ts`**: 텍스트 처리 및 포맷팅
- **`projectUtils.ts`**: 프로젝트 관련 유틸리티
- **`statsUtils.ts`**: 통계 관련 유틸리티

#### 접근성 유틸리티 (`src/utils/accessibility/`)

- **`accessibilityUtils.ts`**: ARIA 속성, 키보드 네비게이션, 포커스 관리

#### 보안 유틸리티 (`src/utils/security/`)

- **`securityUtils.ts`**: XSS 방지, SQL 인젝션 검사, 입력값 검증

#### 데이터 유틸리티 (`src/utils/data/`)

- **`normalizationUtils.ts`**: 정규화된 데이터 관리, CRUD 작업

### 현재 구현된 훅들

- **`useDropdown`**: 드롭다운 상태 관리
- **`useNavigation`**: 라우팅 및 네비게이션

## 🎨 스타일링 (Tailwind CSS)

### CSS 클래스 순서

1. **레이아웃**: `flex`, `grid`, `block`, `inline`
2. **위치**: `relative`, `absolute`, `fixed`
3. **크기**: `w-`, `h-`, `max-w-`, `min-h-`
4. **여백**: `m-`, `p-`, `space-`
5. **색상**: `bg-`, `text-`, `border-`
6. **타이포그래피**: `text-`, `font-`, `leading-`
7. **효과**: `shadow-`, `opacity-`, `transition-`
8. **반응형**: `sm:`, `md:`, `lg:`, `xl:`

## ⚡ 성능 최적화

### 현재 구현된 최적화 기능들

- **코드 스플리팅**: React.lazy를 사용한 페이지 지연 로딩
- **이미지 최적화**: `OptimizedImage` 컴포넌트
- **디바운싱/스로틀링**: `useDebounce`, `useThrottle` 훅
- **접근성 최적화**: ARIA 속성 및 키보드 네비게이션
- **정규화된 데이터 관리**: 효율적인 CRUD 작업 및 상태 관리

## 🔒 보안 및 접근성

### 보안 기능

- **XSS 방지**: 입력값 검증 및 이스케이프 처리
- **SQL 인젝션 방지**: 입력값 검증
- **비밀번호 강도 검증**: `SecureInput` 컴포넌트
- **입력 검증**: 모든 사용자 입력에 대한 안전한 검증

### 접근성 기능

- **ARIA 속성**: `AccessibleButton`, `AccessibleModal` 컴포넌트
- **키보드 네비게이션**: 모든 인터랙티브 요소 지원
- **포커스 관리**: 포커스 트랩 및 복원
- **스크린 리더 지원**: 적절한 라벨링 및 설명

## 🧪 테스트

### 테스트 환경 설정

- **Jest**: 테스트 프레임워크
- **React Testing Library**: 컴포넌트 테스트
- **jsdom**: DOM 환경 시뮬레이션

### 테스트 커버리지

- **목표**: 70% 이상
- **포함**: 컴포넌트, 유틸리티, 훅
- **제외**: main.tsx, 타입 정의 파일

## 🚀 개발 시 자주 사용하는 패턴

### 1. 새 페이지 추가 시 체크리스트

```tsx
// 1. pages/ 폴더에 페이지 컴포넌트 생성
// 2. App.tsx에 라우트 추가
// 3. Layout에서 사이드바 표시 여부 설정
// 5. 페이지별 액션 버튼 설정
// 6. 에러 바운더리 적용
```

### 2. 새 스토어 생성 시 패턴

```tsx
// stores/useNewStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface NewState {
  data: any[];
  loading: boolean;
  error: string | null;
}

interface NewActions {
  setData: (data: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchData: () => Promise<void>;
}

export const useNewStore = create<NewState & NewActions>()(
  devtools(
    (set, get) => ({
      // State
      data: [],
      loading: false,
      error: null,

      // Actions
      setData: data => set({ data }),
      setLoading: loading => set({ loading }),
      setError: error => set({ error }),

      // Async actions
      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          const data = await api.getData();
          set({ data, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
    }),
    { name: 'new-store' }
  )
);
```

### 3. API 호출 패턴

```tsx
// utils/api.ts
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.json();
  },

  post: async <T>(endpoint: string, data: any): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.json();
  },
};
```

### 4. 에러 처리 패턴

```tsx
// ErrorBoundary 사용
<ErrorBoundary fallback={<ErrorFallback />}>
  <Component />
</ErrorBoundary>;

// try-catch 패턴
const handleAction = async () => {
  try {
    setLoading(true);
    await performAction();
    showSuccess('성공했습니다.');
  } catch (error) {
    showError(error.message);
  } finally {
    setLoading(false);
  }
};
```

### 5. 성능 최적화 패턴

```tsx
// React.memo 사용
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(
    () => data.map(item => ({ ...item, processed: true })),
    [data]
  );

  const handleUpdate = useCallback(
    id => {
      onUpdate(id);
    },
    [onUpdate]
  );

  return <div>{/* JSX */}</div>;
});

// 지연 로딩
const LazyComponent = lazy(() => import('./LazyComponent'));
```

## 🐛 자주 발생하는 문제와 해결책

### 1. 상태 관리 문제

**문제**: 상태가 예상대로 업데이트되지 않음

```tsx
// ❌ 잘못된 예시
const updateUser = updates => {
  user = { ...user, ...updates }; // 직접 수정
};
```

**해결**: 불변성 유지

```tsx
// ✅ 올바른 예시
const updateUser = updates => {
  setUser(prev => ({ ...prev, ...updates }));
};
```

### 2. 메모리 누수 문제

**문제**: 컴포넌트 언마운트 후 상태 업데이트

```tsx
// ❌ 잘못된 예시
useEffect(() => {
  fetchData().then(setData);
}, []);
```

**해결**: 클린업 함수 사용

```tsx
// ✅ 올바른 예시
useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });

  return () => {
    isMounted = false;
  };
}, []);
```

### 3. 라우팅 문제

**문제**: 페이지 전환 시 상태 유지되지 않음

```tsx
// ❌ 잘못된 예시
const navigate = useNavigate();
navigate('/new-page');
```

**해결**: 상태를 전역 스토어에 저장

```tsx
// ✅ 올바른 예시
const { setPageData } = useUIStore();
const navigate = useNavigate();

const handleNavigate = () => {
  setPageData({ previousPage: 'current-page' });
  navigate('/new-page');
};
```

## 📝 개발 원칙

1. **모듈화**: 기능별로 폴더 분리
2. **재사용성**: 공통 컴포넌트와 유틸리티 활용
3. **타입 안전성**: TypeScript 타입 정의 필수
4. **접근성**: ARIA 속성과 키보드 네비게이션 지원
5. **성능**: React.memo, useMemo, useCallback 활용
6. **보안**: 모든 사용자 입력 검증
7. **에러 처리**: 모든 비동기 작업에 에러 처리 구현
8. **테스트 가능성**: 테스트하기 쉬운 구조로 설계
