import React from "react";
import {GoLogoGithub} from 'react-icons/go';
import "./Navbar.scss";

const Navbar = () => {

    return (
        <header id="header" className="navbar">
            <a className="logo" href="https://github.com/">
                <GoLogoGithub style={{width: 50, height: 50, color: 'white'}}/>
            </a>

            <nav className="navigation">{"Nav content"}</nav>
        </header>
    );
};

export default Navbar;
