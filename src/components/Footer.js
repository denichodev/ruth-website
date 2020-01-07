import React from "react";

import styles from "../templates/styles.module.css";
import allStyles from "./all.module.css";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={styles.worksContainer}>
        <div className={allStyles.footer}>
          <p>
            <a href="mailto:ruthhutagalungs@gmail.com">
              ruthhutagalungs@gmail.com
            </a>{" "}
            |{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Resume
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/ruth-hutagalung-5b7b46114/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://www.instagram.com/080011ultra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
