import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout>
    <SEO title="Pricing" />
    <h1>Pricing</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
