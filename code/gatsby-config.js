module.exports = {
  siteMetadata: {
    title: `GreenRoots Demo Lab`,
    description: `The demo lab helps you navigating through demos of several projects with 
    guided information`,
    author: `@tapasadhikary`,
    website: `https://tapasadhikary.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/_images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170919872-2",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Tinos', 'Roboto', 'Abel', 'Kufam', 'Nunito Sans', 'Istok Web', 'Chilanka']
        }
      }
    }
  ],
}