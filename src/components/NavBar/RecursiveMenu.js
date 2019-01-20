import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './navbar.module.scss'

import { Collapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

class RecursiveMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    routes: PropTypes.array,
    navClose: PropTypes.func.isRequired,
  }

  render() {
    const { routes, className, navClose } = this.props

    return (
      <ul styleName="sidebar__menu" className={className}>
        {routes.map(route => {
          return (
            <RecursiveMenuItem
              navClose={navClose}
              key={route.href}
              route={route}
              className={className}
            />
          )
        })}
      </ul>
    )
  }
}

class RecursiveMenuItem extends Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    className: PropTypes.string,
    navClose: PropTypes.func.isRequired,
    route: PropTypes.object,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { route, className, navClose } = this.props

    return (
      <li>
        <div>
          <a href={route.href} onClick={navClose}>
            {route.name}
          </a>
          {route.routes && (
            <button styleName="sidebar__menu-btn" aria-label="toggle button" onClick={this.toggle}>
              <FontAwesomeIcon
                icon={this.state.isOpen ? faChevronUp : faChevronDown}
              />
            </button>
          )}
        </div>
        {route.routes && (
          <Collapse isOpen={this.state.isOpen}>
            <RecursiveMenu
              navClose={navClose}
              routes={route.routes}
              className={className}
            />
          </Collapse>
        )}
      </li>
    )
  }
}

export default RecursiveMenu
