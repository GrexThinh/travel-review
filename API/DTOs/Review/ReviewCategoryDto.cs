namespace API.DTOs
{
    public class ReviewCategoryDto : BaseDto
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Icon { get; set; }
        public List<ReviewPostDto> ReviewPosts { get; set; }
    }
}

