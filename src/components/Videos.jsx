import React, { useRef } from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  const playerRef = useRef(null);
  const VIDEO_LYRIKS = "assets/videos/Lyriks-cmprssed.mp4";
  //   const VIDEO_RECYCLENOW =

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        playing
        url={VIDEO_LYRIKS}
        controls={true}
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Videos;
