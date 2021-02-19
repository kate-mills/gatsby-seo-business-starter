import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from './SchemaOrg'

const SEO = ({ title, description, image, article, keywords }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    titleTemplate,
    baseUrl,
    defaultImage,
    twitterUsername,
    organization,
    dateModified,
    defaultKeywords,
    altUrl,
  } = site.siteMetadata


  const seo = {
    title: title || organization.name,
    description: description || organization.description,
    image: `${baseUrl}${image || defaultImage}`,
    url: `${baseUrl}${pathname}`,
    keywords: keywords || defaultKeywords,
    altUrl: altUrl || false,
  }

  return (
    <React.Fragment>
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />

      <link rel="canonical" href={seo.url} />

      {seo.altUrl && <link rel="shortlink" href={seo.altUrl} /> }

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
    <SchemaOrg
      compoundTitle={`${seo.title} | ${organization.name}`}
      defaultTitle={organization.name}
      pageTitle={seo.title}
      description={seo.description}
      url={seo.url}
      baseUrl={baseUrl}
      image={seo.image}
      dateModified={dateModified}
      organization={organization}
    />

    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query completeSEO {
    site {
      siteMetadata {
        titleTemplate
        baseUrl:siteUrl
        defaultImage: image
        twitterUsername
        organization{
          name
          description
          geo{
            lat
            long
          }
          url
          logo
          phone
          priceRange
          email
          address{
            street
            city
            state
            zip
            country
          }
          otherUrls
        }
        dateModified
        defaultKeywords
        altUrl
      }
    }
  }
`
