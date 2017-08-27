import { connect } from 'react-redux'
import SpellsList from '../../components/spells/SpellsList'

const mapStateToProps = (state) => ({
  spells: state.spells.spells,
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const SpellsListContainer = connect(
  mapStateToProps
)(SpellsList)

export default SpellsListContainer
