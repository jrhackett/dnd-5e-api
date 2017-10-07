import { connect } from 'react-redux'
import SpellsList from '../../components/shared/SpellsList'
import { getVisibleSpells } from '../../selectors/spells'
import { updateSearchTerm } from '../../actions/spells'

const getSpellbookSpells = (spells, state) => {
  return spells.filter((s) => {
    return state.spellbook.selected.includes(s.id)
  })
}

const mapStateToProps = state => ({
  spells: getSpellbookSpells(getVisibleSpells(state), state),
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (term) => {
    dispatch(updateSearchTerm(term))
  }
})

const SpellbookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellsList)

export default SpellbookListContainer
