import { connect } from 'react-redux'
import SpellsList from '../../components/shared/SpellsList'
import { getVisibleSpells } from '../../selectors/spells'

const getSpellbookSpells = (spells, state) => {
  return spells.filter(s => state.spellbook.selected.includes(s.id))
}

const mapStateToProps = state => ({
  spells: getSpellbookSpells(getVisibleSpells(state), state),
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const SpellbookListContainer = connect(
  mapStateToProps
)(SpellsList)

export default SpellbookListContainer
