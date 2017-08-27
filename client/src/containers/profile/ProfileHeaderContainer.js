import { connect } from 'react-redux'
import Header from '../../components/shared/Header'

const mapStateToProps = state => ({
  title: 'Profile'
})

const ProfileHeaderContainer = connect(
  mapStateToProps
)(Header)

export default ProfileHeaderContainer
