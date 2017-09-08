import { connect } from 'react-redux'
import SpellFilterLink from '../../../components/spells/SpellFilterLink'
import { filterSpellsByLevel } from '../../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  active: state.spells.filterLevel.includes(ownProps.level)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterSpellsByLevel(ownProps.level))
  }
})

const SpellFilterLevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterLevelContainer
