import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        <span>Información publicada por el </span> 
        <a
          href="https://www.worldbank.org"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        > Banco Mundial
        </a>
      </p>
      <p>Web desarrollada con React</p>
    </footer>
  );
};

export default Footer;
