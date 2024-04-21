export type VideoDto = {
  id: string;
  title: string;
  description: string;
  locationUrl: string;
  postedBy: string;
  postedAt: string;
}

type Video = VideoDto & { liked: boolean };

export default Video;