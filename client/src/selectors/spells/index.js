import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getFilterClass = state => state.spells.filterClass
const getSpells = state => state.spells.spells

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSpells],
  (filterLevel, filterSchool, filterClass, spells) => {
    if(filterLevel === '' && filterSchool === '' && filterClass === '')
      return spells
    if(filterLevel === '' &&  filterClass === '')
      return spells.filter(s => s.school === filterSchool)
    if(filterSchool === '' && filterClass === '')
      return spells.filter(s => s.level === filterLevel)
    if(filterLevel === '' && filterSchool === '')
      return spells.filter(s => s.classes.includes(filterClass))
    if(filterLevel === '')
      return spells.filter(s => s.school === filterSchool && s.classes.includes(filterClass))
    if(filterSchool === '')
      return spells.filter(s => s.level === filterLevel && s.classes.includes(filterClass))
    if(filterClass === '')
      return spells.filter(s => s.level === filterLevel && s.school === filterSchool)
    return spells.filter(s => s.level === filterLevel && s.school === filterSchool && s.classes.includes(filterClass))
  }
)