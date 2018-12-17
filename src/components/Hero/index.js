import React from 'react'
import styles from './Hero.module.scss'

export default function Hero({ children }) {
  return (
    <header className={styles.hero}>
      <div className="container">{children}</div>
    </header>
  )
}
