# 컴포넌트 가이드

## 📋 현재 구현된 컴포넌트

### 공통 컴포넌트 (`src/components/common/`)

#### ActionButton

재사용 가능한 액션 버튼 컴포넌트

```tsx
interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}
```

#### ProfileSection

사용자 프로필 섹션

```tsx
interface ProfileSectionProps {
  author: string;
  authorRole: string;
  size?: 'sm' | 'md' | 'lg';
  showActions?: boolean;
  onEdit?: () => void;
  onFollow?: () => void;
}
```

#### FloatingWriteButton

플로팅 글쓰기 버튼 (모바일용)

```tsx
interface FloatingWriteButtonProps {
  className?: string;
}
```

#### ScrollToTopButton

맨 위로 스크롤 버튼

```tsx
interface ScrollToTopButtonProps {
  className?: string;
}
```

### 레이아웃 컴포넌트 (`src/components/layout/`)

#### Header (DesktopHeader, MobileHeader)

반응형 헤더 컴포넌트

```tsx
interface HeaderProps {
  title?: string;
  showSidebar?: boolean;
  onMenuClick?: () => void;
  className?: string;
}
```

#### RightSidebar

우측 사이드바 컴포넌트

```tsx
interface RightSidebarProps {
  className?: string;
}
```

#### Footer

푸터 컴포넌트

```tsx
interface FooterProps {
  className?: string;
}
```

#### SidebarContent

사이드바 콘텐츠 컴포넌트

```tsx
interface SidebarContentProps {
  className?: string;
}
```

### 포스트 컴포넌트 (`src/components/post/`)

#### PostCard

포스트 카드 컴포넌트

```tsx
interface PostCardProps {
  author: string;
  authorRole: string;
  timestamp: string;
  content: string;
  hashtags?: string[];
  likes: number;
  comments: number;
  hasImage?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  category?: string;
  projectLogo?: string;
  id?: string;
}
```

#### PostContent

포스트 내용 컴포넌트

```tsx
interface PostContentProps {
  content: string;
  author: string;
  authorRole: string;
  createdAt: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}
```

#### CommentSection

댓글 섹션 컴포넌트

```tsx
interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
  onEditComment: (id: string, content: string) => void;
  onDeleteComment: (id: string) => void;
  onLikeComment: (id: string) => void;
}
```

### UI 컴포넌트 (`src/components/ui/`)

#### Dropdown

드롭다운 컴포넌트

```tsx
interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}
```

#### LoadingSpinner

로딩 스피너 컴포넌트

```tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}
```

#### AccessibleButton

접근성을 고려한 버튼 컴포넌트

```tsx
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}
```

#### SecureInput

보안을 고려한 입력 컴포넌트

```tsx
interface SecureInputProps {
  type?: 'text' | 'password' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
```

````

## 🎯 컴포넌트 사용 가이드

### 1. 컴포넌트 선택 기준
- **공통 컴포넌트**: 여러 곳에서 재사용되는 기본 컴포넌트
- **레이아웃 컴포넌트**: 페이지 구조를 담당하는 컴포넌트
- **포스트 컴포넌트**: 포스트 관련 기능 컴포넌트
- **UI 컴포넌트**: 사용자 인터페이스 요소 컴포넌트

### 2. Props 사용 규칙
- **필수 Props**: `required`로 표시된 Props는 반드시 전달
- **선택 Props**: `optional`로 표시된 Props는 선택적으로 전달
- **기본값**: `default`로 표시된 값이 기본값

### 3. 이벤트 처리
- **이벤트 핸들러**: `on` 접두사 사용 (예: `onClick`, `onChange`)
- **이벤트 객체**: `React.MouseEvent`, `React.ChangeEvent` 등 사용
- **콜백 함수**: `(value: Type) => void` 형식 사용

## 🎨 스타일링

### Tailwind CSS 클래스 순서
1. **레이아웃**: `flex`, `grid`, `block`, `inline`
2. **위치**: `relative`, `absolute`, `fixed`
3. **크기**: `w-`, `h-`, `max-w-`, `min-h-`
4. **여백**: `m-`, `p-`, `space-`
5. **색상**: `bg-`, `text-`, `border-`
6. **타이포그래피**: `text-`, `font-`, `leading-`
7. **효과**: `shadow-`, `opacity-`, `transition-`
8. **반응형**: `sm:`, `md:`, `lg:`, `xl:`

