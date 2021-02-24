import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, Banner, FluidImage } from "../components/Complete"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Unique about page description goes here."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <Banner title="About Us" subtitle="Welcome to the About us page.">
        <FluidImage maxWidth="220px" fluid={data.seoImg.childImageSharp.fluid}/>
        <Link to="/">Go back to the homepage</Link>
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth:220) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default About
