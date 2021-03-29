import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from '../components/homePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Hexometer" />
    <HomePage />
  </Layout>
)

export default IndexPage
