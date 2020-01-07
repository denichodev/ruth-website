import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styles from "./styles.module.css";
import AfterworksRoll from "../components/AfterworksRoll";

export const AfterworkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className={styles.worksContainer}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className={styles.contentTitleAbout}>{title}</h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AfterworkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AfterworkPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AfterworkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <section className="section">
        <div className="container">
          <div className="content">
            <AfterworksRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

AfterworkPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AfterworkPage;

export const afterworkPageQuery = graphql`
  query AfterworkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
