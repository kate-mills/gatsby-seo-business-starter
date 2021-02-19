module.exports = {
  siteMetadata: {
    title: `Gatsby SEO Business Starter`,
    titleTemplate: `%s | Gatsby SEO Business Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    baseUrl: `https://gatsby-seo-business-starter.netlify.app`, // No trailing slash allowed!
    siteUrl: `https://gatsby-seo-business-starter.netlify.app`, // No trailing slash allowed!
    image: `/images/gatsby-astronaut.png`, // Path to your image you placed in the 'static' folder
    author: `Ally Digital Solutions`,
    twitterUsername: `@gatsbyjs`,
    dateModified: `${new Date().toISOString()}`,
    organization:{
      name: `Ally Digital Solutions`,
      url: `https://allydigitalsolutions.com`,
      logo: `https://allydigitalsolutions.com/images/logo.jpg`,
    },
    defaultKeywords: `gatsby,seo,starter`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-seo-business-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
