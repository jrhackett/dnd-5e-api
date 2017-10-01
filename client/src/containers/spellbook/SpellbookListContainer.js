import { connect } from 'react-redux'
import SpellsList from '../../components/spells/SpellsList'

const getSpellbookSpells = (state) => {
  return state.spells.spells.filter((s) => {
    return state.spellbook.selected.includes(s.id)
  })
}

const mapStateToProps = state => ({
  spells: getSpellbookSpells(state)
})

const SpellbookListContainer = connect(
  mapStateToProps
)(SpellsList)

export default SpellbookListContainer
