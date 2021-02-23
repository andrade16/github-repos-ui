import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Modal.scss";
import Loader from "../Loader/Loader";
import List from "../List/List";
import EmptyDisplay from "../EmptyDisplay/EmptyDisplay";

const Modal = ({ children, show, header, onClose, isLoading, commits }) => {
  // let modalContent;
  // if (isLoading) {
  //     modalContent = <Loader message="Getting commits..." />;
  // } else if (commits.length > 0) {
  //     modalContent = <List data={commits} />;
  // } else {
  //     modalContent = <EmptyDisplay message="No recent commits to display" />;
  // }

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
