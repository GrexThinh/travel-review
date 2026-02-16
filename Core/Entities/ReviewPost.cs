using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class ReviewPost : BaseEntity
    {
        [MaxLength(250)]
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string? AdditionalInformation { get; set; }
        public byte RatingOverall { get; set; }
        public string Location { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public bool IsRecommended { get; set; }
        public List<Photo> Photos { get; set; } = [];
        public List<ReviewCategory> Categories { get; set; } = [];
        public List<ReviewReaction> Reactions { get; set; } = [];
        public List<ReviewRatingFeedback> RatingFeedbacks { get; set; } = [];
        public List<ReviewCommentFeedback> CommentFeedbacks { get; set; } = [];
        public List<RatingDetail> RatingDetails { get; set; } = [];
    }
}

