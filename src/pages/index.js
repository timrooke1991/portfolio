import React from 'react';

import Layout from '../components/layout';
import Column from '../components/column';
import Panel from '../components/panel';
import SocialIcons from '../components/socialIcons';
import Title from '../components/title';
import Description from '../components/description';

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
        </button>
        <Column position="left">
          <Panel id={1} display={this.state.panels[1]}>
            <Title
              heading="Education"
              subHeading="blah blah blah"
            />
          </Panel>
          <Panel id={2} display={this.state.panels[2]}>
            <Title
              heading="Skills"
              subHeading="blah blah blah"
            />
          </Panel>
          <Panel id={3} display={this.state.panels[3]}>
            <Title
              heading="Experience"
              subHeading="blah blah blah"
            />
          </Panel>
          <Panel id={4} display={this.state.panels[4]}>
            <Title
              heading="About Me"
              subHeading="blah blah blah"
            />
          </Panel>
          <Panel id={5} display={this.state.panels[5]}>
            <Title
              heading="Tim Rooke"
              subHeading="Full Stack JavaScript Developer"
            />
            <SocialIcons />
          </Panel>
        </Column>
        <Column position="right">
          <Panel id={6} display={this.state.panels[6]} mode="light">
            <Description
              heading="Product"
              paragraph="5+ experience years designing, building and scaling products."
            />
            <Description
              heading="Engineering"
              paragraph="Writing, building, testing, deploying … and whatever else comes up!"
            />
            <Description
              heading="Agile"
              paragraph="Enjoy and experienced in fast-paced startup cultures."
            />
          </Panel>
          <Panel id={7} display={this.state.panels[7]} mode="light">
            <Description
              heading="Running"
              paragraph="Training for Berlin Marathon, Hoping to run sub-3 hours one day."
            />
            <Description
              heading="Learning"
              paragraph="Teaching myself Computer Science. Currently, writing an Operating System."
            />
            <Description
              heading="Cooking"
              paragraph="Know more than I should about types of oils, seeds and spices, but can make a decent takeaway curry!"
            />
          </Panel>
          <Panel id={8} display={this.state.panels[8]} mode="light">
            <Description
              heading="Axis Workshops"
              subHeading="Full Stack Developer"
              paragraph="Revolutionising company workshops."
            />
            <Description
              heading="Bili"
              subHeading="Junior Web Developer"
              paragraph="The online student language exchange, which enables structured peer-to-peer interaction, in a safe, teacher monitored space."
            />
            <Description
              heading="Unruly"
              subHeading="Product Manager"
              paragraph="Unruly uses emotional data to deliver awesome video advertising on brand-safe, premium sites, driving the most revenue for premium publishers."
            />
          </Panel>
          <Panel id={9} display={this.state.panels[9]} mode="light">
            <Description
              heading="JavaScript"
              paragraph="Exposure to the depths of the JavaScript ecosystem using technologies such as Node, Express, Babel, Jest and more."
            />
            <Description
              heading="React"
              paragraph="Hands-on experience using React and Redux to build awesome UIs data-driven front ends."
            />
            <Description
              heading="AWS"
              paragraph="AWS Developer qualified since February 2018 with experience AWS’ suite of tools in professional roles."
            />
          </Panel>
          <Panel id={10} display={this.state.panels[10]} mode="light">
            <Description
              heading="General Assembly"
              paragraph="Web Development Immersive"
            />
            <Description
              heading="LSE"
              paragraph="History of International Relations"
            />
            <Description
              heading="University of Exeter"
              paragraph="Law"
            />
          </Panel>
        </Column>

        <button
          className={`down ${this.state.disableDown ? 'hide-button' : ''}`}
          type="button"
          onClick={() => this.handleClick('down')}
        >
        </button>
      </Layout>
    );
  }
}

export default IndexPage;
