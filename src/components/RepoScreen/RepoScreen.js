import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { getStarredRepos } from "../../services/githubService";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import "./RepoScreen.scss";

const RepoScreen = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // fetch top repos on initial mounting
    getStarredRepos().then((data) => {
      setRepos(data.items);
    });
  }, []);


  let content = <Loader message="Loading..." />;
  if (repos.length) {
    content = repos.map((repo) => (
      <Card
        key={repo.id}
        title={repo.full_name}
        link={repo.html_url}
        subtitle={`Stars: ${repo.stargazers_count}`}
        avatarUrl={repo.owner.avatar_url}
        icon={<FaGithub size={150} style={{ marginTop: 5 }} />}
        subIcon={<FiStar size={15} fill="yellow" />}
        dataObj={repo}
      />
    ));
  }

  return (
    <>
      <Navbar />
      <div className="spacer">&nbsp;</div>

      <div className="container">
        {content}
      </div>

      <div className="scroll-top-container">
        <ScrollArrow />
      </div>
    </>
  );
};

export default RepoScreen;
