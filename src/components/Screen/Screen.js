import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BsStar, BsFillStarFill} from "react-icons/bs";
import { getStarredRepos, getCommits } from "../../services/githubService";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import EmptyDisplay from "../EmptyDisplay/EmptyDisplay";
import List from "../List/List";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import "./Screen.scss";

const Screen = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
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

  const onModalClose = (event) => {
    event.preventDefault();
    setShow(false);
    setCommits([]);
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
        icon={<FaGithub size={150} style={{ marginTop: 5 }} />}
        subIcon={<BsFillStarFill size={15} style={{fill: 'yellow'}}/>}
        dataObj={repo}
        onClick={handleCardClick}
      />
    ));
  }

  let modalContent;
  if (isLoading) {
    modalContent = <Loader message="Getting commits..." />;
  } else if (commits.length > 0) {
    modalContent = <List data={commits} />;
  } else {
    modalContent = <EmptyDisplay message="No recent commits to display" />;
  }

  return (
    <div>
      <Navbar />
      <div className="spacer">&nbsp;</div>
      <div className="container">
        {content}
        <Modal show={show} onClose={onModalClose} header="Recent Commits">
          {modalContent}
        </Modal>
      </div>
      <div className="scroll-top-container">
        <ScrollArrow />
      </div>
    </div>
  );
};

export default Screen;
