import React from "react";
import PropTypes from "prop-types";
import { AfterworksPostTemplate } from "../../templates/afterworks-post";

const AfterworksPostPreview = ({ entry, widgetFor }) => (
  <AfterworksPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

AfterworksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AfterworksPostPreview;
