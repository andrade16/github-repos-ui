import React from "react";
import { ImWarning } from "react-icons/im";
import "./EmptyDisplay.scss";

const EmptyDisplay = ({ message }) => {
  return (
    <div className="empty-display-container">
      <ImWarning id="warning-icon" />
      <div className="empty-display-message">{message}</div>
    </div>
  );
};

export default EmptyDisplay;
