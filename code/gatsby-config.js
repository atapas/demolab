module.exports = {
  siteMetadata: {
    title: `GreenRoots Demo Lab`,
    description: `The demo lab helps you navigating through demos of several projects with 
    guided information`,
    author: `@tapasadhikary`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}