import { BaseModel } from "../base";
import { ReviewCommentFeedbackModel } from "./review-comment-feedback";
import { ReviewPostModel } from "./review-post";

export interface ReviewReactionModel extends BaseModel {
    reaction: number;
    reviewPostId: string | null;
    reviewPost: ReviewPostModel | null;
    reviewCommentFeedbackId: string | null;
    reviewCommentFeedback: ReviewCommentFeedbackModel | null;
}