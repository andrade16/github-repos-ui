import React from "react";
import "./Avatar.scss";

const Avatar = ({ src, width, height, icon }) => {
  let inner = src ? (
    <img
      src={src}
      alt="avatar-image"
      style={{ width: width, height: height }}
      className="avatar-image"
    />
  ) : (
    <div className="avatar-image">{icon}</div>
  );

  return <div className="avatar">{inner}</div>;
};

export default Avatar;
