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
      one: false,
      two: false,
      three: true,
      four: true,
      five: false,
      six: false
    };
  }

  // Need a refactor - get it working off click event to begin with
  // Scroll is too problematic as dynmically hiding and show content means
  // no scroll event is actually triggered

  collectId(id) {
    if (id === 'three' || id === 'four') {
      console.log('updates');
      this.setState({
        one: false,
        two: true,
        three: false,
        four: false,
        five: true,
        six: false
      });
    } else if (id === 'two' || id === '5') {
      console.log('updates');
      this.setState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        six: true
      });
    }
  }

  render() {
    return (
      <Layout>
        <ColumnLeft>
          <Panel
            id={'one'}
            giveId={id => this.collectId(id)}
            display={this.state.one}
          />
          <Panel
            id={'two'}
            giveId={id => this.collectId(id)}
            display={this.state.two}
          >
            <h1 className="panel-title-code open-tag">Tim</h1>
            <h1 className="panel-title-code close-tag">Rooke</h1>
          </Panel>
          <Panel
            id={'three'}
            giveId={id => this.collectId(id)}
            display={this.state.three}
          >
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
          </Panel>
        </ColumnLeft>
        <ColumnRight>
          <Panel
            id={'four'}
            giveId={id => this.collectId(id)}
            display={this.state.four}
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
            id={'five'}
            giveId={id => this.collectId(id)}
            display={this.state.five}
            mode="light"
          >
            <h1>Hello World</h1>
          </Panel>
          <Panel
            id={'six'}
            giveId={id => this.collectId(id)}
            display={this.state.six}
            mode="light"
          />
        </ColumnRight>
      </Layout>
    );
  }
}

export default IndexPage;
