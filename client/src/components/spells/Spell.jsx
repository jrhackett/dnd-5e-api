import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellDetails from './SpellDetails'

import '../../styles/Spell.css'

const Spell = ({ spell, shouldShowDetails, onInfoClick }) => (
  <div className="spell-row flex-container" onClick={() => {onInfoClick(spell.id)}}>
    <div className="flex-item name">
      <p>{spell.name}</p>
    </div>
    <div className="flex-item level">
      <p>{spell.level}</p>
    </div>
    <div className="flex-item school">
      <p>{spell.school}</p>
    </div>
    <div className="flex-item classes">
      <p>{spell.classes.join(", ")}</p>
    </div>
    <div className="flex-item options">
      <Icon name="ellipsis-h"></Icon>
    </div>
    <SpellDetails {...spell} shouldShow={shouldShowDetails} />
  </div>
)

Spell.propTypes = {
  spell: PropTypes.object.isRequired,
  shouldShowDetails: PropTypes.bool.isRequired,
  onInfoClick: PropTypes.func.isRequired
}

export default Spell
