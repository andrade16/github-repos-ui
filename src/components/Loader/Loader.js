import React from "react";
import "./Loader.scss";

const Loader = ({ message }) => {
    return (
        <div className="loader-container">
            <div className="loader" />
            <span className="loading-text">{message}</span>
        </div>
    );
};

export default Loader;
