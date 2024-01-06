import styles from "./Form.module.scss";

function Form({ children, showModal, onSubmit, variation }) {
  return (
    <form
      onSubmit={onSubmit}
      className={` ${styles["form"]} ${styles[`form--${variation}`]} ${
        showModal ? "move-down" : ""
      }`}
    >
      {children}
    </form>
  );
}

export default Form;
