import { Link } from "react-router-dom";
import { HiRocketLaunch, HiPlay } from "react-icons/hi2";
import styles from "./ContentItem.module.scss";
import PopupVideo from "UI/PopupVideo/PopupVideo";
import { useState } from "react";
import ContentItemIcon from "./ContentItemIcon";

function ContentItem({ item, imgSize }) {
  const [showPopupVideo, setShowPopupVideo] = useState(false);

  const [popupItem, setPopupUtem] = useState(false);

  return (
    <li
      onMouseEnter={() => setPopupUtem(true)}
      onMouseLeave={() => setPopupUtem(false)}
      className={styles["content-item"]}
    >
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={`/${item?.type}/${item?.src}`}
      >
        <img
          src={item?.thumbnail}
          className={styles[`content-item__${imgSize}-img`]}
          alt=""
        />
        {/* <ContentItemIcon
          type={"games"}
          size={"small"}
          popupItem={popupItem}
          setShowPopupVideo={setShowPopupVideo}
        /> */}

        {/* {item?.type === "videos" && imgSize !== "small" && ( */}
        <span
          onMouseEnter={() => setShowPopupVideo(true)}
          onMouseLeave={() => setShowPopupVideo(false)}
          className={`${styles["content-item__icon"]} ${
            styles["content-item__icon--videos"]
          } ${showPopupVideo ? "popup" : ""} ${
            showPopupVideo ? "opacity-0" : ""
          }`}
        >
          {item?.type === "games" ? <HiRocketLaunch /> : <HiPlay />}
        </span>
        {/* )} */}
      </Link>
      {showPopupVideo && (
        <PopupVideo
          src={item?.src}
          className={showPopupVideo ? "scaling" : ""}
        />
      )}
    </li>
  );
}

export default ContentItem;
