namespace Jaaq.Player.Api.Models
{
    public record Video(
        Guid Id,
        string Title,
        string Description,
        string LocationUrl,
        Guid PostedBy,
        DateTime PostedAt);
}
