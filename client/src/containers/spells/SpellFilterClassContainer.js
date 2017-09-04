import { connect } from 'react-redux'
import SpellFilterLink from '../../components/spells/SpellFilterLink'
import { filterSpellsByClass } from '../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  active: state.spells.filterClass === ownProps.className
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterSpellsByClass(ownProps.className))
  }
})

const SpellFilterClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterClassContainer
