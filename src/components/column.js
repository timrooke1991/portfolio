import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, position }) => <div className={`container-${position}`}>{children}</div>;

Column.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['right', 'left'])
};

export default Column;
