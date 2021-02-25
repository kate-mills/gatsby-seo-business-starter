import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

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

const Email = props => {
  const {site:{siteMetadata:{organization:{email, 
    displayEmail:{prefix, suffix, ext}
  }}}} = useStaticQuery(query)

  const formatter = (str) => {
    if(str && str.length > 0)
      return str.split(' ').join('%20')
  }
  let fmtSubject = formatter((props.subject))
  return (
    <a
      className="email"
      target="_top"
      href={`${email}?subject=${fmtSubject}`}
    >
      <span style={{whiteSpace: 'nowrap',}}>
        {prefix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {suffix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {ext}</span>
    </a>
  )
}
Email.defaultProps = {
    subject: 'General%20query',
}


// Add prop.block for envelope style
const Address = props => {
  const {site:{siteMetadata:{organization:{address:{
    name,
    street,
    city,
    state,
    zip,
  }}}}} = useStaticQuery(query)

  return (
      <div>
        <address style={{ whiteSpace: 'pre-line' }}>
          <span
            className="company-name"
            style={{ paddingLeft: '0',}}
          >
            {name}
            {
              props.block ?
                <br/>
                :
                ', '
            }
          </span>
          <span
            className="street-address"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {street}
          </span>
          {
            props.block && <br/>
          }
          <span
            className="city"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {city}
          </span>
          <span
            className="state"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {state}
          </span>
          <span
            className="zip"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {zip}
          </span>
        </address>
      </div>
  )
}

const query = graphql`
  query contactInformation {
    site {
      siteMetadata {
        organization {
          phone
          displayPhone
          email
          displayEmail {
            prefix
            suffix
            ext
          }
          address {
            name
            street
            city
            state
            zip
          }
        }
      }
    }
  }
`




export {PhoneNumber, Email, Address}
