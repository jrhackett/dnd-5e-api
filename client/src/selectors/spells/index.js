import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getFilterClass = state => state.spells.filterClass
const getSearchTerm = state => state.spells.searchTerm
const getSpells = state => state.spells.spells

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSearchTerm, getSpells],
  (filterLevel, filterSchool, filterClass, searchTerm, spells) => {
    return spells.filter(s => {
      if(filterLevel.length > 0 && !filterLevel.includes(s.level))
        return false
      if(filterSchool.length > 0 && !filterSchool.includes(s.school))
        return false
      if(filterClass.length > 0 && !filterClass.some(f => s.classes.indexOf(f) >= 0))
        return false
      if(searchTerm !== '' && !s.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return false
      return true
    })
  }
)