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
              category {
                desc
                color
                image
                name
              }
              date
              demoURL
              fileName
              links
              code_embed_link
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
    // let prefix = _.kebabCase(edge.node.frontmatter.category.name);
    let demoPath = `${edge.node.fields.slug}`;
    console.log('##### demo page path', demoPath);
    console.log('$$$$$ edge.node.fields.slug', edge.node.fields.slug);
    createPage({
      path: `${demoPath}`,
      component: path.resolve(`./src/templates/demo-entry.js`),
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
        component: path.resolve(`./src/templates/tagged-tech.js`),
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
        component: path.resolve(`./src/templates/category-tech.js`),
        context: { category }
      });
    });

  })
}