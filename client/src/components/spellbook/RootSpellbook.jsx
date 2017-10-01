import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellbookTopBar from './SpellbookTopBar'
import SpellbookListContainer from '../../containers/spellbook/SpellbookListContainer'

class RootSpellbook extends Component {
  render() {
    return (
      <div>
        <SpellbookTopBar />
        <SpellbookListContainer />
      </div>
    )
  }
}

export default connect()(RootSpellbook)
