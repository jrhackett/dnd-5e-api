import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellbookTopBar from './SpellbookTopBar'

class RootSpellbook extends Component {
  render() {
    return (
      <div>
        <SpellbookTopBar />
      </div>
    )
  }
}

export default connect()(RootSpellbook)
