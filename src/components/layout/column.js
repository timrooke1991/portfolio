import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, position, classNames }) => (
  <div className={`container-${position} ${classNames}`}>{children}</div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['right', 'left']).isRequired,
  className: PropTypes.string
};

Column.defaultProps = {
  className: ''
};

export default Column;
