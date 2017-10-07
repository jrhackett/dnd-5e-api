import React from 'react'
import SpellsTopBarContainer from '../../containers/spells/SpellsTopBarContainer'
import SpellsListContainer from '../../containers/spells/SpellsListContainer'
import '../../styles/spells.css'

const RootSpells = () => (
  <div>
    <SpellsTopBarContainer />
    <SpellsListContainer />
  </div>
)

export default RootSpells
