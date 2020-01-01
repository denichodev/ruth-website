import React from "react";
import PropTypes from "prop-types";

import styles from "./content.module.css";

export const HTMLContent = ({ content, className }) => (
  <div
    className={styles.content}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
