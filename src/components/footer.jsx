import React from "react";
import GitImg from "../Images/github1.png";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/jimmeryn/react-app-store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="Git icon" src={GitImg} style={{ marginTop: "1%" }} />
      </a>

      <div>
        ©2019 Entertainment, Inc. <br />
        This project was created for educational purposes only. Used images,
        icons or parts of the application may come from various sources.
      </div>
    </div>
  );
};

export default Footer;
