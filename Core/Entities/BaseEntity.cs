namespace Core.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public byte ActiveFlag { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public Guid CreatedById { get; set; }
        public Guid UpdatedById { get; set; }
        public AppUser CreatedBy { get; set; } = null!;
        public AppUser UpdatedBy { get; set; } = null!;
    }
}
