import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typewriter from '../components/typewriter'
import HexometerInformation from '../components/hexometrInformation'

const IndexPage = () => (
  <Layout>
    <SEO title="Hexometer" />
    <div className='row'>
      <Typewriter />
      <HexometerInformation />
      <div className='col-12 col-md-6'>
        <StaticImage
          src="../images/grafics.png"
          alt='grafics'
        />
      </div>
      <div className='col-12'>
        Trusted by 15,000+ businesses & compatible with over 100+ platforms
      </div>
      <div className='col-12'>
      </div>
      <div className='col-12 col-md-6'>
        <div className='row'>
          <div className='col-12 col-md-6'>

          </div>
          <div className='col-12 col-md-6'>

          </div>
          <div className='col-12 col-md-6'>

          </div>
          <div className='col-12 col-md-6'>

          </div>
        </div>
      </div>
      <div className='col-12 col-md-6'>

      </div>
    </div>
  </Layout>
)

export default IndexPage
