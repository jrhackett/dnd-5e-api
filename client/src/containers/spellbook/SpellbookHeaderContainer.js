import { connect } from 'react-redux'
import Header from '../../components/shared/Header'

const mapStateToProps = state => ({
  title: 'Spellbook'
})

const SpellbookHeaderContainer = connect(
  mapStateToProps
)(Header)

export default SpellbookHeaderContainer
