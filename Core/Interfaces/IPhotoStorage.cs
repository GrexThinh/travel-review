using Microsoft.AspNetCore.Http;

namespace Core.Interfaces;

public interface IPhotoStorage
{
    /// <summary>Saves a photo under the given subPath (e.g. "reviews/{reviewId}/cover.jpg") and returns the URL (absolute for S3, e.g. https://bucket.s3.region.amazonaws.com/key).</summary>
    Task<string> SaveAsync(IFormFile file, string subPath, CancellationToken cancellationToken = default);
    Task DeleteAsync(string relativeUrl, CancellationToken cancellationToken = default);
}
