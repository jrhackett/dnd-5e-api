import { connect } from 'react-redux'
import { getVisibleSpellbookSpells } from '../../selectors/spells'
import TopBarContainer from '../shared/TopBarContainer'

const mapStateToProps = state => ({
  title: 'Spellbook',
  numberOfSpells: getVisibleSpellbookSpells(state).length,
})

const SpellbookTopBarContainer = connect(
  mapStateToProps
)(TopBarContainer)

export default SpellbookTopBarContainer
