namespace Jaaq.Player.Api.Models
{
    public record User(
        Guid Id,
        string Username,
        DateTime CreatedAt);
}
