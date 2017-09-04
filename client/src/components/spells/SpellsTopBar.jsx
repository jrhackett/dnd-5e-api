import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellFiltersContainer from '../../containers/spells/SpellFiltersContainer'

const SpellsTopBar = ({ numberOfSpells, isLoading, onShowFilters }) => {
  if(isLoading)
    return null
  return (
    <span>
      <span>{ numberOfSpells } total</span>
      <a className="btn btn-default btn-filter" onClick={e => {
          e.preventDefault()
          onShowFilters()
        }}
      >
        <span>Filter</span> <Icon name="filter"></Icon>
      </a>
      <SpellFiltersContainer />
    </span>
  )
}

SpellsTopBar.propTypes = {
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onShowFilters: PropTypes.func.isRequired
}

export default SpellsTopBar
