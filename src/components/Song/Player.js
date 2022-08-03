import { useState } from "react";
import {
  TiMediaPlay,
  TiMediaPauseOutline,
  TiArrowLoop,
  TiVolumeMute,
  TiVolumeUp,
} from "react-icons/ti";
import {
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdOutlineRemoveCircle,
} from "react-icons/md";
import Audio from "./Audio";

const Player = ({ isSongPlayerVisible }) => {
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
    let newVolume = document.getElementById("song-volume-input").value;
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
    <div>
      <div
        className="song-player p-3 rounded-3 d-flex align-items-center justify-content-around gap-3 gap-lg-3"
        style={!isSongPlayerVisible ? { opacity: "0" } : { opacity: "1" }}
      >
        <span style={{ fontSize: "12px" }}>
          {crrSong === 0
            ? "Somewhere Over The Rainbow"
            : crrSong === 1
            ? "Let Down"
            : crrSong === 2
            ? "I'd Rather Dance With you"
            : null}
        </span>
        <div className="buttons d-flex align-items-center gap-1">
          <MdOutlineSkipPrevious
            className="fs-2 pointer btn-hvr rounded-circle"
            onClick={prevSong}
            title="Previous audio"
          />
          {isPlaying ? (
            <TiMediaPauseOutline
              className="fs-2 pointer rounded-circle btn-hvr d-flex"
              onClick={pauseAudio}
              title="Playing"
            />
          ) : (
            <TiMediaPlay
              className="fs-2 pointer rounded-circle btn-hvr d-flex"
              onClick={playAudio}
              title="Paused"
            />
          )}

          <MdOutlineSkipNext
            className="fs-2 pointer btn-hvr rounded-circle"
            onClick={nextSong}
            title="Next audio"
          />
        </div>

        <div className="d-flex align-items-center justify-content-center gap-2">
          <div className="d-flex align-items-center gap-2">
            {volume > 0 ? (
              <TiVolumeUp
                className="fs-5 pointer"
                onClick={() => setVolume(0)}
              />
            ) : (
              <TiVolumeMute
                className="fs-5 pointer"
                onClick={() => setVolume(0.5)}
              />
            )}

            <input
              id="song-volume-input"
              type="range"
              className="w-100 pointer"
              value={volume}
              min="0"
              max="0.5"
              step="0.01"
              onChange={changeVolume}
              title={volume * 100 + "%"}
            />
          </div>

          <TiArrowLoop
            className={
              isLooped
                ? "fs-5 pointer rounded-circle activatable-btn active-btn"
                : "fs-5 pointer rounded-circle activatable-btn"
            }
            onClick={loopAudio}
            title={isLooped ? "On loop" : "Not on loop"}
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
    </div>
  );
};

export default Player;
