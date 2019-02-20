import React from 'react'

import content from '../content/email_confirmed'

import SEO from '../components/seo'

const emailConfirmedPage = () => (
  <>
    <SEO title="Holepunch Email Confirmed" />
    <div className="container page__header">
      <h2>{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
  </>
)

export default emailConfirmedPage
