using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class ReviewCategory : BaseEntity
    {
        [MaxLength(250)]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        [MaxLength(100)]
        public string? Icon { get; set; }
        public List<ReviewPost> ReviewPosts { get; set; } = [];
    }
}

