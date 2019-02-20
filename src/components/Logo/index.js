import React from 'react'

import logo from '../../images/Holepunch-Icon.png'
import logoFull from '../../images/holepunch-logo.svg'

export default function Logo({ className, simplified }) {
  return (
    <>
      <img
        className={"img-fluid " + className}
        src={simplified ? logo : logoFull}
        alt="Holepunch Logo"
      />
    </>
  )
}
