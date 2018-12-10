import React from 'react';
import PropTypes from 'prop-types';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.display ? 'show' : 'hide'
    };
  }

  // Work out best way to deal with this...
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.display !== nextProps.display) {
      this.setState({
        classes: nextProps.display ? 'show' : 'hide'
      });
    }
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
