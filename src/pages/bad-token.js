import React from 'react'

import content from '../content/badToken'

import SEO from '../components/seo'

const badTokenPage = () => (
  <>
    <SEO title="Holepunch Bad Token Received" />
    <div className="container page__header">
      <h2>{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
  </>
)

export default badTokenPage
