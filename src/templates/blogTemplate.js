import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Column from '../components/layout/column';
import Panel from '../components/layout/panel';
import Title from '../components/text/title';
import Description from '../components/text/description';
import SEO from '../components/seo';
import SideNavigation from '../components/navigation/sideNavigation';

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, slugs } = this.props.pageContext;
    console.log(slugs);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            <button className="up" />
          </Link>
        )}

        <Column position="left">
          <Panel id={1} display={this.state.display}>
            <Title
              heading={post.frontmatter.title}
              subHeading={post.frontmatter.date}
            />
          </Panel>
        </Column>
        <Column position="right">
          <Panel id={2} display={this.state.display}>
            <Description
              heading=""
              paragraph={
                post.frontmatter.description || post.frontmatter.excerpt
              }
            />
            {post.frontmatter.tags}
          </Panel>
          <SideNavigation slugs={slugs} />
        </Column>
        {next && (
          <Link to={next.fields.slug} rel="next">
            <button className="down" />
          </Link>
        )}
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
