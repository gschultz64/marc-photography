import React from 'react'
import { Link } from 'gatsby'
import Checkout from '../components/checkout'

import Layout from '../components/layout'

const Store = () => (
  <Layout>
    <h1>Hi from the store page</h1>
    <Checkout />
    <Link to="/"> Go back to the homepage </Link>
  </Layout>
)

export default Store
