import { connect } from 'react-redux'
import { getVisibleSpells } from '../../selectors/spells'
import TopBarContainer from '../shared/TopBarContainer'

const mapStateToProps = state => ({
  title: 'Spells',
  numberOfSpells: getVisibleSpells(state).length
})

const SpellsTopBarContainer = connect(
  mapStateToProps
)(TopBarContainer)

export default SpellsTopBarContainer
