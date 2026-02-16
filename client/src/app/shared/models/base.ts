import { User } from './user';

export interface BaseModel {
  id: string;
  activeFlag: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: User;
  updatedBy: User;
}
