import { connect } from 'react-redux'
import SpellList from '../components/SpellList'

const mapStateToProps = (state) => ({
  spells: state.spells.spells,
  hasErrored: state.spells.hasErrored,
  isLoading: state.spells.isLoading
})

const VisibleSpellList = connect(
  mapStateToProps
)(SpellList)

export default VisibleSpellList