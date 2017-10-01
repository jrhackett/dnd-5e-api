import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellFiltersContainer from '../../containers/spells/filters/SpellFiltersContainer'
import SpellsSearchBar from './SpellsSearchBar'

const SpellsTopBar = ({ numberOfSpells, isLoading, onSearchChange, onShowFilters }) => {
  if(isLoading)
    return null
  return (
    <span>
      <span>{ numberOfSpells } total</span>
        <span className="topbar-right">
          <SpellsSearchBar onTermChange={onSearchChange} />
          <a className="btn btn-default btn-filter" onClick={e => {
              e.preventDefault()
              onShowFilters()
            }}
          >
            <span>Filter</span> <Icon name="filter"></Icon>
          </a>
        </span>
      <SpellFiltersContainer />
    </span>
  )
}

SpellsTopBar.propTypes = {
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onShowFilters: PropTypes.func.isRequired
}

export default SpellsTopBar
