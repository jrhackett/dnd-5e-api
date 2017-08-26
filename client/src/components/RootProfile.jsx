import React, { Component } from 'react'
import { connect } from 'react-redux'

class RootProfile extends Component {
  render() {
    return <p>Future site of the profile</p>
  }
}

export default connect()(RootProfile)