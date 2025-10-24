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
}

// PostCard 관련 타입
export interface PostCardData {
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
}

export interface PostCardLayout {
  isFirst?: boolean;
  isLast?: boolean;
}

export interface PostCardProps extends PostCardData, PostCardLayout {}
