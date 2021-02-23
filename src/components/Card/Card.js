import React from "react";
import Avatar from "../Avatar/Avatar";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({
  title,
  link,
  subtitle,
  icon,
  avatarUrl,
  dataObj,
  subIcon,
  onClick,
}) => {
  const onCommitClick = () => {
    onClick(dataObj);
  };

  return (
    <>
      <div className="card">
        <Avatar src={avatarUrl} width={150} height={150} icon={icon} />
        <div className="card-subtitle">
          <span className="icon">{subIcon}</span>
          {subtitle}
        </div>
        <div className="card-body">
          <Title title={title} />
          <p className="card-content">
            <a className="card-link" href={link} target="_blank">
              {link}
            </a>
          </p>
          <Button
            label={"View Commits"}
            color={"#007bff"}
            tooltip={"View commits made in the last 24 hours"}
            onClick={onCommitClick}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
