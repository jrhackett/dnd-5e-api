import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellFiltersContainer from '../../containers/spells/filters/SpellFiltersContainer'
import SpellsSearchBar from '../spells/SpellsSearchBar'

class SpellbookTopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowFilters: false
    }
  }

  toggleFilters() {
    this.setState({
      shouldShowFilters: !this.state.shouldShowFilters
    })
  }

  render() {
    const { onSearchChange } = this.props

    return (
      <div>
        <div className="container spells-header">
          <div className="spells-header-left">
            <h1>Spellbook</h1>
          </div>
          <div className="spells-header-right">
            <SpellsSearchBar onTermChange={onSearchChange} />
              <a className="btn btn-default btn-filter" onClick={e => {
                  e.preventDefault()
                  this.toggleFilters()
                }}
              >
                <span>Filter</span> <Icon name="filter"></Icon>
              </a>
          </div>
        </div>
        <SpellFiltersContainer shouldShow={ this.state.shouldShowFilters } />
      </div>
    )
  }
}

export default SpellbookTopBar
