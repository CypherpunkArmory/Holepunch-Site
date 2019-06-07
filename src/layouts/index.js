import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Transition from '../components/Transition'

const Layout = ({ children, location }) => {
  const hasCta = location.pathname !== '/download'
  const isDocs = !!location.pathname.match(/^\/docs/)

  return (
    <StaticQuery
      query={graphql`
        query SiteConfigQuery {
          site {
            siteMetadata {
              title
              menu {
                name
                route
              }
              siteMaintenance
            }
          }
        }
      `}
      render={data =>
        isDocs ? (
          <div className="page">
            <NavBar
              location={location}
              routes={data.site.siteMetadata.menu}
              siteMaintenance={data.site.siteMetadata.siteMaintenance}
            />
            <Transition location={location}>{children}</Transition>
          </div>
        ) : (
          <div className="page">
            <NavBar
              location={location}
              routes={data.site.siteMetadata.menu}
              sticky={true}
              siteMaintenance={data.site.siteMetadata.siteMaintenance}
            />
            <Transition location={location}>{children}</Transition>
            <Footer cta={hasCta} />
          </div>
        )
      }
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
