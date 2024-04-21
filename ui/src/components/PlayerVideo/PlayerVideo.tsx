import './PlayerVideo.css';
import Video from '../../models/Video';

interface PlayerVideoProps {
  video: Video;
}

export const PlayerVideo = ({ video }: PlayerVideoProps) => {
  return !video
    ? null
    : <video muted autoPlay loop src={video.locationUrl} />;
}