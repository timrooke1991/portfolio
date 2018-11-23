import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ColumnLeft from '../components/columnLeft';
import ColumnRight from '../components/columnRight';
import Panel from '../components/panel';
import Image from '../components/image';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      1: false,
      2: false,
      3: true,
      4: true,
      5: false,
      6: false
    };
  }

  // Need a refactor - get it working off click event to begin with
  // Scroll is too problematic as dynmically hiding and show content means
  // no scroll event is actually triggered

  collectId(id, direction) {
    console.log('clicked', id);
    console.log('even?', id % 2 === 0);
    const partnerId = id % 2 === 0 ? id - 1 : id + 1;
    console.log('partnerId', partnerId);
    const newState = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false
    };

    if (direction === 'up') {
      newState[Math.max(id + 2, 5)] = true;
      newState[Math.max(partnerId + 2, 6)] = true;
    } else {
      console.log('new ids', id - 2, partnerId - 2);

      newState[Math.max(id - 2, 1)] = true;
      newState[Math.max(partnerId - 2, 1)] = true;
    }

    this.setState(newState);
  }

  render() {
    return (
      <Layout>
        <ColumnLeft>
          <p>{JSON.stringify(this.state)}</p>
          <Panel
            id={1}
            giveId={id => this.collectId(id)}
            display={this.state[1]}
          />
          <Panel
            id={2}
            giveId={id => this.collectId(id)}
            display={this.state[2]}
          >
            <h1 className="panel-title-code open-tag">Tim</h1>
            <h1 className="panel-title-code close-tag">Rooke</h1>
          </Panel>
          <Panel
            id={3}
            giveId={id => this.collectId(id)}
            display={this.state[3]}
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
            giveId={id => this.collectId(id)}
            display={this.state[4]}
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
            giveId={id => this.collectId(id)}
            display={this.state[5]}
            mode="light"
          >
            <h1>Hello World</h1>
          </Panel>
          <Panel
            id={6}
            giveId={id => this.collectId(id)}
            display={this.state[6]}
            mode="light"
          />
        </ColumnRight>
      </Layout>
    );
  }
}

export default IndexPage;
