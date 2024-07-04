import React from "react";
import logo from "../../assets/logo.svg";
import "./Showcase.css";

function Showcase() {
  return (
    <div className="Showcase">
      <header>
        <div className="Showcase-header">
          <img src={logo} className="Showcase-logo" alt="logo" />

          <a
            className="Showcase-link"
            href="https://github.com/00hani"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </div>
      </header>
      <div className="Container">
        <p>rvdsdsvsd</p>
        <p>rvdsdsvsd</p>
        <p>rvdsdsvsd</p>
        <p>rvdsdsvsd</p>
      </div>
    </div>
  );
}

export default Showcase;
