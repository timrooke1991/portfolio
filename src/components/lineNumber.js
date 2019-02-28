import React from 'react';
import PropTypes from 'prop-types';

const LineNumber = ({ digit }) => (
  <div className="line-number">
    {digit}
  </div>
);


LineNumber.propTypes = {
  digit: PropTypes.number.isRequired
};

export default LineNumber;
