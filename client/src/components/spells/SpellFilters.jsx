import React from 'react'
import PropTypes from 'prop-types'
import SpellFilterLevelContainer from '../../containers/spells/SpellFilterLevelContainer'
import SpellFilterSchoolContainer from '../../containers/spells/SpellFilterSchoolContainer'
import SpellFilterClassContainer from '../../containers/spells/SpellFilterClassContainer'

const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
const schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
  'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
const classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger',
  'Sorcerer', 'Warlock', 'Wizard']            

const SpellFilters = ({ shouldShow, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div>
        <div className="filter-links">
          <span className="filter-label">Level: </span>
          {levels.map(level => {
            return <SpellFilterLevelContainer key={level} level={level} text={level} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">School: </span>
          {schools.map(school => {
            return <SpellFilterSchoolContainer key={school} school={school} text={school} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">Class: </span>
          {classes.map(className => {
            return <SpellFilterClassContainer key={className} className={className} text={className} />
          })}
        </div>
        <div>
          <a onClick={e => {
              e.preventDefault()
              onFilterClear()
            }}
          >
            Clear Filters
          </a>
        </div>
      </div>
    )
  }

  return null
}

SpellFilters.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellFilters
