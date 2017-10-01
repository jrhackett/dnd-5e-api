import React from 'react'
import PropTypes from 'prop-types'
import SpellContainer from '../../containers/spells/SpellContainer'
import { Icon } from 'react-fa'

const SpellsList = ({ spells, hasErrored, isLoading }) => {
    
  if(hasErrored)
    return <p>Sorry! There was an error loading the spells</p>

  if(isLoading)
    // TODO fix location of loading icon
    return (
      <div id="loading">
        <Icon name="spinner" spin />
      </div>
    )

  if(spells.length === 0)
    return (
      <div className="container">
        <span>There are no spells that match these filters</span>
      </div>
    )

  return (
    <div className="container">
      <div className="spells-list-headers flex-container">
        <div className="flex-item name">
          <p>Name</p>
        </div>
        <div className="flex-item level">
          <p>Level</p>
        </div>
        <div className="flex-item school">
          <p>School</p>
        </div>
        <div className="flex-item classes">
          <p>Classes</p>
        </div>
      </div>
      {spells.map((spell) => (
        <SpellContainer key={spell.id} spell={spell} />
      ))}
    </div>
  )
}

SpellsList.propTypes = {
  spells: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default SpellsList
