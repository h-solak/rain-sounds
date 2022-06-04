import { useEffect, useState } from "react";

import Audio from "./components/Audio";
import Footer from "./components/Footer";
import Player from "./components/Player";
import RainVideo from "./materials/videos/pexelsRainSlide.mp4";
import BgPic from "./materials/images/pexels-rahul-pandit-2792386.jpg";
import { BsFillCloudFill, BsFillCloudDrizzleFill } from "react-icons/bs";
function App() {
  const [isVidRunning, setIsVidRunning] = useState(true);
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
        <span>Pause Video?</span>
        {isVidRunning ? (
          <BsFillCloudDrizzleFill
            className="switch-bg fs-3 pointer"
            title="Stop video"
            onClick={switchVid}
          />
        ) : (
          <BsFillCloudFill
            className="switch-bg fs-3 pointer"
            title="Resume video"
            onClick={switchVid}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
