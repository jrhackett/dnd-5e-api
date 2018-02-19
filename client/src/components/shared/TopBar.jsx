import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'
import { Icon } from 'react-fa'
import buttonStyles from '../../styles/button'
import SpellFiltersContainer from '../../containers/shared/filters/SpellFiltersContainer'
import SearchBar from './SearchBar'

const header = css`
  display: flex;
  justify-content: flex-start;
`

const headerSection = css`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`

const numberOfSpellsStyle = css`
  margin: 0 1rem;
`

const rightSection = css`
  margin: 3rem 0 3rem auto;
  justify-content: flex-end;
`

class SpellsTopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowFilters: false
    }
  }

  toggleFilters() {
    this.setState({
      shouldShowFilters: !this.state.shouldShowFilters
    })
  }

  render() {
    const { title, numberOfSpells, isLoading, onSearchChange } = this.props
    if(isLoading)
      return null

    return (
      <div>
        <div className={ cx('container', header) }>
          <div className={ headerSection }>
            <h1>{ title }</h1>
            <span className={ numberOfSpellsStyle }>{ numberOfSpells } total</span>
            {/*<a href="/api/v1/spells/export" download>Export</a>*/}
          </div>
          <div className={ cx(headerSection, rightSection) }>
            <SearchBar onTermChange={ onSearchChange } />
            <a className={ cx(buttonStyles.btn, buttonStyles.default) } onClick={e => {
                e.preventDefault()
                this.toggleFilters()
              }}
            >
              <span>Filter</span> <Icon name="filter"></Icon>
            </a>
          </div>
        </div>
        <SpellFiltersContainer shouldShow={ this.state.shouldShowFilters } />
      </div>
    )
  }
}

SpellsTopBar.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired
}

export default SpellsTopBar
