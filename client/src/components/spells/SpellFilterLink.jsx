import React from 'react'
import PropTypes from 'prop-types'

const SpellFilterLink = ({ text, onClick }) => {
  return (
    <span>
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
  onClick: PropTypes.func.isRequired
}

export default SpellFilterLink
