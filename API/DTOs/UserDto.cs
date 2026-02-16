namespace API.DTOs
{
    public class UserDto
    {
        public required Guid Id { get; set; }
        public required string UserName { get; set; }
        public required string Token { get; set; }
        public string? Email { get; set; }
        public string? FullName { get; set; }
        public string? PhotoUrl { get; set; }
    }
}
