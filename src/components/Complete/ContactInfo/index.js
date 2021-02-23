import React from 'react'
import {ConstantContactInfo} from '../../../constants/contact-info'

export const PhoneNumber = ({ areaCode, prefix, suffix, phone  }) => {
  return <a href={`tel:+${areaCode}${prefix}${suffix}`} rel="nofollow" className="phone">{phone}</a>
}

PhoneNumber.defaultProps = ConstantContactInfo.Telephone;
