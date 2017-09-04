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
    dispatch(spellsIsLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(spellsIsLoading())
        return response;
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

export const clearSpellsFilters = () => ({
  type: types.CLEAR_SPELLS_FILTERS
})

export const showSpellDetails = id => ({
  type: types.SHOW_SPELL_DETAILS,
  id
})

export const showFilters = () => ({
  type: types.SHOW_SPELL_FILTERS,
})
