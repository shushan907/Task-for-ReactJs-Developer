import React from "react"

const GetStartedButton = ({title}) => (
    <button className='get-started-button mr-2'>
        {title ? title : 'Get Started for Free'}
    </button> 
)

export default GetStartedButton
