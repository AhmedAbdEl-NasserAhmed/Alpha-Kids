import { useGetActiveChild } from "hooks/useGetActiveChild";
import styles from "./ActiveChildPopup.module.scss";

function ActiveChildPopup() {
  const { data: currentActiveChild } = useGetActiveChild();

  if (!currentActiveChild) return null;

  const childName = currentActiveChild[0]?.childName;

  const childImage = currentActiveChild[0]?.childAvatar;

  return (
    <div className={styles["active-child-popup"]}>
      <img src={childImage} alt="profile" />
      <h2>{childName}</h2>
    </div>
  );
}

export default ActiveChildPopup;
