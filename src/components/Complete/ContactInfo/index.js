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


export {PhoneNumber, Email,}
