import React, { Component } from 'react'
import { connect } from 'react-redux'
import { spellsFetchData } from '../../actions/spells'
import SpellsHeaderContainer from '../../containers/spells/SpellsHeaderContainer'
import SpellsTopBarContainer from '../../containers/spells/SpellsTopBarContainer'
import SpellsListContainer from '../../containers/spells/SpellsListContainer'

class RootSpells extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(spellsFetchData('/api/v1/spells'))
  }

  render() {
    return (
      <div>
        <SpellsHeaderContainer>
          <SpellsTopBarContainer />
        </SpellsHeaderContainer>
        <SpellsListContainer />
      </div>
    )
  }
}

export default connect()(RootSpells)
