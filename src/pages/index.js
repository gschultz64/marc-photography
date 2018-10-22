import React from 'react'
import { Link } from 'gatsby'
import Checkout from '../components/checkout'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <Checkout />
      <Link to="/about/">Go to About Page</Link>
      <br/>
      <Link to="/store/">Go to the second link</Link>
      <br/>
      <Link to="/store/">Go to another link</Link>
      <br/>
      <Link to="/store/">Go to a fourth page</Link>
    </div>
  </Layout>
)

export default IndexPage
