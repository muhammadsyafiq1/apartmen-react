import React from 'react'
import BrandIcon from './IconText'
import Button from 'components/Button'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

export default function Header(props) {

    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? " active" : "";
    };

    if(props.isCentered)
      return(
        <Fade>
          <div className="spacing-sm header">
            <div className="container">
              <div className="navbar navbar-expand-lg navbar-light">
                <Button className="brand-text-icon mx-auto" href="" type="link">
                  Apart<span className="text-gray-900">ment</span>
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      )

    return (
      <Fade>
      <div className="header">
        <div className="container">
          <Navbar expand="lg">
          <BrandIcon />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="navbar-nav mr-auto">
                  <li className={`nav-item${getNavLinkClass("/")}`}>
                    <Button className="nav-link" type="link" href="/">
                      Home
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                    <Button className="nav-link" type="link" href="/browse-by">
                      Browse By
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/stories")}`}>
                    <Button className="nav-link" type="link" href="/stories">
                      Stories
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/agents")}`}>
                    <Button className="nav-link" type="link" href="/agents">
                      Agents
                    </Button>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    </div>
    </Fade>
    )
}

