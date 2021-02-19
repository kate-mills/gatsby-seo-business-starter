const siteUrl = `https://gatsby-seo-business-starter.netlify.app`; // change to .com url
const netlifyUrl = `https://gatsby-seo-business-starter.netlify.app`;


module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    defaultKeywords: `gatsby,seo,starter,business`,
    image: `/images/gatsby-astronaut.png`, // Path to your image you placed in the 'static' folder
    siteUrl: `${siteUrl}`, // No trailing slash allowed!
    title: `Gatsby SEO Business Starter`,
    titleTemplate: `%s | Gatsby SEO Business Starter`,
    twitterUsername: `@gatsbyjs`,

    organization:{
      address: {
        street: `555 Example st.`,
        city: `Napa`,
        state: `CA`,
        zip:`94558`,
        country: `USA`,
      },
      description: `Gatsby SEO Business Starter - Kick off your next, great Gatsby project with this seo business starter.  This starter ships with all basic components - just put your info in siteMetadata.`,
      email: `mailto:dev@example.com`,
      geo: {  // https://www.latlong.net/convert-address-to-lat-long.html
        lat: 38.329239,
        long: -122.295921,
      },
      logo: `${siteUrl}/images/starter-logo.png`,
      name: `Gatsby SEO Business Starter`,
      phone: `+1-707-266-8106`,
      priceRange: `$$$`,
      otherUrls: [
        `https://www.facebook.com/example`,
        `https://instagram.com/example`
      ],
      url: `${siteUrl}`,
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
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
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
