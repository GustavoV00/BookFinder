import React, { Fragment } from "react";
import reactDom from "react-dom";

import classes from "./Modal.module.css";

function Modal(props) {
  const moreInfos = document.getElementById("moreInfos");
  if (!props.modal) return <Fragment>{props.children}</Fragment>;
  return reactDom.createPortal(
    <div className={classes.modal}>test</div>,
    moreInfos
  );
}

export default Modal;
