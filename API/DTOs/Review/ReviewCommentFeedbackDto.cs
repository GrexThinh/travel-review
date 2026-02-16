namespace API.DTOs
{
    public class ReviewCommentFeedbackDto : BaseDto
    {
        public Guid? ParentId { get; set; }
        public ReviewCommentFeedbackDto? Parent { get; set; }
        public List<ReviewCommentFeedbackDto> Replies { get; set; }
        public string Comment { get; set; } = null!;
        public Guid ReviewPostId { get; set; }
        public ReviewPostDto ReviewPost { get; set; } = null!;
        public List<ReviewReactionDto> Reactions { get; set; }
    }
}

