namespace Core.Entities
{
    public class ReviewRatingFeedback : BaseEntity
    {
        public byte Rating { get; set; }
        public Guid ReviewPostId { get; set; }
        public ReviewPost ReviewPost { get; set; } = null!;
    }
}

