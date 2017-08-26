import React, { Component } from 'react'
import { connect } from 'react-redux'

class RootSpellbook extends Component {
  render() {
    return <p>Future site of the spellbook</p>
  }
}

export default connect()(RootSpellbook)