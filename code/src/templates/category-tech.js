import React from "react";
import Layout from "../components/layouts/layout";

import FeatureList from '../components/features/featureList';

const CategoryPost = ({ data }) => {
    return (
        <Layout>
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
            title
            date(formatString: "DD MMMM, YYYY")
            category {
              desc
              image
              name
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