import { createSelector } from 'reselect'

const getFilterLevel = state => state.spells.filterLevel
const getSpells = state => state.spells.spells

export const getVisibleSpells = createSelector(
  [getFilterLevel, getSpells],
  (filterLevel, spells) => {
    switch (filterLevel) {
      case "-1":
        return spells
      default:
        return spells.filter(s => s.level === filterLevel)
    }
  }
)