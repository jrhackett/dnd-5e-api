import * as types from '../actionTypes'

const initialState = {
  spells: [],
  hasErrored: false,
  isLoading: false,
  filterLevel: [],
  filterSchool: [],
  filterClass: [],
  showDetails: [],
  searchTerm: '',
  sortOrder: 'asc',
  sortKey: 'name'
}

const spells = (state = initialState, action) => {
  switch(action.type) {
    case types.SPELLS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: true
      }
    case types.SPELLS_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case types.SPELLS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        spells: action.items,
        isLoading: false,
        hasErrored: false
      }
    case types.FILTER_SPELLS_BY_LEVEL:
      if(state.filterLevel.includes(action.level)) {
        return {
          ...state,
          filterLevel: state.filterLevel.filter(s => s !== action.level)
        }
      }
      return {
        ...state,
        filterLevel: [...state.filterLevel, action.level]
      }
    case types.FILTER_SPELLS_BY_SCHOOL:
      if(state.filterSchool.includes(action.school)) {
        return {
          ...state,
          filterSchool: state.filterSchool.filter(s => s !== action.school)
        }
      }
      return {
        ...state,
        filterSchool: [...state.filterSchool, action.school]
      }
    case types.FILTER_SPELLS_BY_CLASS:
      if(state.filterClass.includes(action.className)) {
        return {
          ...state,
          filterClass: state.filterClass.filter(s => s !== action.className)
        }
      }
      return {
        ...state,
        filterClass: [...state.filterClass, action.className]
      }
    case types.CLEAR_SPELLS_LEVEL_FILTER:
      return {
        ...state,
        filterLevel: []
      }
    case types.CLEAR_SPELLS_SCHOOL_FILTER:
      return {
        ...state,
        filterSchool: []
      }
    case types.CLEAR_SPELLS_CLASS_FILTER:
      return {
        ...state,
        filterClass: []
      }
    case types.CLEAR_SPELLS_FILTERS:
      return {
        ...state,
        filterLevel: [],
        filterSchool: [],
        filterClass: []
      }
    case types.UPDATE_SPELL_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case types.UPDATE_SPELLS_SORT:
      return {
        ...state,
        sortKey: action.key,
        sortOrder: action.order
      }
    default:
      return state
  }
}

export default spells
