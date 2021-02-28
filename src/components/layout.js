import React from "react"

import { Navbar, Sidebar, Footer } from "./Complete"
import "./layout.css"

import { useGlobalContext } from '../context/context'


const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const {closeSubmenu} = useGlobalContext()

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }

  return (
    <>
      <Navbar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{margin:`0 auto`,maxWidth:960,padding:`.1rem 1.0875rem 1.45rem`,}}
        onMouseOver={closeSubmenu} oFocus={closeSubmenu}>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
