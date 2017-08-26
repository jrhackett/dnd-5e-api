import React from 'react';
import PropTypes from 'prop-types'
import Spell from './Spell'

import '../styles/SpellList.css'

const SpellList = ({ spells, hasErrored, isLoading }) => {
    
  if(hasErrored)
    return <p>Sorry! There was an error loading the spells</p>

  if(isLoading)
    return (
      <div id="loading">
        <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
      </div>
    )

  return (
    <div className="container">
      <h2 className="spells-header">Spells</h2>
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

SpellList.propTypes = {
  spells: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default SpellList