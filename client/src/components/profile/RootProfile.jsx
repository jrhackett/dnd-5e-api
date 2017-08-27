import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileHeaderContainer from '../../containers/profile/ProfileHeaderContainer'

class RootProfile extends Component {
  render() {
    return (
      <div>
        <ProfileHeaderContainer>
          <span>Future profile topbar</span>
        </ProfileHeaderContainer>
        <div className="container">
          <p>Future site of the profile</p>
        </div>
      </div>
    )
  }
}

export default connect()(RootProfile)
