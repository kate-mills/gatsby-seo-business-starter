import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        organization {
          phone
          displayPhone
        }
      }
    }
  }
`

const PhoneNumber = () => {
  const {site:{siteMetadata:{organization:{phone, displayPhone}}}} = useStaticQuery(query)
  return <a
    className="phone"
    href={`tel:${phone}`}
    rel="nofollow"
    style={{whiteSpace: 'nowrap',}}>
    {displayPhone}
    </a>
}

export default PhoneNumber
