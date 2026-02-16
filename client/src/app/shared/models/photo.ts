import { ReviewPostModel } from './review/review-post';
import { User } from './user';

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
  isCover: boolean;
  publicId: string | null;
  appUserId: string | null;
  appUser: User | null;
  reviewPostId: string | null;
  reviewPost: ReviewPostModel | null;
}
