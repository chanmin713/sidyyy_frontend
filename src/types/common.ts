// 공통 UI 타입
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// UI 컴포넌트 타입
export interface ToggleProps<T = string> {
  value: T;
  onValueChange: (value: T) => void;
  children: React.ReactNode;
  className?: string;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  onOpenChange?: (open: boolean) => void;
}

// 검색 관련 타입
export interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

// 필터 및 정렬 타입
export type SortOption = 'popular' | 'latest';
export type FilterOption = 'all' | 'following';
export type Category = '프로젝트' | '질문' | '리뷰' | '팁' | '이벤트';
