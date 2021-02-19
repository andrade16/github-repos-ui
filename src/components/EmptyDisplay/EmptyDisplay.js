import React from "react";
import { ImWarning } from "react-icons/im";
import "./EmptyDisplay.scss";

const EmptyDisplay = ({ message }) => {
  return (
    <div className="empty-display-container">
      <ImWarning style={{ width: 150, height: 150 }} />
      <div className="empty-display-message">{message}</div>
    </div>
  );
};

export default EmptyDisplay;
