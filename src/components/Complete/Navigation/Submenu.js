import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../../context/context'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show` : `submenu hide`}`}
      ref={container}>
      <section>
        <div className={`submenu-center columns`}>
          {links.map((link, index) => {
            const {path , page } = link
            return (
              <Link key={index} to={path} className={`sublink`}
                onClick={closeSubmenu}
              >
                {page}
              </Link>
            )
          })}
        </div>
      </section>
    </SubmenuWrapper>
  )
}

const SubmenuWrapper = styled.aside`
  & {
    background: var(--grey);
    padding: 0 1.2rem;
    position: absolute;
    transform: translateX(-50%) translateY(21%);
  }
  &.submenu.hide { display: none; }
  &.submenu.show {
    display: unset;
    border: 1px solid #ccccccbb;
  }
  & .sublink{
    display: block;
    border-bottom: 2px solid transparent;
    padding: 0.7rem 0;
    text-align: center;
  }
  &.submenu.show  .sublink:last-of-type {
    margin-bottom: 0.3rem;
  }
  & .sublink:hover{
    border-bottom: 2px solid var(--black);
  }
`
export default Submenu
