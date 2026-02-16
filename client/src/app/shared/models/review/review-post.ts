import { BaseModel } from "../base";
import { Photo } from "../photo";
import { ReviewCategoryModel } from "./review-category";
import { ReviewCommentFeedbackModel } from "./review-comment-feedback";
import { ReviewRatingDetailModel } from "./review-rating-detail";
import { ReviewRatingFeedbackModel } from "./review-rating-feedback";
import { ReviewReactionModel } from "./review-reaction";

export interface ReviewPostModel extends BaseModel {
  title: string;
  description: string;
  additionalInformation: string | null;
  ratingOverall: number;
  location: string;
  longitude: number;
  latitude: number;
  isRecommended: boolean;
  photos: Photo[];
  categories: ReviewCategoryModel[];
  reactions: ReviewReactionModel[];
  ratingFeedbacks: ReviewRatingFeedbackModel[];
  commentFeedbacks: ReviewCommentFeedbackModel[];
  ratingDetails: ReviewRatingDetailModel[];
}
