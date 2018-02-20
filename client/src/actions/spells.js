import * as types from '../actionTypes'

export const spellsHasErrored = () => ({
  type: types.SPELLS_HAS_ERRORED
})

export const spellsIsLoading = () => ({
  type: types.SPELLS_IS_LOADING
})

export const spellsFetchDataSuccess = items => ({
  type: types.SPELLS_FETCH_DATA_SUCCESS,
  items
})

export const spellsFetchData = url => {
  return (dispatch) => {
    dispatch(spellsIsLoading())
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(spellsIsLoading())
        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(spellsFetchDataSuccess(items)))
      .catch(() => dispatch(spellsHasErrored()))
  }
}

export const filterSpellsByLevel = level => ({
  type: types.FILTER_SPELLS_BY_LEVEL,
  level
})

export const filterSpellsBySchool = school => ({
  type: types.FILTER_SPELLS_BY_SCHOOL,
  school
})

export const filterSpellsByClass = className => ({
  type: types.FILTER_SPELLS_BY_CLASS,
  className
})

export const clearSpellsLevelFilter = () => ({
  type: types.CLEAR_SPELLS_LEVEL_FILTER
})

export const clearSpellsSchoolFilter = () => ({
  type: types.CLEAR_SPELLS_SCHOOL_FILTER
})

export const clearSpellsClassFilter = () => ({
  type: types.CLEAR_SPELLS_CLASS_FILTER
})

export const clearSpellsFilters = () => ({
  type: types.CLEAR_SPELLS_FILTERS
})

export const updateSearchTerm = (searchTerm) => ({
  type: types.UPDATE_SPELL_SEARCH_TERM,
  searchTerm
})

export const updateSpellsSort = (key, order) => ({
  type: types.UPDATE_SPELLS_SORT,
  key,
  order
})
