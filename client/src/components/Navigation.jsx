import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav className="navbar">
    <ul className="nav">
      <li className="item"><Link to="/">Spells</Link></li>
      <li className="item"><Link to="/spellbook">Spellbook</Link></li>
      <li className="item"><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
)

export default Navigation
