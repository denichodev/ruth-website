import React from 'react'
import PropTypes from 'prop-types'
import { AfterworkTemplate } from '../../templates/afterwork-page'

const AfterworkPagePreview = ({ entry, widgetFor }) => (
  <AfterworkTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AfterworkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AfterworkPagePreview
