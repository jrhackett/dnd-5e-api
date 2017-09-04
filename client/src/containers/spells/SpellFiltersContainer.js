import { connect } from 'react-redux'
import SpellFilters from '../../components/spells/SpellFilters'
import { filterSpellsByLevel, filterSpellsBySchool, filterSpellsByClass, clearSpellsFilters } from '../../actions/spells'

const mapStateToProps = state => ({
  shouldShow: state.spells.showSpellFilters
})

const mapDispatchToProps = dispatch => ({
  onFilterLevelClick: level => {
    dispatch(filterSpellsByLevel(level))
  },
  onFilterSchoolClick: school => {
    dispatch(filterSpellsBySchool(school))
  },
  onFilterClassClick: className => {
    dispatch(filterSpellsByClass(className))
  },
  onFilterClear: () => {
    dispatch(clearSpellsFilters())
  }
})

const SpellFiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilters)

export default SpellFiltersContainer
