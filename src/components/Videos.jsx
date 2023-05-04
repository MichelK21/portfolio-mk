import React, { useRef } from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  const playerRef = useRef(null);
  const VIDEO_LYRIKS = "assets/videos/Lyriks-cmprssed.mp4";
  // const VIDEO_DALLE = "assets/videos/dall-e-cmpressed.mp4";

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        playing
        url={VIDEO_LYRIKS /* VIDEO_DALLE*/}
        controls={true}
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Videos;
