import React, { useEffect, useState } from "react";
import Video from "../../models/Video";
import { PlayerOverlay } from "../PlayerOverlay/PlayerOverlay";
import "./Player.css";
import { fetchVideo } from "../../services/VideoService";

export const Player = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  
  useEffect(() => {
    const getInitialVideos = async () => {
      let initialVideos = [await fetchVideo(), await fetchVideo(), await fetchVideo()];
      setVideos(initialVideos);
    }
    getInitialVideos();
  }, []);

  return (
    <div className="player">
      <video muted autoPlay loop src={(videos[0] ?? {}).locationUrl} />
      <PlayerOverlay />
    </div>
  );
};
