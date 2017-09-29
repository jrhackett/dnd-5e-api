import { connect } from 'react-redux'
import Spell from '../../components/spells/Spell'
import { showSpellDetails } from '../../actions/spells'

const mapStateToProps = (state, ownProps) => ({
  spell: state.spells.spells.filter(s => s.id === ownProps.id)[0],
  shouldShowDetails: state.spells.showDetails.includes(ownProps.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInfoClick: (id) => {
    if(!getSelection().toString())
      dispatch(showSpellDetails(id))
  }
})

const SpellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Spell)

export default SpellContainer
