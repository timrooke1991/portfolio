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
        <ColumnLeft>
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
        </ColumnLeft>
        <ColumnRight>
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
            <h2>Product & Project Management</h2>
            <h3>Product Manager, Company Name</h3>
            <span>Oct 2014 – Feb 2017, 2 yrs 5 mos</span>
            <p>
              In my time at Unruly, I built reporting dashboards from scratch,
              transitioned the product to surveying on mobile, managed a product
              re-positioning, integrated APIs, added cookie tracking technology
              and prototyped first-party data segments.
            </p>
            <h3>Project Manager, Company Name</h3>
            <span>Aug 2013 – Oct 2014, 9 mos</span>
            <p>
              I was responsible for all aspects of the project delivery process,
              from client booking to report delivery; ensuring accurate data
              processing and reporting; working with third party suppliers. I
              would also provide support to the global sales team.
            </p>
          </Panel>
          <Panel id={9} display={this.state.panels[9]} mode="light">
            <h2>Personal</h2>
            <ul className="social-networks spin-icon">
              <li>
                <i className="devicon-javascript-plain colored skill-javascript" />
              </li>
              <li>
                <i className="devicon-react-original-wordmark skill-react" />
              </li>
              <li>
                <i className="devicon-nodejs-plain-wordmark skill-node" />
              </li>
            </ul>
          </Panel>
          <Panel id={10} display={this.state.panels[10]} mode="light">
            <h2>Academic</h2>
            <div>
              <h3>London School Economics, International Relations</h3>
              <span>Oct 2016 – Oct 2016, 1 yrs</span>
              <p>
                At GA, we were taught programming fundamentals and build
                full-stack RESTful web apps using the latest, modern web
                development technologies.
              </p>
            </div>
            <div>
              <h3>University of Exeter, Law</h3>
              <span>Oct 2012 – Feb 2015, 3 yrs 5 mos</span>
              <p>
                At GA, we were taught programming fundamentals and build
                full-stack RESTful web apps using the latest, modern web
                development technologies.
              </p>
            </div>
          </Panel>
        </ColumnRight>

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
