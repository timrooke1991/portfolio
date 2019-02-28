import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Column from '../components/column';
import Panel from '../components/panel';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: true,
        6: true,
        7: false,
        8: false,
        9: false,
        10: false
      },
      leftPanel: 5,
      rightPanel: 6,
      disableUp: true,
      disableDown: false
    };
  }

  resetPanelConfig() {
    return {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false
    };
  }

  handleClick(direction) {
    let newLeftPanel, newRightPanel;

    if (direction === 'up') {
      newLeftPanel = this.state.leftPanel + 1;
      newRightPanel = this.state.rightPanel - 1;
    } else if (direction === 'down') {
      newLeftPanel = this.state.leftPanel - 1;
      newRightPanel = this.state.rightPanel + 1;
    }

    if (direction === 'down' && disableDown) {
      return null;
    }

    if (direction === 'up' && disableUp) {
      return null;
    }

    const disableDown = [1, 10].includes(newLeftPanel);
    const disableUp = [5, 6].includes(newLeftPanel);

    const panels = this.resetPanelConfig();
    panels[newLeftPanel] = true;
    panels[newRightPanel] = true;

    this.setState({
      leftPanel: newLeftPanel,
      rightPanel: newRightPanel,
      panels,
      disableUp,
      disableDown
    });
  }

  render() {
    return (
      <Layout>
        <button
          className={`up ${this.state.disableUp ? 'hide-button' : ''}`}
          type="button"
          onClick={() => this.handleClick('up')}
        >
          UP
        </button>
        <Column position="left">
          <Panel id={1} display={this.state.panels[1]}>
            <h2>Education</h2>
          </Panel>
          <Panel id={2} display={this.state.panels[2]}>
            <h2>Skills</h2>
          </Panel>
          <Panel id={3} display={this.state.panels[3]}>
            <h1>Development</h1>
          </Panel>
          <Panel id={4} display={this.state.panels[4]}>
            <h1 className="">About Me</h1>
            <h3>Responsible for all aspects of the project delivery process</h3>
          </Panel>
          <Panel id={5} display={this.state.panels[5]}>
            <h1 className="">Tim Rooke</h1>
            <h3>Full Stack JavaScript Developer</h3>
            <ul className="social-networks spin-icon">
              <li>
                <a href="https://www.linkedin.com/" className="icon-linkedin">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" className="icon-twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" className="icon-github">
                  GitHub
                </a>
              </li>
            </ul>
          </Panel>
        </Column>
        <Column position="right">
          <Panel id={6} display={this.state.panels[6]} mode="light">
            <h3 className="darkText">Product</h3>
            <p>
              5+ experience years designing, building and scaling products.
            </p>
            <h3 className="darkText">Engineering</h3>
            <p>
              Writing, building, testing, deploying … and whatever else comes up!
            </p>
            <h3 className="darkText">Agile</h3>
            <p>
              Enjoy and experienced in fast-paced startup cultures.
            </p>
          </Panel>
          <Panel id={7} display={this.state.panels[7]} mode="light">
            <h3 className="darkText">Running</h3>
            <p>
              Training for Berlin Marathon, Hoping to run sub-3 hours one day.
            </p>
            <h3 className="darkText">Learning</h3>
            <p>
              Teaching myself Computer Science. Currently, writing an Operating System.
            </p>
            <h3 className="darkText">Cooking</h3>
            <p>
              Know more than I should about types of oils, seeds and spices, but can make a decent takeaway curry!
            </p>
          </Panel>
          <Panel id={8} display={this.state.panels[8]} mode="light">
            <h3 className="darkText">Axis Workshops</h3>
            <h4>Full Stack Developer</h4>
            <p>
              Revolutionising company workshops.
            </p>
            <h3 className="darkText">Bili</h3>
            <h4>Junior Web Developer</h4>
            <p>
              The online student language exchange, which enables structured peer-to-peer interaction, in a safe, teacher monitored space.
            </p>
            <h3 className="darkText">Unruly</h3>
            <h4>Product Manager</h4>
            <p>
              Unruly uses emotional data to deliver awesome video advertising on brand-safe, premium sites, driving the most revenue for premium publishers.
            </p>
          </Panel>
          <Panel id={9} display={this.state.panels[9]} mode="light">
            <h3 className="darkText">JavaScript</h3>
            <p>
              Exposure to the depths of the JavaScript ecosystem using technologies such as Node, Express, Babel, Jest and more.
            </p>
            <h3 className="darkText">React</h3>
            <p>
              Hands-on experience using React and Redux to build awesome UIs data-driven front ends.
            </p>
            <h3 className="darkText">AWS</h3>
            <p>
              AWS Developer qualified since February 2018 with experience AWS’ suite of tools in professional roles.
            </p>
          </Panel>
          <Panel id={10} display={this.state.panels[10]} mode="light">
            <h3 className="darkText">General Assembly</h3>
            <p>
              Web Development Immersive
            </p>
            <h3 className="darkText">LSE</h3>
            <p>
              History of International Relations
            </p>
            <h3 className="darkText">University of Exeter</h3>
            <p>
              Law
            </p>
          </Panel>
        </Column>

        <button
          className={`down ${this.state.disableDown ? 'hide-button' : ''}`}
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
