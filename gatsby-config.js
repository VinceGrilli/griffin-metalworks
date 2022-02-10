const dotenv = require("dotenv");

dotenv.config();

const { GATSBY_SPACE_ID, GATSBY_ACCESS_TOKEN, GATSBY_SNIPCART_APIKEY } = process.env;

module.exports = {
  siteMetadata: {
    title: `Griffin Metalworks`,
    description: `Digital home of Griffin Metalworks`,
    author: `Builttocode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GriffinMetalworks`,
        short_name: `GriffinMW`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/griffin-logo-sm.jpg`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: GATSBY_SPACE_ID,
        accessToken: GATSBY_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: GATSBY_SNIPCART_APIKEY,
        autopop: true,
      },
    },
  ],
}
