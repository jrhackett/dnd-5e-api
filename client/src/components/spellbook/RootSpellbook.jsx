import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellbookHeaderContainer from '../../containers/spellbook/SpellbookHeaderContainer'

class RootSpellbook extends Component {
  render() {
    return (
      <div>
        <SpellbookHeaderContainer>
          <span>Future spellbook topbar</span>
        </SpellbookHeaderContainer>
        <div className="container">
          <p>Future site of the spellbook</p>
        </div>
      </div>
    )
  }
}

export default connect()(RootSpellbook)
