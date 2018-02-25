import React from 'react'
import PropTypes from 'prop-types'
import SpellContainer from '../../containers/shared/SpellContainer'
import SpellsSortableHeaderContainer from '../../containers/shared/SpellsSortableHeaderContainer'
import Loading from './Loading'

const SpellsList = ({ spells, hasErrored, isLoading }) => {
    
  if(hasErrored)
    return <p>Sorry! There was an error loading the spells</p>

  if(isLoading)
    return (
      <Loading />
    )

  if(spells.length === 0)
    return (
      <div className="container">
        <span>There are no spells here.</span>
      </div>
    )

  return (
    <div className="container">
      <SpellsSortableHeaderContainer />
      {spells.map((spell) => (
        <SpellContainer key={ spell.id } spell={ spell } />
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
