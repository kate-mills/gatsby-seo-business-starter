import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.svg'
import { FaTimes } from 'react-icons/fa'
import {Link} from "gatsby"
import links from '../../../constants/links'
import {PhoneNumber} from '../ContactInfo'

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="hide & wild logo" width="136px" height="45px"/>
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(link => {
            return (
              <li key={link.id}>
                {' '}
                <Link to={link.path} onClick={toggleSidebar}>
                  {link.page}
                </Link>
              </li>
            )
          })}
          <li className="tel-wrapper">
            <PhoneNumber/>
          </li>
          <li>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    color: var(--black);
    cursor: pointer;
    font-size: 2rem;
    margin-top: 0.2rem;
    outline: none;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--darkGrey);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    margin-right: 1.5rem;
    color: var(--black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--grey);
    color: var(--black);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .tel-wrapper {
    text-align: left;
    margin: 1rem 1.5rem;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar