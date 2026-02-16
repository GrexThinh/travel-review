namespace API.DTOs
{
    public class ReviewReactionDto : BaseDto
    {
        public byte Reaction { get; set; }
        public Guid? ReviewPostId { get; set; }
        public ReviewPostDto? ReviewPost { get; set; }
        public Guid? ReviewCommentFeedbackId { get; set; }
        public ReviewCommentFeedbackDto? ReviewCommentFeedback { get; set; }
    }
}

