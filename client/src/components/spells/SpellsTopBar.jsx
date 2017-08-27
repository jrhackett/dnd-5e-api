import React from 'react'
import PropTypes from 'prop-types'

const SpellsTopBar = ({ numberOfSpells, isLoading, onFilterLevelClick, onFilterClear }) => {
  if(isLoading)
    return null
  return (
    <span>
      <span>{ numberOfSpells } total</span>
      <a onClick={e => {
          e.preventDefault()
          onFilterLevelClick('0')
        }}
      >
        See all cantrips
      </a>

      <a onClick={e => {
          e.preventDefault()
          onFilterClear()
        }}
      >
        Clear Filters
      </a>
    </span>
  )
}

SpellsTopBar.propTypes = {
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFilterLevelClick: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellsTopBar
