namespace API.DTOs
{
    public class PhotoDto
    {
        public Guid Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public bool IsCover { get; set; }
        public string? PublicId { get; set; }
        public Guid? AppUserId { get; set; }
        public UserDto? AppUser { get; set; }
        public Guid? ReviewPostId { get; set; }
        public ReviewPostDto? ReviewPost { get; set; }
    }
}
