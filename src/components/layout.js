import React from "react"

import { Navbar, Sidebar } from "./Complete"
import "./layout.css"


const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }

  return (
    <>
      <Navbar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
