import { connect } from 'react-redux'
import Spell from '../../components/spells/Spell'
import { toggleInSpellbook } from '../../actions/spellbook'

const mapStateToProps = (state, ownProps) => ({
  spell: ownProps.spell,
  selected: state.spellbook.selected.includes(ownProps.spell.id)
})

const mapDispatchToProps = dispatch => ({
  onSpellbookClick: id => {
    dispatch(toggleInSpellbook(id))
  }
})

const SpellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Spell)

export default SpellContainer
