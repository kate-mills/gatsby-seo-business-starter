import React from 'react'
import styled from 'styled-components'
import {socialLinks} from '../../../constants/links'
import {PhoneNumber, Email} from '../ContactInfo'

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
      <div className="contact-info small-text">
        <div><Email/></div>
        <div><span className="middot">&middot;</span></div>
        <div><PhoneNumber/></div>
      </div>

      <p className="tiny-text last-p">All rights reserved. © {new Date().getFullYear()}</p>
    </FooterWrapper>
    </div>
  )
}
const FooterWrapper = styled.footer`
  &{
    font-family: var(--mainFF);
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

  .contact-info{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .middot{
    margin: auto .34rem;
  }
  .small-text{
    font-size: 0.85rem;
  }
  .tiny-text{
    font-size: 0.75rem;
  }
  .last-p{
    margin-bottom: unset;
  }

  @media (min-width: 768px){
    .contact-info{
      flex-direction: row;
      justify-content: center;
    }
  }
`
export default Footer;
