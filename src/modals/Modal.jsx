import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, className = "modal", isOpen, onClose }) {
  const modalref = useRef(null);
  // useEffect(() => {
  //   if (isOpen) {
  //     modalref.current.showModal();
  //   } else {
  //     modalref.current.close();
  //   }
  // }, [isOpen]);

  const display = isOpen ? "flex" : "none";
  const ModalStyle = {
    display: display,
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "10000",
    justifyContent: "center",
    alignItems: "center",
  };

  return createPortal(
    <div style={ModalStyle}>
      <dialog
        ref={modalref}
        open={isOpen}
        className={className}
        onClose={onClose}
      >
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
