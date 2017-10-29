import { connect } from 'react-redux'
import SpellFilters from '../../../components/shared/SpellFilters'
import { clearSpellsFilters } from '../../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  shouldShow: ownProps.shouldShow,
  levels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  schools: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
    'Evocation', 'Illusion', 'Necromancy', 'Transmutation'],
  classes: ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger',
    'Sorcerer', 'Warlock', 'Wizard'],
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
