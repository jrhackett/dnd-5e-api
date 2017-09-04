import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getSpells = state => state.spells.spells

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getSpells],
  (filterLevel, filterSchool, spells) => {
    if(filterLevel === '-1' && filterSchool === '')
      return spells
    if(filterLevel === '-1')
      return spells.filter(s => s.school === filterSchool)
    if(filterSchool === '')
      return spells.filter(s => s.level === filterLevel)
    return spells.filter(s => s.level === filterLevel && s.school === filterSchool)
  }
)