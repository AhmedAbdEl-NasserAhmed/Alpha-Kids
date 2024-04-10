import { Link, useNavigate } from "react-router-dom";
import styles from "./ActiveChildContentList.module.scss";

function ActiveChildContentList({
  data,
  heading,
  link,
  actionType,
  className,
}) {
  const navigate = useNavigate();

  if (!data || !data.length)
    return (
      <div>
        <h2 className={`${styles["active-child-content__heading"]} mb-[2rem]`}>
          {heading}
        </h2>
        <span className="text-2xl font-semibold">
          {`Start   ${actionType}
            ${link}`}{" "}
          --{" "}
          <span
            className={`cursor-pointer p-3 ${className} ${
              link === "games" ? "bg-yellow-500" : ""
            } ${link === "videos" ? "bg-red-500" : ""} rounded-md`}
            onClick={() => navigate(`/${link}`)}
          >
            {`Go to ${link} page  `} &rarr;
          </span>
        </span>
      </div>
    );

  return (
    <div className={styles["active-child-content"]}>
      <h2 className={styles["active-child-content__heading"]}>{heading}</h2>

      <ul className={styles["active-child-content__list"]}>
        {data?.map((content) => (
          <li
            className={styles["active-child-content__item"]}
            key={content?.id}
          >
            <Link to={`/${link}/${content.src}`}>
              <img src={content?.thumbnail} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveChildContentList;
