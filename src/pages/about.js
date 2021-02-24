import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import { SEO, Banner } from "../components/Complete"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Unique about page description goes here."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <Banner title="About Us" subtitle="Welcome to the About us page.">
        <Link to="/">Go back to the homepage</Link>
        <Image />
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
export default About
