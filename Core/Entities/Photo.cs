using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public Guid Id { get; set; }
        public string Url { get; set; } = null!;
        public bool IsMain { get; set; }
        public bool IsCover { get; set; }
        public string? PublicId { get; set; }
        public Guid? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public Guid? ReviewPostId { get; set; }
        public ReviewPost? ReviewPost { get; set; }
    }
}
