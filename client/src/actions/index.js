export const spellsHasErrored = (hasErrored) => ({
  type: 'SPELLS_HAS_ERRORED',
  hasErrored
})

export const spellsIsLoading = (isLoading) => ({
  type: 'SPELLS_IS_LOADING',
  isLoading
})

export const spellsFetchDataSuccess = (items) => ({
  type: 'SPELLS_FETCH_DATA_SUCCESS',
  items
})

export function spellsFetchData(url) {
  return (dispatch) => {
    dispatch(spellsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(spellsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(spellsFetchDataSuccess(items)))
      .catch(() => dispatch(spellsHasErrored(true)));
  }
}