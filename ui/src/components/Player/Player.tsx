import "./Player.css";
import { useEffect, useState } from "react";
import { PlayerOverlay } from "../PlayerOverlay/PlayerOverlay";
import { PlayerVideo } from "../PlayerVideo/PlayerVideo";
import Video from "../../models/Video";
import { fetchVideo } from "../../services/VideoService";

export const Player = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  useEffect(() => {
    (async () => {
      let initialVideos = [
        await fetchVideo(),
        await fetchVideo(),
        await fetchVideo(),
      ];
      setVideos(initialVideos);
    })();
  }, []);

  let activeVideo = videos[activeVideoIndex];

  return (
    <div className="player">
      <PlayerVideo video={activeVideo} />
      <PlayerOverlay activeVideo={activeVideo} />
    </div>
  );
};
