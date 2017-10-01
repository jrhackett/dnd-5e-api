import { connect } from 'react-redux'
import SpellsTopBar from '../../components/spells/SpellsTopBar'
import { updateSearchTerm } from '../../actions/spells'

const mapStateToProps = state => ({
  title: 'Spells',
  numberOfSpells: state.spells.spells.length,
  isLoading: state.spells.isLoading
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (term) => {
    dispatch(updateSearchTerm(term))
  }
})

const SpellsTopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellsTopBar)

export default SpellsTopBarContainer
