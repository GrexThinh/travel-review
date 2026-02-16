namespace API.DTOs
{
    public class ReviewRatingFeedbackDto : BaseDto
    {
        public byte Rating { get; set; }
        public Guid ReviewPostId { get; set; }
        public ReviewPostDto ReviewPost { get; set; }
    }
}

