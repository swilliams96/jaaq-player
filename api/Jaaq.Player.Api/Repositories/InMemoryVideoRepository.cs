using Jaaq.Player.Api.Models;
using Jaaq.Player.Api.Repositories.Interfaces;

namespace Jaaq.Player.Api.Repositories
{
    public class InMemoryVideoRepository : IVideoRepository
    {
        private List<Video> _videos = new()
        {
            new(Guid.NewGuid(), "Desert Stroll", "See something new!", "https://videos.pexels.com/video-files/20770858/20770858-hd_1080_1920_30fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-1)),
            new(Guid.NewGuid(), "Tasty Food", "Cook some food you really enjoy, as long as it's healthy 😋", "https://videos.pexels.com/video-files/10200314/10200314-hd_2160_3840_25fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-2)),
            new(Guid.NewGuid(), "Candles", "Light a candle and spend an evening unwinding", "https://videos.pexels.com/video-files/20564570/20564570-sd_540_960_25fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-3)),
            new(Guid.NewGuid(), "Get out in Nature", "Spend some time out in nature! (but watch out for bears... 😱)", "https://videos.pexels.com/video-files/18148735/18148735-sd_540_960_30fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-4)),
            new(Guid.NewGuid(), "Exercise", "Exercise is always good for your mental health, especially if it's with friends or loved ones!", "https://videos.pexels.com/video-files/20196832/20196832-sd_540_960_30fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-5)),
            new(Guid.NewGuid(), "Hot Drinks", "Have a hot drink and relax, though be careful not to have too much caffeine 😖", "https://videos.pexels.com/video-files/20125021/20125021-sd_540_960_30fps.mp4", InMemoryUserRepository.VideoPoster.Username, DateTime.UtcNow.AddDays(-6)),
        };

        public Task<Video> GetRandomVideoAsync()
        {
            var video = _videos.OrderBy(x => Guid.NewGuid()).First();
            return Task.FromResult(video);
        }
    }
}
