import type { BaseEntity, ProjectStatus, UserRole } from './common';

// 프로젝트 관련 타입
export interface Project extends BaseEntity {
  name: string;
  description: string;
  category: string;
  techStack: string[];
  status: ProjectStatus;
  startDate: string;
  endDate: string | null;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  tags: string[];
  likes: number;
  views: number;
  comments: number;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: UserRole | string;
  };
}

