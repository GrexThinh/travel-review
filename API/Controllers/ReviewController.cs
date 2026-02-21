using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using API.DTOs;
using API.DTOs.Review;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewController(
    DataContext context,
    IMapper mapper,
    IPhotoStorage photoStorage) : BaseApiController
{
    private Guid GetCurrentUserId()
    {
        var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.TryParse(id, out var guid) ? guid : Guid.Empty;
    }

    [HttpGet]
    public async Task<ActionResult<ReviewPostDto>> GetAll(Guid id, CancellationToken cancellationToken)
    {
        var posts = await context.ReviewPosts
            .Include(p => p.Photos)
            .Include(p => p.Categories)
            .Include(p => p.RatingDetails)
            .Include(p => p.CreatedBy).ThenInclude(u => u!.Photos)
            .Where(p => p.ActiveFlag == 1)
            .AsNoTracking()
            .ProjectTo<ReviewPostDto>(mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken);

        return Ok(posts);
    }

    [Authorize]
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ReviewPostDto>> GetById(Guid id, CancellationToken cancellationToken)
    {
        var post = await context.ReviewPosts
            .Include(p => p.Photos)
            .Include(p => p.Categories)
            .Include(p => p.RatingDetails)
            .Include(p => p.CreatedBy).ThenInclude(u => u!.Photos)
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == id && p.ActiveFlag == 1, cancellationToken);

        if (post == null) return NotFound();
        return Ok(mapper.Map<ReviewPostDto>(post));
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<ReviewPostDto>> Create([FromForm] CreateReviewPostRequest request, CancellationToken cancellationToken)
    {
        var userId = GetCurrentUserId();
        if (userId == Guid.Empty) return Unauthorized();

        var categories = ParseCategories(request.CategoriesJson);
        var ratingDetails = ParseRatingDetails(request.RatingDetailsJson);

        var post = new ReviewPost
        {
            Id = Guid.NewGuid(),
            Title = request.Title.Trim(),
            Description = request.Description,
            AdditionalInformation = string.IsNullOrWhiteSpace(request.AdditionalInformation) ? null : request.AdditionalInformation.Trim(),
            RatingOverall = request.RatingOverall,
            Location = request.Location.Trim(),
            Longitude = request.Longitude,
            Latitude = request.Latitude,
            IsRecommended = request.IsRecommended,
            ActiveFlag = 1,
            CreatedById = userId,
            UpdatedById = userId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
        };

        var categoryEntities = await EnsureCategoriesAsync(categories, userId, cancellationToken);
        post.Categories = categoryEntities;

        context.ReviewPosts.Add(post);

        foreach (var rd in ratingDetails)
        {
            post.RatingDetails.Add(new RatingDetail
            {
                Id = Guid.NewGuid(),
                Name = rd.Name,
                Rating = rd.Rating,
                ReviewPostId = post.Id,
                ActiveFlag = 1,
                CreatedById = userId,
                UpdatedById = userId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            });
        }

        var reviewSubPath = $"reviews/{post.Id}";
        if (request.CoverPhoto != null)
        {
            var ext = Path.GetExtension(request.CoverPhoto.FileName);
            if (string.IsNullOrEmpty(ext)) ext = ".jpg";
            var url = await photoStorage.SaveAsync(request.CoverPhoto, $"{reviewSubPath}/cover{ext}", cancellationToken);
            post.Photos.Add(new Photo
            {
                Id = Guid.NewGuid(),
                Url = url,
                IsMain = false,
                IsCover = true,
                ReviewPostId = post.Id,
            });
        }

        if (request.ExtraPhotos != null)
        {
            for (var i = 0; i < request.ExtraPhotos.Count; i++)
            {
                var file = request.ExtraPhotos[i];
                var ext = Path.GetExtension(file.FileName);
                if (string.IsNullOrEmpty(ext)) ext = ".jpg";
                var url = await photoStorage.SaveAsync(file, $"{reviewSubPath}/extra_{i}{ext}", cancellationToken);
                post.Photos.Add(new Photo
                {
                    Id = Guid.NewGuid(),
                    Url = url,
                    IsMain = false,
                    IsCover = false,
                    ReviewPostId = post.Id,
                });
            }
        }

        await context.SaveChangesAsync(cancellationToken);

        await context.Entry(post)
            .Collection(p => p.Photos).LoadAsync(cancellationToken);
        await context.Entry(post)
            .Collection(p => p.Categories).LoadAsync(cancellationToken);
        await context.Entry(post)
            .Collection(p => p.RatingDetails).LoadAsync(cancellationToken);
        await context.Entry(post)
            .Reference(p => p.CreatedBy).LoadAsync(cancellationToken);

        return CreatedAtAction(nameof(GetById), new { id = post.Id }, MapToDto(post));
    }

    [Authorize]
    [HttpPut("{id:guid}")]
    public async Task<ActionResult<ReviewPostDto>> Update(Guid id, [FromBody] UpdateReviewPostDto dto, CancellationToken cancellationToken)
    {
        var userId = GetCurrentUserId();
        if (userId == Guid.Empty) return Unauthorized();

        var post = await context.ReviewPosts
            .Include(p => p.Photos)
            .Include(p => p.Categories)
            .Include(p => p.RatingDetails)
            .FirstOrDefaultAsync(p => p.Id == id && p.ActiveFlag == 1, cancellationToken);

        if (post == null) return NotFound();
        if (post.CreatedById != userId) return Forbid();

        post.Title = dto.Title.Trim();
        post.Description = dto.Description;
        post.AdditionalInformation = string.IsNullOrWhiteSpace(dto.AdditionalInformation) ? null : dto.AdditionalInformation.Trim();
        post.RatingOverall = dto.RatingOverall;
        post.Location = dto.Location.Trim();
        post.Longitude = dto.Longitude;
        post.Latitude = dto.Latitude;
        post.IsRecommended = dto.IsRecommended;
        post.UpdatedAt = DateTime.UtcNow;
        post.UpdatedById = userId;

        var categoryEntities = await EnsureCategoriesAsync(dto.Categories, userId, cancellationToken);
        post.Categories.Clear();
        foreach (var c in categoryEntities)
            post.Categories.Add(c);

        context.RatingDetails.RemoveRange(post.RatingDetails);
        post.RatingDetails.Clear();
        foreach (var rd in dto.RatingDetails)
        {
            post.RatingDetails.Add(new RatingDetail
            {
                Id = Guid.NewGuid(),
                Name = rd.Name,
                Rating = rd.Rating,
                ReviewPostId = post.Id,
                ActiveFlag = 1,
                CreatedById = userId,
                UpdatedById = userId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            });
        }

        await context.SaveChangesAsync(cancellationToken);

        await context.Entry(post).Reference(p => p.CreatedBy).LoadAsync(cancellationToken);
        return Ok(MapToDto(post));
    }

    [Authorize]
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
    {
        var userId = GetCurrentUserId();
        if (userId == Guid.Empty) return Unauthorized();

        var post = await context.ReviewPosts
            .Include(p => p.Photos)
            .FirstOrDefaultAsync(p => p.Id == id && p.ActiveFlag == 1, cancellationToken);

        if (post == null) return NotFound();
        if (post.CreatedById != userId) return Forbid();

        foreach (var photo in post.Photos)
            await photoStorage.DeleteAsync(photo.Url, cancellationToken);

        context.ReviewPosts.Remove(post);
        await context.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    private static List<CategoryInputDto> ParseCategories(string? json)
    {
        if (string.IsNullOrWhiteSpace(json)) return [];
        try
        {
            var list = JsonSerializer.Deserialize<List<CategoryInputDto>>(json);
            return list ?? [];
        }
        catch { return []; }
    }

    private static List<RatingDetailInputDto> ParseRatingDetails(string? json)
    {
        if (string.IsNullOrWhiteSpace(json)) return [];
        try
        {
            var list = JsonSerializer.Deserialize<List<RatingDetailInputDto>>(json);
            return list ?? [];
        }
        catch { return []; }
    }

    private async Task<List<ReviewCategory>> EnsureCategoriesAsync(List<CategoryInputDto> categories, Guid userId, CancellationToken cancellationToken)
    {
        var result = new List<ReviewCategory>();
        foreach (var cat in categories)
        {
            var name = cat.Name?.Trim() ?? "";
            if (string.IsNullOrEmpty(name)) continue;
            var existing = await context.ReviewCategories
                .FirstOrDefaultAsync(c => c.Name == name && c.ActiveFlag == 1, cancellationToken);
            if (existing != null)
            {
                result.Add(existing);
                continue;
            }
            var newCat = new ReviewCategory
            {
                Id = Guid.NewGuid(),
                Name = name,
                ActiveFlag = 1,
                CreatedById = userId,
                UpdatedById = userId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            };
            context.ReviewCategories.Add(newCat);
            result.Add(newCat);
        }
        await context.SaveChangesAsync(cancellationToken);
        return result;
    }

    private static ReviewPostDto MapToDto(ReviewPost post)
    {
        return new ReviewPostDto
        {
            Id = post.Id,
            ActiveFlag = post.ActiveFlag,
            CreatedAt = post.CreatedAt,
            UpdatedAt = post.UpdatedAt,
            CreatedById = post.CreatedById,
            UpdatedById = post.UpdatedById,
            Title = post.Title,
            Description = post.Description,
            AdditionalInformation = post.AdditionalInformation,
            RatingOverall = post.RatingOverall,
            Location = post.Location,
            Longitude = post.Longitude,
            Latitude = post.Latitude,
            IsRecommended = post.IsRecommended,
            Photos = post.Photos?.Select(p => new PhotoDto
            {
                Id = p.Id,
                Url = p.Url,
                IsMain = p.IsMain,
                IsCover = p.IsCover,
                PublicId = p.PublicId,
                ReviewPostId = p.ReviewPostId,
            }).ToList() ?? [],
            Categories = post.Categories?.Select(c => new ReviewCategoryDto
            {
                Id = c.Id,
                Name = c.Name,
                Description = c.Description,
                Icon = c.Icon,
            }).ToList() ?? [],
            RatingDetails = post.RatingDetails?.Select(d => new RatingDetailDto
            {
                Id = d.Id,
                Name = d.Name,
                Icon = d.Icon,
                Rating = d.Rating,
                ReviewPostId = d.ReviewPostId,
            }).ToList() ?? [],
            Reactions = [],
            RatingFeedbacks = [],
            CommentFeedbacks = [],
        };
    }
}
