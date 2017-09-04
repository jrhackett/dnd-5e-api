import { connect } from 'react-redux'
import SpellFilterLink from '../../components/spells/SpellFilterLink'
import { filterSpellsBySchool } from '../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  active: state.spells.filterSchool === ownProps.school
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterSpellsBySchool(ownProps.school))
  }
})

const SpellFilterSchoolContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterSchoolContainer
