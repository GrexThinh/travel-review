import { BaseModel } from "../base";
import { ReviewPostModel } from "./review-post";

export interface ReviewRatingDetailModel extends BaseModel {
    name: string;
    icon: string | null;
    rating: number;
    reviewPostId: string;
    reviewPost: ReviewPostModel;
}