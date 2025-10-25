// 정렬 옵션
export type SortOption = 'popular' | 'latest' | 'trending';
export type SortOrder = 'asc' | 'desc';

// 필터 옵션
export type FilterOption = 'all' | 'following' | 'my' | 'liked';

// 카테고리
export type Category =
  | '프로젝트'
  | '질문'
  | '리뷰'
  | '팁'
  | '이벤트'
  | 'Sidyyy'
  | 'DevTools'
  | 'CodeShare'
  | 'TechBlog';

// 크기 관련 타입
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ProfileSize = 'sm' | 'md' | 'lg';

// 상태 관련 타입
export type ProjectStatus = 'planning' | 'in_progress' | 'completed' | 'paused';
export type NotificationType = 'like' | 'comment' | 'follow' | 'mention';
export type UserRole =
  | 'admin'
  | 'moderator'
  | 'user'
  | 'PO'
  | '백엔드 개발자'
  | '프론트엔드 개발자'
  | 'DevOps 엔지니어'
  | 'AI 연구원'
  | '모바일 개발자'
  | '보안 엔지니어'
  | '알고리즘 엔지니어';

// 기본 엔티티 인터페이스
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// 아이콘 관련 타입
export interface IconProps {
  className?: string;
  size?: Size;
}

// 시간 관련 타입
export interface TimeFormatOptions {
  showSeconds?: boolean;
  relative?: boolean;
}

// 이미지 관련 타입
export interface ImageHandlingProps {
  maxHeight?: string;
  alt?: string;
  className?: string;
}

// 네비게이션 관련 타입
export interface NavigationProps {
  postId?: string;
  projectName?: string;
  username?: string;
}

// 공통 상태 타입
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// 공통 액션 타입
export interface ActionState {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: string | null;
}

// 페이지네이션 타입
export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// 검색 및 필터 타입
export interface SearchFilters {
  category?: string[];
  sortBy?: SortOption;
  sortOrder?: SortOrder;
  filterBy?: FilterOption;
  dateRange?: {
    start: string;
    end: string;
  };
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// 페이지네이션된 응답 타입
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationState;
}
