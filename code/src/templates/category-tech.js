import React from "react";
import Layout from "../components/layouts/layout";

const CategoryPost = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <div>
                Category List
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