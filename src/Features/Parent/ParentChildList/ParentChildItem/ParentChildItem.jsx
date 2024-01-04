import { useDeleteChild } from "hooks/useDeleteChild";
import styles from "./ParentChildItem.module.scss";
import Loader from "UI/Loader/Loader";
import { useSetActiveChild } from "hooks/useSetActiveChild";
import { useUser } from "hooks/useUser";
import { useGetActiveChild } from "hooks/useGetActiveChild";
import DeleteButton from "UI/DeleteButton/DeleteButton";

function ParentChildItem({ child, childrenList }) {
  const { user } = useUser();

  const { data, isLoading } = useGetActiveChild();

  const currentActiveChild = data ? data[0] : {};

  const { activeChild, isPending } = useSetActiveChild();

  const { deleteChild, isDeleting } = useDeleteChild();

  function selectActiveChild(id) {
    const selectedChild = childrenList.find((child) => child.id === id);

    activeChild({ id: user.id, childID: selectedChild.id });
  }

  function onSelectActiveChildHandler() {
    if (isPending || isLoading) return;

    selectActiveChild(child.id);
  }

  if (isDeleting) return <Loader />;

  return (
    <li className={styles["child-item"]}>
      <div
        className={styles["child-item__container"]}
        onClick={onSelectActiveChildHandler}
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
      </div>
      <DeleteButton onClick={() => deleteChild(child.id)} />
    </li>
  );
}

export default ParentChildItem;
