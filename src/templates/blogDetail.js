import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

function BlogDetail({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </Layout>
  );
}

export default BlogDetail;
