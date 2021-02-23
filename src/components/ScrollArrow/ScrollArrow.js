import React, { useState } from "react";
import { Y_OFFSET_THRESHOLD } from "../../utils/constants";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollArrow.scss";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > Y_OFFSET_THRESHOLD) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= Y_OFFSET_THRESHOLD) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;
