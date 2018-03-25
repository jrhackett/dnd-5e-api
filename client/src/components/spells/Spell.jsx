import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/spells'
import flex from '../../styles/flex'
import colors from '../../styles/colors'
import { css, cx } from 'react-emotion'
import { Icon } from 'react-fa'
import SpellDetails from './SpellDetails'

const active = css`
  span {
    color: ${ colors.purple };
  }
`

const row = css`
  padding: 1rem 3rem;
  border-radius: 2px;
  background-color: ${ colors.offWhite };
  margin: 0.8rem 0;
  box-shadow: 0px 1px 4px 0px ${ colors.lightGray };
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
      <div className={ cx(flex.flexContainer, row) } onClick={ () => {
        if(!getSelection().toString())
          this.toggleShowDetails()
      }}>
        <div className={ cx(flex.flexItem, styles.name) }>
          <p>{ spell.name }</p>
        </div>
        <div className={ cx(flex.flexItem, styles.level) }>
          <p>{ spell.level }</p>
        </div>
        <div className={ cx(flex.flexItem, styles.school, styles.hideOnMobile) }>
          <p>{ spell.school }</p>
        </div>
        <div className={ cx(flex.flexItem, styles.classes, styles.hideOnMobile) }>
          <p>{ spell.classes }</p>
        </div>
        <div className={ cx(flex.flexItem, styles.options, styles.hideOnMobile, { [active]: selected }) }
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
