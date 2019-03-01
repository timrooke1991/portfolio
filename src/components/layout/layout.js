import React from 'react';
import PropTypes from 'prop-types';

import Editor from '../visual/editor';

import '../../styles/reset.scss';
import '../../styles/layout.scss';

const Layout = ({ children }) => (
  <div className="container">
    <Editor length={50} />
    {children}
  </div>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
