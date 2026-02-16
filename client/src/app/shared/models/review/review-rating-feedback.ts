import { BaseModel } from "../base";
import { ReviewPostModel } from "./review-post";

export interface ReviewRatingFeedbackModel extends BaseModel {
    rating: number;
    reviewPostId: string;
    reviewPost: ReviewPostModel;
}