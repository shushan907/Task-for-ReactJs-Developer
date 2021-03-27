import React from "react"
import {Link} from "gatsby"
import GetStartedButton from './getStartedButton'

const LoginGetStartedButton = ({className}) => (
    <div className={className}>
        <GetStartedButton />
        <Link to='/login' className='text-decoration-none text-dark mt-2' style={{fontSize: '15px'}}>Login</Link>
    </div>
)

export default LoginGetStartedButton