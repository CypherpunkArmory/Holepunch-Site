import React from 'react'

import logo from '../../images/holepunch-Icon.png'
import logoFull from '../../images/Holepunch-logo.svg'

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