import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellFiltersContainer from '../../containers/spells/filters/SpellFiltersContainer'
import SpellsSearchBar from './SpellsSearchBar'

const SpellsTopBar = ({ title, numberOfSpells, isLoading, onSearchChange, onShowFilters }) => {
  if(isLoading)
    return null

  // TODO make this a flexbox construct to better align items
  return (
    <div>
      <div className="container spells-header">
        <div className="spells-header-left">
          <h1>{ title }</h1>
          <span>{ numberOfSpells } total</span>
        </div>
        <div className="spells-header-right">
          <SpellsSearchBar onTermChange={onSearchChange} />
          <a className="btn btn-default btn-filter" onClick={e => {
              e.preventDefault()
              onShowFilters()
            }}
          >
            <span>Filter</span> <Icon name="filter"></Icon>
          </a>
        </div>
      </div>
      <SpellFiltersContainer />
    </div>
  )
}

SpellsTopBar.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onShowFilters: PropTypes.func.isRequired
}

export default SpellsTopBar
