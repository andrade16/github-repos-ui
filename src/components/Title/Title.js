import React from "react";
import "./Title.scss";

const Title = ({ title, style }) => {
  return (
    <h4 className="title" style={style}>
      {title}
    </h4>
  );
};

export default Title;
