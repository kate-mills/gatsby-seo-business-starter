import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {SEO} from "../components/Complete"

const About = ({data}) => {
  return (
  <Layout>
    <SEO
      title="About Us" 
      description="Unique about page description goes here."
      image={data.seoImg.childImageSharp.fluid.src}
    />
    <h1>About Us</h1>
    <p>Welcome to About us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}


export const query = graphql`
  {
    seoImg: file(relativePath: {eq: "gatsby-icon.png"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
export default About;
