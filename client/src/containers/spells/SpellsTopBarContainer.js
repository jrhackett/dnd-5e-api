import { connect } from 'react-redux'
import SpellsTopBar from '../../components/spells/SpellsTopBar'
import { filterSpellsByLevel, clearSpellsFilters } from '../../actions/spells'

const mapStateToProps = state => ({
  numberOfSpells: state.spells.spells.length,
  isLoading: state.spells.isLoading
})

const mapDispatchToProps = dispatch => ({
  onFilterLevelClick: level => {
    dispatch(filterSpellsByLevel(level))
  },
  onFilterClear: () => {
    dispatch(clearSpellsFilters())
  }
})

const SpellsTopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellsTopBar)

export default SpellsTopBarContainer
