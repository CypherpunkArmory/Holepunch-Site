import React from 'react'

import content from '../content/email_sent'

import SEO from '../components/seo'

const emailSentPage = () => (
  <>
    <SEO title="Holepunch Confirmation Email Sent" />
    <div className="container page__header">
      <h2>{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
  </>
)

export default emailSentPage
