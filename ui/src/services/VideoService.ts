import axios from "axios";
import Video, { VideoDto } from "../models/Video";

const API_BASE_URL = 'https://localhost:7076';

export async function fetchVideo(): Promise<Video> {
  var result = await axios.get<VideoDto>(`${API_BASE_URL}/videos/random`);

  if (result.status >= 400) {
    throw new Error('Something went wrong when retrieving video');
  }

  return { ...result.data, liked: false };
}

