import { connect } from 'react-redux'
import SpellsTopBar from '../../components/spells/SpellsTopBar'

const mapStateToProps = (state) => ({
  numberOfSpells: state.spells.spells.length,
  isLoading: state.spells.isLoading
})

const SpellsTopBarContainer = connect(
  mapStateToProps
)(SpellsTopBar)

export default SpellsTopBarContainer
