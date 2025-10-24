// 프로젝트 관련 타입
export interface ProjectProperties {
  id: string;
  name: string;
  description: string;
  creator: string;
  participants: string[];
  githubUrl?: string;
  deployUrl?: string;
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
  updatedAt: string;
  tags: string[];
  likes: number;
  comments: number;
}
