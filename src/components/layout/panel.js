import React from 'react';
import PropTypes from 'prop-types';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.display ? 'show' : 'hide'
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.display !== state.display) {
      return {
        classes: props.display ? 'show' : 'hide'
      };
    }

    return null;
  }

  render() {
    return (
      <div
        className={`panel-image-${this.props.mode} flex-container ${
          this.state.classes
        }`}
      >
        <div className="vertically-center">{this.props.children}</div>
      </div>
    );
  }
}

Panel.propTypes = {
  mode: PropTypes.string,
  display: PropTypes.bool,
  id: PropTypes.number.isRequired
};

Panel.defaultProps = {
  mode: 'dark',
  display: false
};

export default Panel;
