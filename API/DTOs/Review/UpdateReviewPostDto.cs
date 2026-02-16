namespace API.DTOs.Review;

public class UpdateReviewPostDto
{
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string? AdditionalInformation { get; set; }
    public byte RatingOverall { get; set; }
    public string Location { get; set; } = null!;
    public double Longitude { get; set; }
    public double Latitude { get; set; }
    public bool IsRecommended { get; set; }
    public List<CategoryInputDto> Categories { get; set; } = [];
    public List<RatingDetailInputDto> RatingDetails { get; set; } = [];
}
