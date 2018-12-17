import React, { Component } from 'react'
import Logo from '../Logo'
import { Link } from 'gatsby'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.navRoutes = ['features', 'download', 'docs', 'login']
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Navbar color="none" light fixed="top" expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/" aria-label="home">
            <Logo />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.navRoutes.map(route => (
                <NavItem>
                  <NavLink
                    className="text-capitalize"
                    key={route}
                    tag={Link}
                    to={`/${route}`}
                  >
                    {route}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar
