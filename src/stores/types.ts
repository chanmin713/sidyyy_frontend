// 사용자 상태 타입
export interface UserState {
  isLoggedIn: boolean;
  user: {
    id: string;
    username: string;
    email: string;
    avatar?: string;
  } | null;
  setUser: (user: UserState['user']) => void;
  logout: () => void;
}

// 검색 상태 타입
export interface SearchState {
  query: string;
  filters: {
    category: string[];
    sortBy: 'latest' | 'popular';
    filterBy: 'all' | 'following';
  };
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchState['filters']>) => void;
  clearSearch: () => void;
}

// UI 상태 타입
export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setSidebarOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
}

// 알림 상태 타입
export interface NotificationState {
  notifications: Array<{
    id: string;
    type: 'like' | 'comment' | 'follow' | 'mention';
    title: string;
    content: string;
    time: string;
    isRead: boolean;
  }>;
  unreadCount: number;
  addNotification: (
    notification: Omit<NotificationState['notifications'][0], 'id' | 'isRead'>
  ) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

// 전체 앱 상태 타입
export interface AppState
  extends UserState,
    SearchState,
    UIState,
    NotificationState {}
