import React, {useState, useEffect} from "react"
import Navbar from "./navbar"

const Header = () => {
  
  return (
    <header
      style={{
        background: `#FFFFFF`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
        className='container'
      >
          <Navbar />
      </div>
    </header>
)}

export default Header
