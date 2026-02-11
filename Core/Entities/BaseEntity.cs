namespace Core.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public byte ActiveFlag { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
