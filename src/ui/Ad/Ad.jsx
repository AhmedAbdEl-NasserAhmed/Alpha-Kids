import LinkEl from "UI/LinkEl/LinkEl";
import styles from "./Ad.module.scss";

function Ad({ src, size, text, variation, to }) {
  if (size === "big")
    return (
      <div className={styles[size]}>
        <div className="flex">
          <img src={src} alt="" />
          <div className={styles["big__details"]}>
            <p className={styles["big__paragraph"]}>Alphabetic</p>
            <div className={styles["big__letters"]}>
              <span
                className={`${styles["big__letters"]} ${styles["big__letters--1"]}`}
              >
                A
              </span>
              <span
                className={`${styles["big__letters"]} ${styles["big__letters--2"]}`}
              >
                B
              </span>
              <span
                className={`${styles["big__letters"]} ${styles["big__letters--3"]}`}
              >
                C
              </span>
            </div>
            <LinkEl type="button" to={to} variation={variation}>
              {text}
            </LinkEl>
          </div>
        </div>
      </div>
    );

  if (size === "medium")
    return (
      <div className={`${styles[size]} `}>
        <div>
          <img src={src} alt="" />
          <LinkEl type="button" to={to} variation={variation}>
            {text}
          </LinkEl>
        </div>
      </div>
    );

  if (size === "small")
    return (
      <div className={`${styles[size]} `}>
        <div>
          <img src={src} alt="" />
          <LinkEl type="button" to={to} variation={variation}>
            {text}
          </LinkEl>
        </div>
      </div>
    );
}

export default Ad;
