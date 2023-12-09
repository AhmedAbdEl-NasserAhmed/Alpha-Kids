import ParentChildItem from "./ParentChildItem/ParentChildItem";

import styles from "./ParentChildList.module.scss";

function ParentChildList({ childrenList }) {
  return (
    <ul className={styles["children-list"]}>
      {childrenList.map((child) => (
        <ParentChildItem
          childrenList={childrenList}
          key={child.id}
          child={child}
        />
      ))}
    </ul>
  );
}

export default ParentChildList;
