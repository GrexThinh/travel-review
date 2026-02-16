namespace API.DTOs
{
    public class RatingDetailDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public string? Icon { get; set; }
        public byte Rating { get; set; }
        public Guid ReviewPostId { get; set; }
        public ReviewPostDto ReviewPost { get; set; } = null!;
    }
}

