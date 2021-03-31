import React, {useEffect, useState} from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav} from "react-bootstrap"
import NavbarButton from './navbarToggleButton'
import LoginGetStartedButton from './loginGetStarted'

const NavbarPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              dropdown {
                name
                link
              }
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
      if(window.scrollY > 10){
        setScrolTop(true);
      } else setScrolTop(false);
    })
  }, [])

  const menuLinks = data.site.siteMetadata.menuLinks;

  return (
  <Navbar id='navbar-page' variant="light" expand="lg" fixed="top" className='bg-white' style={{boxShadow: scrolTop ? '0 4px 6px 0 rgb(12 0 46 / 6%)' : 'none'}}>
    <div className='container margin-auto'>
      <Link to="/" className="link-no-style mt-2">
        <Navbar.Brand as="span">
          <StaticImage
            src="../images/logo.svg"
            alt='logo'
          />
        </Navbar.Brand>
      </Link>
      <LoginGetStartedButton className='login-getStarted-show'/>
      <Navbar.Toggle>
        <NavbarButton/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {menuLinks?.map(menuLink => 
            <React.Fragment key={menuLink.name}>
              {!menuLink.dropdown ? 
                <Link to={menuLink.link}>
                  <Nav.Link as="span" eventKey={menuLink.link} className={path?.includes(menuLink.link) ? 'active-link' : ''}>
                    {menuLink.name}
                  </Nav.Link> 
                </Link>
                :
                <Link className="dropdown" to=''>
                  <Nav.Link>{menuLink.name}</Nav.Link>
                    <div className="dropdown-content">
                      {menuLink.dropdown?.map(item => (<Link key={item.name} to={item.link}>{item.name}</Link>))}
                    </div>
                </Link>
              }
            </React.Fragment>
          )}
        </Nav>
        <Nav>
          <LoginGetStartedButton className='login-getStarted-hide'/>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)}

export default NavbarPage
