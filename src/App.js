import { useEffect, useState } from "react";

import Audio from "./components/RainSound/Audio";
import Footer from "./components/Footer";
import Player from "./components/RainSound/Player";
import SongPlayer from "./components/Song/Player";
import RainVideo from "./materials/videos/pexelsRainSlide.mp4";
import BgPic from "./materials/images/pexels-rahul-pandit-2792386.jpg";
import { BsFillCloudFill, BsFillCloudDrizzleFill } from "react-icons/bs";
import { CgMusic } from "react-icons/cg";
function App() {
  const [isVidRunning, setIsVidRunning] = useState(true);
  const [isSongPlayerVisible, setIsSongPlayerVisible] = useState(false);

  function switchVid() {
    let video = document.getElementById("main-video");
    if (video.paused) {
      video.play();
      setIsVidRunning(true);
    } else {
      video.pause();
      setIsVidRunning(false);
    }
  }
  return (
    <>
      <div className="main-background">
        <video
          id="main-video"
          src={RainVideo}
          playsInline
          poster={BgPic}
          autoPlay
          loop
          muted
          type="video/mp4"
        />

        <Player />
        <SongPlayer isSongPlayerVisible={isSongPlayerVisible} />
        <span>Pause Video?</span>
        <div className="switch-bg d-flex align-items-center gap-3">
          <CgMusic
            className="fs-3 pointer"
            onClick={() => setIsSongPlayerVisible(!isSongPlayerVisible)}
            title={
              isSongPlayerVisible
                ? "Hide the song player"
                : "Show the song player"
            }
            style={!isSongPlayerVisible ? { opacity: "0.6" } : null}
          />
          {isVidRunning ? (
            <BsFillCloudDrizzleFill
              className="fs-3 pointer"
              title="Stop video"
              onClick={switchVid}
            />
          ) : (
            <BsFillCloudFill
              className="fs-3 pointer"
              title="Resume video"
              onClick={switchVid}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
