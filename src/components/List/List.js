import React from "react";
import ListItem from "./ListItem";
import { formatDate } from "../../utils/helpers";
import "./List.scss";

const List = ({ data }) => {
  let listContent = null;
  if (data.length) {
    listContent = data.map((commit) => (
      <ListItem
        key={commit.sha}
        title={commit.author.login}
        subtitle={`committed ${formatDate(commit.commit.committer.date)}`}
        content={commit.commit.message}
        avatarSrc={commit.author.avatar_url}
      />
    ));
  }

  return <ul className="list-container">{listContent}</ul>;
};

export default List;
