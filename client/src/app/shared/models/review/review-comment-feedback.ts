import { BaseModel } from "../base";
import { ReviewPostModel } from "./review-post";
import { ReviewReactionModel } from "./review-reaction";

export interface ReviewCommentFeedbackModel extends BaseModel {
    parentId: string | null;
    parent: ReviewCommentFeedbackModel | null;
    replies: ReviewCommentFeedbackModel[];
    comment: string;
    reviewPostId: string;
    reviewPost: ReviewPostModel;
    reactions: ReviewReactionModel[];
}