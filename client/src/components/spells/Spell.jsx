import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellDetails from './SpellDetails'

class Spell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowDetails: false
    }
  }

  toggleShowDetails() {
    this.setState({
      shouldShowDetails: !this.state.shouldShowDetails
    })
  }

  render() {
    const { spell, selected, onSpellbookClick } = this.props
    return (
      <div className="spell-row flex-container" onClick={() => {
        if(!getSelection().toString())
          this.toggleShowDetails()
      }}>
        <div className="flex-item name">
          <p>{spell.name}</p>
        </div>
        <div className="flex-item level">
          <p>{spell.level}</p>
        </div>
        <div className="flex-item school">
          <p>{spell.school}</p>
        </div>
        <div className="flex-item classes">
          <p>{spell.classes.join(", ")}</p>
        </div>
        <div className={selected ? 'flex-item options active' : 'flex-item options'}
          onClick={(e) => {
            e.stopPropagation()
            onSpellbookClick(spell.id)
          }}>
          <Icon name="book"></Icon>
        </div>
        <SpellDetails {...spell} shouldShow={this.state.shouldShowDetails} />
      </div>
    )
  }
}

Spell.propTypes = {
  spell: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onSpellbookClick: PropTypes.func.isRequired
}

export default Spell
