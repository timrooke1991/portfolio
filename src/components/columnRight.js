import React from 'react';
import PropTypes from 'prop-types';

const ColumnRight = ({ children }) => <div className="container-right">{children}</div>;

ColumnRight.propTypes = {
  children: PropTypes.node.isRequired
};

export default ColumnRight;
