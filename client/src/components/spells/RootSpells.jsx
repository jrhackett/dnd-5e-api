import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellsTopBarContainer from '../../containers/spells/SpellsTopBarContainer'
import SpellsListContainer from '../../containers/spells/SpellsListContainer'
import '../../styles/spells.css'

class RootSpells extends Component {

  render() {
    return (
      <div>
        <SpellsTopBarContainer />
        <SpellsListContainer />
      </div>
    )
  }
}

export default connect()(RootSpells)
