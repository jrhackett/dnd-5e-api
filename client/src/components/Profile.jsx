import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileTopBar from './profile/ProfileTopBar'

class RootProfile extends Component {
  render() {
    return (
      <div>
        <ProfileTopBar />
      </div>
    )
  }
}

export default connect()(RootProfile)
