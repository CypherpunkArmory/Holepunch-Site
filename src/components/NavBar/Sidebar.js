import React, { Component } from 'react'
import classnames from 'classnames'

import './navbar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBook } from '@fortawesome/free-solid-svg-icons'

import RecursiveMenu from './RecursiveMenu'
import Logo from '../Logo'

export default class Sidebar extends Component {
  navRef = React.createRef()
  state = {
    isOpen: false,
    scrolled: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  close = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { routes } = this.props
    const { isOpen, scrolled } = this.state

    return (
      <aside
        className="fixed"
        styleName={classnames('sidebar', {
          sidebar_scrolled: scrolled,
          sidebar_open: isOpen,
        })}
        ref={this.navRef}
      >
        <Logo styleName="brand" />
        <button
          styleName="btn"
          onClick={this.toggle}
          aria-label="documentation button"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBook} />
          )}
        </button>
        <RecursiveMenu navClose={this.close} routes={routes} />
      </aside>
    )
  }
}
