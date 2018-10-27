import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <div
          style={{
            display: 'flex',
            // padding: '0px 1.0875rem 1.45rem',
            // paddingTop: 0,
          }}
        >
          <Navbar />

          <div style={styles.main}>
            <div style={ styles.children }> {children} </div>
            <Footer />
          </div>

        </div>

      </>
    )}
  />
)

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '88vh'
  },
  children: {
    width: '85vw',
    background: 'royalblue',
    flex: 1
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
