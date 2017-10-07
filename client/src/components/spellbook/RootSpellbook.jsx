import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellbookTopBarContainer from '../../containers/spellbook/SpellbookTopBarContainer'
import SpellbookListContainer from '../../containers/spellbook/SpellbookListContainer'

class RootSpellbook extends Component {

  render() {
    return (
      <div>
        <SpellbookTopBarContainer />
        <SpellbookListContainer />
      </div>
    )
  }
}

export default connect()(RootSpellbook)
