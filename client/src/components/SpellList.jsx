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
    <ul className="container">
      {spells.map((spell) => (
        <Spell key={spell.id} {...spell} />
      ))}
    </ul>
  )
}

SpellList.propTypes = {
  spells: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default SpellList