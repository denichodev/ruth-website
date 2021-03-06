import React from "react";

import Layout from "../components/Layout";
import WorksRoll from "../components/WorksRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            display: "none"
          }}
        >
          Works
        </h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorksRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
