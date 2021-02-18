import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>Welcome to About us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default About;