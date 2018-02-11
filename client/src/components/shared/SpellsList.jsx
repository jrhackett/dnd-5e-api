import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/spells'
import { cx } from 'react-emotion'
import SpellContainer from '../../containers/shared/SpellContainer'
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
      <div className="spells-list-headers flex-container">
        <div className={ cx(styles.flexItem, styles.name) }>
          <p>Name</p>
        </div>
        <div className={ cx(styles.flexItem, styles.level) }>
          <p>Level</p>
        </div>
        <div className={ cx(styles.flexItem, styles.school) }>
          <p>School</p>
        </div>
        <div className={ cx(styles.flexItem, styles.classes) }>
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
