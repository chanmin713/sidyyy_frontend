// 프로젝트 상태 타입은 common.ts에서 import
import type { ProjectStatus } from './common';

// 프로젝트 속성 인터페이스
export interface ProjectProperties {
  id: string;
  name: string;
  description: string;
  creator: string;
  author: string;
  participants: string[];
  githubUrl?: string;
  deployUrl?: string;
  status: ProjectStatus;
  category: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  likes: number;
  comments: number;
}

// 프로젝트 생성 입력 타입
export interface ProjectCreateInput {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

// 프로젝트 업데이트 입력 타입
export interface ProjectUpdateInput extends Partial<ProjectCreateInput> {
  id: string;
  status?: ProjectStatus;
}

// 프로젝트 필터 타입
export interface ProjectFilters {
  status?: ProjectStatus[];
  tags?: string[];
  creator?: string;
  search?: string;
}

// 프로젝트 정렬 타입
export type ProjectSortBy = 'latest' | 'popular' | 'name' | 'likes';
