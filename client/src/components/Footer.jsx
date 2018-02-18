import React from 'react'
import { css } from 'react-emotion'

const footerWrapper = css`
  display: flex;
  flex-wrap: wrap;
  background: #6C57E6;
  padding: 1rem 2rem;
  margin-top: calc(20px + 2rem); 

  p {
    color: #fefefe;
    margin: 0.5rem 0;
    font-size: 1rem;
    flex-basis: 100%;
  }
`

const Footer = () => (
  <div className={ footerWrapper }>
    <p>Spellslot &copy; Jacob Hackett, 2018</p>
    <p>Wizards of the Coast, Dungeons & Dragons, D&D, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. &copy; 2018 Wizards. All Rights Reserved. Spellslot is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.</p>
  </div>
)

export default Footer
