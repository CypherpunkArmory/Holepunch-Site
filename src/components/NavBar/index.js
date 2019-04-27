import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import classnames from 'classnames'

import './navbar.module.scss'

import Logo from '../Logo'
import Collapse from './Collapse'
import Sticky from './Sticky'
import Nav from './Nav'

import { getIsLoggedIn } from '../../redux/ducks/account/selectors'
import { performLogout } from '../../redux/ducks/account/actions'

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    routes: PropTypes.array,
    isOpen: PropTypes.bool,
    close: PropTypes.func,
    toggle: PropTypes.func,
  }

  static defaultProps = {
    routes: [{ name: 'Home', route: '/' }],
    sticky: false,
  }

  render() {
    const { boundaryRef, toggle, close, isOpen, scrolled, sticky } = this.props
    const { location, isLoggedIn, logout } = this.props
    let { routes } = this.props

    routes = isLoggedIn
      ? routes
          .filter(item => ['Login'].indexOf(item.name) === -1)
          .filter(item => ['Sign up'].indexOf(item.name) === -1)
      : routes

    return (
      <nav
        styleName={classnames('navbar', {
          navbar_open: isOpen,
          navbar_scrolled: scrolled,
          navbar_sticky: sticky,
        })}
        id="main-nav"
        ref={boundaryRef}
      >
        <div className="container">
          <div styleName="navbar__controls">
            <Link
              styleName="brand"
              to="/"
              title="Holepunch Home"
              aria-label="home"
            >
              <Logo simplified={scrolled} />
            </Link>
            <button styleName="btn" onClick={toggle} aria-label="menu">
              <div styleName="btn__bars">
                <span styleName="btn__bar" />
                <span styleName="btn__bar" />
                <span styleName="btn__bar" />
              </div>
            </button>
          </div>
          <Nav routes={routes} handlesOnClick={close} location={location}>
            {isLoggedIn && (
              <>
                <li>
                  <Link styleName="nav__link" to="/account/overview" onClick={close}>
                    My Account 
                  </Link>
                </li>
                <li>
                  <Link
                    tag={Link}
                    to="/"
                    styleName="nav__link"
                    onClick={() => {
                      close()
                      logout()
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </Nav>
        </div>
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
)(Sticky(Collapse(NavBar)))
