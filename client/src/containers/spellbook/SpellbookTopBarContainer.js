import { connect } from 'react-redux'
import TopBarContainer from '../shared/TopBarContainer'

const mapStateToProps = state => ({
  title: 'Spellbook'
})

const SpellbookTopBarContainer = connect(
  mapStateToProps
)(TopBarContainer)

export default SpellbookTopBarContainer
