import { BaseModel } from "../base";
import { ReviewPostModel } from "./review-post";

export interface ReviewCategoryModel extends BaseModel {
    name: string;
    description: string | null;
    icon: string | null;
    reviewPosts: ReviewPostModel[];
}