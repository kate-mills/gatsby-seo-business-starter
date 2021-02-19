import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../../../constants/links"

const Navbar = props => {
  const [isOpen, setIsOpen] = useState()

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <Link to={`/`} className={styles.title}>
              {props.siteTitle}
            </Link>

            <button
              type="button"
              className={styles.toggleBtn}
              onClick={toggleNav}
            >
              <FaAlignRight
                aria-label="Right align"
                className={styles.toggleIcon}
              />
            </button>
          </div>
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks} ${styles.hideNav}`
            }
          >
            {links.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.page}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
