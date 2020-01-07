import React from "react";
import PropTypes from "prop-types";
import { AfterWorksPostTemplate } from "../../templates/afterworks-post";

const AfterworksPagePreview = ({ entry, widgetFor }) => (
  <AfterWorksPostTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AfterworksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AfterworksPagePreview;
