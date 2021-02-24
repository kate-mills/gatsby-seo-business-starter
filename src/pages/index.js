import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import { SEO, Banner } from "../components/Complete"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <Banner title="Home Page" subtitle="Welcome to your new Gatsby site.  Now go build something great!" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
  </>
)

export default IndexPage
