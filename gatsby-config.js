module.exports = {
  siteMetadata: {
    title: `Gatsby SEO Business Starter`,
    titleTemplate: `%s | Gatsby SEO Business Starter`,
    defaultKeywords: `gatsby,seo,starter,business`,
    siteUrl: `https://gatsby-seo-business-starter.netlify.app`, // No trailing slash allowed!
    altUrl: ``, // will be the netlify utl once I move to .com
    image: `/images/gatsby-astronaut.png`, // Path to your image you placed in the 'static' folder
    author: `Ally Digital Solutions`,
    twitterUsername: `@gatsbyjs`,
    dateModified: `${new Date().toISOString()}`,
    organization:{
      address: {
        street: `555 Example st.`, // Suite or # if applicable
        city: `Napa`,
        state: `CA`,
        zip:`94558`,
        country: `USA`,
      },
      description: `Gatsby SEO Business Starter - Kick off your next, great Gatsby project with this seo business starter.  This starter ships with all basic components - just put your info in siteMetadata.`,
      email: `mailto:dev@allydigitalsolutions.com`,
      geo: {  // https://www.latlong.net/convert-address-to-lat-long.html
        lat: 38.329239,
        long: -122.295921,
      },
      logo: `https://allydigitalsolutions.com/images/logo.jpg`,
      name: `Gatsby SEO Business Starter`,
      phone: `+1-707-266-8106`,
      priceRange: `$$$`,
      url: `https://gatsby-seo-business-starter.netlify.app`,
      otherUrls: [
        `https://www.facebook.com/allydigitalsolutions`,
        `https://instagram.com/allydigitalsolutions/`
      ],
    },
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
        icons_options: {
          purpose: `any maskable`,
        },
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://gatsby-seo-business-starter.netlify.app`,
        sitemap: `https://gatsby-seo-business-starter.netlify.app/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
