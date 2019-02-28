import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ heading, subHeading, paragraph }) => (
  <React.Fragment>
    <h3 className="darkText">{heading}</h3>
    {subHeading ? <h4>{subHeading}</h4> : null}
    <p>{paragraph}</p>
  </React.Fragment>
);

Description.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string
};

Description.defaultProps = {
  paragraph: ''
};

export default Description;
