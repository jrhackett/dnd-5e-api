import { connect } from 'react-redux'
import FilterLink from '../../../components/shared/FilterLink'
import { filterSpellsBySchool, clearSpellsSchoolFilter } from '../../../actions/spells'

const getActiveState = (state, text) => {
  return text === 'All' ? state.spells.filterSchool.length === 0 :
    state.spells.filterSchool.includes(text)
}

const getOnClickFunction = (dispatch, text) => {
  return text === 'All' ? () => dispatch(clearSpellsSchoolFilter()) :
    () => dispatch(filterSpellsBySchool(text))
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

const SpellFilterSchoolContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default SpellFilterSchoolContainer
