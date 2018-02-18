import { connect } from 'react-redux'
import TopBar from '../../components/shared/TopBar'
import { updateSearchTerm } from '../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
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
)(TopBar)

export default SpellsTopBarContainer
