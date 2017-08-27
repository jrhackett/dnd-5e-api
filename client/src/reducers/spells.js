const initialState = {
  spells: [],
  hasErrored: false,
  isLoading: false,
  filterLevel: "-1", // TODO might want to add a bool instead of defaulting to -1
  showDetails: "-1"
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
    case 'FILTER_SPELLS_BY_LEVEL':
      return {
        ...state,
        filterLevel: action.level
      }
    case 'CLEAR_SPELLS_FILTERS':
      return {
        ...state,
        filterLevel: "-1"
      }
    default:
      return state
  }
}

export default spells
