import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavigationItem = ({ slug }) => (
  <Link
    to={`${slug}`}
    activeClassName="navigation-item-active"
    className="navigation-item"
    rel="goTo"
  />
);

NavigationItem.propTypes = {
  slug: PropTypes.number.isRequired
};

export default NavigationItem;
