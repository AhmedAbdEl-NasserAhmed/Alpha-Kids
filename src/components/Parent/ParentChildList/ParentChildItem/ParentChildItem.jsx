import { useDeleteChild } from "hooks/useDeleteChild";
import styles from "./ParentChildItem.module.scss";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import { checkActiveChild } from "utils/userTypes";

function ParentChildItem({ child, childrenList }) {
  const { deleteChild, isDeleting } = useDeleteChild();

  if (isDeleting) return <PagesSpinner />;

  return (
    <li
      onClick={() => checkActiveChild(child.id, childrenList)}
      className={styles["child-item"]}
    >
      <img
        className={styles["child-item__img"]}
        src={child.childAvatar}
        alt=""
      />
      <p className={styles["child-item__name"]}>{child.childName}</p>
      <span
        onClick={() => deleteChild(child.id)}
        className={styles["child-item__delete"]}
      >
        &times;
      </span>
    </li>
  );
}

export default ParentChildItem;
