import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['holepunch', 'application', 'tunneling']} />
    <Hero>
      <h1>Hi</h1>
      <p>
        Holepunch site.
      </p>
    </Hero>
  </Layout>
)

export default IndexPage
