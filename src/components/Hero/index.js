import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './hero.module.scss'

import Button from '../Button'
import Particles from './particles'

export default function Hero({ children, className, head, subhead }) {
  return (
    <header styleName="hero" className={className}>
      <Particles />
      <div className="container">
        <div styleName="hero__head">
          <h1>{head}</h1>
          {subhead && <p>{subhead}</p>}
        </div>
        <Button icon tag={Link} to="/download">
          Get Started
        </Button>
        {children}
      </div>
    </header>
  )
}

Hero.propTypes = {
  head: PropTypes.string.isRequired,
  subhead: PropTypes.string,
  children: PropTypes.node,
}
