import React from "react";
import Avatar from "../Avatar/Avatar";
import Title from "../Title/Title";
import {Link} from "react-router-dom";
import "./Card.scss";

const Card = ({
  title,
  link,
  subtitle,
  icon,
  avatarUrl,
  dataObj,
  subIcon,
}) => {

  return (
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
        <Link to={`/commits/${dataObj.owner.login}/${dataObj.name}`} title={"View commits made in the last 24 hours"}>View Commits</Link>
      </div>
    </div>
  );
};

export default Card;
