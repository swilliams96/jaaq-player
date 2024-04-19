using Jaaq.Player.Api.Models;

namespace Jaaq.Player.Api.Repositories.Interfaces
{
    public interface IVideoRepository
    {
        public Task<Video> GetRandomVideoAsync();
    }
}
