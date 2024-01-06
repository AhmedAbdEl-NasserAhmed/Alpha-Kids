import { images } from "../../assets/index";
import styles from "./AnimationCharacters.module.scss";

function AnimationCharacters() {
  const characters = images.characters;

  const charactersImages = [];

  for (const [key, value] of Object.entries(characters)) {
    charactersImages.push({
      id: key,
      value,
    });
  }

  return (
    <ul className={styles["characters-list"]}>
      {charactersImages.map((image, index) => {
        return (
          <li
            className={`${styles["characters-list__item"]} ${
              styles[`characters-list__item--${index + 1}`]
            }`}
            key={image.id}
          >
            <img
              className={styles["characters-list__img"]}
              src={image.value}
              alt=""
            />
          </li>
        );
      })}
    </ul>
  );
}

export default AnimationCharacters;
