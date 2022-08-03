import { useEffect, useState } from "react";
import SomewhereOverTheRainbow from "../../materials/songs/SomewhereOverTheRainbow.mp3";
import LetDown from "../../materials/songs/LetDownRadiohead.mp3";
import IdRatherDanceWithYou from "../../materials/songs/IdRatherDanceWithYou.mp3";

const Audio = ({ crrSong, isPlaying, setIsPlaying, isLooped, volume }) => {
  const songs = [SomewhereOverTheRainbow, LetDown, IdRatherDanceWithYou];
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
    //this still causes a bug -- if user interacts with the website, it will start to play...
  }, [crrSong]);

  return <audio id={songs[crrSong]} src={songs[crrSong]}></audio>;
};

export default Audio;
