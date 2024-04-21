import "./PlayerOverlay.css";
import { PlayerControls } from "../PlayerControls/PlayerControls";
import { PlayerDetails } from "../PlayerDetails/PlayerDetails";
import Video from "../../models/Video";

interface PlayerOverlayProps {
  activeVideo?: Video;
  setLiked: (liked: boolean) => void;
}

export const PlayerOverlay = ({ activeVideo, setLiked }: PlayerOverlayProps) => {
  return (
    <div className="player-overlay">
      <div>
        <img className="logo" src="logo.png" />
      </div>
      <div>
        <PlayerControls liked={activeVideo?.liked ?? false} setLiked={setLiked} />
        <PlayerDetails activeVideo={activeVideo} />
      </div>
    </div>
  );
};
