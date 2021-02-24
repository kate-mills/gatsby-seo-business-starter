import React from "react"

import {Link} from "gatsby"
import Layout from "../components/layout"
import { SEO, Banner } from "../components/Complete"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Success" />
    <Banner title="Success!" subtitle="Your submission was received! We'll be in contact shortly.">
      <Link to="/">Go back to the home page.</Link>
    </Banner>
  </Layout>
)

export default NotFoundPage
