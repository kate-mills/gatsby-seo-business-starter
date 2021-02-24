import React from 'react'
import {ConstantContactInfo} from '../../../constants/contact-info'

const PhoneNumber = ({ areaCode, prefix, suffix, phone  }) => {
  return <a
    className="phone"
    href={`tel:+${areaCode}${prefix}${suffix}`}
    rel="nofollow"
    style={{whiteSpace: 'nowrap',}}>
    {phone}
    </a>
}
PhoneNumber.defaultProps = ConstantContactInfo.Telephone;


const Email = props => {
  let fmtSubject = ConstantContactInfo.Email.fmtSubject(props.subject)
  return (
    <a
      className="email"
      target="_top"
      href={`mailto:${props.full_email}?subject=${fmtSubject}`}
    >
      <span style={{whiteSpace: 'nowrap',}}>
        {props.prefix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {props.suffix}</span>
      <span style={{whiteSpace: 'nowrap',}}>
        {props.ext}</span>
    </a>
  )
}
Email.defaultProps = ConstantContactInfo.Email;


// Add prop.block for envelope style
const Address = props => {
  return (
      <div>
        <address style={{ whiteSpace: 'pre-line' }}>
          <span
            className="company-name"
            style={{ paddingLeft: '0',}}
          >
            {props.company}
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
            {props.street}
          </span>
          <span
            className="suite"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {props.suite}
          </span>
          {
            props.block && <br/>
          }
          <span
            className="city"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {props.city}
          </span>
          <span
            className="state"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {props.state}
          </span>
          <span
            className="zip"
            style={{ paddingLeft: '5px', whiteSpace: 'nowrap' }}
          >
            {props.zip}
          </span>
        </address>
      </div>
  )
}
Address.defaultProps = ConstantContactInfo.Address;


export {PhoneNumber, Email, Address}
