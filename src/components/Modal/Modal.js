import React from "react";
import Title from "../Title/Title";
import "./Modal.scss";

const Modal = ({ children, show, header, onClose }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
            <Title title={header} style={{margin: 0}}/>
          {/*<h4 className="modal-title">{header}</h4>*/}
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
