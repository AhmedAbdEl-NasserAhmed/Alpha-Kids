import { useDeleteChild } from "hooks/useDeleteChild";
import styles from "./ParentChildItem.module.scss";
import Loader from "UI/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectChild } from "store/childSlice";
import { storage } from "services/Storage";

function ParentChildItem({ child, childrenList }) {
  const { deleteChild, isDeleting } = useDeleteChild();

  const dispatch = useDispatch();

  const { id } = useSelector((store) => store.child);

  function selectActiveChild(id) {
    const selectedChild = childrenList.find((child) => child.id === id);

    dispatch(
      selectChild({
        childId: selectedChild.id,
        childName: selectedChild.childName,
        childGender: selectedChild.childGender,
        childAvatar: selectedChild.childAvatar,
      })
    );
    storage.setStorage("child", selectedChild);
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
              id === child.id ? styles["child-item__img--active"] : ""
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
