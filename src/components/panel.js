import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.display ? 'show' : 'hide'
    };

    this.giveId = this.giveId.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('next', nextProps);
    if (this.props.display !== nextProps.display) {
      this.setState({
        classes: nextProps.display ? 'show' : 'hide'
      });
    }
  }

  giveId() {
    this.props.giveId(this.props.id);
  }

  render() {
    return (
      <div
        ref={section => (this.panel = section)}
        id={this.props.id}
        className={`panel-image-${this.props.mode} flex-container ${
          this.state.classes
        }`}
        onClick={this.giveId}
      >
        <div className="vertically-center">{this.props.children}</div>
      </div>
    );
  }
}

Panel.propTypes = {
  mode: PropTypes.string
};

Panel.defaultProps = {
  mode: 'dark'
};

export default Panel;
