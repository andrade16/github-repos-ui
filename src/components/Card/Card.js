import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Card.scss";

const Card = ({
  title,
  link,
  subtitle,
  icon,
  buttonLabel,
  buttonToolTip,
  avatarUrl,
  dataObj,
  subIcon,
  onClick,
}) => {
  const onCommitClick = () => {
    console.log(dataObj);
    onClick(dataObj);
  };

  return (
    <>
      <div className="card">
        <Avatar
          src={avatarUrl}
          width={150}
          height={150}
          icon={icon}
        />
        <div className="card-subicon">
          {subIcon} {subtitle}
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-content">
            <a className="card-link" href={link}>
              {link}
            </a>
          </p>
          <button
            title={buttonToolTip}
            className="card-action"
            onClick={onCommitClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
