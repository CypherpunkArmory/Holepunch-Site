import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { Container, NavLink } from 'reactstrap'

import './navbar.module.scss'

import Logo from '../Logo'

import { getIsLoggedIn } from '../../redux/ducks/account/selectors'
import { performLogout } from '../../redux/ducks/account/actions'

class NavBar extends Component {
  navItems = [
    { name: 'Features', route: '/features' },
    { name: 'Download', route: '/download' },
    { name: 'Docs', route: '/docs' },
    { name: 'Login', route: '/login' },
  ]
  navRef = React.createRef()

  state = {
    isOpen: false,
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY
    const elemScrollHeight = this.navRef.current.clientHeight

    if (currentScrollY > elemScrollHeight) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  handleClickOutside = event => {
    if (
      this.state.isOpen &&
      this.navRef &&
      !this.navRef.current.contains(event.target)
    ) {
      this.close()
    }
  }

  toggle = () => {
    document.body.classList.toggle('no-scroll')

    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  close = () => {
    document.body.classList.remove('no-scroll')

    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { scrolled, isOpen } = this.state
    const { location, isLoggedIn, logout } = this.props
    let { navItems } = this
    navItems = isLoggedIn
      ? navItems.filter(item => ['Login'].indexOf(item.name) === -1)
      : navItems

    return (
      <nav
        styleName={classnames('navbar', {
          navbar_scrolled: scrolled,
          navbar_open: isOpen,
        })}
        ref={this.navRef}
      >
        <Container>
          <Link
            styleName="brand"
            to="/"
            title="Holepunch Home"
            aria-label="home"
          >
            <Logo styleName="brand" simplified={scrolled} />
          </Link>
          <button styleName="btn" onClick={this.toggle} aria-label="menu">
            <div styleName="btn__bars">
              <span styleName="btn__bar" />
              <span styleName="btn__bar" />
              <span styleName="btn__bar" />
            </div>
          </button>
          <ul styleName="nav">
            {navItems.map(item => {
              return (
                <li key={item.name}>
                  <NavLink
                    className={classnames({
                      active: location.pathname.indexOf(item.route) > -1,
                    })}
                    tag={Link}
                    to={item.route}
                    onClick={this.close}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            })}
            {isLoggedIn && (
              <>
                <li>
                  <NavLink tag={Link} to="/app/home" onClick={this.close}>
                    My Key
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    tag={Link}
                    to="/"
                    onClick={() => {
                      this.close()
                      logout()
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Container>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: getIsLoggedIn(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(performLogout.request())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
