import React from 'react'
import { css } from 'react-emotion'
import { Link } from 'react-router-dom'
import colors from '../styles/colors'

const navbar = css`
  width: 100%;
  background-color: ${ colors.purple };
  display: flex;
  justify-content: flex-start;

  a {
    color: ${ colors.white };
    padding: 1rem 2rem;

    &:hover {
      background-color: ${ colors.lightPurple };
    }

    &:hover, &:focus, &:active, &:visited {
      color: ${ colors.white };
      text-decoration: none;
    }
  }
`

const items = css`
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-bottom: 0;
`

const Navigation = () => (
  <nav className={ navbar }>
    <Link to="/">Spellslot</Link>
    <div className={ items }>
      <Link to="/">Spells</Link>
      <Link to="/spellbook">Spellbook</Link>
    </div>
  </nav>
)

export default Navigation
