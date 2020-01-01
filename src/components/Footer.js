import React from "react";
import { Link } from "gatsby";

import styles from "../templates/styles.module.css";
import allStyles from "./all.module.css";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={styles.worksContainer}>
        <div className={allStyles.footer}>
          <p>Made with YOB</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
