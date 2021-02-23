import React from "react"

import {Link} from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/Complete"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Success" />
    <h1>Success!  We received your submission.</h1>
    <p>We will contact you as soon as we get the chance.</p>
    <p><Link to="/">Back Home</Link></p>
  </Layout>
)

export default NotFoundPage
