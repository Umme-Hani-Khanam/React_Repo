import { useRef } from "react";

const VideoPlayer = () => {
  // Step 1: Create a ref for the video element
  const videoRef = useRef(null);

  // Step 2: Control functions using DOM methods
  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Custom Video Player (useRef)</h2>

      {/* Video element */}
      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
