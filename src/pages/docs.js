import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const docsPage = () => (
  <Layout>
    <SEO title="Holepunch Documentation" />
    <p>Welcome to Documentation page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default docsPage