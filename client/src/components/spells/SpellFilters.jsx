import React from 'react'
import PropTypes from 'prop-types'
import SpellFilterLink from './SpellFilterLink'

const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
const schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
  'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
const classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger',
  'Sorcerer', 'Warlock', 'Wizard']            

const SpellFilters = ({ shouldShow, onFilterLevelClick, onFilterSchoolClick, onFilterClassClick, 
  onFilterClear }) => {
  if(shouldShow) {
    return (
      <div>
        <div className="filter-links">
          <span className="filter-label">Level: </span>
          {levels.map(level => {
            return <SpellFilterLink key={level} text={level} onClick={onFilterLevelClick} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">School: </span>
          {schools.map(school => {
            return <SpellFilterLink key={school} text={school} onClick={onFilterSchoolClick} />
          })}
        </div>
        <div className="filter-links">
          <span className="filter-label">Class: </span>
          {classes.map(className => {
            return <SpellFilterLink key={className} text={className} onClick={onFilterClassClick} />
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
  onFilterLevelClick: PropTypes.func.isRequired,
  onFilterSchoolClick: PropTypes.func.isRequired,
  onFilterClassClick: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellFilters
