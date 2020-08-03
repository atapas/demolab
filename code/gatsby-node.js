const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
              fileName
              link
            }
            html
          }
        }
      }
    }
  `);
  const tagSet = new Set();
  const categorySet = new Set();

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/api-demo.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.fields.slug,
      },
    });

    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve(`./src/templates/tagged-post.js`),
        context: { tag }
      });
    });

    // Generate for Category
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category.name);
    }
    categorySet.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: path.resolve(`./src/templates/category-post.js`),
        context: { category }
      });
    });

  })
}