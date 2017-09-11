import { connect } from 'react-redux'
import SpellsTopBar from '../../components/spells/SpellsTopBar'
import { showFilters, updateSearchTerm } from '../../actions/spells'

const mapStateToProps = state => ({
  numberOfSpells: state.spells.spells.length,
  isLoading: state.spells.isLoading
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (term) => {
    dispatch(updateSearchTerm(term))
  },
  onShowFilters: () => {
    dispatch(showFilters())
  }
})

const SpellsTopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellsTopBar)

export default SpellsTopBarContainer
