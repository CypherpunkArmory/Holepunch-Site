import React from 'react'

import content from '../content/features'

import SEO from '../components/seo'

const featuresPage = () => (
  <>
    <SEO title="Holepunch Features" />
    <div className="container page__header">
      <h2>{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
    <div className="container features">
      <ul>
        {content.features.map((feature, i) => {
          return (
            <li key={i}>
              <img src={feature.icon} alt={feature.title + " icon"} />
              <div>
                <h6>{feature.title}</h6>
                <p>{feature.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  </>
)

export default featuresPage
