import React from 'react'
import { Link } from 'gatsby'
import Checkout from '../components/checkout'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Checkout />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
