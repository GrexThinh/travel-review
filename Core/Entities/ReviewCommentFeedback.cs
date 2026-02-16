namespace Core.Entities
{
    public class ReviewCommentFeedback : BaseEntity
    {
        public Guid? ParentId { get; set; }
        public ReviewCommentFeedback? Parent { get; set; }
        public List<ReviewCommentFeedback> Replies { get; set; } = [];
        public string Comment { get; set; } = null!;
        public Guid ReviewPostId { get; set; }
        public ReviewPost ReviewPost { get; set; } = null!;
        public List<ReviewReaction> Reactions { get; set; } = [];
    }
}

