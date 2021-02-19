import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {SEO} from "../components/Complete"

const Contact = ({data}) => {
  return (
  <Layout>
    <SEO
      title="Contact Us" 
      description="Unique contact page description goes here."
      image={data.seoImg.childImageSharp.fluid.src}
    />
    <h1>Contact Us</h1>
    <p>Welcome to Contact us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export const query = graphql`
  {
    seoImg: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`


export default Contact;
