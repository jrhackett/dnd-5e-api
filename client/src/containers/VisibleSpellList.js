import { connect } from 'react-redux'
import { spellsFetchData } from '../actions';
import SpellList from '../components/SpellList'

const mapStateToProps = (state) => ({
  spells: state.spells,
  hasErrored: state.spellsHasErrored,
  isLoading: state.spellsIsLoading
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(spellsFetchData(url))
})

const VisibleSpellList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList)

export default VisibleSpellList