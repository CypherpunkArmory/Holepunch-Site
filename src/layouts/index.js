import React from 'react'
import PropTypes from 'prop-types'

import '../styles/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Transition from '../components/Transition'

const Layout = ({ children, location }) => {
  const hasCta = location.pathname !== '/download'
  const isDocs = !!location.pathname.match(/^\/docs/)

  return isDocs ? (
    <div className="page">
      <NavBar location={location} />
      <Transition location={location}>{children}</Transition>
    </div>
  ) : (
    <div className="page">
      <NavBar location={location} />
      <Transition location={location}>{children}</Transition>
      <Footer cta={hasCta} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
