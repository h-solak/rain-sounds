import { useState } from "react";
import { TiMediaPlay, TiMediaPauseOutline, TiArrowLoop } from "react-icons/ti";
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
    <div className="player p-3 rounded-3 d-flex align-items-center justify-content-around">
      <div className="buttons d-flex align-items-center gap-2">
        <MdOutlineSkipPrevious
          className="fs-2 pointer btn-hvr rounded-circle"
          onClick={prevSong}
        />
        {isPlaying ? (
          <TiMediaPauseOutline
            className="fs-2 pointer rounded-circle btn-hvr d-flex"
            onClick={pauseAudio}
          />
        ) : (
          <TiMediaPlay
            className="fs-2 pointer rounded-circle btn-hvr d-flex"
            onClick={playAudio}
          />
        )}

        <MdOutlineSkipNext
          className="fs-2 pointer btn-hvr rounded-circle"
          onClick={nextSong}
        />

        {/* Should I simplify this part and do it without jsx -at the top- using useeffect hook */}
        <TiArrowLoop
          className={
            isLooped
              ? "fs-2 pointer btn-hvr rounded-circle active-btn"
              : "fs-2 pointer btn-hvr rounded-circle"
          }
          onClick={loopAudio}
          title={isLooped ? "On loop" : "Not on loop"}
        />

        <Audio
          crrSong={crrSong}
          isPlaying={isPlaying}
          isLooped={isLooped}
          volume={volume}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <span className="fs-6">Rain Sound {crrSong + 1}</span>
      <input
        id="volume-input"
        type="range"
        className="w-25 pointer"
        value={volume}
        min="0"
        max="1"
        step="0.01"
        onChange={changeVolume}
        title={volume * 100 + "%"}
      />
    </div>
  );
};

export default Player;
