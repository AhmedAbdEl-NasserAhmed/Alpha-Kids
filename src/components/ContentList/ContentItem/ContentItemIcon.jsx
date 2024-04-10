import { HiRocketLaunch } from "react-icons/hi2";
import styles from "./ContentItem.module.scss";

const ContentItemIcon = (props) => {
  return (
    props.type === "games" &&
    props.size !== "small" && (
      <span
        onMouseEnter={() => props.setShowPopupVideo(true)}
        onMouseLeave={() => props.setShowPopupVideo(false)}
        className={`${styles["content-item__icon"]} ${
          styles["content-item__icon--games"]
        } ${props.popupItem ? "popup" : ""} ${
          props.showPopupVideo ? "opacity-0" : ""
        }`}
      >
        <HiRocketLaunch />
      </span>
    )
  );
};

export default ContentItemIcon;
