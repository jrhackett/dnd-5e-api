import React from 'react'
import { css } from 'react-emotion'

const footerWrapper = css`
  display: flex;
  flex-wrap: wrap;
  background: #6C57E6;
  padding: 10px 15px;
  margin-top: 1rem;

  p {
    color: #fefefe;
  }
`

const Footer = () => (
  <div className={ footerWrapper }>
    <p>Spellslot &copy; Jacob Hackett</p>
    <p>Wizards of the Coast, Dungeons & Dragons, D&D, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. &copy; 2017 Wizards. All Rights Reserved. Spellslot is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.</p>
  </div>
)

export default Footer