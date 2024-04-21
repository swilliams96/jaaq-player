import "./PlayerOverlay.css";
import { PlayerControls } from "../PlayerControls/PlayerControls";
import { PlayerDetails } from "../PlayerDetails/PlayerDetails";
import Video from "../../models/Video";

interface PlayerOverlayProps {
  activeVideo?: Video;
}

export const PlayerOverlay = ({ activeVideo } : PlayerOverlayProps) => {
  return (
    <div className="player-overlay">
      <div>
        <img className="logo" src="logo.png" />
      </div>
      <div>
        <PlayerControls />
        <PlayerDetails activeVideo={activeVideo} />
      </div>
    </div>
  );
};
