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
            <div>
              <h3>Web Development Immersive</h3>
              <span>Oct 2014 – Feb 2017, 1 yrs 5 mos</span>
              <p>
                At GA, we were taught programming fundamentals and build
                full-stack RESTful web apps using the latest, modern web
                development technologies.
              </p>
            </div>
            <div>
              <h3>AWS Developer Qualification</h3>
              <span>Aug 2013 – Aug 2015</span>
              <p>
                I was responsible for all aspects of the project delivery
                process, from client booking to report delivery; ensuring
                accurate data processing and reporting; working with third party
                suppliers.
              </p>
            </div>
          </Panel>
          <Panel id={2} display={this.state.panels[2]}>
            <h2>Professional</h2>
            <div className="icon-container">
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
            </div>
          </Panel>
          <Panel id={3} display={this.state.panels[3]}>
            <h2>Web Development</h2>
            <div>
              <h3>Junior Full Stack Developer, Axis Workshops</h3>
              <span>Oct 2014 – Feb 2017, 1 yrs 5 mos</span>
              <p>
                I was responsible for all aspects of the project delivery
                process, from client booking to report delivery; ensuring
                accurate data processing and reporting; working with third party
                suppliers. I would also provide support to the global sales
                team.
              </p>
            </div>
            <div>
              <h3>Web Developer, Bili</h3>
              <span>Aug 2013 – Oct 2014, 9 mos</span>
              <p>
                I was responsible for all aspects of the project delivery
                process, from client booking to report delivery; ensuring
                accurate data processing and reporting; working with third party
                suppliers. I would also provide support to the global sales
                team.
              </p>
            </div>
          </Panel>
          <Panel id={4} display={this.state.panels[4]}>
            <h2 className="">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ante, ut placerat ex. Duis mollis metus purus, eget
              consequat nisi luctus non. Cras placerat justo eu ante tempor
              dignissim. Praesent iaculis ligula elit, ut consectetur augue
              feugiat et. Integer pulvinar arcu id leo viverra finibus efficitur
              vitae arcu.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              eleifend ante, ut placerat ex. Duis mollis metus purus, eget
              consequat nisi luctus non. Cras placerat justo eu ante tempor
              dignissim. Praesent iaculis ligula elit, ut consectetur augue
              feugiat et. Integer pulvinar arcu id leo viverra finibus efficitur
              vitae arcu.
            </p>
          </Panel>
          <Panel id={5} display={this.state.panels[5]}>
            <h1 className="">John</h1>
            <h1 className="">Smith</h1>
            <ul className="social-networks spin-icon">
              <li><a href="https://www.linkedin.com/" className="icon-linkedin">LinkedIn</a></li>
              <li><a href="https://twitter.com/" className="icon-twitter">Twitter</a></li>
              <li><a href="https://github.com" className="icon-github">GitHub</a></li>
            </ul>
          </Panel>
        </ColumnLeft>
        <ColumnRight>
          <Panel id={6} display={this.state.panels[6]} mode="light">
            <h2 className="">Full Stack</h2>
            <h2 className="">Developer</h2>
            <p>
              JavaScript Engineer specialising in React, Redux and Node with a
              background in PHP (Laravel) and Ruby. AWS qualified. Experienced
              working with and in startups and Agile environments.
            </p>
          </Panel>
          <Panel id={7} display={this.state.panels[7]} mode="light">
            <h2>How I spend my time</h2>
            <p>
              Reading: Integer pulvinar arcu id leo viverra finibus efficitur
              vitae arcu.
            </p>
            <p>
              Running: Integer pulvinar arcu id leo viverra finibus efficitur
              vitae arcu.
            </p>
            <p>
              Cooking: Integer pulvinar arcu id leo viverra finibus efficitur
              vitae arcu.
            </p>
          </Panel>
          <Panel id={8} display={this.state.panels[8]} mode="light">
            <h2>Product & Project Management</h2>
            <div>
              <h3>Product Manager, Company Name</h3>
              <span>Oct 2014 – Feb 2017, 2 yrs 5 mos</span>
              <p>
                In my time at Unruly, I built reporting dashboards from scratch,
                transitioned the product to surveying on mobile, managed a
                product re-positioning, integrated APIs, added cookie tracking
                technology and prototyped first-party data segments.
              </p>
            </div>
            <div>
              <h3>Project Manager, Company Name</h3>
              <span>Aug 2013 – Oct 2014, 9 mos</span>
              <p>
                I was responsible for all aspects of the project delivery
                process, from client booking to report delivery; ensuring
                accurate data processing and reporting; working with third party
                suppliers. I would also provide support to the global sales
                team.
              </p>
            </div>
          </Panel>
          <Panel id={9} display={this.state.panels[9]} mode="light">
            <h2>Personal</h2>
            <div className="icon-container">
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
              <div className="icon-circle" />
            </div>
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
