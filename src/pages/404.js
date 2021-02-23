import React from "react"

import {Link} from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/Complete"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <h1>Oops!</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default NotFoundPage
