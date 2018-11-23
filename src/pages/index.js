import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ColumnLeft from '../components/columnLeft';
import ColumnRight from '../components/columnRight';
import Panel from '../components/panel';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: {
        1: false,
        2: false,
        3: true,
        4: true,
        5: false,
        6: false
      },
      leftPanel: 3,
      rightPanel: 4
    };
  }

  resetPanelConfig() {
    return {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false
    };
  }

  handleClick(direction) {
    const disableDown = [1, 6].some(n => n === this.state.leftPanel);
    const disableUp = [3, 4].some(n => n === this.state.leftPanel);

    let newLeftPanel, newRightPanel;
    console.log(disableDown, disableUp);
    if (direction === 'down' && disableDown) {
      return null;
    }

    if (direction === 'up' && disableUp) {
      return null;
    }

    if (direction === 'up' && !disableUp) {
      newLeftPanel = this.state.leftPanel + 1;
      newRightPanel = this.state.rightPanel - 1;
    } else if (direction === 'down' && !disableDown) {
      newLeftPanel = this.state.leftPanel - 1;
      newRightPanel = this.state.rightPanel + 1;
    }

    const panels = this.resetPanelConfig();
    panels[newLeftPanel] = true;
    panels[newRightPanel] = true;

    this.setState({
      leftPanel: newLeftPanel,
      rightPanel: newRightPanel,
      panels
    });
  }

  render() {
    return (
      <Layout>
        <button
          className="up"
          type="button"
          onClick={() => this.handleClick('up')}
        >
          UP
        </button>
        <ColumnLeft>
          <Panel
            id={1}
            display={this.state.panels[1]}
          >
            <h1>Panel 1</h1>
          </Panel>
          <Panel
            id={2}
            display={this.state.panels[2]}
          >
            <h1 className="panel-title-code open-tag">Tim</h1>
            <h1 className="panel-title-code close-tag">Rooke</h1>
          </Panel>
          <Panel
            id={3}
            display={this.state.panels[3]}
          >
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
          </Panel>
        </ColumnLeft>
        <ColumnRight>
          <Panel
            id={4}
            display={this.state.panels[4]}
            mode="light"
          >
            <h2 className="panel-title-code open-tag">Full Stack</h2>
            <h2 className="panel-title-code close-tag">Developer</h2>
            <p>
              JavaScript Engineer specialising in React, Redux and Node with a
              background in PHP (Laravel) and Ruby. AWS qualified. Experienced
              working with and in startups and Agile environments.
            </p>
          </Panel>
          <Panel
            id={5}
            display={this.state.panels[5]}
            mode="light"
          >
            <h1>Hello World</h1>
          </Panel>
          <Panel
            id={6}
            display={this.state.panels[6]}
            mode="light"
          >
            <h1>Panel 6</h1>
          </Panel>
        </ColumnRight>
        <button
          className="down"
          type="button"
          onClick={() => this.handleClick('down')}
        >
          DOWN
        </button>
      </Layout>
    );
  }
}

export default IndexPage;
