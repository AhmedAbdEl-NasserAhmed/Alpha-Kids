import { useEffect } from "react";
import styles from "./Modal.module.scss";

function Modal({ children }) {
  useEffect(function () {
    window.addEventListener("click", (e) => console.log(e.target));
  });

  return <div className={styles.modal}>{children}</div>;
}

export default Modal;
