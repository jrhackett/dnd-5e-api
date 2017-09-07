import { connect } from 'react-redux'
import SpellFilterLink from '../../components/spells/SpellFilterLink'
import { clearSpellsClassFilter } from '../../actions/spells'

const mapStateToProps = state => ({
  text: 'All',
  active: state.spells.filterClass === ''
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(clearSpellsClassFilter())
  }
})

const SpellFilterClassAllContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellFilterLink)

export default SpellFilterClassAllContainer
