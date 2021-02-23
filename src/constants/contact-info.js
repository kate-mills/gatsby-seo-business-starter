const  fmtPhone = (a, p, s) => `(${a}) ${p} - ${s}`;

export const areaCode = '555';
export const prefix = '555';
export const suffix = '5555';

export const ConstantContactInfo =  {

  Email: {
    fmtSubject: (str) => {
      if(str && str.length > 0)
        return str.split(' ').join('%20')
    },
    subject: 'General%20query',
    full_email:'customerservice@michelecorley.com',
    prefix:'customerservice',
    suffix: '@gatsby-seo-business-starter',
    ext: '.com',
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
