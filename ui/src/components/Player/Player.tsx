import './Player.css';
import { PlayerOverlay } from '../PlayerOverlay/PlayerOverlay';

export const Player = () => {
  return (
    <div className="player">
      <video muted autoPlay loop src="https://videos.pexels.com/video-files/20125021/20125021-sd_540_960_30fps.mp4" />
      <PlayerOverlay />
    </div>
  );
};