import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/store">Store</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
}

export default Navigation
