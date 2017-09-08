import { connect } from 'react-redux'
import SpellFilterLink from '../../../components/spells/SpellFilterLink'
import { filterSpellsByClass, clearSpellsClassFilter } from '../../../actions/spells'

const getActiveState = (state, text) => {
  return text === 'All' ? state.spells.filterClass.length === 0 :
    state.spells.filterClass.includes(text)
}

const getOnClickFunction = (dispatch, text) => {
  return text === 'All' ? () => dispatch(clearSpellsClassFilter()) :
    () => dispatch(filterSpellsByClass(text))
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

const SpellFilterClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterClassContainer
