import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../styles/style.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div className='container pt-3'>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
