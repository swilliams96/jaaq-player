import { PlayerControls } from "../PlayerControls/PlayerControls";
import { PlayerDetails } from "../PlayerDetails/PlayerDetails";
import "./PlayerOverlay.css";

export const PlayerOverlay = () => {
  return (
    // <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', alignContent: 'center', height: '100%', width: '100%' }}>
    <div className="player-overlay">
      <div>
        <img className="logo" src="logo.png" />
      </div>
      <div>
        <PlayerControls />
        <PlayerDetails />
      </div>
    </div>
    // <div className="player-overlay">
    //   <div style={{ backgroundColor: 'blue' }}>test</div>
    //   <div>
    //     <img className='logo' src="logo.png" />
    //   </div>
    // </div>
  );
};
