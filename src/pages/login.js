import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const loginPage = () => (
  <Layout>
    <SEO title="Holepunch Login" />
    <p>Welcome to login page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default loginPage