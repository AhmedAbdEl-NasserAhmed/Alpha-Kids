import styles from "./DeleteButton.module.scss";

function DeleteButton({ onClick, disabled }) {
  return (
    <span
      role="button"
      disabled={disabled}
      onClick={onClick}
      className={styles["delete-btn"]}
    >
      &times;
    </span>
  );
}

export default DeleteButton;
