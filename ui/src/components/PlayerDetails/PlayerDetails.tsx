import "./PlayerDetails.css";
import { PlayerControls } from "../PlayerControls/PlayerControls";

export const PlayerDetails = () => {
  return (
    <>
      <div className="details">
        <div className="details-content">
          <p className="title">Hot Drinks</p>
          <p className="description">
            Have a hot drink and relax, though be careful not to have too much caffeine 😖
          </p>
          <p className="poster">by <a>@swilliams96</a></p>
        </div>
      </div>
    </>
  );
};
