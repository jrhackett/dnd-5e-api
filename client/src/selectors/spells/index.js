import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getFilterClass = state => state.spells.filterClass
const getSpells = state => state.spells.spells

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSpells],
  (filterLevel, filterSchool, filterClass, spells) => {
    if(filterLevel.length === 0 && filterSchool === '' && filterClass === '')
      return spells
    if(filterLevel.length === 0 &&  filterClass === '')
      return spells.filter(s => s.school === filterSchool)
    if(filterSchool === '' && filterClass === '')
      return spells.filter(s => filterLevel.includes(s.level))
    if(filterLevel.length === 0 && filterSchool === '')
      return spells.filter(s => s.classes.includes(filterClass))
    if(filterLevel.length === 0)
      return spells.filter(s => s.school === filterSchool && s.classes.includes(filterClass))
    if(filterSchool === '')
      return spells.filter(s => filterLevel.includes(s.level) && s.classes.includes(filterClass))
    if(filterClass === '')
      return spells.filter(s => filterLevel.includes(s.level) && s.school === filterSchool)
    return spells.filter(s => filterLevel.includes(s.level) && s.school === filterSchool && s.classes.includes(filterClass))
  }
)