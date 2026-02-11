using Microsoft.AspNetCore.Identity;

namespace Core.Entities
{
    public class AppUser : IdentityUser<Guid>
    {
        public string? FullName { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string? CountryCode { get; set; }
        public List<Photo> Photos { get; set; } = [];
        public ICollection<AppUserRole> UserRoles { get; set; } = [];
    }
}

