import { connect } from 'react-redux'
import SpellFilterLink from '../../../components/spells/SpellFilterLink'
import { clearSpellsLevelFilter } from '../../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  text: 'All',
  active: state.spells.filterLevel.length === 0
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(clearSpellsLevelFilter())
  }
})

const SpellFilterLevelAllContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterLevelAllContainer
