import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => (
  <nav style={styles.nav}>
    <Link to='/test' style={styles.navLink}>Home</Link>
    <Link to='/' style={styles.navLink}>About</Link>
    <Link to='/test' style={styles.navLink}>Store</Link>
  </nav>
)

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    width: '15vw',
    background: 'rgb(219, 178, 208)',
    paddingTop: '1em',
    paddingLeft: '1em'
  },
  navLink: {
    marginBottom: '1em',
    textDecoration: 'none',
  }
}


export default Navbar
