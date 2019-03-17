import React from 'react';
import Layout from '../components/layout/layout';
import Panel from '../components/layout/panel';
import Column from '../components/layout/column';
import Title from '../components/text/title';
import Description from '../components/text/description';

const NotFoundPage = () => (
  <Layout>
    <Column position="left">
      <Panel id={1} display={true}>
        <Title heading="404 Alert!" subHeading="We could not find that page" />
      </Panel>
    </Column>
    <Column position="right">
      <Panel id={2} mode="light" display={true}>
        <Description
          heading="Home"
          paragraph="Head back to the homepage to find what you were looking for"
        />
        <Description
          heading="Blog"
          paragraph="Read some off my mad ramblings..."
        />
        <Description
          heading="Projects"
          paragraph="Find out what I've been building"
        />
      </Panel>
    </Column>
  </Layout>
);

export default NotFoundPage;
