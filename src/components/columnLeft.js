import React from 'react';
import PropTypes from 'prop-types';

import './reset.css';
import './layout.css';

const ColumnLeft = ({ children }) => (
  <div className="container-left">{children}</div>
);

ColumnLeft.propTypes = {
  children: PropTypes.node.isRequired
};

export default ColumnLeft;
