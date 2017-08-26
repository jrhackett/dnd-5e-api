import React, { Component } from 'react'
import { connect } from 'react-redux'
import { spellsFetchData } from '../actions'
import VisibleSpellList from '../containers/VisibleSpellList'

class RootSpellList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(spellsFetchData('/spells'))
  }

  render() {
    return <VisibleSpellList />
  }
}

export default connect()(RootSpellList)