import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.scss";

const Portal = ({ children, setShowModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#overlays"))
    : null;
};

const Backdrop = ({ setShowModal }) => {
  return (
    <div className={classes.backdrop}>
      <button
        style={{ marginTop: "180px" }}
        onClick={() => setShowModal(false)}
      >
        close
      </button>
    </div>
  );
};

const ModalOverlay = ({ children, nav }) => {
  return (
    <div
      className={`${classes["modal-overlay"]} ${
        nav && classes["modal-overlay--nav"]
      }`}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, setShowModal, nav }) => {
  return (
    <>
      <Portal setShowModal={setShowModal}>
        <Backdrop setShowModal={setShowModal} />
      </Portal>
      <Portal>
        <ModalOverlay nav>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default Modal;
