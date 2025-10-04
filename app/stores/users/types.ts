export interface TUsers{
  id: number;
  username: string;
  nickname: string;
  avatar: string;
  bio: string;
  website: string;
  source: string;
  settings: unknown;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  isActive: boolean;
  permissions: unknown;
}