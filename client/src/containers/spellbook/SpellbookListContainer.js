import { connect } from 'react-redux'
import SpellsList from '../../components/shared/SpellsList'
import { getVisibleSpellbookSpells } from '../../selectors/spells'

const mapStateToProps = state => ({
  spells: getVisibleSpellbookSpells(state),
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const SpellbookListContainer = connect(
  mapStateToProps
)(SpellsList)

export default SpellbookListContainer
