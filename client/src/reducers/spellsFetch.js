const initialState = {
  spells: [],
  hasErrored: false,
  isLoading: false
}

const spells = (state = initialState, action) => {
  switch(action.type) {
    case 'SPELLS_HAS_ERRORED':
      return {
        ...state,
        hasErrored: true
      }
    case 'SPELLS_IS_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'SPELLS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        spells: action.items,
        isLoading: false,
        hasErrored: false
      }
    default:
      return state
  }
}

export default spells