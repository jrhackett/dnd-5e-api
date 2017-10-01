import React, { Component } from 'react'
import { connect } from 'react-redux'
import { spellsFetchData } from '../../actions/spells'
import SpellsTopBarContainer from '../../containers/spells/SpellsTopBarContainer'
import SpellsListContainer from '../../containers/spells/SpellsListContainer'
import '../../styles/spells.css'

class RootSpells extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(spellsFetchData('/api/v1/spells'))
  }

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
