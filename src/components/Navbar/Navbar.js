import React from "react";
import { GoLogoGithub } from "react-icons/go";
import {AiOutlineMail, AiOutlineLinkedin} from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <a className="logo" href="https://github.com/">
        <GoLogoGithub style={{ width: 50, height: 50, color: "white" }} />
      </a>

      <nav className="navigation">
          <a href="mailto:andrade.william61@gmail.com">
              <AiOutlineMail style={{ width: 30, height: 30, color: "white" }}/>
          </a>
          <a href="https://www.linkedin.com/in/william-andrade/">
              <AiOutlineLinkedin style={{ width: 30, height: 30, color: "white" }}/>
          </a>
      </nav>
    </header>
  );
};

export default Navbar;
