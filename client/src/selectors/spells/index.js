import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getFilterSchool = state => state.spells.filterSchool
const getFilterClass = state => state.spells.filterClass
const getSearchTerm = state => state.spells.searchTerm
const getSpells = state => state.spells.spells
const getSelectedSpells = state => state.spellbook.selected
const getSortKey = state => state.spells.sortKey
const getSortOrder = state => state.spells.sortOrder

export const getVisibleSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSearchTerm, getSpells, getSortKey, getSortOrder],
  (filterLevel, filterSchool, filterClass, searchTerm, spells, sortKey, sortOrder) => {
    return filterSpells(filterLevel, filterSchool, filterClass, searchTerm, spells, sortKey, sortOrder)
  }
)

export const getVisibleSpellbookSpells = createSelector(
  [getFilterLevel, getFilterSchool, getFilterClass, getSearchTerm, getSpells, getSelectedSpells, getSortKey, getSortOrder],
  (filterLevel, filterSchool, filterClass, searchTerm, spells, selected, sortKey, sortOrder) => {
    return filterSpells(filterLevel, filterSchool, filterClass, searchTerm, spells, sortKey, sortOrder).filter(s => selected.includes(s.id))
  }
)

const filterSpells = (filterLevel, filterSchool, filterClass, searchTerm, spells, sortKey, sortOrder) => {
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
  }).sort((a, b) => {
    const aSort = a[sortKey].toString().toLowerCase()
    const bSort = b[sortKey].toString().toLowerCase()
    
    if(aSort > bSort)
      return sortOrder === 'asc' ? 1 : -1
    if(aSort < bSort) 
      return sortOrder === 'asc' ? -1 : 1
    return 0
  })
}
