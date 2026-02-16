using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    /// <summary>Per-dimension rating for a review (e.g. Food: 4, Service: 5, Value: 3).</summary>
    public class RatingDetail : BaseEntity
    {
        [MaxLength(100)]
        public string Name { get; set; } = null!;
        [MaxLength(100)]
        public string? Icon { get; set; }
        public byte Rating { get; set; }
        public Guid ReviewPostId { get; set; }
        public ReviewPost ReviewPost { get; set; } = null!;
    }
}

