import React from "react"

import Layout from "../components/layout"
import { SEO, Banner, FixedImage, Btn } from "../components/Complete"

const IndexPage = () => (
  <Layout>
    <SEO title="Nested1" />
    <Banner title="Nested 1" subtitle="Welcome to your new Gatsby site.  Now go build something great!">
      <FixedImage />
      <Btn
        to="/contact"
        text="Contact us"
        backgroundColor="var(--grey)"
        color="var(--black)"
        hoverColor="coral"
        hoverBackground="hotpink"
      />
    </Banner>
  </Layout>
)

export default IndexPage
