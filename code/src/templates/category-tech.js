import React from "react";
import Layout from "../components/layouts/layout";
import FeatureList from '../components/features/featureList';

import SEO from '../components/seo';

const CategoryPost = ({ data }) => {
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.category.name;
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <FeatureList data = { data.allMarkdownRemark }/>
      </div>
    </Layout>
  )
};

export default CategoryPost;

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {category: {name: {eq: $category}}}}
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            emoji
            title
            date(formatString: "DD MMMM, YYYY")
            category {
              desc
              image
              name
              color
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`