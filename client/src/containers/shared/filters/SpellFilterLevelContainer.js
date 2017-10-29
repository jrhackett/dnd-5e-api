import { connect } from 'react-redux'
import FilterLink from '../../../components/shared/FilterLink'
import { filterSpellsByLevel, clearSpellsLevelFilter } from '../../../actions/spells'

const getActiveState = (state, text) => {
  return text === 'All' ? state.spells.filterLevel.length === 0 :
    state.spells.filterLevel.includes(text)
}

const getOnClickFunction = (dispatch, text) => {
  return text === 'All' ? () => dispatch(clearSpellsLevelFilter()) :
    () => dispatch(filterSpellsByLevel(text))
}

const mapStateToProps = (state, ownProps) => {
  const text = ownProps.text
  return {
    text: text,
    active: getActiveState(state, text)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: getOnClickFunction(dispatch, ownProps.text)
})

const SpellFilterLevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default SpellFilterLevelContainer
