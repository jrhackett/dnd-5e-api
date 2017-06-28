import React from 'react'
import PropTypes from 'prop-types'

const Spell = ({ name, id }) => (
  <p>{name}</p>
)

Spell.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Spell