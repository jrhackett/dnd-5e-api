import { connect } from 'react-redux'
import { getVisibleSpells } from '../../selectors/spells'
import SpellsList from '../../components/shared/SpellsList'

const mapStateToProps = state => ({
  spells: getVisibleSpells(state),
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const SpellsListContainer = connect(
  mapStateToProps
)(SpellsList)

export default SpellsListContainer
