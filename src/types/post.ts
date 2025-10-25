import type { BaseEntity, Category, UserRole } from './common';

// 포스트 관련 타입
export interface Post extends BaseEntity {
  title: string;
  content: string;
  author: string;
  authorRole?: UserRole;
  category?: Category;
  hashtags?: string[];
  tags?: string[];
  likes: number;
  comments: number;
  views?: number; // 기존 호환성을 위해 선택적으로 변경
  hasImage?: boolean;
  imageUrls?: string[];
  projectLikes?: number;
  projectLogo?: string;
  isPublished?: boolean; // 기존 호환성을 위해 선택적으로 변경
  publishedAt?: string;
  timestamp: string; // 기존 호환성을 위해 유지
}

// PostCard 관련 타입
export interface PostCardProps {
  id: string;
  title?: string; // 프로젝트명과 로그번호가 실제 제목 역할
  author: string;
  authorRole?: UserRole;
  timestamp: string;
  content: string;
  hashtags?: string[];
  likes: number;
  comments: number;
  views?: number; // 기존 호환성을 위해 선택적으로 변경
  hasImage?: boolean;
  imageUrls?: string[];
  category?: Category;
  projectLikes?: number;
  projectLogo?: string;
  isFirst?: boolean;
  isLast?: boolean;
}
