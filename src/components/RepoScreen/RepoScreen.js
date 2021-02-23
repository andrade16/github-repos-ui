import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { getStarredRepos, getCommits } from "../../services/githubService";
import { formatDateByDay } from "../../utils/helpers";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import List from "../List/List";
import EmptyDisplay from "../EmptyDisplay/EmptyDisplay";
import moment from "moment";
import "./RepoScreen.scss";

const RepoScreen = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const today = moment().toISOString(true);

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

  const onModalClose = () => {
    setShow(false);
    setCommits([]);
  };

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
    <>
      <Navbar />
      <div className="spacer">&nbsp;</div>

      <div className="container">
        {content}

        <Modal
          show={show}
          onClose={onModalClose}
          header={`Commits on ${formatDateByDay(today)}`}
        >
          {modalContent}
        </Modal>
      </div>

      <div className="scroll-top-container">
        <ScrollArrow />
      </div>
    </>
  );
};

export default RepoScreen;
