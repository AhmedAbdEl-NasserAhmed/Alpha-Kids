import { useDeleteChild } from "hooks/useDeleteChild";
import styles from "./ParentChildItem.module.scss";
import Loader from "UI/Loader/Loader";
import { useSetActiveChild } from "hooks/useSetActiveChild";
import { useUser } from "hooks/useUser";
import { useGetActiveChild } from "hooks/useGetActiveChild";

function ParentChildItem({ child, childrenList }) {
  const { user } = useUser();

  const { data } = useGetActiveChild();

  const currentActiveChild = data ? data[0]?.child[0] : {};

  const { activeChild } = useSetActiveChild();

  const { deleteChild, isDeleting } = useDeleteChild();

  function selectActiveChild(id) {
    const selectedChild = childrenList.find((child) => child.id === id);

    activeChild({ id: user.id, child: selectedChild });
  }

  return (
    <>
      {isDeleting ? (
        <Loader />
      ) : (
        <li
          onClick={() => selectActiveChild(child.id)}
          className={styles["child-item"]}
        >
          <img
            className={`${styles["child-item__img"]} ${
              currentActiveChild.id === child.id
                ? styles["child-item__img--active"]
                : ""
            }`}
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
      )}
    </>
  );
}

export default ParentChildItem;
