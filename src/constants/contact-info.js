let  fmtPhone = (a, p, s) => `(${a}) ${p} - ${s}`;

let areaCode = '555';
let prefix = '555';
let suffix = '5555';

let emailPrefix = 'customerservice'
let emailSuffix = '@gatsby-seo-business-starter';
let emailExt = '.com'

export const ConstantContactInfo =  {

  Email: {
    fmtSubject: (str) => {
      if(str && str.length > 0)
        return str.split(' ').join('%20')
    },
    subject: 'General%20query',
    full_email: emailPrefix + emailSuffix + emailExt,
    prefix: emailPrefix,
    suffix: emailSuffix,
    ext: emailExt,
  },

  Telephone: {
    phone: fmtPhone(areaCode, prefix, suffix),
    areaCode: areaCode,
    prefix: prefix,
    suffix: suffix,
  },

  Address: {
    street: '555 Exaple Street',
    city: 'Napa',
    state: 'CA',
    zip: '94558',
  }
}
