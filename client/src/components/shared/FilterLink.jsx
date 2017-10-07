import React from 'react'
import PropTypes from 'prop-types'

const SpellFilterLink = ({ text, active, onClick }) => {
  return (
    <span className={active ? 'active' : ''}>
      <a className="btn btn-default" onClick={e => {
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