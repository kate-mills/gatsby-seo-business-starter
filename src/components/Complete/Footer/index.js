import React from 'react'
import styled from 'styled-components'
import {socialLinks} from '../../../constants/links'
import {PhoneNumber} from '../ContactInfo'

const Footer = ()=>{
  return (
    <div>
      <hr/>
    <FooterWrapper>
      <h3 className="follow-us-on">Follow us on</h3>
      <div className="social-icons">
        {
          socialLinks.map(({icon, id, label, name, url}) => {
            return(
              <div className="icon" key={id}>
                <a
                  aria-label={`${label}`}
                  className={`${name}`}
                  href={`${url}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  {icon}
                </a>
              </div>
            )
          })
        }
      </div>
      <p className="phone-number"><PhoneNumber/></p>
      <p>© {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </FooterWrapper>
    </div>
  )
}
const FooterWrapper = styled.footer`
  &{
    margin: 0 auto;
    text-align: center;
    margin-top: 2rem;
  }
  .follow-us-on{
    font-family: var(--mainFF);
    font-size: 1.35rem;
    font-weight: 300;
    margin-bottom: 0.24rem;
  }
  .social-icons{
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    width: 50%;
    max-width: 250px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-evenly;
  }
  .icon{
    font-size: 1.5rem;
    margin: 1rem;
  }
  .facebook{color: #00f;}
  .instagram{color: magenta;}
  .phone-number{
      margin-top: 1rem;
  }
`
export default Footer;