## ♿ 접근성

### 키보드 네비게이션
- **Button**: `Enter`와 `Space` 키로 활성화
- **Dropdown**: `Arrow` 키로 옵션 이동
- **Modal**: `Escape` 키로 닫기

### ARIA 속성
```tsx
<ActionButton
  aria-label="저장 버튼"
  aria-describedby="save-description"
  onClick={handleSave}
>
  저장
</ActionButton>
````

## 🧪 테스트

### 기본 테스트

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ActionButton } from '@/components/common/ActionButton';

test('renders button with text', () => {
  render(<ActionButton onClick={jest.fn()}>Click me</ActionButton>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## 🔧 개발 시 자주 사용하는 패턴

### 1. 새 컴포넌트 생성 시 체크리스트

```tsx
// 1. 컴포넌트 파일 생성 (PascalCase.tsx)
// 2. Props 인터페이스 정의
// 3. React.memo 적용 고려
// 4. 접근성 속성 추가
// 5. 에러 처리 구현
// 6. 테스트 코드 작성
```

### 2. 상태 관리 패턴

```tsx
// 로컬 상태: useState
const [isOpen, setIsOpen] = useState(false);

// 전역 상태: Zustand 스토어
const { user, setUser } = useUserStore();

// 파생 상태: useMemo
const filteredData = useMemo(
  () => data.filter(item => item.category === selectedCategory),
  [data, selectedCategory]
);
```

### 3. 이벤트 처리 패턴

```tsx
// 기본 이벤트 핸들러
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  // 로직 처리
};

// 비동기 이벤트 핸들러
const handleSubmit = async (data: FormData) => {
  try {
    setLoading(true);
    await submitData(data);
    showSuccess('저장되었습니다.');
  } catch (error) {
    showError('저장에 실패했습니다.');
  } finally {
    setLoading(false);
  }
};
```

### 4. 조건부 렌더링 패턴

```tsx
// 기본 조건부 렌더링
{
  isLoading && <LoadingSpinner />;
}
{
  error && <ErrorMessage error={error} />;
}
{
  data.length > 0 ? <DataList data={data} /> : <EmptyState />;
}

// 복잡한 조건부 렌더링
{
  (() => {
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage error={error} />;
    if (data.length === 0) return <EmptyState />;
    return <DataList data={data} />;
  })();
}
```

### 5. 리스트 렌더링 패턴

```tsx
// 기본 리스트 렌더링
{
  items.map(item => <ItemCard key={item.id} item={item} />);
}

// 복잡한 리스트 렌더링
{
  items.map((item, index) => (
    <ItemCard
      key={item.id}
      item={item}
      index={index}
      onEdit={() => handleEdit(item.id)}
      onDelete={() => handleDelete(item.id)}
    />
  ));
}
```

## 🐛 자주 발생하는 문제와 해결책

### 1. 렌더링 최적화 문제

**문제**: 불필요한 리렌더링 발생

```tsx
// ❌ 잘못된 예시
const Component = ({ data }) => {
  const processedData = data.map(item => ({ ...item, processed: true }));
  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};
```

**해결**: useMemo 사용

```tsx
// ✅ 올바른 예시
const Component = ({ data }) => {
  const processedData = useMemo(
    () => data.map(item => ({ ...item, processed: true })),
    [data]
  );
  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
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

### 3. 접근성 문제

**문제**: 키보드 네비게이션 미지원

```tsx
// ❌ 잘못된 예시
<div onClick={handleClick}>클릭하세요</div>
```

**해결**: 적절한 시맨틱 태그와 ARIA 속성 사용

```tsx
// ✅ 올바른 예시
<button
  onClick={handleClick}
  aria-label='항목 삭제'
  onKeyDown={e => e.key === 'Enter' && handleClick()}
>
  삭제
</button>
```

## 📝 개발 원칙

1. **단일 책임**: 하나의 컴포넌트는 하나의 역할
2. **재사용성**: 여러 곳에서 사용 가능하도록 설계
3. **접근성**: ARIA 속성과 키보드 네비게이션 지원
4. **성능**: React.memo, useMemo, useCallback 활용
5. **타입 안전성**: TypeScript 타입 정의 필수
6. **에러 처리**: 모든 비동기 작업에 에러 처리 구현
7. **테스트 가능성**: 테스트하기 쉬운 구조로 설계
