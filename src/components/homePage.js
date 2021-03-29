import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from './typewriter'
import HexometerInformation from './hexometrInformation'
import Slick from './slick'
import Ratings from './allRatings'
import Carousel from './carousel'

const HomePage = () => (
    <div id='homePage' className='row'>
        <div id='typewriter_page' className='col-12 d-flex mb-3'>
            <Typewriter />
        </div>
        <div id='hexometer-info' className='col-12 col-md-6'>
            <HexometerInformation />
        </div>
        <div className='col-12 col-md-6'>
            <StaticImage
                src="../images/grafics.png"
                alt='grafics'
            />
        </div>
        <div className='col-12'>
            <p className='text-center my-3 main-info'>Trusted by 15,000+ businesses & compatible with over 100+ platforms</p>
        </div>
        <div className='col-12 my-5'>
            <Slick />
        </div>
        <div id='rating-container' className='col-12 col-md-6'>
            <Ratings />
        </div>
        <div className='col-12 col-md-6 mb-5'>
            <Carousel />
        </div>
    </div>
)

export default HomePage