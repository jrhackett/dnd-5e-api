import { connect } from 'react-redux'
import Header from '../../components/shared/Header'

const mapStateToProps = (state) => ({
  title: 'Spells'
})

const SpellsHeaderContainer = connect(
  mapStateToProps
)(Header)

export default SpellsHeaderContainer
