import React from "react";
import "./Avatar.scss";

const Avatar = ({ src, width, height, icon }) => {
  let inner = null;
  if (src) {
    inner = (
      <img
        src={src}
        alt="avatar-image"
        style={{ width: width, height: height }}
        className="avatar-image"
      />
    );
  } else {
    inner = <div className="avatar-image">{icon}</div>;
  }

  return <div className="avatar">{inner}</div>;
};

export default Avatar;
