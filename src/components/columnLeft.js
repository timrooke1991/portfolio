import React from 'react';
import PropTypes from 'prop-types';

const ColumnLeft = ({ children }) => (
  <div className="container-left">{children}</div>
);

ColumnLeft.propTypes = {
  children: PropTypes.node.isRequired
};

export default ColumnLeft;
