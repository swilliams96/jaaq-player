import "./PlayerDetails.css";
import { PlayerControls } from "../PlayerControls/PlayerControls";
import Video from "../../models/Video";

interface PlayerDetailsProps {
  activeVideo?: Video;
}

export const PlayerDetails = ({ activeVideo }: PlayerDetailsProps) => {
  return (
    <>
      <div className="details">
        <div className="details-content">
          <p className="title">{activeVideo?.title}</p>
          <p className="description">{activeVideo?.description}</p>
          <p className="poster">by <a>@{activeVideo?.postedBy}</a></p>
        </div>
      </div>
    </>
  );
};
