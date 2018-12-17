import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const featuresPage = () => (
  <Layout>
    <SEO title="Holepunch Features" />
    <p>Welcome to features page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default featuresPage