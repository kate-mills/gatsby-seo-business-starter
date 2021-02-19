import React from 'react'
import  links from '../../../constants/links'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({
    url,
    compoundTitle,
    defaultTitle,
    pageTitle,
    image,
    description,
    siteUrl,
    baseUrl,
    author,
    organization,
    dateModified,
  }) => {
  const linkCrumbs = links.map(link => {
    console.log('url', url)
    console.log('link', link)
      return {
        type: 'ListItem',
        name: link.page,
        position: link.id,
        item: `${baseUrl}${link.path}`,
      }
    })
    console.log('dateModified', dateModified);
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'WebPage',
            position: 1,
            item: {
              '@id': url,
              alternateName: compoundTitle,
              name: defaultTitle,
              headline: pageTitle,
              image,
              logo: organization.logo,
              lastReviewed: dateModified,
            },
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: linkCrumbs,
      },
    ]


    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
