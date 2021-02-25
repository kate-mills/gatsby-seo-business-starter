import React from 'react'
import styled from 'styled-components'
import {socialLinks} from '../../../constants/links'
import {PhoneNumber, Email, Address} from '../ContactInfo'

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
      <div className="phone-email-box">
        <div><Email/></div>
        <div><span className="middot">&middot;</span></div>
        <div><PhoneNumber/></div>
      </div>
      <div className="address-box">
        <Address/>
      </div>
      <p className="tiny-last-p">All rights reserved. © {new Date().getFullYear()}</p>
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
    margin: 1rem auto;
    align-items: center;
    justify-content: space-evenly;
    .icon{
      font-size: 1.5rem;
      margin: 1rem;
    }
    .facebook{color: #00f;}
    .instagram{color: deeppink;}
    .icon{
     -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .icon:hover{
      transform: translateY(-5px);
   }
  }
  .phone-email-box{
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    width: 100%;
    .middot{
      margin: auto .34rem;
    }
  }
  .address-box{
    font-size: 0.85rem;
  }
  .tiny-last-p{
    font-size: 0.75rem;
    margin-bottom: unset;
  }
  @media (min-width: 768px){
    .phone-email-box{
      flex-direction: row;
      font-size: 1rem;
      justify-content: center;
    }
  }
`
export default Footer;
