import { Link } from "react-router-dom";

import styles from "./LinkEl.module.scss";

function LinkEl({ to, children, icon, variation, type }) {
  return (
    <Link className={` ${styles[type]} ${styles[variation]}`} to={to}>
      {icon && (
        <span
          className={
            styles[
              `${
                to === "/workshops"
                  ? "link--1"
                  : "" || to === "/games"
                  ? "link--2"
                  : "" || to === "/videos"
                  ? "link--3"
                  : ""
              }`
            ]
          }
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Link>
  );
}

export default LinkEl;
