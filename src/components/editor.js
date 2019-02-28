import React from 'react';
import PropTypes, { number } from 'prop-types';
import LineNumber from './lineNumber';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNumbers(length) {
    const numberElements = [];

    for(let i = 1; i <= length; i++) {
      numberElements.push(<LineNumber digit={i} />);
    }

    return numberElements;
  }

  render() {
    return (
      <div className="editor-layout">
        {this.renderNumbers(this.props.length)}
      </div>
    );
  }
}

Editor.propTypes = {
  length: PropTypes.number.isRequired
};


export default Editor;
