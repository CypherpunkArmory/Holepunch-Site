import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

import '../styles/home.module.scss'

import content from '../content/home'
import SEO from '../components/seo'
import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" keywords={['holepunch', 'application', 'tunneling']} />
      <Hero head={content.head} subhead={content.subhead} />
      <div styleName="why" className="container page__header text-center">
        <h2>Why holepunch?</h2>
        <p>{content.why}</p>
      </div>
      <div styleName="how" className="container">
        <div styleName="how__body">
          <h2>How it works?</h2>
          <p dangerouslySetInnerHTML={{ __html: content.howItWorks }} />
        </div>
        <div styleName="how__media">
          <Img fluid={data.how.childImageSharp.fluid} />
        </div>
      </div>
      <div styleName="features" className="container">
        <ul>
          {content.features.map((feature, i) => (
            <li key={i}>
              <img src={feature.icon} alt={feature.title} />
              <div>
                <h6>{feature.title}</h6>
                <p>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/features">Check out more features.</Link>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    how: file(relativePath: { eq: "holepunch-how.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
