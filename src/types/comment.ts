// 댓글 관련 타입
export interface Comment {
  id: string;
  postId: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Reply[];
  createdAt: string;
  updatedAt: string;
}

// 답글 관련 타입
export interface Reply {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
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
