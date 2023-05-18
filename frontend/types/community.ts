import { Tech } from './project';
import { MemberInfo } from './types';

export type Community = {
  articleId: number;
  category: string;
  content: string;
  createdAt: string;
  memberInfo: MemberInfo;
  techList: Tech[];
  title: string;
  totalLikes: number;
  view: number;
};

type CategoryType = 'PROJECT' | 'COMMUNITY';