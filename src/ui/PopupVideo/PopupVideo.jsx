import YouTube from "react-youtube";
import styles from "./PopupVideo.module.scss";

function PopupVideo({ src, className }) {
  const opts = {
    width: "330",
    height: "250",
    playerVars: {
      origin: "'https://localhost:3000'",
      autoplay: 1,
      playsinline: 1,
    },
  };

  if (!src) return;

  return (
    <div className={`${styles["popup-video"]} ${className}`}>
      <YouTube videoId={src} opts={opts} />
    </div>
  );
}

export default PopupVideo;
