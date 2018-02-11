import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/spells'
import { css, cx } from 'react-emotion'
import { Icon } from 'react-fa'
import SpellDetails from './SpellDetails'

const active = css`
  color: #6C57E6;
`

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
      <div className="spell-row flex-container" onClick={ () => {
        if(!getSelection().toString())
          this.toggleShowDetails()
      }}>
        <div className={ cx(styles.flexItem, styles.name) }>
          <p>{ spell.name }</p>
        </div>
        <div className={ cx(styles.flexItem, styles.level) }>
          <p>{ spell.level }</p>
        </div>
        <div className={ cx(styles.flexItem, styles.school) }>
          <p>{ spell.school }</p>
        </div>
        <div className={ cx(styles.flexItem, styles.classes) }>
          <p>{ spell.classes.join(", ") }</p>
        </div>
        <div className={ cx(styles.flexItem, styles.options, { [active]: selected }) }
          onClick={(e) => {
            e.stopPropagation()
            onSpellbookClick(spell.id)
          }}>
          <Icon name="book"></Icon>
        </div>
        <SpellDetails { ...spell } shouldShow={ this.state.shouldShowDetails } />
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
