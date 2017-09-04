import { connect } from 'react-redux'
import SpellFilters from '../../components/spells/SpellFilters'
import { clearSpellsFilters } from '../../actions/spells'

const mapStateToProps = state => ({
  shouldShow: state.spells.showSpellFilters
})

const mapDispatchToProps = dispatch => ({
  onFilterClear: () => {
    dispatch(clearSpellsFilters())
  }
})

const SpellFiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilters)

export default SpellFiltersContainer
