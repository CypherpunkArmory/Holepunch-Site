import React, { Component } from 'react'
import classnames from 'classnames'

import './sidebar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBook } from '@fortawesome/free-solid-svg-icons'

import RecursiveMenu from './RecursiveMenu'
import Logo from '../Logo'
import Collapse from './Collapse'

class Sidebar extends Component {
  state = {
    scrolled: false,
    top: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const target = document.getElementById('main-nav')
    this.setState({ top: target.clientHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const target = document.getElementById('main-nav')
    const currentScrollY = window.scrollY

    if (currentScrollY > target.clientHeight) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false, top: target.clientHeight })
    }
  }

  render() {
    const { routes, isOpen, close, toggle, boundaryRef } = this.props
    const { scrolled } = this.state

    return (
      <aside
        styleName={classnames('sidebar', {
          sidebar_open: isOpen,
          sidebar_scrolled: scrolled,
        })}
        style={{ top: this.state.top }}
        ref={boundaryRef}
      >
        <Logo styleName="sidebar__brand" />
        <button
          styleName="sidebar__btn"
          onClick={toggle}
          aria-label="documentation button"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBook} />
          )}
        </button>
        <RecursiveMenu navClose={close} routes={routes} />
      </aside>
    )
  }
}

export default Collapse(Sidebar)
