using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace API.Services;

public class S3PhotoStorage : IPhotoStorage
{
    private readonly IAmazonS3 _s3;
    private readonly S3StorageOptions _options;

    public S3PhotoStorage(IOptions<S3StorageOptions> options)
    {
        _options = options.Value;
        var config = new AmazonS3Config { RegionEndpoint = RegionEndpoint.GetBySystemName(_options.Region) };
        if (!string.IsNullOrEmpty(_options.AccessKeyId) && !string.IsNullOrEmpty(_options.SecretAccessKey))
        {
            _s3 = new AmazonS3Client(_options.AccessKeyId, _options.SecretAccessKey, config);
        }
        else
        {
            _s3 = new AmazonS3Client(config);
        }
    }

    public async Task<string> SaveAsync(IFormFile file, string subPath, CancellationToken cancellationToken = default)
    {
        var key = subPath.Replace("\\", "/").TrimStart('/');
        if (string.IsNullOrEmpty(key))
            key = $"reviews/{Guid.NewGuid():N}{Path.GetExtension(file.FileName)}";

        using var stream = file.OpenReadStream();
        var request = new PutObjectRequest
        {
            BucketName = _options.BucketName,
            Key = key,
            InputStream = stream,
            ContentType = file.ContentType,
            CannedACL = _options.PublicRead ? S3CannedACL.PublicRead : null,
        };
        await _s3.PutObjectAsync(request, cancellationToken);

        return $"https://{_options.BucketName}.s3.{_options.Region}.amazonaws.com/{key}";
    }

    public async Task DeleteAsync(string relativeOrAbsoluteUrl, CancellationToken cancellationToken = default)
    {
        string key;
        if (relativeOrAbsoluteUrl.StartsWith("http://", StringComparison.OrdinalIgnoreCase) ||
            relativeOrAbsoluteUrl.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
        {
            if (!Uri.TryCreate(relativeOrAbsoluteUrl, UriKind.Absolute, out var uri) || uri.Host == null)
                return;
            if (!uri.Host.StartsWith(_options.BucketName + ".s3.", StringComparison.OrdinalIgnoreCase) &&
                !uri.Host.Equals("s3." + _options.Region + ".amazonaws.com", StringComparison.OrdinalIgnoreCase))
                return;
            key = uri.AbsolutePath.TrimStart('/');
        }
        else
        {
            key = relativeOrAbsoluteUrl.TrimStart('/');
        }

        if (string.IsNullOrEmpty(key)) return;

        await _s3.DeleteObjectAsync(_options.BucketName, key, cancellationToken);
    }
}
