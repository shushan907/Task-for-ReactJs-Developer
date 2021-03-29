import React from "react"
import Typewriter from 'typewriter-effect';

const TypewriterPage = () => (
    <>
        <div>Beyond&nbsp;</div>
        <Typewriter
            options={{
                strings: ['website uptime monitoring', 'page speed checkin', 'error & broken page alerts', 'user experience optimisation', 'technical SEO'],
                autoStart: true,
                loop: true,
            }}
        />
    </>
)

export default TypewriterPage