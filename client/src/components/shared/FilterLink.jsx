import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'
import buttonStyles from '../../styles/button.js'

const filter = css`
  margin-right: 0.5rem;
  border-radius: 2px;
`

const SpellFilterLink = ({ text, active, onClick }) => {
  return (
    <span className={ filter }>
      <a className={ cx(buttonStyles.btn, buttonStyles.default, {[buttonStyles.active]: active }) } onClick={ (e) => {
          e.preventDefault()
          onClick(text)
        }}
      >
        { text }
      </a>
    </span>
  )
}

SpellFilterLink.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SpellFilterLink