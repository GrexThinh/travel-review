namespace API.Services;

public class S3StorageOptions
{
    public const string SectionName = "Aws:S3";

    public string BucketName { get; set; } = "travel-review";
    public string Region { get; set; } = "ap-southeast-1";
    /// <summary>Optional. If not set, uses default credential chain (e.g. environment variables, IAM role).</summary>
    public string? AccessKeyId { get; set; }
    /// <summary>Optional. If not set, uses default credential chain.</summary>
    public string? SecretAccessKey { get; set; }
    /// <summary>If true, uploaded objects are set to public-read so image URLs work in browsers. Ensure bucket allows public access.</summary>
    public bool PublicRead { get; set; } = true;
}
