import { connect } from 'react-redux'
import FilterLink from '../../../components/shared/FilterLink'
import { filterSpellsByClass, clearSpellsClassFilter } from '../../../actions/spells'

const getActiveState = (state, text) => {
  return text === 'All' ? 
    state.spells.filterClass.length === 0 :
    state.spells.filterClass.includes(text)
}

const getOnClickFunction = (dispatch, text) => {
  return text === 'All' ? 
    () => dispatch(clearSpellsClassFilter()) :
    () => dispatch(filterSpellsByClass(text))
}

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  active: getActiveState(state, ownProps.text)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: getOnClickFunction(dispatch, ownProps.text)
})

const SpellFilterClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default SpellFilterClassContainer
