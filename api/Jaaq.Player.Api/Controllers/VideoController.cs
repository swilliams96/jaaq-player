using Jaaq.Player.Api.Models;
using Jaaq.Player.Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Jaaq.Player.Api.Controllers
{
    [ApiController]
    [Route("videos")]
    public class VideoController : ControllerBase
    {
        private readonly IVideoRepository _videoRepository;
        private readonly ILogger<VideoController> _logger;

        public VideoController(IVideoRepository videoRepository, ILogger<VideoController> logger)
        {
            _videoRepository = videoRepository;
            _logger = logger;
        }

        [HttpGet("random")]
        public async Task<Video> GetRandom()
        {
            var video = await _videoRepository.GetRandomVideoAsync();

            _logger.LogInformation("Successfully returning random video {VideoId}", video.Id);

            return video;
        }
    }
}
