import { useState } from "react";
import {
  TiMediaPlay,
  TiMediaPauseOutline,
  TiArrowLoop,
  TiVolumeMute,
  TiVolumeUp,
} from "react-icons/ti";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import Audio from "./Audio";

const Player = () => {
  const [volume, setVolume] = useState(0.5);
  const [isLooped, setIsLooped] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [crrSong, setcrrSong] = useState(0);

  const playAudio = () => {
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    setIsPlaying(false);
  };
  const loopAudio = () => {
    setIsLooped(!isLooped);
  };

  const changeVolume = () => {
    let newVolume = document.getElementById("volume-input").value;
    setVolume(newVolume);
  };

  const prevSong = () => {
    if (crrSong !== 0) {
      setcrrSong(crrSong - 1);
      setIsPlaying(true);
    }
    //do nothing if it is the first song...
  };
  const nextSong = () => {
    if (crrSong !== 2) {
      setcrrSong(crrSong + 1);
      setIsPlaying(true);
    }
    //do nothing if it is the last song...
  };

  return (
    <div className="player p-3 rounded-3 d-flex align-items-center justify-content-around flex-column gap-3 gap-lg-3">
      <span className="fs-6">Rain Sound {crrSong + 1}</span>
      <div className="buttons d-flex align-items-center gap-1">
        <MdOutlineSkipPrevious
          className="font-40px pointer btn-hvr rounded-circle"
          onClick={prevSong}
          title="Previous audio"
        />
        {isPlaying ? (
          <TiMediaPauseOutline
            className="font-40px pointer rounded-circle btn-hvr d-flex"
            onClick={pauseAudio}
            title="Playing"
          />
        ) : (
          <TiMediaPlay
            className="font-40px pointer rounded-circle btn-hvr d-flex"
            onClick={playAudio}
            title="Paused"
          />
        )}

        <MdOutlineSkipNext
          className="font-40px pointer btn-hvr rounded-circle"
          onClick={nextSong}
          title="Next audio"
        />
      </div>

      <div className="d-flex align-items-center justify-content-center gap-2">
        <div className="d-flex align-items-center gap-2">
          {volume > 0 ? (
            <TiVolumeUp className="fs-4 pointer" onClick={() => setVolume(0)} />
          ) : (
            <TiVolumeMute
              className="fs-4 pointer"
              onClick={() => setVolume(0.5)}
            />
          )}

          <input
            id="volume-input"
            type="range"
            className="w-100 pointer"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            onChange={changeVolume}
            title={volume * 100 + "%"}
          />
        </div>
        <TiArrowLoop
          className={
            isLooped
              ? "fs-2 pointer rounded-circle activatable-btn active-btn"
              : "fs-2 pointer rounded-circle activatable-btn"
          }
          onClick={loopAudio}
          title={isLooped ? "On loop" : "Not on loop"}
          style={{ color: "#ff850a" }}
        />
      </div>
      <Audio
        crrSong={crrSong}
        isPlaying={isPlaying}
        isLooped={isLooped}
        volume={volume}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default Player;
