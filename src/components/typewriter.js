import React from "react"
import Typewriter from 'typewriter-effect';

const TypewriterPage = () => (
    <div className='col-12 d-flex mb-3' id='typewriter_page'>
        <div>Beyond&nbsp;</div>
        <Typewriter
            options={{
                strings: ['website uptime monitoring', 'page speed checkin', 'error & broken page alerts', 'user experience optimisation', 'technical SEO'],
                autoStart: true,
                loop: true,
            }}
        />
    </div>
)

export default TypewriterPage