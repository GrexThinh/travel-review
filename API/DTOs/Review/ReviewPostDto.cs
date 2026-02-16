namespace API.DTOs
{
    public class ReviewPostDto : BaseDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string? AdditionalInformation { get; set; }
        public byte RatingOverall { get; set; }
        public string Location { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public bool IsRecommended { get; set; }
        public List<PhotoDto> Photos { get; set; }
        public List<ReviewCategoryDto> Categories { get; set; }
        public List<ReviewReactionDto> Reactions { get; set; }
        public List<ReviewRatingFeedbackDto> RatingFeedbacks { get; set; }
        public List<ReviewCommentFeedbackDto> CommentFeedbacks { get; set; }
        public List<RatingDetailDto> RatingDetails { get; set; }
    }
}

