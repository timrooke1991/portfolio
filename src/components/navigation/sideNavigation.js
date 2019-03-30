import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './navigationItem';

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    const items = [];

    for (let i = 1; i <= this.props.slugs.length; i++) {
      items.push(<NavigationItem key={i} slug={this.props.slugs[i]} />);
    }

    return items;
  }

  render() {
    return <div className="side-navigation">{this.renderItems()}</div>;
  }
}

SideNavigation.propTypes = {
  slugs: PropTypes.array.isRequired
};

export default SideNavigation;
