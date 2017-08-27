import React from 'react'
import PropTypes from 'prop-types'
import Spell from './Spell'
import { Icon } from 'react-fa'

import '../../styles/SpellList.css'

const SpellsList = ({ spells, hasErrored, isLoading }) => {
    
  if(hasErrored)
    return <p>Sorry! There was an error loading the spells</p>

  if(isLoading)
    return (
      <div id="loading">
        <Icon name="spinner" spin />
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
        <Spell key={spell.id} {...spell} />
      ))}
    </div>
  )
}

SpellsList.propTypes = {
  spells: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default SpellsList
