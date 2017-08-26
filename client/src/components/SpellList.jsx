import React from 'react';
import PropTypes from 'prop-types'
import Spell from './Spell'

const SpellList = ({ spells, hasErrored, isLoading }) => {
    
  if(hasErrored)
    return <p>Sorry! There was an error loading the spells</p>

  if(isLoading)
    return <p>Loading…</p>

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