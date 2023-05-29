import React, { useRef } from "react";
import ReactPlayer from "react-player";

const Videos = (props) => {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        playing
        url={props.videosDemo}
        controls={true}
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Videos;
