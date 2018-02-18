import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getFilterClass = state => state.spells.filterClass
const getSearchTerm = state => state.spells.searchTerm
const getSpells = state => state.spells.spells
const getSelectedSpells = state => state.spellbook.selected

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSearchTerm, getSpells],
  (filterLevel, filterSchool, filterClass, searchTerm, spells) => {
    return filterSpells(filterLevel, filterSchool, filterClass, searchTerm, spells)
  }
)

export const getVisibleSpellbookSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSearchTerm, getSpells, getSelectedSpells],
  (filterLevel, filterSchool, filterClass, searchTerm, spells, selected) => {
    return filterSpells(filterLevel, filterSchool, filterClass, searchTerm, spells).filter(s => selected.includes(s.id))
  }
)

const filterSpells = (filterLevel, filterSchool, filterClass, searchTerm, spells) => {
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
