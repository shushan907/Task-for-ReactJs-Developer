import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from '../components/homePage'

const IndexPage = () =>{
  const [windowObject, setWindowObject] = useState(null)
  useEffect(() => {
    window && setWindowObject(window)
  }, [])
  
  if (!windowObject) return null
  return(
    <Layout>
      <SEO title="Hexometer" />
      <HomePage />
    </Layout>
)}

export default IndexPage
