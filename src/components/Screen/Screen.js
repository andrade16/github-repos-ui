import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { getStarredRepos, getCommits } from "../../services/githubService";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import "./Screen.scss";

const Screen = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStarredRepos().then((data) => {
      setRepos(data.items);
      setIsLoading(false);
    });
  }, []);

  const handleCardClick = (dataObj) => {
    setShow(true);
    setIsLoading(true);
    getCommits(dataObj).then((data) => {
      setCommits(data);
      setIsLoading(false);
    });
  };

  let content = <Loader message="Loading..." />;
  if (repos.length) {
    content = repos.map((repo, index) => (
      <Card
        key={repo.id}
        title={repo.full_name}
        link={repo.html_url}
        subtitle={`Stars: ${repo.stargazers_count}`}
        buttonLabel={"View commits"}
        buttonToolTip={"View commits made in the last 24 hours"}
        avatarUrl={repo.owner.avatar_url}
        icon={<FaGithub style={{ width: 150, height: 150, marginTop: 5 }} />}
        subIcon={<AiFillStar style={{ color: "yellow" }} />}
        dataObj={repo}
        onClick={handleCardClick}
      />
    ));
  }

  return (
    <div>
      <Navbar />
      <div className="spacer">&nbsp;</div>
      <div className="container">{content}</div>
    </div>
  );
};

export default Screen;
