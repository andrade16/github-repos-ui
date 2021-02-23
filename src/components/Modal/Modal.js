import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = ({ children, show, header, onClose }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <Title title={header} style={{ margin: 0 }} />
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <Button
            label={"Close"}
            color={"#dc3545"}
            tooltip={""}
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
