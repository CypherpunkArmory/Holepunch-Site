import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const downloadPage = () => (
  <Layout>
    <SEO title="Holepunch Download" />
    <p>Welcome to Download page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default downloadPage