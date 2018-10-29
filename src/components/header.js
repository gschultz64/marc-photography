import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#344257',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        height: '12vh',
        padding: '1rem 0.1rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#f0de91',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation/>
    </div>
  </div>
)

export default Header
