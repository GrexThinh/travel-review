using Microsoft.AspNetCore.Http;

namespace API.DTOs.Review;

/// <summary>Form-binding model for creating a review post (multipart/form-data).</summary>
public class CreateReviewPostRequest
{
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string? AdditionalInformation { get; set; }
    public byte RatingOverall { get; set; }
    public string Location { get; set; } = null!;
    public double Longitude { get; set; }
    public double Latitude { get; set; }
    public bool IsRecommended { get; set; }
    /// <summary>JSON array of { id, name }.</summary>
    public string? CategoriesJson { get; set; }
    /// <summary>JSON array of { name, rating }.</summary>
    public string? RatingDetailsJson { get; set; }
    public IFormFile? CoverPhoto { get; set; }
    public IFormFileCollection? ExtraPhotos { get; set; }
}
