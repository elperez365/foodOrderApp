import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, className = "modal", isOpen, onClose }) {
  const modalref = useRef(null);
  useEffect(() => {
    if (isOpen) {
      modalref.current.showModal();
    } else {
      modalref.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={modalref} className={className} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
