import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ heading, subHeading }) => (
  <React.Fragment>
    <h1 className="">{heading}</h1>
    <h3>{subHeading}</h3>
  </React.Fragment>
);

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string
};

Title.defaultProps = {
  subHeading: ''
};

export default Title;
