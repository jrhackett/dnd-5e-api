import React from 'react'
import PropTypes from 'prop-types'

const SpellsTopBar = ({ numberOfSpells, isLoading }) => {
  if(isLoading)
    return null
  return <span>{ numberOfSpells } total</span>
}

SpellsTopBar.propTypes = {
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default SpellsTopBar
