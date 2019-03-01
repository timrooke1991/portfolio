import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ heading, subHeading, paragraph }) => (
  <div className="description-block">
    <h3 className="darkText">{heading}</h3>
    {subHeading ? <h4>{subHeading}</h4> : null}
    <p>{paragraph}</p>
  </div>
);

Description.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string
};

Description.defaultProps = {
  paragraph: ''
};

export default Description;
