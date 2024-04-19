using Jaaq.Player.Api.Models;
using Jaaq.Player.Api.Repositories.Interfaces;

namespace Jaaq.Player.Api.Repositories
{
    public class InMemoryUserRepository : IUserRepository
    {
        public static User VideoPoster = new(Guid.NewGuid(), "swilliams96", DateTime.UtcNow.AddMonths(-1));
        public static User Commenter1 = new(Guid.NewGuid(), "simon123", DateTime.UtcNow.AddDays(-5));
        public static User Commenter2 = new(Guid.NewGuid(), "rthexton45", DateTime.UtcNow.AddDays(-8));
        public static User Commenter3 = new(Guid.NewGuid(), "dannyg", DateTime.UtcNow.AddDays(-11));

        private List<User> _users = new() { VideoPoster, Commenter1, Commenter2, Commenter3 };
    }
}
