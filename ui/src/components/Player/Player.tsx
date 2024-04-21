import "./Player.css";
import { useEffect, useState } from "react";
import { PlayerOverlay } from "../PlayerOverlay/PlayerOverlay";
import { PlayerVideo } from "../PlayerVideo/PlayerVideo";
import Video from "../../models/Video";
import { fetchVideo } from "../../services/VideoService";
import { useDoubleTap } from "use-double-tap";

const minSwipeDistance = 60;

export const Player = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const doubleTapToLikeBind = useDoubleTap((event) => setCurrentVideoLiked(true));

  const onTouchStart = (e: any) => {
    setTouchEndY(null);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStartY || !touchEndY) return;

    const distance = touchStartY - touchEndY;

    if (distance > minSwipeDistance) {
      if (activeVideoIndex === videos.length - 2) {
        // Always have the next two videos lined up to play
        (async () => {
          let newVideo = await fetchVideo();
          setVideos([ ...videos, newVideo ]);
        })();
      }

      setActiveVideoIndex(activeVideoIndex + 1);
    }
    
    if (distance < -minSwipeDistance && activeVideoIndex > 0) {
      setActiveVideoIndex(activeVideoIndex - 1);
    }
  };

  const onTouchMove = (e: any) => setTouchEndY(e.targetTouches[0].clientY);

  const setCurrentVideoLiked = (liked: boolean) => {
    if (!activeVideo) return;
    activeVideo.liked = liked;
    setVideos(videos);
  };

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
    <div className="player" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove} {...doubleTapToLikeBind}>
      <PlayerVideo video={activeVideo} />
      <PlayerOverlay activeVideo={activeVideo} setLiked={setCurrentVideoLiked} />
    </div>
  );
};
