import React from "react";

import Layout from "../components/Layout";
import AfterworksRoll from "../components/AfterworksRoll";

export default class AfterWorkIndexPage extends React.Component {
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
              <AfterworksRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
