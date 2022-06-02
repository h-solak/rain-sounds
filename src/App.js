import { useEffect, useState } from "react";

import Audio from "./components/Audio";
import Footer from "./components/Footer";
import Player from "./components/Player";
function App() {
  return (
    <>
      <div className="main-background">
        <Player />
      </div>
      <Footer />
    </>
  );
}

export default App;
