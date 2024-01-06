import { useEffect } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { useRef } from "react";

function Modal({ children, showModal, setShowModal }) {
  const menuRef = useRef();

  useEffect(
    function () {
      function handler(e) {
        if (menuRef?.current?.contains(e.target)) {
          setShowModal(false);
        }
      }
      window.addEventListener("click", handler);

      return () => window.removeEventListener("click", handler);
    },
    [setShowModal]
  );

  return createPortal(
    <div>
      <div
        className={`${styles.overlay} ${showModal ? "show" : ""} `}
        ref={menuRef}
      ></div>
      <div className={`${styles.modal} ${showModal ? "show-modal" : ""} `}>
        {children}
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export default Modal;
