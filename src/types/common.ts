// 기존 타입들
export type SortOption = 'popular' | 'latest';
export type FilterOption = 'all' | 'following';
export type Category = '프로젝트' | '질문' | '리뷰' | '팁' | '이벤트';

// 새로운 공통 타입들
export type ProfileSize = 'sm' | 'md' | 'lg';
export type ProjectStatus = 'active' | 'completed' | 'paused';
export type NotificationType = 'like' | 'comment' | 'follow' | 'mention';

// 아이콘 관련 타입
export interface IconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
  error?: string;
}

// 공통 액션 타입
export interface ActionState {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: string;
}
