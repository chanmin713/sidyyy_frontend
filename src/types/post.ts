// 포스트 관련 타입
export interface Post {
  id: string;
  author: string;
  authorRole?: string;
  timestamp: string;
  content: string;
  hashtags?: string[];
  likes: number;
  comments: number;
  hasImage?: boolean;
  category?: string;
  projectLikes?: number;
  projectLogo?: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

// PostCard 관련 타입
export interface PostCardProps {
  id: string;
  author: string;
  authorRole?: string;
  timestamp: string;
  content: string;
  hashtags?: string[];
  likes: number;
  comments: number;
  hasImage?: boolean;
  category?: string;
  projectLikes?: number;
  projectLogo?: string;
  isFirst?: boolean;
  isLast?: boolean;
}
