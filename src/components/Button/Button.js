import React from "react";
import "./Button.scss";

const Button = ({ label, color, tooltip, onClick }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: color,
        borderColor: color,
        outlineColor: color,
      }}
      title={tooltip}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
