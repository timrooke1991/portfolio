import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

import './reset.css';
import './layout.css';

const Layout = ({ children }) => <div className="container">{children}</div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;