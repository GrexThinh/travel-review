namespace Core.Entities
{
    /// <summary>Reaction (e.g. like, love) on either a review post or a comment — exactly one of ReviewPostId or ReviewCommentFeedbackId must be set.</summary>
    public class ReviewReaction : BaseEntity
    {
        public byte Reaction { get; set; }
        public Guid? ReviewPostId { get; set; }
        public ReviewPost? ReviewPost { get; set; }
        public Guid? ReviewCommentFeedbackId { get; set; }
        public ReviewCommentFeedback? ReviewCommentFeedback { get; set; }
    }
}

