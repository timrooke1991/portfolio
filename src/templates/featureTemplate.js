import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Column from '../components/layout/column';
import Panel from '../components/layout/panel';
import Title from '../components/text/title';
import SEO from '../components/seo';

class FeaturePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Column position="left" classNames="feature-page">
          <Panel id={1} display={true}>
            <Title
              heading={post.frontmatter.title}
              subHeading={post.frontmatter.date}
            />
          </Panel>
        </Column>
        <Column position="right" classNames="feature-page">
          <Panel id={2} display={true}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Panel>
        </Column>
      </Layout>
    );
  }
}

export default FeaturePostTemplate;

export const pageQuery = graphql`
  query FeaturePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        excerpt
        tags
      }
    }
  }
`;
