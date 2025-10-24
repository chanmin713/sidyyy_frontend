// 댓글 관련 타입
export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Reply[];
}

// 답글 관련 타입
export interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

// 프로젝트 댓글 관련 타입
export interface ProjectComment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: ProjectReply[];
}

export interface ProjectReply {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}
