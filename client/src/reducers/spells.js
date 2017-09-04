import * as types from '../actionTypes'

const initialState = {
  spells: [],
  hasErrored: false,
  isLoading: false,
  filterLevel: '',
  filterSchool: '',
  filterClass: '',
  showDetails: [],
  showSpellFilters: false
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
      if(state.filterLevel === action.level) {
        return {
          ...state,
          filterLevel: ''
        }
      }
      return {
        ...state,
        filterLevel: action.level
      }
    case types.FILTER_SPELLS_BY_SCHOOL:
      if(state.filterSchool === action.school) {
        return {
          ...state,
          filterSchool: ''
        }
      }
      return {
        ...state,
        filterSchool: action.school
      }
    case types.FILTER_SPELLS_BY_CLASS:
      if(state.filterClass === action.className) {
        return {
          ...state,
          filterClass: ''
        }
      }
      return {
        ...state,
        filterClass: action.className
      }
    case types.CLEAR_SPELLS_FILTERS:
      return {
        ...state,
        filterLevel: '',
        filterSchool: '',
        filterClass: ''
      }
    case types.SHOW_SPELL_DETAILS:
      if(state.showDetails.includes(action.id)) {
        return {
          ...state,
          showDetails: [state.showDetails.filter(s => s.id !== action.id)]
        }
      } 

      return {
        ...state,
        showDetails: [...state.showDetails, action.id]
      }
    case types.SHOW_SPELL_FILTERS:
      return {
        ...state,
        showSpellFilters: !state.showSpellFilters
      }
    default:
      return state
  }
}

export default spells
