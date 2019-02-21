import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Button from '../Button'
import Logo from '../Logo'

function Footer({ cta, ...rest }) {
  return (
    <footer styleName="footer" {...rest}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div styleName="footer__logo">
              <Logo />
            </div>
          </div>
          <div styleName="footer__cta" className="col-12">
            <p>No Cloud, No Problem</p>
            {cta && (
              <Button icon tag={Link} to="/download">
                Get Started
              </Button>
            )}
          </div>
          <nav
            styleName="footer__nav"
            className="navbar col-12 offset-lg-2 col-lg-3 order-md-2"
          >
            <ul className="flex-row navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/privacy">
                  privacy policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eula">
                  EULA
                </Link>
              </li>
            </ul>
          </nav>
          <nav
            styleName="footer__nav"
            className="navbar col-12 col-lg-3 order-md-3"
          >
            <ul className="flex-row navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-label="twitter"
                  href="https://twitter.com/holepunchio"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-label="github"
                  href="https://github.com/CypherpunkArmory/holepunch"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </nav>
          <small
            styleName="footer__copy"
            className="col-12 col-lg-4 order-md-1"
          >
            &copy; Holepunch, All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  cta: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
}

Footer.defaultProps = {
  cta: true,
}

export default Footer
