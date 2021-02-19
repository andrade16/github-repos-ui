import React from "react";
import Avatar from "../Avatar/Avatar";
import "./ListItem.scss";

const ListItem = ({ title, subtitle, content, avatarSrc }) => {
  return (
    <li className="list-item">
      <div className="titles-container">
        <div className="avatar-title-container">
          <Avatar width={30} height={30} src={avatarSrc} />
          <div className="title">{title}</div>
        </div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="content-container">{content}</div>
    </li>
  );
};

export default ListItem;
