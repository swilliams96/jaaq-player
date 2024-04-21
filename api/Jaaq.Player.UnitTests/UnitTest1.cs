using Jaaq.Player.Api.Repositories;

namespace Jaaq.Player.UnitTests
{
    public class InMemoryVideoRepositoryTests
    {
        InMemoryVideoRepository _videoRepository = new();

        [Fact]
        public async Task GetRandomVideoAsync_ReturnsVideoWithAllDetails()
        {
            var result = await _videoRepository.GetRandomVideoAsync();

            Assert.NotNull(result);
            Assert.NotEqual(default, result.Id);
            Assert.False(string.IsNullOrEmpty(result.Title));
            Assert.False(string.IsNullOrEmpty(result.Description));
            Assert.StartsWith("https://", result.LocationUrl);
            Assert.False(string.IsNullOrEmpty(result.PostedBy));
            Assert.NotEqual(default, result.PostedAt);
        }
    }
}