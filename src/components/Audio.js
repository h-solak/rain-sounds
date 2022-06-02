import { useEffect, useState } from "react";
import withThunder from "../rain/withThunder.mp3";
import withThunderMetalRoof from "../rain/withThunderMetalRoof.mp3";
import distantThunder from "../rain/distantThunder.mp3";
const Audio = ({ crrSong, isPlaying, setIsPlaying, isLooped, volume }) => {
  const songs = [withThunder, withThunderMetalRoof, distantThunder];
  useEffect(() => {
    if (isPlaying) {
      document.getElementById(songs[crrSong]).play();
    } else {
      document.getElementById(songs[crrSong]).pause();
    }
  }, [isPlaying]);
  useEffect(() => {
    if (isLooped) {
      document.getElementById(songs[crrSong]).loop = true;
    } else {
      document.getElementById(songs[crrSong]).loop = false;
    }
  }, [isLooped]);
  useEffect(() => {
    document.getElementById(songs[crrSong]).volume = volume;
  }, [volume]);

  useEffect(() => {
    document.getElementById(songs[crrSong]).play();
  }, [crrSong]);

  return <audio id={songs[crrSong]} src={songs[crrSong]}></audio>;
};

export default Audio;
