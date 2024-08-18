import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Kv from "../components/organisms/top/kv";
import AboutMe from "../components/organisms/top/aboutMe";
import Skills from "../components/organisms/top/skills";
import Works from "../components/organisms/top/works"; // Works セクションをインポート
import { Container, Row, Col } from "react-bootstrap";
import BlogItem from "../components/organisms/top/blogitem";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: title, order: ASC }) {
        edges {
          node {
            title
            slug
            createdAt(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Kv />
      <AboutMe />
      <Skills />
      <Works /> {/* Works セクションをここに追加 */}
      <Container>
        <Row>
          {data.allContentfulBlogPost.edges.map((edge, index) => (
            <Col sm={4} key={index}>
              <BlogItem
                title={edge.node.title}
                date={edge.node.createdAt}
                link={`/blog/${edge.node.slug}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
