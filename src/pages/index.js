import React from "react"

import Layout from "../components/layout"
import { SEO, Banner, FixedImage } from "../components/Complete"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner title="Home Page" subtitle="Welcome to your new Gatsby site.  Now go build something great!">
      <FixedImage />
    </Banner>
  </Layout>
)

export default IndexPage
