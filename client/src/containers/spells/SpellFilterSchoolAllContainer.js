import { connect } from 'react-redux'
import SpellFilterLink from '../../components/spells/SpellFilterLink'
import { clearSpellsSchoolFilter } from '../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  text: 'All',
  active: state.spells.filterSchool.length === 0
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(clearSpellsSchoolFilter())
  }
})

const SpellFilterSchoolAllContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterSchoolAllContainer
