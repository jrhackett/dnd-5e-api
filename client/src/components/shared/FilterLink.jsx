import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const filter = css`
  margin-right: 0.5rem;
  border-radius: 2px;
`

// TODO fix this important and btns in general
const activeStyle = css`
  border-color: #7E69FA !important;
`

const SpellFilterLink = ({ text, active, onClick }) => {
  return (
    <span className={ filter }>
      <a className={ cx('btn', 'btn-default', {[activeStyle]: active }) } onClick={ (e) => {
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