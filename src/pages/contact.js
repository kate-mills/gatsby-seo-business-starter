import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO, ContactForm, Banner } from "../components/Complete"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Unique contact page description goes here."
        image={data.seoImg.childImageSharp.fluid.src}
      />
      <Banner title="Contact Us" subtitle="Please call, text or use the form below to get in touch." />
      <ContactForm/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "pink-astronaut.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default Contact
