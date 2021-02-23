import React from "react";
import { GoLogoGithub } from "react-icons/go";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <a className="logo" href="https://github.com/">
        <GoLogoGithub id="github-icon" />
      </a>

      <h2 className="app-title">{"Top 100 Repositories"}</h2>

      <nav className="navigation">
        <a href="mailto:andrade.william61@gmail.com">
          <AiOutlineMail id="email-icon" />
        </a>
        <a href="https://www.linkedin.com/in/william-andrade/">
          <AiOutlineLinkedin id="linkedin-icon" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
