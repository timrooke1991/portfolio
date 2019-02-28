import React from 'react';
import PropTypes from 'prop-types';

import '../styles/reset.scss';
import '../styles/layout.scss';

const Layout = ({ children }) => <div className="container">{children}</div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
