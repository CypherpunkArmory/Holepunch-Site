import React from 'react'
import PropTypes from 'prop-types'

import NavBar from './NavBar'
import './normalize.css'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
