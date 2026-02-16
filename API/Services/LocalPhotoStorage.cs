using Core.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace API.Services;

public class LocalPhotoStorage(IWebHostEnvironment env) : IPhotoStorage
{
    private const string UploadsFolder = "uploads";
    private static readonly string BasePath = Path.Combine("wwwroot", UploadsFolder);

    public async Task<string> SaveAsync(IFormFile file, string subPath, CancellationToken cancellationToken = default)
    {
        var dir = Path.GetDirectoryName(subPath) ?? "";
        var fullDir = Path.Combine(env.ContentRootPath, BasePath, dir);
        Directory.CreateDirectory(fullDir);
        var fileName = Path.GetFileName(subPath);
        if (string.IsNullOrEmpty(fileName)) fileName = Guid.NewGuid().ToString("N") + Path.GetExtension(file.FileName);
        var fullPath = Path.Combine(fullDir, fileName);
        await using var stream = File.Create(fullPath);
        await file.CopyToAsync(stream, cancellationToken);
        return "/" + UploadsFolder + "/" + subPath.Replace("\\", "/").TrimStart('/');
    }

    public Task DeleteAsync(string relativeUrl, CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrEmpty(relativeUrl) || !relativeUrl.StartsWith("/" + UploadsFolder + "/", StringComparison.OrdinalIgnoreCase))
            return Task.CompletedTask;
        var path = Path.Combine(env.ContentRootPath, "wwwroot", relativeUrl.TrimStart('/').Replace("/", Path.DirectorySeparatorChar.ToString()));
        if (File.Exists(path))
            File.Delete(path);
        return Task.CompletedTask;
    }
}
