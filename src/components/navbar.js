import React, {useEffect, useState} from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav} from "react-bootstrap"
import NavbarButton from './navbarToggleButton'
import GetStartedButton from './getStartedButton'
import "../styles/navbar.css"

const NavbarPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  const [path, setPath] = useState(null);
  const [scrolTop, setScrolTop] = useState(false)

  useEffect(() => {
    setPath(window?.location.pathname);
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        setScrolTop(true);
      } else setScrolTop(false);
    })
  }, [])

  const menuLinks=data.site.siteMetadata.menuLinks;

  return (
  <Navbar variant="light" expand="lg" fixed="top" className='bg-white' style={{boxShadow: scrolTop ? '0 4px 6px 0 rgb(12 0 46 / 6%)' : 'none'}}>
    <div className='container margin-auto'>
      <Link to="/" className="link-no-style mt-2">
        <Navbar.Brand as="span">
          <StaticImage
            src="../images/logo.svg"
            alt='logo'
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle>
        <NavbarButton/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {menuLinks?.map(menuLink => 
            <Link key={menuLink.name} to={menuLink.link}>
              <Nav.Link as="span" eventKey={menuLink.link} className={path?.includes(menuLink.link) ? 'active-link' : ''}>
                {menuLink.name}
              </Nav.Link>
            </Link>
          )}
        </Nav>
        <Nav>
          <GetStartedButton />
          <Link to='/login' className='text-decoration-none text-dark mt-2' style={{fontSize: '15px'}}>Login</Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)}

Navbar.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
}

Navbar.defaultProps = {
  name: '',
  link: ''
}

export default NavbarPage
