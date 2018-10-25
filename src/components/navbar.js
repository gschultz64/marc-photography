import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => (
  <nav style={styles.nav}>
    <Link to='/'>Home</Link>
    <Link to='/test'>Test</Link>
  </nav>
)

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    width: '15vw',
    background: 'yellow'
  }
}


export default Navbar
